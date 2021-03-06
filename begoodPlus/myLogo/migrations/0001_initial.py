# Generated by Django 3.0.8 on 2021-03-22 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyLogoProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=250)),
                ('makat', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('url', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='MyLogoCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=250)),
                ('url', models.URLField()),
                ('products', models.ManyToManyField(related_name='category', to='myLogo.MyLogoProduct')),
            ],
        ),
    ]
