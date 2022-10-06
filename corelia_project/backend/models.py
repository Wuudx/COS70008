from cmath import nan
from django.db import models
from frontend.models import User

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
    birth = models.IntegerField(blank=True, null=True)
    death = models.IntegerField(null=True, blank=True)
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)
    biography = models.TextField(blank=True, null=True)
    bio_source = models.CharField(max_length=200, blank=True, null=True)
    featured = models.BooleanField(default=False)
    image = models.CharField(max_length=300, default = "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg")

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

class BlogPost(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(blank=True, null=True)
    date_updated = models.DateTimeField(blank=True, null=True)
    title = models.CharField(max_length=300, blank=True, null=True)
    content = models.CharField(max_length=3000, blank=True, null=True) # Is 3000 excessive?

    def __str__(self):
        return self.name