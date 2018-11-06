"use strict";

appMakeBeCool.gateway.addClass('AboutDiagramms', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _aboutDiagramms = this,
    _defaults = {
      // elements
      aboutChart: '.about-chart'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      aboutChart: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_aboutDiagramms, [_properties]);
      if (!_globals.preloaded) {
        return _aboutDiagramms.init();
      }
      _aboutDiagramms.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _aboutDiagramms.create();
    },

    _config = function () {
      _globals.aboutChart = $(_properties.aboutChart);
    },

    _setup = function () {

      if (_globals.aboutChart.length) {
        var animation = false;

        if ($window.width() > 767) {
          animation = true;
        }

        _globals.aboutChart.each(function () {
          var $aboutChartParent = $(this).parent();
          var thisCanvas = $aboutChartParent.find('canvas').get(0);
          var canvasTopOffset = $aboutChartParent.offset().top;
          var aboutChartValue = $(this).data('percent');
          var aboutChartNumbers = $(this).data('numbers');
          var aboutChartStep = 0;
          var symbol = $(this).data('symbol');
          var symbolPlacement = $(this).data('symbol-place');
          var aboutNodeName = 'aboutChart' + aboutChartValue;
          var leftChartSpace = 100 - aboutChartValue;
          var diagrammThickness = $(this).data('size');
          var chartMainColor = $(this).css('color');
          var animateValue = 0;
          var addFlag = false;
          var aboutChartData = [];
          var appendNode = '';

          if (aboutChartValue === '' && aboutChartNumbers) {
            aboutChartStep = aboutChartNumbers / 100;
            aboutChartData = [{
              value: aboutChartNumbers,
              color: chartMainColor,
              highlight: chartMainColor
            }, {
              value: 0,
              color: "#bdbbac",
              highlight: "#bdbbac"
            }];
          } else if (aboutChartValue) {
            aboutChartData = [{
              value: aboutChartValue,
              color: chartMainColor,
              highlight: chartMainColor
            }, {
              value: leftChartSpace,
              color: "#bdbbac",
              highlight: "#bdbbac"
            }];
          }

          if (symbol && symbolPlacement) {
            if (symbolPlacement === 'left') {
              appendNode = '<div class="diagramm-number">' + symbol + '<span class="val-rgth">' + aboutChartValue + '</span></div>';
            } else {
              appendNode = '<div class="diagramm-number"><span>' + aboutChartValue + '</span>' + symbol + '</div>';
            }
          } else {
            appendNode = '<div class="diagramm-number"><span>' + aboutChartNumbers + '</span></div>';
          }

          var ctx = thisCanvas.getContext("2d");
          $aboutChartParent.append(appendNode);
          var $aboutChartTextNode = $aboutChartParent.find('.diagramm-number span');

          function addCircle() {
            if (($window.scrollTop() + $window.height()) >= canvasTopOffset && addFlag === false && aboutChartValue) {
              $window[aboutNodeName] = new Chart(ctx).Doughnut(aboutChartData, {
                responsive: true,
                animation: animation,
                showTooltips: false,
                animationEasing: 'easeOutSine',
                percentageInnerCutout: diagrammThickness,
                segmentStrokeWidth: 0,
                segmentShowStroke: false,
                segmentStrokeColor: "#e9e8dc",
                onAnimationProgress: function () {
                  if (animateValue < aboutChartValue) {
                    $aboutChartTextNode.text(++animateValue);
                  }
                },
                onAnimationComplete: function () {
                  if (animation !== true) {
                    $aboutChartTextNode.text(aboutChartNumbers);
                  }
                }
              });
              addFlag = true;
            } else if (($window.scrollTop() + $window.height()) >= canvasTopOffset && addFlag === false && aboutChartValue === '' && aboutChartNumbers) {
              var chartNumber = 0;
              $window[aboutNodeName] = new Chart(ctx).Doughnut(aboutChartData, {
                responsive: true,
                animation: animation,
                showTooltips: false,
                animationEasing: 'easeOutSine',
                percentageInnerCutout: diagrammThickness,
                segmentStrokeWidth: 0,
                segmentShowStroke: false,
                segmentStrokeColor: "#e9e8dc",
                onAnimationProgress: function () {
                  if (animateValue < aboutChartNumbers) {
                    chartNumber += aboutChartStep;
                    $aboutChartTextNode.text((chartNumber).toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
                  }
                },
                onAnimationComplete: function () {
                  if (animation !== true) {
                    $aboutChartTextNode.text((aboutChartNumbers).toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
                  }
                }
              });
              addFlag = true;
            }
          }
          $window.scroll(function () {
            addCircle();
          });
          addCircle();
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

    }

  //PUBLIC METHODS
  _aboutDiagramms.addMethod('init', function () {
    _aboutDiagramms.bind($window, _aboutDiagramms.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});