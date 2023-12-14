from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from .models import Flight, Airline, Airport


class FlightSearchAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        token = '45fddd3307f3710f1477e4871cedd748'

        search_params = {
            'origin': request.query_params.get('origin', 'YUL'),
            'destination': request.query_params.get('destination', 'CDG'),
            'depart_date': request.query_params.get('departDate', '2023-11-01'),
            'return_date': request.query_params.get('returnDate', '2023-12-25'),
        }
        flight_data_response = requests.get(
            f"https://api.travelpayouts.com/v1/prices/calendar?origin={search_params['origin']}&destination={search_params['destination']}&depart_date={search_params['depart_date']}&return_date={search_params['return_date']}&token={token}&currency=CAD"
        )
        if flight_data_response.status_code == 200:
            data = flight_data_response.json().get('data', {})
            for date, flight_info in data.items():
                airline_code = flight_info.get('airline')
                airline, created = Airline.objects.get_or_create(code=airline_code)

                origin_code = flight_info.get('origin')
                destination_code = flight_info.get('destination')
                origin, _ = Airport.objects.get_or_create(code=origin_code)
                destination, _ = Airport.objects.get_or_create(code=destination_code)

                Flight.objects.create(
                    airline=airline,
                    origin=origin,
                    destination=destination,
                    departure_at=flight_info.get('departure_at'),
                    return_at=flight_info.get('return_at'),
                    expires_at=flight_info.get('expires_at'),
                    price=flight_info.get('price'),
                    flight_number=flight_info.get('flight_number'),
                    transfers=flight_info.get('transfers'),
                )
                print(flight_info)
            return Response({"message": "Flights data updated successfully."}, status=status.HTTP_200_OK)
        else:
            return Response(flight_data_response.json(), status=flight_data_response.status_code)
