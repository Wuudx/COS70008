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
        
        
        
        


            
        
        