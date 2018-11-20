"use strict";

appMakeBeCool.gateway.addClass('PrintEffect', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _printEffect = this,
    _defaults = {
      // elements
      sliderClass: '#slider',

      // prop
      // data
      printSpeed: 30
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
      appMakeBeCool.gateway.base.Class.apply(_printEffect, [_properties]);
      if (!_globals.preloaded) {
        return _printEffect.init();
      }
      _printEffect.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _printEffect.create();
    },

    _config = function () {
      _globals.slider = $(_properties.sliderClass);
    },

    _setup = function () {

      var slideIndex = 0;
      var slidesNumbers = $('.slider__slide').length - 1;
      var $slides = $('.slider__slide');
      var $slideTitle = $('.slider__title');
      $slideTitle.each(function () {
        $(this).height($(this).height());
      });

      function prinTitles(direction) {
        var $currentSlide = null;
        if (direction === 'prev') {
          if (slideIndex !== 0) {
            slideIndex--;
          } else {
            slideIndex = slidesNumbers;
          }
        } else if (direction === 'next') {
          if (slideIndex !== slidesNumbers) {
            slideIndex++;
          } else {
            slideIndex = 0;
          }
        }
        clearInterval(window.sliderTextInterval);
        $currentSlide = $('.slider__slide').eq(slideIndex);
        $currentSlide.find('.slider__title .hidden-title').hide();
        $currentSlide.find('.slider__title .visible-title').text('');
        // clearInterval(window.sliderTextInterval);
        var $slideTitle = $currentSlide.find('.slider__title');
        var $slideTitleSpan = $slideTitle.find('span');
        var slideText = $slideTitleSpan.text();
        var textVariable = '';
        var j = 0;
        var $visibleTitle = $currentSlide.find('.visible-title');
        window.sliderTextInterval = setInterval(function () {
          if (j === slideText.length) {
            clearInterval(window.sliderTextInterval);
            return;
          }
          $visibleTitle.text($visibleTitle.text() + slideText[j]);
          j++;
        }, _properties.printSpeed);
      }

      prinTitles();
      $('.main .slider .slick-prev').click(function () {
        prinTitles('prev');
      });
      $('.main .slider .slick-next').click(function () {
        prinTitles('next');
      });

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
  _printEffect.addMethod('init', function () {
    _printEffect.bind($window, _printEffect.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});