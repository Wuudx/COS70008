from email.policy import default
from rest_framework import pagination

class CustomPagination(pagination.PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 50
    page_query_param = 'p'
    default_limit = 5