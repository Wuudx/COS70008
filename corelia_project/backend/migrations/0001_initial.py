# Generated by Django 4.0.1 on 2022-10-02 00:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Composer',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('middleName', models.CharField(blank=True, max_length=100, null=True)),
                ('birth', models.IntegerField(blank=True, null=True)),
                ('death', models.IntegerField(blank=True, null=True)),
                ('featured', models.BooleanField(default=False)),
                ('image', models.CharField(default='https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg', max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Composition',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150, null=True)),
                ('year', models.IntegerField(blank=True, null=True)),
                ('duration', models.FloatField(blank=True, null=True)),
                ('recording_link', models.CharField(blank=True, max_length=300, null=True)),
                ('score_link', models.CharField(blank=True, max_length=300, null=True)),
                ('composer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.composer')),
            ],
        ),
        migrations.CreateModel(
            name='Instrument',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Nationality',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Publisher',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='CompositionInstrument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instrument', models.CharField(blank=True, max_length=100, null=True)),
                ('composition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.composition')),
            ],
        ),
        migrations.AddField(
            model_name='composition',
            name='publisher',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.publisher'),
        ),
        migrations.CreateModel(
            name='ComposerNationality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('composer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.composer')),
                ('nationality', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.nationality')),
            ],
        ),
        migrations.AddField(
            model_name='composer',
            name='nationality',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.nationality'),
        ),
    ]
