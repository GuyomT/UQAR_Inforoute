# Generated by Django 4.2.5 on 2023-12-14 17:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Airline',
            fields=[
                ('code', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Airport',
            fields=[
                ('code', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departure_at', models.DateTimeField()),
                ('return_at', models.DateTimeField()),
                ('expires_at', models.DateTimeField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('flight_number', models.CharField(max_length=10)),
                ('transfers', models.PositiveIntegerField()),
                ('airline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='flights.airline')),
                ('destination', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='arrival_airport', to='flights.airport')),
                ('origin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='departure_airport', to='flights.airport')),
            ],
        ),
    ]