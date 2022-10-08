from unicodedata import name
from django.core.management.base import BaseCommand
import pandas as pd
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


        for nationality in df.Nationality:
            if (Nationality.objects.filter(name = nationality).count() == 0):
                models = Nationality(name = nationality)
                models.save()
        
        

        for publisher in df.Publisher:
            if (Publisher.objects.filter(name = publisher).count() == 0):
                models = Publisher(name = publisher)
                models.save()
        
        

        for index, row in df.iterrows():
            if (Composer.objects.filter(lastName = row['LastName'], firstName = row['FirstName']).count() == 0):
                models = Composer(firstName = row['FirstName'], lastName = row['LastName'], birth = row['DOB'], death = row['DOD'], nationality = Nationality.objects.get(name = row['Nationality']), biography = row['Biography'], bio_source = row['Bio_source'], composer_website = row['Composer_website'])
                models.save()
        
        

        for index, row in df.iterrows():
            
            if (Composer.objects.filter(firstName = row['FirstName']).count() == 1):
                composer = Composer.objects.get(firstName = row['FirstName'])
                c_id = composer.id
                nationality = Nationality.objects.get(name= row['Nationality'])
                n_id = nationality.id
                if (ComposerNationality.objects.filter(composer_id = c_id).count() == 0):
                    models = ComposerNationality(composer_id = c_id, nationality_id = n_id)
                    models.save()

        for index, row in df.iterrows():
            if (Composition.objects.filter(name = row['Nameofpiece']).count() == 0):
                if (row['Nameofpiece'] == ""):
                    continue
                else:
                    composer = Composer.objects.get(firstName = row['FirstName'], lastName = row['LastName'])
                    c_id = composer.id
                    publisher = Publisher.objects.get(name = row['Publisher'])
                    p_id = publisher.id
                    
                
                models = Composition(name = row['Nameofpiece'], composer = Composer.objects.get(id = c_id), year = row['Year'], duration = row['Duration (mins)'], publisher = Publisher.objects.get(id = p_id), recording_link = row['Recording'], score_link = row['Score'])
                models.save()
        
        
        
        


            
        
        