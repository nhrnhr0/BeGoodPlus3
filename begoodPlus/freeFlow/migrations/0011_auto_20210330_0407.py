# Generated by Django 3.0.8 on 2021-03-30 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freeFlow', '0010_freeflowstores'),
    ]

    operations = [
        migrations.AlterField(
            model_name='freeflowclient',
            name='create_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='create date'),
        ),
        migrations.AlterField(
            model_name='freeflowclient',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='email'),
        ),
        migrations.AlterField(
            model_name='freeflowclient',
            name='message',
            field=models.CharField(max_length=200, verbose_name='message'),
        ),
        migrations.AlterField(
            model_name='freeflowclient',
            name='name',
            field=models.CharField(max_length=100, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='freeflowclient',
            name='phone',
            field=models.CharField(max_length=50, verbose_name='telephone'),
        ),
    ]
