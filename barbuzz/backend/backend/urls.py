from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from .views import BarViewSet, WaitTimeViewSet, UserProfileViewSet, UserRegistrationAPIView, LoginAPIView, LogoutAPIView

router = DefaultRouter()
router.register(r'bars', BarViewSet)
router.register(r'wait-times', WaitTimeViewSet)
router.register(r'user-profiles', UserProfileViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),

    # User Registration
    path('auth/register/', UserRegistrationAPIView.as_view(), name='register'),
    
    # User Login and Logout (using allauth)
    path('auth/login/', LoginAPIView.as_view(), name='login'),
    path('auth/logout/', LogoutAPIView.as_view(), name='logout'),
]
