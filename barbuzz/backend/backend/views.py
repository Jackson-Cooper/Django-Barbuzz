from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from allauth.account.views import LoginView, LogoutView
from .models import Bar, WaitTime, UserProfile
from rest_framework.permissions import IsAuthenticated
from .serializers import BarSerializer, WaitTimeSerializer, UserProfileSerializer, UserRegistrationSerializer

# Register User
class UserRegistrationAPIView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BarViewSet(viewsets.ModelViewSet):
    queryset = Bar.objects.all()
    serializer_class = BarSerializer
    permission_classes = [permissions.IsAuthenticated]

class WaitTimeViewSet(viewsets.ModelViewSet):
    queryset = WaitTime.objects.all()
    serializer_class = WaitTimeSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

# Login View (using allauth)
class LoginAPIView(LoginView):
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

# Logout View (using allauth)
class LogoutAPIView(LogoutView):
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
