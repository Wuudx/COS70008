# Generated by Django 4.0.1 on 2022-10-07 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_user_table'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserTier',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.RenameField(
            model_name='user',
            old_name='is_active',
            new_name='authenticated',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_staff',
        ),
        migrations.AddField(
            model_name='user',
            name='tier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.usertier'),
        ),
    ]