# Generated by Django 4.0.1 on 2022-10-03 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='composer',
            name='nationality_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]