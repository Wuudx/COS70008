# Generated by Django 4.0.1 on 2022-10-05 09:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_rename_nationality_name_composer_nationalityname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='composer',
            name='nationalityName',
        ),
    ]
