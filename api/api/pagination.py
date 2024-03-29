from rest_framework.pagination import PageNumberPagination

# Sets the default pagination params for the API.

class DefaultPagination(PageNumberPagination):
    page_size = 25
    page_size_query_param = 'count'
    max_page_size = 50000
