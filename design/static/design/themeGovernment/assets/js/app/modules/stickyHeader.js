"use strict";

appMakeBeCool.gateway.addClass('StickyHeader', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _stickyHeader = this,
    _defaults = {
      // elements
      sticky: '#sticky',
      header: '#header',
      content: '#content',

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      sticky: null,
      header: null,
      content: null,

      // prop
      contentOffsetTop: 0,
      // leadBlockHeight: 0,
      // currentScrollTop: 0,
      // tempScrollTop: 0,
      flagScroll: false,
      preloaded: false,
      topHeader: null
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_stickyHeader, [_properties]);
      if (!_globals.preloaded) {
        return _stickyHeader.init();
      }
      _stickyHeader.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _stickyHeader.create();
    },

    _config = function () {
      _globals.sticky = $(_properties.sticky);
      _globals.header = $(_properties.header);
      _globals.content = $(_properties.content);
      if (_globals.sticky.length) {
        _globals.contentOffsetTop = _globals.content.offset().top;
      }

      _globals.topHeader = function () {
        if ($window.scrollTop() > (_globals.contentOffsetTop + 30) && !_globals.flagScroll === true) {
          _globals.sticky.addClass('active');
          _globals.flagScroll = true;
        } else if ($window.scrollTop() <= (_globals.contentOffsetTop + 30)) {
          _globals.sticky.removeClass('active');
          _globals.flagScroll = false;
        }
      }
    },

    _setup = function () {
      if (_globals.sticky.length) {
        _globals.topHeader();
      }
    },

    _setBinds = function () {
      _binds().setScrollBinds();
    },

    _binds = function () {
      return {
        setScrollBinds: function () {
          _stickyHeader.bind($window, 'scroll', function (e, data, el) {
            _globals.topHeader();
          });
        }
      }
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {}

  //PUBLIC METHODS
  _stickyHeader.addMethod('init', function () {
    _stickyHeader.bind($window, _stickyHeader.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});