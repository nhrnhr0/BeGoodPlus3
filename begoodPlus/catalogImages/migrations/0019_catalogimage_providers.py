# Generated by Django 3.0.8 on 2021-09-13 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('provider', '0002_auto_20210330_0407'),
        ('catalogImages', '0018_merge_20210912_1537'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalogimage',
            name='providers',
            field=models.ManyToManyField(to='provider.Provider'),
        ),
    ]