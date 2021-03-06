# Generated by Django 3.0.8 on 2021-03-30 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'Order', 'verbose_name_plural': 'Orders'},
        ),
        migrations.AlterField(
            model_name='order',
            name='addres',
            field=models.CharField(max_length=100, verbose_name='addres'),
        ),
        migrations.AlterField(
            model_name='order',
            name='cellphone',
            field=models.CharField(max_length=20, verbose_name='cellphone'),
        ),
        migrations.AlterField(
            model_name='order',
            name='client_name',
            field=models.CharField(max_length=50, verbose_name='client name'),
        ),
        migrations.AlterField(
            model_name='order',
            name='contact_man',
            field=models.CharField(max_length=50, verbose_name='contact man'),
        ),
        migrations.AlterField(
            model_name='order',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='email'),
        ),
        migrations.AlterField(
            model_name='order',
            name='private_compeny',
            field=models.CharField(max_length=50, verbose_name='private compeny'),
        ),
        migrations.AlterField(
            model_name='order',
            name='submit_date',
            field=models.DateField(auto_now=True, verbose_name='submit date'),
        ),
        migrations.AlterField(
            model_name='order',
            name='telephone',
            field=models.CharField(max_length=20, verbose_name='telephone'),
        ),
    ]
