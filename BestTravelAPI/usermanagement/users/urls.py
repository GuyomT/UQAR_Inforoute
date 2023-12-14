from django.urls import path
from .views import CreateUserView, CustomTokenObtainPairView, UpdateUserView, UserInfoAPIView

urlpatterns = [
    path('signup/', CreateUserView.as_view(), name='signup'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('update/', UpdateUserView.as_view(), name='update_user'),
    path('userinfo/', UserInfoAPIView.as_view(), name='user_info'),
]
