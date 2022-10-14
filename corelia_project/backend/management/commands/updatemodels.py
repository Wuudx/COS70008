from unicodedata import name
from django.core.management.base import BaseCommand
import pandas as pd
import re
from backend.models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher 

class Command(BaseCommand):
    help = 'import booms'

    def add_arguments(self, parser):
       pass

    def handle(self, *args, **options):
        Nationality.objects.all().delete()
        Publisher.objects.all().delete()
        Composer.objects.all().delete()
        ComposerNationality.objects.all().delete()
        Composition.objects.all().delete()
        Instrument.objects.all().delete()
        CompositionInstrument.objects.all().delete()

        df = pd.read_csv('Database information1.csv', delimiter=',', na_values= None)
        df = df.replace("?", "")
        df = df.fillna("")
        df['Duration (mins)'] = df['Duration (mins)'].replace("", 0)
        
        df["LastName"] = df["Name of Composer"].apply(lambda x: x[0:x.find(",")])
        df["FirstName"] = df["Name of Composer"].apply(lambda x: x[x.find(",")+2:])
        df['Dates'] = df['Dates'].astype(str)
        df['Duration (mins)'].astype(float)
        df['Year'] = df['Year'].astype(str)
        df['Publisher'] = df['Publisher'].astype(str)
        df['Year'].replace("nan", 0, inplace = True)
        df['Year'].replace("", 0, inplace = True)
        df["DOB"] = df["Dates"].apply(lambda x: x[2:] if x[0] == "b" else x[:4])
        df["DOD"] = df["Dates"].apply(lambda x: 0 if x[0] == "b" else x[-4:])
        df["Duration (mins)"] = df["Duration (mins)"].apply(lambda x : x if x > 0 else 0)
        df.rename(columns={'Name of piece': 'Nameofpiece', 'Instrumentation - Ensemble type (instruments)': 'Instrumentation', 'Recording links' : 'Recording', 'Score link' : 'Score'}, inplace=True)
        df['Nameofpiece'] = df['Nameofpiece'].astype(str)
        df['Recording'] = df['Recording'].astype(str)
        df['Score'] = df['Score'].astype(str)
        df['Composer_website'] = df['Composer_website'].astype(str)
        df['Biography'] = df['Biography'].astype(str)
        df['Bio_source'] = df['Bio_source'].astype(str)
        df['Nameofpiece'] = df['Nameofpiece'].str.capitalize()

        # TEMP - remove nationality_id from database/model
        models = Nationality(id = -1, name = 'YOU SHOULD NOT BE SEEING THIS!')
        models.save()
        error_nationality = Nationality.objects.get(id=-1)

        for index, row in df.iterrows():
            if (Composer.objects.filter(firstName=row['FirstName'], lastName=row['LastName']).count() == 0):
                models = Composer(firstName = row['FirstName'], lastName = row['LastName'], birth = row['DOB'], death = row['DOD'], nationality = error_nationality, biography = row['Biography'], bio_source = row['Bio_source'], composer_website = row['Composer_website'])
                if row['FirstName'] == "Ailis" and row['LastName'] == "Ni Riain":
                    models.Composer.image = "https://corelias3.s3.ap-southeast-2.amazonaws.com/Ailis-Ni-Riain-.jpg"
                models.save()

                nationalities = re.sub(r'[()/]', ' ', row['Nationality']).split()

                for nationality_split in nationalities:
                    if (Nationality.objects.filter(name = nationality_split).count() == 0):
                        models = Nationality(name = nationality_split)
                        models.save()

                    composer_id = Composer.objects.get(firstName=row['FirstName'], lastName=row['LastName']).id
                    nationality_id = Nationality.objects.get(name = nationality_split).id

                    models = ComposerNationality(composer_id = composer_id, nationality_id=nationality_id)
                    models.save()

            if (Publisher.objects.filter(name = row['Publisher']).count() == 0):
                models = Publisher(name = row['Publisher'])
                models.save()

            if (Composition.objects.filter(name = row['Nameofpiece'], year = row['Year']).count() == 0):
                if (row['Nameofpiece'] == ""):
                    continue
                else:
                    composer_id = Composer.objects.get(firstName = row['FirstName'], lastName = row['LastName']).id
                    publisher_id = Publisher.objects.get(name = row['Publisher']).id

                    models = Composition(name = row['Nameofpiece'], composer = Composer.objects.get(id = composer_id), year = row['Year'], duration = row['Duration (mins)'], publisher = Publisher.objects.get(id = publisher_id), recording_link = row['Recording'], score_link = row['Score'])
                    models.save()

                    # Instrumentation - The Nightmare Begins

                    # Only format instrumentation exists (not null)
                    if row['Instrumentation']:
                        instruments = None
                        ensemble_type = None

                        # First determine if there is bracketed conent, which is often used to denote an enseble type
                        if '(' in row['Instrumentation']:
                            # Split the ensemble_type from the bracketed content and store it
                            instruments = re.split(r'[\()]', row['Instrumentation'])
                            ensemble_type = instruments[0] # This is currently unused. Might be useful in a future version.

                            # Split the rest by commas or and/with
                            instruments = re.split(r', | and | with ', instruments[1])
                        else:
                            # If there isn't any brackets then just split by commas or and/with
                            instruments = re.split(r', | and | with ', row['Instrumentation'])

                        # Next determine the quantities of instruments
                        for instrument in instruments:
                            # Start by assuming a singular instrument, and remove the words 'solo' or 'an' and strip trailing or leading whitespace
                            instrument = [1, re.sub(r'\bsolo|\ban', '', instrument.lower())]
                            
                            # !!!
                            # LAZY PART
                            # This is the part where I give up on complete accuracy and just start dumping data I don't like to squeeze a little more accuracy out.
                            # Anything in this section would need to be changed for a final version. These are all all lazy band-aid solutions to bigger problems.
                            # !!!

                            # Remove square brackets.
                            # As far as I can tell they are only used in a single row, which is already pretty broken.
                            # This will help at least SOME of its data be accurate.
                            instrument[1] = re.sub(r'[\[\]]', '', instrument[1])

                            # Remove anything after a '/'
                            # This is usually used for alternative instrumentation, which the database doesn't not currently support.
                            # Due to time constraints, this script will just discard alternative instrumentation for now.
                            instrument[1] = instrument[1].split('/')[0]
                            # Do the same for 'or' for the same reason. Not worth combinging with the above.
                            #instrument[1] = instrument[1].split(' or ')[0]
                            instrument[1] = re.split(r'or\b', instrument[1])
                            # Remove any empty cells, probably a lazy approach but that's what this section is for!
                            instrument[1] = [x for x in instrument[1] if x][0]

                            # Remove question marks
                            # There is only a single row that contains one in the given dataset and it's pointless for now
                            instrument[1] = instrument[1].replace('?', '')

                            # !!!
                            # END LAZY PART
                            # Everything beyond this is fine to use.
                            # !!!

                            # If the first 'word' of the name is a number, split it out and store it as the quantity
                            int_check = instrument[1].split(' ', 1)

                            if int_check[0].isdigit():
                                instrument = [int(int_check[0]), int_check[1]]

                                if instrument[1].endswith('s') and not instrument[1].endswith('ss'):
                                    instrument[1] = instrument[1][:-1]

                            # As a final touch of formattting, strip any leading/trailing spaces and capitalise the first letter.
                            instrument[1] = instrument[1].strip().capitalize()

                            # Create the instrument in the Instruments table if it doesn't already exist.
                            if (Instrument.objects.filter(name = instrument[1]).count() == 0):
                                models = Instrument(name = instrument[1])
                                models.save()

                            # Finally, add the instrument to the composition via the CompositionInstrument lookup table.
                            composition_id = Composition.objects.get(name = row['Nameofpiece'], year = row['Year']).id
                            instrument_id = Instrument.objects.get(name = instrument[1]).id

                            models = CompositionInstrument(instrument = instrument_id, composition_id = composition_id)
                            models.save()
