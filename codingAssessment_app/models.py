from django.db import models

class Shark(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    species = models.CharField(max_length=100)
    image = models.ImageField(upload_to='sharks/', null=True, blank=True)

    def __str__(self):
        return self.name
