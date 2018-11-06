"use strict";

appMakeBeCool.gateway.addClass('GridsDiagramms', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _gridsDiagramms = this,
    _defaults = {
      // elements
      redChart: '.red-chart',
      blueChart: '.blue-chart'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      redChart: null,
      blueChart: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_gridsDiagramms, [_properties]);
      if (!_globals.preloaded) {
        return _gridsDiagramms.init();
      }
      _gridsDiagramms.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _gridsDiagramms.create();
    },

    _config = function () {
      _globals.redChart = $(_properties.redChart);
      _globals.blueChart = $(_properties.blueChart);
    },

    _setup = function () {

      if (_globals.redChart.length || _globals.blueChart.length) {
        var animation = false;

        if ($window.width() > 767) {
          animation = true;
        }

        _globals.blueChart.each(function () {
          var $blueChartParent = $(this).parent();
          var thisCanvas = $blueChartParent.find('canvas').get(0);
          var canvasTopOffset = $blueChartParent.offset().top;
          var blueChartPercents = $(this).data('percent');
          var blueNodeName = 'blueChart' + blueChartPercents;
          var leftChartSpace = 100 - blueChartPercents;
          var diagrammThickness = $(this).data('size');
          var chartMainColor = $(this).css('color');
          var animateValue = 0;
          var addFlag = false;
          var appendNode = '<div class="diagramm-number"><span>' + blueChartPercents + '</span>%</div>';
          var blueChartData = [{
            value: blueChartPercents,
            color: chartMainColor,
            highlight: chartMainColor
          }, {
            value: leftChartSpace,
            color: "#bdbbac",
            highlight: "#bdbbac"
          }];
          var ctx = thisCanvas.getContext("2d");
          $blueChartParent.append(appendNode);
          var $blueChartTextNode = $blueChartParent.find('.diagramm-number span');

          function addCircle() {
            if (($window.scrollTop() + $window.height()) >= canvasTopOffset && addFlag === false) {
              $window[blueNodeName] = new Chart(ctx).Doughnut(blueChartData, {
                responsive: true,
                animation: animation,
                showTooltips: false,
                animationEasing: 'easeOutSine',
                percentageInnerCutout: diagrammThickness,
                segmentStrokeWidth: 0,
                segmentShowStroke: false,
                segmentStrokeColor: "#e9e8dc",
                onAnimationProgress: function () {
                  if (animateValue < blueChartPercents) {
                    $blueChartTextNode.text(++animateValue);
                  }
                },
                onAnimationComplete: function () {
                  if (animation !== true) {
                    $blueChartTextNode.text(blueChartPercents);
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

        _globals.redChart.each(function () {
          var $redChartParent = $(this).parent();
          var thisCanvas = $redChartParent.find('canvas').get(0);
          var canvasTopOffset = $redChartParent.offset().top;
          var redChartPercents = $(this).data('percent');
          var leftChartSpace = 100 - redChartPercents;
          var diagrammThickness = $(this).data('size');
          var chartMainColor = $(this).css('color');
          var animateValue = 0;
          var addFlag = false;
          var appendNode = '<div class="diagramm-number"><span></span>%</div>';
          var redChartData = [{
            value: redChartPercents,
            color: chartMainColor,
            highlight: chartMainColor
          }, {
            value: leftChartSpace,
            color: "#bdbbac",
            highlight: "#bdbbac"
          }];
          var ctx = thisCanvas.getContext("2d");
          $redChartParent.append(appendNode);
          var $redChartTextNode = $redChartParent.find('.diagramm-number span');

          function addCircle() {
            if (($window.scrollTop() + $window.height()) >= canvasTopOffset && addFlag === false) {
              $window['redChart' + redChartPercents] = new Chart(ctx).Doughnut(redChartData, {
                responsive: true,
                animation: animation,
                showTooltips: false,
                animationEasing: 'easeOutSine',
                percentageInnerCutout: diagrammThickness,
                segmentStrokeWidth: 0,
                segmentShowStroke: false,
                segmentStrokeColor: "#e9e8dc",
                onAnimationProgress: function () {
                  if (animateValue < redChartPercents) {
                    $redChartTextNode.text(++animateValue);
                  }
                },
                onAnimationComplete: function () {
                  if (animation !== true) {
                    $redChartTextNode.text(redChartPercents);
                  }
                }
              });
              addFlag = true;
            }
          }

          $window.scroll(function () {
            addCircle();
          });
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
      // _blogAnimate.globals.customResurrect = function() {}
      // _blogAnimate.globals.customDestroy = function() {}
    }

  //PUBLIC METHODS
  _gridsDiagramms.addMethod('init', function () {
    _gridsDiagramms.bind($window, _gridsDiagramms.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});