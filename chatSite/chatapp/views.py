from django.shortcuts import render
from django.http import Http404, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


def HomePage(request):
    return render(request, 'index.html', {'q': "Hello"})


@api_view(['PUT', 'GET'])
def chatHandler(request):
    fetched_message = 'Hi'
    reply_message = "Hello"
    if(request.method == 'GET'):
        reply_message = 'Thank You'
        data = {"reply": reply_message}
        return Response(data)
    elif(request.method == 'PUT'):
        fetched_message = request.data
        print(fetched_message, 5)
        return Response()
