# Generated by Django 3.0.8 on 2021-04-02 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20210402_0321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='besecontactinformation',
            name='formUUID',
            field=models.UUIDField(default='', unique=True),
        ),
    ]
