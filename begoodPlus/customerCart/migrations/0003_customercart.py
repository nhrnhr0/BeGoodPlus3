# Generated by Django 3.0.8 on 2021-04-04 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('catalogImages', '0012_auto_20210330_0407'),
        ('customerCart', '0002_delete_customercart'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerCart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True, verbose_name='name')),
                ('phone', models.CharField(blank=True, max_length=30, null=True, verbose_name='phone')),
                ('email', models.EmailField(blank=True, max_length=120, null=True, verbose_name='email')),
                ('sumbited', models.BooleanField(default=False)),
                ('created_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('formUUID', models.UUIDField(default='', unique=True)),
                ('products', models.ManyToManyField(to='catalogImages.CatalogImage')),
            ],
        ),
    ]