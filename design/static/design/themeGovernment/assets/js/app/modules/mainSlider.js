"use strict";

appMakeBeCool.gateway.addClass('MainSlider', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _mainSlider = this,
    _defaults = {
      // elements
      sliderClass: '#slider',

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      slider: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_mainSlider, [_properties]);
      if (!_globals.preloaded) {
        return _mainSlider.init();
      }
      _mainSlider.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _mainSlider.create();
    },

    _config = function () {
      _globals.slider = $(_properties.sliderClass);
    },

    _setup = function () {
      if (_globals.slider.length) {
        _globals.slider.slick({
          dots: false,
          infinite: true,
          speed: 500,
          fade: true,
          pauseOnHover: false,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 5000,
          draggable: false,
          swipe: false,
          touchMove: false
        });
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
  _mainSlider.addMethod('init', function () {
    _mainSlider.bind($window, _mainSlider.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});