# Generated by Django 3.0.8 on 2020-12-02 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogAlbum', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalogalbum',
            name='is_public',
            field=models.BooleanField(default=True, verbose_name='is public'),
        ),
    ]
