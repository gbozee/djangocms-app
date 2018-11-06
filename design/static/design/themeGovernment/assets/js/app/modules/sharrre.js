"use strict";

appMakeBeCool.gateway.addClass('Sharrre', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _sharrre = this,
    _defaults = {
      // elements
      twitter: '.socials__item-tw',
      fb: '.socials__item-fb'
      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      twitter: null,
      fb: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_sharrre, [_properties]);
      if (!_globals.preloaded) {
        return _sharrre.init();
      }
      _sharrre.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _sharrre.create();
    },

    _config = function () {
      _globals.twitter = $(_properties.twitter);
      _globals.fb = $(_properties.fb);
    },

    _setup = function () {
      if (_globals.twitter.length) {
        _globals.twitter.sharrre({
          share: {
            twitter: true
          },
          url: $(this).data('url') != 'undefined' ? $(this).data('url') : '',
          text: $(this).data('text') != 'undefined' ? $(this).data('text') : '',
          enableHover: false,
          enableCounter: false,
          enableTracking: false,
          template: '<i class="fa fa-twitter"></i><span>Tweet {total}</span>',
          click: function (api, options) {
            api.simulateClick();
            api.openPopup('twitter');
          }
        });
      }
      if (_globals.fb.length) {
        _globals.fb.sharrre({
          share: {
            facebook: true
          },
          url: $(this).data('url') != 'undefined' ? $(this).data('url') : '',
          text: $(this).data('text') != 'undefined' ? $(this).data('text') : '',
          enableHover: false,
          enableCounter: false,
          enableTracking: false,
          template: '<i class="fa fa-facebook"></i><span>Share {total}</span>',
          click: function (api, options) {
            api.simulateClick();
            api.openPopup('facebook');
          }
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

    _setCustomMethods = function () {
      _sharrre.globals.customResurrect = function () {}
      _sharrre.globals.customDestroy = function () {}
    }

  //PUBLIC METHODS
  _sharrre.addMethod('init', function () {
    _sharrre.bind($window, _sharrre.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});