# Generated by Django 3.0.8 on 2021-03-22 06:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogImages', '0003_catalogimage_sizes'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='catalogimage',
            options={'ordering': ['throughimage__image_order'], 'verbose_name': 'תמונת קטלוג', 'verbose_name_plural': 'תמונות קטלוג'},
        ),
    ]
