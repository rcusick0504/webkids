from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['title', 'intro', 'description', 'benefits', 'location', 'contact']