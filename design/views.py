from django.shortcuts import render
from django.conf.urls import include, url
from cms.views import details 

# Create your views here.


def about(request):
    return render(request, "design/about.html", {})


def home(request):
    nav_links = [
        {
            "get_menu_title": "Projects",
            "children": [
                {"get_menu_title": "Projects", "get_absolute_url": "projects.html"},
                {
                    "get_menu_title": "Projects view",
                    "get_absolute_url": "projects-view.html",
                },
            ],
        },
        {
            "get_menu_title": "Events",
            "children": [
                {"get_menu_title": "Events", "get_absolute_url": "events.html"},
                {
                    "get_menu_title": "Events view",
                    "get_absolute_url": "events-view.html",
                },
            ],
        },
        {
            "get_menu_title": "News",
            "children": [
                {"get_menu_title": "News", "get_absolute_url": "news.html"},
                {
                    "get_menu_title": "News view (no image)",
                    "get_absolute_url": "news-no-image-view.html",
                },
                {
                    "get_menu_title": "News view",
                    "children": [
                        {
                            "get_menu_title": "News view 3 level",
                            "get_absolute_url": "news-no-image-view.html",
                        }
                    ],
                },
            ],
        },
        {"get_menu_title": "Stuff", "get_absolute_url": "stuff.html"},
        {
            "get_menu_title": "About",
            "children": [
                {"get_menu_title": "About page", "get_absolute_url": "about.html"},
                {"get_menu_title": "404 page", "get_absolute_url": "404.html"},
                {
                    "get_menu_title": "Design elements",
                    "get_absolute_url": "buttons.html",
                },
            ],
        },
        {"get_menu_title": "Contacts", "get_absolute_url": "contacts.html"},
    ]
    return render(request, "design/index.html", {"nav_links": nav_links})

def handler404(request):
    return details(request, 'design/404')
urlpatterns = [url(r"^$", home, name="home"), url(r"^about$", about, name="about")]

