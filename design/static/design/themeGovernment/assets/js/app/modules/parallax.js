"use strict";

appMakeBeCool.gateway.addClass('Parallax', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _parallax = this,
    _defaults = {
      // elements
      parallaxId: '#goverment-parallax',
      parallaxClass: '.fw-image-parallax'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      parallaxVariable: null,
      parallaxNode: null,
      parallaxDiv: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_parallax, [_properties]);
      if (!_globals.preloaded) {
        return _parallax.init();
      }
      _parallax.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _parallax.create();
    },

    _config = function () {
      _globals.parallaxNode = $(_properties.parallaxId);
      _globals.parallaxDiv = $(_properties.parallaxClass);
    },

    _setup = function () {
      if (_globals.parallaxNode.length && $window.width() >= 1200) {
        $('.slider__bg-img').parallax("50%", 0.4); // Welcome Image
      }
    },

    _setBinds = function () {},

    _binds = function () {
      return {}
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {
      return {
        getBodyScrollTop: function () {
          return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
        }
      }
    }

  //PUBLIC METHODS
  _parallax.addMethod('init', function () {
    _parallax.bind($window, _parallax.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});