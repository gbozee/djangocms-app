"use strict";

appMakeBeCool.gateway.addClass('EventSlider', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _eventSlider = this,
    _defaults = {
      // elements
      slider: '#eventSlider',
      buttonPrev: '<button type="button" class="top-navig__larr"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="31.464px" height="100px" viewBox="0 0 31.464 100" enable-background="new 0 0 31.464 100" xml:space="preserve"><path opacity="1" d="M0,50L31.464,0L5.14,50l26.324,50L0,50z"/></svg></button>',
      buttonNext: '<button type="button" class="top-navig__rarr"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="31.464px" height="100px" viewBox="0 0 31.464 100" enable-background="new 0 0 31.464 100" xml:space="preserve"><path opacity="1" d="M31.464,50L0,100l26.324-50L0,0L31.464,50z"/></svg></button>'
      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      slider: null,
      buttonPrev: null,
      buttonNext: null,


      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_eventSlider, [_properties]);
      if (!_globals.preloaded) {
        return _eventSlider.init();
      }
      _eventSlider.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _eventSlider.create();
    },

    _config = function () {
      _globals.slider = $(_properties.slider);
      _globals.buttonPrev = $(_properties.buttonPrev);
      _globals.buttonNext = $(_properties.buttonNext);
    },

    _setup = function () {
      if (_globals.slider.length) {
        _globals.slider.slick({
          infinite: false,
          speed: 300,
          slide: 'li',
          slidesToShow: 9,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 9,
              slidesToScroll: 1,
              slide: 'li',
              infinite: false
            }
          }, {
            breakpoint: 1024,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              slide: 'li',
              infinite: false
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              slide: 'li',
              infinite: false
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              infinite: false,
              slidesToScroll: 1,
              slide: 'li'
            }
          }]
        })
      }

    },

    _setBinds = function () {},

    _binds = function () {
      return {}
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {}

  //PUBLIC METHODS
  _eventSlider.addMethod('init', function () {
    _eventSlider.bind($window, _eventSlider.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});