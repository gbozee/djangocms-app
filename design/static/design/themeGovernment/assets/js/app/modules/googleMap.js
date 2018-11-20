"use strict";

appMakeBeCool.gateway.addClass('GoogleMap', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _googleMap = this,
    _defaults = {
      // elements
      mapContacts: 'map_canvas',
      // mapContactsGeo: [47.095151, 37.539726],
      eventContact: 'event_canvas',
      // googleMapKey:'AIzaSyAJ2423UhDMxQHzltQVLjAdju7YfMxImUY'


      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      map: null,
      mapContacts: null,
      eventContact: null,

      // prop
      mapOptions: {},
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_googleMap, [_properties]);
      if (!_globals.preloaded) {
        return _googleMap.init();
      }
      _googleMap.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _googleMap.create();
    },

    _config = function () {
      _globals.mapContacts = $('#' + _properties.mapContacts);
      _globals.eventContact = $('#' + _properties.eventContact);
    },

    _setup = function () {
      if (_globals.mapContacts.length) {
        var contactsLatLng = [];
        contactsLatLng[0] = _globals.mapContacts.data('latitude');
        contactsLatLng[1] = _globals.mapContacts.data('longitude');
        var contactsMapName = _globals.mapContacts.data('map-name');
        window.addMapContacts = function () {
          var contactsLatlng = new google.maps.LatLng(contactsLatLng[0], contactsLatLng[1]);
          var mapOptions = {
            zoom: 14,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            center: contactsLatlng,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(document.getElementById(_properties.mapContacts), mapOptions);
          var marker = new google.maps.Marker({
            position: contactsLatlng,
            map: map,
            title: contactsMapName
          });
        }
      }
      if (_globals.eventContact.length) {
        var eventLatLng = [];
        eventLatLng[0] = _globals.eventContact.data('latitude');
        eventLatLng[1] = _globals.eventContact.data('longitude');
        var eventMapName = _globals.eventContact.data('map-name');
        window.addEventMap = function () {
          var eventLatlng = new google.maps.LatLng(eventLatLng[0], eventLatLng[1]);
          var mapOptions = {
            zoom: 14,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            center: eventLatlng,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(document.getElementById(_properties.eventContact), mapOptions);
          var marker = new google.maps.Marker({
            position: eventLatlng,
            map: map,
            title: eventMapName
          });
        }
      }
    },

    _setBinds = function () {
      _binds().loadScript();
    },

    _binds = function () {
      return {
        loadScript: function () {
          if (_globals.mapContacts.length) {
            _googleMap.bind($window, 'load', function (e, data, el) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              // script.src = "http://maps.googleapis.com/maps/api/js?key=" + _properties.googleMapKey + "&sensor=false&callback=addMapContacts";
              script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=addMapContacts';
              document.body.appendChild(script);
            });
          } else if (_globals.eventContact.length) {
            _googleMap.bind($window, 'load', function (e, data, el) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              // script.src = "http://maps.googleapis.com/maps/api/js?key=" + _properties.googleMapKey + "&sensor=false&callback=addEventMap";
              script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=addEventMap';
              document.body.appendChild(script);
            });
          }
        }
      }
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {

    }

  //PUBLIC METHODS
  _googleMap.addMethod('init', function () {
    _googleMap.bind($window, _googleMap.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});