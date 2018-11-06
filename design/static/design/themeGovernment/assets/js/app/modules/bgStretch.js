"use strict";

appMakeBeCool.gateway.addClass('BgStretcher', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _bgStretcher = this,
    _defaults = {
      // elements

      // prop
      // data
      // classes ans styles
      sliderClass: '#slider',
      imagesClass: '.slider__bg-img'
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      slider: null,
      images: null,

      // prop
      preloaded: false,
      windowWidth: 0,
      windowHeight: 0,
      sliderHeight: 0,
      topSpace: 0,
      leftSpace: 0
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_bgStretcher, [_properties]);
      if (!_globals.preloaded) {
        return _bgStretcher.init();
      }
      _bgStretcher.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _bgStretcher.create();
    },

    _config = function () {
      _globals.slider = $(_properties.sliderClass);
      _globals.images = $(_properties.imagesClass);
      _globals.windowWidth = $window.width();
      _globals.windowHeight = $window.height();
    },

    _setup = function () {
      _globals.windowWidth = $window.width();
      _globals.windowHeight = $window.height();
      _globals.sliderHeight = _globals.slider.height();

      if (_globals.windowWidth > _globals.sliderHeight) {
        _globals.images.each(function () {
          var $image = $(this);
          var imageWidth = $image.width();
          var imageHeight = $image.height();
          var imageRatio = imageWidth / imageHeight;

          if (_globals.sliderHeight < (_globals.windowWidth / imageRatio)) {
            var imageCurrentHeight = _globals.windowWidth / imageRatio;
            _globals.topSpace = (imageCurrentHeight - _globals.sliderHeight) / 2;

            imageWidth = _globals.windowWidth;
            imageHeight = imageCurrentHeight;

            $image.width(imageWidth);
            $image.height(imageHeight);
            $image.css('left', 0);
            $image.css('top', -_globals.topSpace);

          } else {
            var imageCurrentWidth = _globals.sliderHeight * imageRatio;
            _globals.leftSpace = (imageCurrentWidth - _globals.windowWidth) / 2;

            imageWidth = imageCurrentWidth;
            imageHeight = _globals.sliderHeight;

            $image.width(imageCurrentWidth);
            $image.height(_globals.sliderHeight);
            $image.css('top', 0);
            $image.css('left', -_globals.leftSpace);
          }
        });
      } else if (_globals.windowWidth < _globals.sliderHeight) {
        _globals.images.each(function () {
          var $image = $(this);
          var imageWidth = $image.width();
          var imageHeight = $image.height();
          var imageRatio = imageWidth / imageHeight;
          var imageCurrentWidth = _globals.sliderHeight * imageRatio;

          _globals.leftSpace = (imageCurrentWidth - _globals.windowWidth) / 2;

          imageWidth = imageRatio * _globals.sliderHeight;
          imageHeight = _globals.sliderHeight;

          $image.height(imageHeight);
          $image.width(imageWidth);
          $image.css('top', 0);
          $image.css('left', -_globals.leftSpace);
        });
      }

    },

    _setBinds = function () {
      _binds().setResizeBind();
    },

    _binds = function () {
      return {
        setResizeBind: function () {
          _bgStretcher.bind($window, 'resize', function (e, data, el) {
            _setup();
          })
        },
      }
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {}

  //PUBLIC METHODS
  _bgStretcher.addMethod('init', function () {
    _bgStretcher.bind($window, _bgStretcher.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});