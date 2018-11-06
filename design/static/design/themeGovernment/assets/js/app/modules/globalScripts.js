"use strict";

appMakeBeCool.gateway.addClass('GlobalScripts', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _globalScripts = this,
    _defaults = {
      // elements
      tooltipClass: '.goverment-tooltip',
      upperBtn: '.go-up'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      tooltips: null,
      upperBtn: null,


      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_globalScripts, [_properties]);
      if (!_globals.preloaded) {
        return _globalScripts.init();
      }
      _globalScripts.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _globalScripts.create();
    },

    _config = function () {
      _globals.tooltips = $(_properties.tooltipClass);
      _globals.upperBtn = $(_properties.upperBtn);
    },

    _setup = function () {
      //Tooltips
      if (_globals.tooltips.length) {
        _globals.tooltips.tooltip({
          placement: 'top'
        });
        _globals.tooltips.on('click', function (event) {
          event.preventDefault();
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
  _globalScripts.addMethod('init', function () {
    _globalScripts.bind($window, _globalScripts.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});