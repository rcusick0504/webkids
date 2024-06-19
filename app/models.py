from django.db import models

class React(models.Model):
    title = models.CharField(max_length=100, default='default value')
    intro= models.CharField(max_length=100, default='default value')
    description= models.CharField(max_length=100, default='default value')
    benefits= models.CharField(max_length=100, default='default value')
    location= models.CharField(max_length=100, default='default value')
    contact= models.CharField(max_length=100, default='default value')

    def __str__(self):
        return self.employee