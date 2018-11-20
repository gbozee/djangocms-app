"use strict";

appMakeBeCool.gateway.addClass('BackgroundImg', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _backgroundImg = this,
    _defaults = {
      // elements
      backgroundNodes: '.fw-image-parallax'


      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      backgroundNodes: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_backgroundImg, [_properties]);
      if (!_globals.preloaded) {
        return _backgroundImg.init();
      }
      _backgroundImg.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _backgroundImg.create();
    },

    _config = function () {
      _globals.backgroundNodes = $(_properties.backgroundNodes);
    },

    _setup = function () {
      if (_globals.backgroundNodes) {
        _globals.backgroundNodes.each(function () {
          var imageSrc = $(this).data('parallax-url');
          $(this).css('position', 'absolute');
          $(this).css('width', '100%');
          $(this).css('height', '100%');
          $(this).css('top', '0');
          $(this).css('background', 'url(' + imageSrc + ') center no-repeat');
          $(this).css('background-attachment', 'fixed');
          $(this).css('background-size', 'cover');
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
  _backgroundImg.addMethod('init', function () {
    _backgroundImg.bind($window, _backgroundImg.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});