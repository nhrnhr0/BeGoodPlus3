# Generated by Django 3.0.8 on 2021-03-23 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogAlbum', '0008_catalogalbum_keywords'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalogalbum',
            name='description',
            field=models.TextField(default='', verbose_name='תיאור'),
        ),
    ]