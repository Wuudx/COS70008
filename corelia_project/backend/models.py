from cmath import nan
from django.db import models
 

# Create your models here.

class Nationality(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Composer(models.Model):
    id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    middleName = models.CharField(max_length=100, blank=True, null=True)
    birth = models.IntegerField(blank=True, null=True)
    death = models.IntegerField(null=True, blank=True)
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.firstName

class ComposerNationality(models.Model):
    composer = models.ForeignKey(Composer, on_delete=models.CASCADE)
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)

    def __str__(self):
        return self.composer


class Publisher(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Composition(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    composer = models.ForeignKey(Composer, on_delete=models.CASCADE)
    year = models.IntegerField(blank = True, null = True)
    duration = models.FloatField(blank = True, null = True)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, blank=True, null=True)
    recording_link = models.CharField(max_length=300, blank=True, null=True)
    score_link = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.name

class Instrument(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CompositionInstrument(models.Model):
    composition = models.ForeignKey(Composition, on_delete=models.CASCADE)
    instrument = models.CharField(max_length=100 , blank=True, null=True)
    

    def __str__(self):
        return self.instrument
    

