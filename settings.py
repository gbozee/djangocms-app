# -*- coding: utf-8 -*-

INSTALLED_ADDONS = [
    # <INSTALLED_ADDONS>  # Warning: text inside the INSTALLED_ADDONS tags is auto-generated. Manual changes will be overwritten.
    'aldryn-addons',
    'aldryn-django',
    'aldryn-sso',
    'aldryn-django-cms',
    'aldryn-newsblog',
    'djangocms-file',
    'djangocms-googlemap',
    'djangocms-history',
    'djangocms-link',
    'djangocms-picture',
    'djangocms-snippet',
    'djangocms-style',
    'djangocms-text-ckeditor',
    'djangocms-video',
    'django-filer',
    # </INSTALLED_ADDONS>
]

import aldryn_addons.settings
aldryn_addons.settings.load(locals())


# all django settings can be altered here

INSTALLED_APPS.extend([
    # add your project specific apps here
    "haystack",
    "aldryn_search",
    "standard_form",
    "spurl",
        
    "design",
])

HAYSTACK_ROUTERS = ["aldryn_search.router.LanguageRouter"]

ALDRYN_SEARCH_LANGUAGE_FROM_ALIAS = lambda alias: alias.split("-")[-1]

ALDRYN_PEOPLE_SEARCH = False
ALDRYN_SEARCH_REGISTER_APPHOOK = True

ALDRYN_NEWSBLOG_UPDATE_SEARCH_DATA_ON_SAVE = True
ALDRYN_SEARCH_DEFAULT_LANGUAGE = "en"

import os

HAYSTACK_CONNECTIONS = {
    "default": {
        "ENGINE": "haystack.backends.whoosh_backend.WhooshEngine",
        "PATH": os.path.join(os.path.dirname(__file__), "whoosh_index"),
    },
    "en": {
        "ENGINE": "haystack.backends.whoosh_backend.WhooshEngine",
        "PATH": os.path.join(os.path.dirname(__file__), "whoosh_index"),
    },
}


DJANGOCMS_STYLE_TAGS = [
    "div",
    "main",
    "article",
    "section",
    "header",
    "footer",
    "aside",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
]
DJANGOCMS_STYLE_CHOICES = ["container", "content", "bg-col", "row"]
DJANGOCMS_STYLE_TEMPLATES = [
    ["default", "Default"],
    ["section_with_container_row", "Section with Container and Row"],
]