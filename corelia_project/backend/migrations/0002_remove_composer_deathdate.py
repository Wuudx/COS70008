# Generated by Django 4.1.1 on 2022-09-23 01:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='composer',
            name='deathDate',
        ),
    ]