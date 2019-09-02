from django.test import TestCase

class AccessApiRootTestCase(TestCase):
    def test_api_root_response(self):
        response = self.client.get('/v1/', HTTP_HOST='localhost:8000')
        self.assertEqual(response.status_code, 200)

    def test_api_root_endpoints(self):
        expected_endpoints = [
            'food', 
            'ingredients', 
            'restriction_tags', 
            'recipes'
        ]
        response = self.client.get('/v1/', HTTP_HOST='localhost:8000')
        self.assertEqual(expected_endpoints, list(response.json().keys()))
