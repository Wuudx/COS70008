# Generated by Django 4.0.1 on 2022-09-28 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_alter_composition_duration'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='compositioninstrument',
            name='quantity',
        ),
        migrations.AlterField(
            model_name='compositioninstrument',
            name='instrument',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]