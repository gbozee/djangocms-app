"use strict";

appMakeBeCool.gateway.addClass('DtMenu', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _dtMenu = this,
    _defaults = {
      // elements
      navigation: '#navigation'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      navigation: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_dtMenu, [_properties]);
      if (!_globals.preloaded) {
        return _dtMenu.init();
      }
      _dtMenu.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _dtMenu.create();
    },

    _config = function () {
      _globals.navigation = $(_properties.navigation);
    },

    _setup = function () {
      if (_globals.navigation.length && $window.width() < 1200) {

        //Init
        var $allLiIt = _globals.navigation.find('li i');
        var $allLi = _globals.navigation.find('li');
        var $topLi = _globals.navigation.children('li');
        var $submenu = _globals.navigation.find('.dl-submenu');
        var backNode = '<li class="dt-back"><a href="#">Back <i>›</i></a></li>';

        $submenu.each(function () {
          $(this).prepend(backNode);
        });

        var $backNodes = _globals.navigation.find('.dt-back');

        //Events
        $allLiIt.on('click', function () {
          var $clickedLiIt = $(this);
          var $clickedLi = $clickedLiIt.closest('li');
          var $parentUl = $clickedLi.closest('ul');
          if ($parentUl.hasClass('navbar-nav')) {
            var $nextUl = $clickedLi.children('ul');
            var $parentLi = $clickedLi.closest('li.subviewopen');
            if ($nextUl.length) {
              $clickedLi.addClass('subviewopen');
              $parentUl.addClass('subview');
            }
          } else {
            var $nextUl = $clickedLi.children('ul');
            var $parentLi = $clickedLi.closest('li.subviewopen');
            if ($parentLi.hasClass('subviewopen')) {
              $parentLi.removeClass('subviewopen');
              $parentLi.addClass('subview');
              $clickedLi.addClass('subviewopen');
            }
          }
          return false;
        });

        $backNodes.on('click', function () {
          var $backLink = $(this);
          var $parentLi = $(this).closest('li.subviewopen');
          var $parentUl = $parentLi.closest('ul');

          if (!$parentUl.hasClass('navbar-nav')) {
            var $upperLi = $parentUl.closest('li');
            $parentLi.removeClass('subviewopen');
            $upperLi.addClass('subviewopen');
          } else {
            $parentUl.removeClass('subview');
            $parentLi.removeClass('subviewopen');
          }

          return false;
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
  _dtMenu.addMethod('init', function () {
    _dtMenu.bind($window, _dtMenu.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});