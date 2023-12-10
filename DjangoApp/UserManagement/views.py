from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAdminUser

@method_decorator(csrf_exempt, name='dispatch')
class UserListView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request, format=None):
        users = User.objects.all().values("id", "username", "email")
        return Response(users)

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(APIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        return Response({"message": "Identifiants invalides"}, status=status.HTTP_401_UNAUTHORIZED)

@method_decorator(csrf_exempt, name='dispatch')
class UserRegistrationView(APIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email", "")

        if not username or not password:
            return Response({"message": "Le nom d'utilisateur et le mot de passe sont requis."}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({"message": "Ce nom d'utilisateur est déjà pris."}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create(
            username=username,
            email=email,
            password=make_password(password)
        )
        return Response({"id": user.id, "username": user.username}, status=status.HTTP_201_CREATED)

@method_decorator(csrf_exempt, name='dispatch')
class UserUpdateView(APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated:
            return Response({"message": "Authentification requise."}, status=status.HTTP_401_UNAUTHORIZED)

        username = request.data.get("username", user.username)
        email = request.data.get("email", user.email)
        password = request.data.get("password")

        user.username = username
        user.email = email
        if password:
            user.set_password(password)
        user.save()
        return Response({"id": user.id, "username": user.username}, status=status.HTTP_200_OK)
