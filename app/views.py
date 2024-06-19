from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response


class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        output = [{'title': output.title,
                   'intro': output.intro, 
                   'description': output.description,
                   'benefits': output.benefits,
                   'location': output.location,
                   'contact': output.contact}
                   for output in React.objects.all()]
        return Response(output)
    def post (self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    def delete(self, request):
        React.objects.all().delete()
        return Response({"message": "Data cleared."})