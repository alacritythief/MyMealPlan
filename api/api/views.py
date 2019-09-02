from django.shortcuts import render
from django.http import Http404

# Create your views here.

# The root view responds with a 404 to prevent users/bots crawling root for vulnerabilities.
def root_view(request):
    raise Http404()
