# Generated by Django 3.0.8 on 2021-03-22 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myLogo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mylogocategory',
            name='products',
            field=models.ManyToManyField(related_name='album', to='myLogo.MyLogoProduct'),
        ),
    ]
