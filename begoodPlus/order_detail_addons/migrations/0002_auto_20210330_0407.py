# Generated by Django 3.0.8 on 2021-03-30 01:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('glofa_types', '0003_auto_20210330_0407'),
        ('order_detail_addons', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetailaddons',
            name='glofa',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='glofa_types.GlofaType', verbose_name='glofa'),
        ),
        migrations.AlterField(
            model_name='orderdetailaddons',
            name='image',
            field=models.ImageField(upload_to='', verbose_name='logo'),
        ),
        migrations.AlterField(
            model_name='orderdetailaddons',
            name='logoDescription',
            field=models.TextField(verbose_name='logo description'),
        ),
    ]