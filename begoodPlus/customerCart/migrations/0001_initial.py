# Generated by Django 3.0.8 on 2021-04-04 01:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0009_auto_20210402_0331'),
        ('catalogImages', '0012_auto_20210330_0407'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerCart',
            fields=[
                ('besecontactinformation_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.BeseContactInformation')),
                ('products', models.ManyToManyField(to='catalogImages.CatalogImage')),
            ],
            bases=('core.besecontactinformation',),
        ),
    ]
