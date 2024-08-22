from django.urls import path, include
from rest_framework import routers
from codingAssessment_app.views import SharkViewSet

router = routers.DefaultRouter()
router.register(r'sharks', SharkViewSet, basename='sharks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
]