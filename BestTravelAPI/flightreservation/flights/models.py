from django.db import models

class Airline(models.Model):
    code = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=100)  # You might need to populate this field from another source

class Airport(models.Model):
    code = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=100)  # Populate from another source if necessary
    city = models.CharField(max_length=100)  # Optional, depends on your data

class Flight(models.Model):
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE)
    origin = models.ForeignKey(Airport, related_name='departure_airport', on_delete=models.CASCADE)
    destination = models.ForeignKey(Airport, related_name='arrival_airport', on_delete=models.CASCADE)
    departure_at = models.DateTimeField()
    return_at = models.DateTimeField()
    expires_at = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    flight_number = models.CharField(max_length=10)
    transfers = models.PositiveIntegerField()
    # You might want to add a unique constraint for flights based on certain fields
