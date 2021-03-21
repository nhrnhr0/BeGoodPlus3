# Generated by Django 3.0.8 on 2020-12-13 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClientImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='', verbose_name='תמונה')),
            ],
            options={
                'verbose_name': 'Client image',
                'verbose_name_plural': 'Client images',
            },
        ),
    ]
