# Generated by Django 4.0.1 on 2022-09-28 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_remove_compositioninstrument_quantity_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='composer',
            name='features',
            field=models.BooleanField(default=False),
        ),
    ]