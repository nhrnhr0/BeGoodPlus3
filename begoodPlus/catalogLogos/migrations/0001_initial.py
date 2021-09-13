# Generated by Django 3.0.8 on 2021-08-19 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CatalogLogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.PositiveIntegerField(db_index=True, default=0, editable=False)),
                ('title', models.CharField(max_length=120, verbose_name='name')),
                ('img', models.ImageField(upload_to='logos/', verbose_name='image')),
                ('image_order', models.PositiveIntegerField(db_index=True, default=0, editable=False)),
            ],
            options={
                'ordering': ['image_order'],
                'abstract': False,
            },
        ),
    ]