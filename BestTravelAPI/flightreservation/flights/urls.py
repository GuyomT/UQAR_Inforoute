from django.urls import path
from .views import FlightSearchAPIView


urlpatterns = [
    path('search/', FlightSearchAPIView.as_view(), name='flight_search'),
    # Vous pouvez ajouter d'autres URL pour les réservations, etc.
]
