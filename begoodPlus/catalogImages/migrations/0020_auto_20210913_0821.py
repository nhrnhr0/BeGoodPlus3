# Generated by Django 3.0.8 on 2021-09-13 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('provider', '0002_auto_20210330_0407'),
        ('catalogImages', '0019_catalogimage_providers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogimage',
            name='providers',
            field=models.ManyToManyField(blank=True, to='provider.Provider'),
        ),
    ]