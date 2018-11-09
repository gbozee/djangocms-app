from .base import *

DEBUG = False

ALLOWED_HOSTS = ["*"]

MIDDLEWARE = ("whitenoise.middleware.WhiteNoiseMiddleware",) + MIDDLEWARE
