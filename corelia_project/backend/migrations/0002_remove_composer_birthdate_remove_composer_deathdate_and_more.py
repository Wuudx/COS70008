# Generated by Django 4.0.1 on 2022-09-27 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='composer',
            name='birthDate',
        ),
        migrations.RemoveField(
            model_name='composer',
            name='deathDate',
        ),
        migrations.AddField(
            model_name='composer',
            name='birth',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='composer',
            name='death',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='composer',
            name='middleName',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
