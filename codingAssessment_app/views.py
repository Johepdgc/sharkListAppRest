from django.shortcuts import render
from rest_framework import viewsets
from .models import Shark
from .serializers import SharkSerializer

class SharkViewSet(viewsets.ModelViewSet):
    queryset = Shark.objects.all()
    serializer_class = SharkSerializer
