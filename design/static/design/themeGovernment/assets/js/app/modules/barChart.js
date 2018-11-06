"use strict";

appMakeBeCool.gateway.addClass('BarChart', function (properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _barChart = this,
    _defaults = {
      // elements
      barChart: '.bar-chart'

      // prop
      // data
      // classes ans styles
    },
    _properties = $.extend(_defaults, properties),
    _globals = {
      // elements
      barChart: null,

      // prop
      preloaded: false
    },

    //PRIVATE METHODS
    _init = function () {
      appMakeBeCool.gateway.base.Class.apply(_barChart, [_properties]);
      if (!_globals.preloaded) {
        return _barChart.init();
      }
      _barChart.globals.customCreate = function () {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      }
      _barChart.create();
    },

    _config = function () {
      _globals.barChart = $(_properties.barChart);
    },

    _setup = function () {
      if (_globals.barChart.length) {
        var animation = false;

        if ($window.width() > 767) {
          animation = true;
        }
        _globals.barChart.each(function () {
          var $barChartParent = $(this);
          var thisCanvas = $barChartParent.find('canvas').get(0);
          var canvasTopOffset = $barChartParent.offset().top;
          var barNumber = $(thisCanvas).data('number');
          var barLabels = $(thisCanvas).data('labels').split(',');
          var barData = [];
          var barMainColor = $barChartParent.css('color');
          var addFlag = false;
          var barData = {}

          if (barNumber > 1) {
            var data1 = $(thisCanvas).data('values-first').split(',');
            var data2 = $(thisCanvas).data('values-second').split(',');

            barData = {
              labels: barLabels,
              datasets: [{
                // label: "My First dataset",
                fillColor: "#cac9bd",
                strokeColor: "#cac9bd",
                highlightFill: "#cac9bd",
                highlightStroke: "#cac9bd",
                data: data1
              }, {
                // label: "My Second dataset",
                fillColor: barMainColor,
                strokeColor: barMainColor,
                highlightFill: barMainColor,
                highlightStroke: barMainColor,
                data: data2
              }]
            }
          } else if (barNumber > 0 && barNumber < 2) {
            var data1 = $(thisCanvas).data('values-first').split(',');

            barData = {
              labels: barLabels,
              datasets: [{
                fillColor: barMainColor,
                strokeColor: barMainColor,
                highlightFill: barMainColor,
                highlightStroke: barMainColor,
                data: data1
              }]
            }
          }
          var ctx = thisCanvas.getContext("2d");

          function addBar() {
            if (($window.scrollTop() + $window.height()) >= canvasTopOffset && addFlag === false) {
              $window[_properties.barChart] = new Chart(ctx).Bar(barData, {
                responsive: true,
                animation: animation,
                scaleFontFamily: "'pt_sansregular', 'Helvetica', 'Arial', sans-serif",
                scaleFontColor: "#000",
                tooltipFillColor: "#e9e8dc",
                tooltipFontFamily: "'pt_sansregular', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontColor: "#000",
                tooltipTitleFontFamily: "'pt_sansregular', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 18,
                tooltipTitleFontColor: "#000",
                tooltipTitleFontStyle: "normal",
                tooltipCornerRadius: 0,
                tooltipYPadding: 15,
                tooltipXPadding: 15,
                barStrokeWidth: 0,
                barShowStroke: false

              });
              addFlag = true;
            }
          }
          $window.scroll(function () {
            addBar();
          });
          addBar();
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
  _barChart.addMethod('init', function () {
    _barChart.bind($window, _barChart.globals.classType + '_Init', function (e, data, el) {
      _globals.preloaded = true;
      _init();
    });
  });

  //GO!
  _init();
});