# Generated by Django 2.1.3 on 2018-11-23 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='hits',
            field=models.IntegerField(default=0),
        ),
    ]
