"use strict";

appMakeBeCool.gateway.addClass('StuffPage', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _stuffPage = this,
    _defaults = {
      // elements
      body: 'body',
      cover: '#all-cover',
      coverBg: '#all-cover__bg',
      coverInner: '#all-cover-inner',
      coverHtmlInsert: '<div id="all-cover" class="all-cover"><div id="all-cover__bg" class="all-cover__bg"><div id="all-cover-inner" class="all-cover__inner"><div class="stuff__item"><img src="" alt="" class="stuff__item-img img-circle"><h3 class="stuff__item-ttl"></h3><h5 class="stuff__item-descr"></h5></div><hr class="first"><div class="section-details__thn content__text"></div><div class="row all-cover__b-close"><button id="all-cover__close-b" class="btn btn-default">Close</button></div></div></div></div>',
      stuff: '.stuff__item-act',
      closeB: '#all-cover__close-b',
      heading: '#heading-stuff',
      sessionStorage: 'sessionStorage',
      stuffPage: '#stuffPage'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      body: null,
      cover: null,
      coverBg: null,
      coverInner: null,
      stuff: null,
      closeB: null,
      heading: null,
      sessionStorage: null,
      stuffPage: null,

      // prop
      coverMarginTop: 0,
      scrollPosition: 0,
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_stuffPage, [_properties]);
      if (!_globals.preloaded) {
        return _stuffPage.init();
      }
      _stuffPage.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _stuffPage.create();
    },

    _config = function () {
      _globals.body = $(_properties.body);
      _globals.stuff = $(_properties.stuff);
      _globals.closeB = $(_properties.closeB);
      _globals.heading = $(_properties.heading);
      _globals.cover = $(_properties.cover);
      _globals.coverBg = $(_properties.coverBg);
      _globals.coverInner = $(_properties.coverInner);
      _globals.stuffPage = $(_properties.stuffPage);
    },

    _setup = function () {

      //Append cover empty markup
      if (!_globals.cover.length && _globals.stuffPage.length) {
        $('body').append(_properties.coverHtmlInsert);
        _globals.cover = $(_properties.cover);
        _globals.coverBg = $(_properties.coverBg);
        _globals.coverInner = $(_properties.coverInner);
      }

      //Stuff click functions
      if (_globals.cover.length) {
        _globals.coverBg.height($('body').outerHeight());
        _globals.stuff.on('click', function (event) {
          event.preventDefault();
          var $stuffNode = $(this);
          var stuffImgSrc = $stuffNode.find('.stuff__item-img').attr('src');
          var stuffTitle = $stuffNode.find('.stuff__item-ttl').text();
          var stuffDescr = $stuffNode.find('.stuff__item-descr').text();
          var hiddenTxt = $stuffNode.parent().find('.stuff__item-act-hd').html();
          var $coverImg = _globals.cover.find('.stuff__item-img');
          var $coverTitle = _globals.cover.find('.stuff__item-ttl');
          var $coverDescr = _globals.cover.find('.stuff__item-descr');
          var $coverContent = _globals.cover.find('.section-details__thn');

          //Insertion functions
          function addNodes() {
            $coverImg.attr('src', stuffImgSrc);
            $coverTitle.text(stuffTitle);
            $coverDescr.text(stuffDescr);
            $coverContent.empty()
            $coverContent.append(hiddenTxt);
          }

          //Visual markups
          _properties.coverMarginTop = _globals.heading.offset().top + _globals.heading.outerHeight();
          _globals.cover.addClass('active');
          _globals.coverInner.css('margin-top', _properties.coverMarginTop);
          $('html,body').animate({
            scrollTop: _properties.coverMarginTop / 1.2
          }, 500);

          //Run add clicked stuff markup
          addNodes();

          //Close cover
          function exitCover() {
            _globals.cover.removeClass('active');

          }

          //Exit events
          $document.keydown(function (event) {
            if (event.which === 27) {
              exitCover();
            }
          });
          _globals.coverBg.on('click', function () {
            exitCover();
          });
          _globals.closeB.on('click', function () {
            exitCover();
          });
        });
      }
    },

    _setBinds = function () {

    },

    _binds = function () {
      return {
        setResizeBinds: function () {
          _stuffPage.bind($window, 'resize', function (e, data, el) {
            _setup();
          });
        }
      }
    },

    _triggers = function () {
      return {}
    },

    _setCustomMethods = function () {}

  //PUBLIC METHODS
  _stuffPage.addMethod('init', function () {
    _stuffPage.bind($window, _stuffPage.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});