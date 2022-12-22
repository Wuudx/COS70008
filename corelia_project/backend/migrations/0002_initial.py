# Generated by Django 4.0.1 on 2022-12-21 06:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='forumpost',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='forumcomment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.forumpost'),
        ),
        migrations.AddField(
            model_name='forumcomment',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='compositioninstrument',
            name='composition',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.composition'),
        ),
        migrations.AddField(
            model_name='compositioninstrument',
            name='instrument',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.instrument'),
        ),
        migrations.AddField(
            model_name='composition',
            name='composer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.composer'),
        ),
        migrations.AddField(
            model_name='composition',
            name='publisher',
            field=models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.publisher'),
        ),
        migrations.AddField(
            model_name='composernationality',
            name='composer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.composer'),
        ),
        migrations.AddField(
            model_name='composernationality',
            name='nationality',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.nationality'),
        ),
        migrations.AddField(
            model_name='composer',
            name='nationality',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.nationality'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='blogcomment',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='blogcomment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.blogpost'),
        ),
    ]
