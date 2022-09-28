from django.core.management.base import BaseCommand
import pandas as pd
from backend.models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher 

class Command(BaseCommand):
    help = 'import booms'

    def add_arguments(self, parser):
       pass

    def handle(self, *args, **options):


        df = pd.read_csv('corelia_dataset.csv', delimiter=',', encoding='latin-1')
        
        for nationality in df.Nationality:
            if (Nationality.objects.filter(name = nationality).count() == 0):
                models = Nationality(name = nationality)
                models.save()
        
        for publisher in df.Publisher:
            if (Publisher.objects.filter(name = publisher).count() == 0):
                models = Publisher(name = publisher)
                models.save()
        
        
        for index, row in df.iterrows():
            if (Composer.objects.filter(firstName = row['FirstName']).count() == 0):
                models = Composer(firstName = row['FirstName'], middleName = row['MiddleName'], lastName = row['LastName'], birth = row['DOB'], death = row['DOD'], nationality = Nationality.objects.get(name = row['Nationality']))
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
                composer = Composer.objects.get(firstName = row['FirstName'])
                c_id = composer.id
                publisher = Publisher.objects.get(name = row['Publisher'])
                p_id = publisher.id
                    
                
                models = Composition(name = row['Nameofpiece'], composer = Composer.objects.get(id = c_id), year = row['Year'], duration = row['Duration (mins)'], publisher = Publisher.objects.get(id = p_id), recording_link = row['Recording'], score_link = row['Score'])
                models.save()
        
        
        
        


            
        
        