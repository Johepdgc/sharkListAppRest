from rest_framework import serializers
from .models import Shark

class SharkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shark
        fields = '__all__'