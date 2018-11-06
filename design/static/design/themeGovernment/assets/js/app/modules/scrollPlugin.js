"use strict";

appMakeBeCool.gateway.addClass('ScrollPlugin', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _scrollPlugin = this,
    _defaults = {
      // elements
      scrollFlagClass: '.scroll-btn',
      sticky: '#sticky'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      scrollFlagNode: null,
      sticky: null,


      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_scrollPlugin, [_properties]);
      if (!_globals.preloaded) {
        return _scrollPlugin.init();
      }
      _scrollPlugin.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _scrollPlugin.create();
    },

    _config = function () {
      _globals.scrollFlagNode = $(_properties.scrollFlagClass);
      _globals.sticky = $(_properties.sticky);
    },

    _setup = function () {
      //Tooltips
      if (_globals.scrollFlagNode.length) {
        _globals.scrollFlagNode.click(function () {
          var ancore = _globals.scrollFlagNode.attr('href');
          var nodeToScrollOffsetTop = 0;

          if (_globals.sticky.length) {
            nodeToScrollOffsetTop = $(ancore).offset().top - _globals.sticky.height();
          } else {
            nodeToScrollOffsetTop = $(ancore).offset().top;
          }
          $('html, body').animate({
            scrollTop: nodeToScrollOffsetTop
          }, 700);
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
  _scrollPlugin.addMethod('init', function () {
    _scrollPlugin.bind($window, _scrollPlugin.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});