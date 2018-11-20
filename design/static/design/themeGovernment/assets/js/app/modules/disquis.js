"use strict";

appMakeBeCool.gateway.addClass('Disquis', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _disquis = this,
    _defaults = {
      // elements
      disquisClass: '#disqus_thread',
      leadBlock: '#lead-block',
      socialsLead: '#socials-lead',

      // prop
      leadBlockHeight: 0
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      slider: null,
      disquis: null,
      leadBlock: null,
      socialsLead: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_disquis, [_properties]);
      if (!_globals.preloaded) {
        return _disquis.init();
      }
      _disquis.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _disquis.create();
    },

    _config = function () {
      _globals.disquis = $(_properties.disquisClass);
      _globals.leadBlock = $(_properties.leadBlock);
      _globals.socialsLead = $(_properties.socialsLead);
    },

    _setup = function () {
      if (_globals.disquis.length) {
        var disqus_shortname = 'govermenttheme';
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      }
      if ($window.width() > 767) {
        _properties.leadBlockHeight = _globals.leadBlock.height();
        _globals.socialsLead.height(_properties.leadBlockHeight);
      }
    },

    _setBinds = function () {
      _binds().setAsideHeight();
    },

    _binds = function () {
      return {
        setAsideHeight: function () {
          _disquis.bind($window, 'resize', function (e, data, el) {
            if ($window.width() > 767) {
              _properties.leadBlockHeight = _globals.leadBlock.height();
              _globals.socialsLead.height(_properties.leadBlockHeight);
            }
          });
        }
      }
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {}

  //PUBLIC METHODS
  _disquis.addMethod('init', function () {
    _disquis.bind($window, _disquis.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});