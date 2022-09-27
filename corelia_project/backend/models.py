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
    birthDate = models.DateField()
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)

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
    name = models.CharField(max_length=150)
    composer = models.ForeignKey(Composer, on_delete=models.CASCADE)
    year = models.IntegerField()
    duration = models.IntegerField()
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    recording_link = models.CharField(max_length=150)
    score_link = models.CharField(max_length=150)

    def __str__(self):
        return self.name

class Instrument(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CompositionInstrument(models.Model):
    composition = models.ForeignKey(Composition, on_delete=models.CASCADE)
    instrument = models.CharField(max_length=100)
    quantity = models.IntegerField()

    def __str__(self):
        return self.instrument
    

