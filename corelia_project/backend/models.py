from cmath import nan
from email.policy import default
from django.db import models
from users.models import User

 

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
    biography = models.TextField(blank=True, null=True, default = 'No Information Available, Check Back Later')
    bio_source = models.CharField(max_length=200, blank=True, null=True, default = "")
    featured = models.BooleanField(default=False)
    composer_website = models.CharField(max_length=300, blank=True, null=True, default = "")
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
    name = models.CharField(max_length=150, blank=True, null=True, default = "")
    composer = models.ForeignKey(Composer, on_delete=models.CASCADE)
    year = models.IntegerField(blank = True, null = True)
    duration = models.FloatField(blank = True, null = True)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, blank=True, null=True, default = "")
    recording_link = models.CharField(max_length=300, blank=True, null=True, default = "")
    score_link = models.CharField(max_length=300, blank=True, null=True, default = "")
    
    def __str__(self):
        return self.name

class Instrument(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CompositionInstrument(models.Model):
    composition = models.ForeignKey(Composition, on_delete=models.CASCADE)
    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    quantity = models.IntegerField(blank=True, default=1)

    def __str__(self):
        return self.instrument


class ForumPost(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_posted = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank = True, null = True)
    image = models.ImageField(upload_to='../static/forums/images', blank=True, null=True)

    def __str__(self):
        return self.content

class ForumComment(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_posted = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank = True, null = True)
    post = models.ForeignKey(ForumPost, on_delete=models.CASCADE)

    def __str__(self):
        return self.content

class BlogPost(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_posted = models.DateTimeField(auto_now_add = True, blank=True, null=True)
    date_updated = models.DateTimeField(auto_now_add = True, blank=True, null=True)
    title = models.CharField(max_length=300, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    votes = models.IntegerField(blank=True, default=0)

    def __str__(self):
        return self.title

class BlogComment(models.Model):
    id = models.AutoField(primary_key=True)
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_posted = models.DateTimeField(auto_now_add = True, blank=True, null=True)
    date_updated = models.DateTimeField(auto_now_add = True, blank=True, null=True)
    content = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.content

class ContactUs(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

