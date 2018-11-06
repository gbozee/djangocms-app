"use strict";

appMakeBeCool.gateway.addClass('StuffSlider', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _stuffSlider = this,
    _defaults = {
      // elements
      sliderClass: '#stuffSlider',
      projectSliderClass: '#project-stuff',
      projectQuoteText: '#project-stuff__quote-text',
      projectQuoteSoc: '#project-stuff__quote-soc',
      projectStuffItem: '.project-stuff__slider-item',
      eventPartnersSlider: '#event-partners__slider'
      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      slider: null,
      projectStuffSlider: null,
      projectQuoteTextNode: null,
      projectQuoteSocNode: null,
      projectStuffItemNode: null,
      eventPartnersSlider: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_stuffSlider, [_properties]);
      if (!_globals.preloaded) {
        return _stuffSlider.init();
      }
      _stuffSlider.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _stuffSlider.create();
    },

    _config = function () {
      _globals.stuffSlider = $(_properties.sliderClass);
      _globals.projectStuffSlider = $(_properties.projectSliderClass);
      _globals.projectQuoteTextNode = $(_properties.projectQuoteText);
      _globals.projectQuoteSocNode = $(_properties.projectQuoteSoc);
      _globals.projectStuffItemNode = $(_properties.projectStuffItem);
      _globals.eventPartnersSlider = $(_properties.eventPartnersSlider);
    },

    _setup = function () {
      if (_globals.stuffSlider.length) {
        _globals.stuffSlider.slick({
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
            }
          }, {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: true,
              slidesToScroll: 1
            }
          }]
        })
      }

      //Project View Stuff Slider
      if (_globals.projectStuffSlider.length) {
        var currentSlideNodes = _globals.projectStuffSlider.find('.project-stuff__slider-item').length;
        var tabletShownSlides = null;
        var desctopShownSlides = null;
        var sliderMode = '';

        //Tablet
        if (currentSlideNodes <= 3) {
          tabletShownSlides = 1;
        } else {
          tabletShownSlides = 3;
        }

        //Desktop
        if (currentSlideNodes <= 3) {
          desctopShownSlides = 1;
        } else if (currentSlideNodes < 5) {
          desctopShownSlides = 3;
        } else if (currentSlideNodes < 7) {
          desctopShownSlides = 5;
        } else {
          desctopShownSlides = 7;
        }

        _globals.projectStuffSlider.slick({
          dots: false,
          infinite: true,
          speed: 300,
          autoplay: false,
          pauseOnHover: false,
          slidesToShow: desctopShownSlides,
          draggable: false,
          swipe: false,
          swipeToSlide: false,
          touchMove: false,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: tabletShownSlides,
              infinite: true,
              draggable: false,
              touchMove: false,
              onInit: function (slick) {
                var $currentStuffNode = null;
                if (tabletShownSlides === 1) {
                  $currentStuffNode = _globals.projectStuffItemNode.eq(0);
                } else if (tabletShownSlides === 3) {
                  $currentStuffNode = _globals.projectStuffItemNode.eq(1);
                }
                $currentStuffNode.addClass('slick-center');
                var currentStuffText = $currentStuffNode.find('.project-stuff__slider-texts').text();
                var currentStuffLinks = $currentStuffNode.find('.project-stuff__slider-links .project-stuff__quote-ln').clone();
                _globals.projectQuoteTextNode.text(currentStuffText);
                _globals.projectQuoteSocNode.text('');
                _globals.projectQuoteSocNode.append(currentStuffLinks);
              },
              onAfterChange: function (slick) {
                if (tabletShownSlides < 3) {
                  var $currentStuffNode = $('.project-stuff__slider-item').eq(slick.currentSlide + 1);
                  var currentStuffText = $currentStuffNode.find('.project-stuff__slider-texts').text();
                  var currentStuffLinks = $currentStuffNode.find('.project-stuff__slider-links .project-stuff__quote-ln').clone();
                  _globals.projectQuoteTextNode.text(currentStuffText);
                  _globals.projectQuoteSocNode.text('');
                  _globals.projectQuoteSocNode.append(currentStuffLinks);
                  setTimeout(function () {
                    $('.project-stuff__slider-item.slick-active').addClass('slick-center')
                  }, 100);
                } else {
                  setTimeout(function () {
                    $('.project-stuff__slider-item.slick-active').eq(1).addClass('slick-center');
                    var $currentStuffNode = $('.project-stuff__slider-item.slick-active.slick-center');
                    var currentStuffText = $currentStuffNode.find('.project-stuff__slider-texts').text();
                    var currentStuffLinks = $currentStuffNode.find('.project-stuff__slider-links .project-stuff__quote-ln').clone();
                    _globals.projectQuoteTextNode.text(currentStuffText);
                    _globals.projectQuoteSocNode.text('');
                    _globals.projectQuoteSocNode.append(currentStuffLinks);
                  }, 100);
                }
              }
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              infinite: true
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: true
            }
          }],
          onInit: function () {
            var $currentStuffNode = null;
            if (desctopShownSlides === 1) {
              $currentStuffNode = _globals.projectStuffItemNode.eq(0);
            } else if (desctopShownSlides === 3) {
              $currentStuffNode = _globals.projectStuffItemNode.eq(1);
            } else if (desctopShownSlides === 5) {
              $currentStuffNode = _globals.projectStuffItemNode.eq(2);
            } else {
              $currentStuffNode = _globals.projectStuffItemNode.eq(3);
            }

            $currentStuffNode.addClass('slick-center');
            var currentStuffText = $currentStuffNode.find('.project-stuff__slider-texts').text();
            var currentStuffLinks = $currentStuffNode.find('.project-stuff__slider-links .project-stuff__quote-ln').clone();
            _globals.projectQuoteTextNode.text(currentStuffText);
            _globals.projectQuoteSocNode.text('');
            _globals.projectQuoteSocNode.append(currentStuffLinks);
          },
          onAfterChange: function () {
            var $currentStuffNode = null;

            setTimeout(function () {
              if (desctopShownSlides === 1) {
                $('.project-stuff__slider-item.slick-active').eq(0).addClass('slick-center');
              } else if (desctopShownSlides === 3) {
                $('.project-stuff__slider-item.slick-active').eq(1).addClass('slick-center');
              } else if (desctopShownSlides === 5) {
                $('.project-stuff__slider-item.slick-active').eq(2).addClass('slick-center');
              } else {
                $('.project-stuff__slider-item.slick-active').eq(3).addClass('slick-center');
              }
              $currentStuffNode = $('.project-stuff__slider-item.slick-active.slick-center');
              var currentStuffText = $currentStuffNode.find('.project-stuff__slider-texts').text();
              var currentStuffLinks = $currentStuffNode.find('.project-stuff__slider-links .project-stuff__quote-ln').clone();
              _globals.projectQuoteTextNode.text(currentStuffText);
              _globals.projectQuoteSocNode.text('');
              _globals.projectQuoteSocNode.append(currentStuffLinks);
            }, 100);
          }
        });
      }

      //Event view page slider
      if (_globals.eventPartnersSlider.length) {
        _globals.eventPartnersSlider.slick({
          infinite: false,
          speed: 300,
          slidesToShow: 8,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 1300,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: false,
            }
          }, {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
            }
          }, {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: false,
              slidesToScroll: 1
            }
          }]
        })
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
  _stuffSlider.addMethod('init', function () {
    _stuffSlider.bind($window, _stuffSlider.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});