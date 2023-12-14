from django.contrib.auth import get_user_model
from .serializers import CustomUserSerializer, CustomUserCreateSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import permissions, generics
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import CustomUser
from .serializers import CustomUserSerializer, CustomUserCreateSerializer



User = get_user_model()


class UserInfoAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CustomUserSerializer  # Assurez-vous de créer ce serializer

    def get_object(self):
        return self.request.user

    # def get(self, request, *args, **kwargs):
    #     return super().get(request, *args, **kwargs)


class CreateUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_serializer = CustomUserCreateSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomUserCreateSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class UpdateUserView(generics.UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CustomUserSerializer

    def get_object(self):
        return self.request.user