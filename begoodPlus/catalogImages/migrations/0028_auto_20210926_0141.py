# Generated by Django 3.0.8 on 2021-09-25 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogImageDetail', '0001_initial'),
        ('catalogImages', '0027_catalogimage_detailtabel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogimage',
            name='detailTabel',
            field=models.ManyToManyField(blank=True, to='catalogImageDetail.CatalogImageDetail', verbose_name='mini-tabel'),
        ),
    ]