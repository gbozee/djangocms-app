"use strict";

appMakeBeCool.gateway.addClass('ThemeMode', function(properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _themeMode = this,
        _defaults = {
            // classes ans styles
            classMode: 'theme-mode'
        },
        _properties = $.extend(_defaults, properties),
        _globals = {
            siteObj: null,
            preloaded: false
        },

        //PRIVATE METHODS
        _init = function() {
            appMakeBeCool.gateway.classes.SiteMode.apply(_themeMode, [_properties])
            if (!_globals.preloaded) {
                return _themeMode.init();
            }
            _config();
            _extendClasses();
            _instantiateClasses();
            _setup();
            _setBinds();
            _setCustomMethods();
            _themeMode.trigger(_themeMode.globals.classType + '_Complete');
        },

        _config = function() {
            _globals.siteObj = _themeMode.getSiteObj();
        },

        _extendClasses = function() {
            _globals.siteObj.utils.extend(_globals.siteObj.classes.MainSlider, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.BgStretcher, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.MenuAligns, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.StuffSlider, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.EventAnimate, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.GridsDiagramms, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.Disquis, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.StickyHeader, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.GlobalScripts, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.BackgroundImg, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.Parallax, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.ScrollPlugin, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.BarChart, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.GoogleMap, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.EventSlider, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.StuffPage, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.AboutDiagramms, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.Sharrre, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.DtMenu, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.FormSubscribe, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.FormFieldsSubscribe, _globals.siteObj.base.Class);
        },

        _instantiateClasses = function() {
            _globals.siteObj.createClassInstance('mainSlider', _globals.siteObj.classes.MainSlider, {
                classId: 'MainSlider'
            });
            _globals.siteObj.createClassInstance('bgStretcher', _globals.siteObj.classes.BgStretcher, {
                classId: 'BgStretcher'
            });
            _globals.siteObj.createClassInstance('menuAligns', _globals.siteObj.classes.MenuAligns, {
                classId: 'MenuAligns'
            });
            _globals.siteObj.createClassInstance('stuffSlider', _globals.siteObj.classes.StuffSlider, {
                classId: 'StuffSlider'
            });
            _globals.siteObj.createClassInstance('eventAnimate', _globals.siteObj.classes.EventAnimate, {
                classId: 'EventAnimate'
            });
            _globals.siteObj.createClassInstance('gridsDiagramms', _globals.siteObj.classes.GridsDiagramms, {
                classId: 'GridsDiagramms'
            });
            _globals.siteObj.createClassInstance('disquis', _globals.siteObj.classes.Disquis, {
                classId: 'Disquis'
            });
            _globals.siteObj.createClassInstance('stickyHeader', _globals.siteObj.classes.StickyHeader, {
                classId: 'StickyHeader'
            });
            _globals.siteObj.createClassInstance('globalScripts', _globals.siteObj.classes.GlobalScripts, {
                classId: 'GlobalScripts'
            });
            _globals.siteObj.createClassInstance('backgroundImg', _globals.siteObj.classes.BackgroundImg, {
                classId: 'BackgroundImg'
            });
            _globals.siteObj.createClassInstance('parallax', _globals.siteObj.classes.Parallax, {
                classId: 'Parallax'
            });
            _globals.siteObj.createClassInstance('scrollPlugin', _globals.siteObj.classes.ScrollPlugin, {
                classId: 'ScrollPlugin'
            });
            _globals.siteObj.createClassInstance('barChart', _globals.siteObj.classes.BarChart, {
                classId: 'BarChart'
            });
            _globals.siteObj.createClassInstance('googleMap', _globals.siteObj.classes.GoogleMap, {
                classId: 'GoogleMap'
            });
            _globals.siteObj.createClassInstance('eventSlider', _globals.siteObj.classes.EventSlider, {
                classId: 'EventSlider'
            });
            _globals.siteObj.createClassInstance('stuffPage', _globals.siteObj.classes.StuffPage, {
                classId: 'StuffPage'
            });
            _globals.siteObj.createClassInstance('aboutDiagramms', _globals.siteObj.classes.AboutDiagramms, {
                classId: 'AboutDiagramms'
            });
            _globals.siteObj.createClassInstance('sharrre', _globals.siteObj.classes.Sharrre, {
                classId: 'Sharrre'
            });
            _globals.siteObj.createClassInstance('dtMenu', _globals.siteObj.classes.DtMenu, {
                classId: 'DtMenu'
            });
            _globals.siteObj.createClassInstance('formSubscribe', _globals.siteObj.classes.FormSubscribe, {
                classId: 'FormSubscribe'
            });
            _globals.siteObj.createClassInstance('formFieldsSubscribe', _globals.siteObj.classes.FormFieldsSubscribe, {
                classId: 'FormFieldsSubscribe'
            });
        },

        _setup = function() {
            $('body').addClass(_properties.classMode);
        },

        _setBinds = function() {
            _binds().setCompleteBind();
        },

        _binds = function() {
            return {
                setCompleteBind: function() {
                    _themeMode.bind($window, _themeMode.globals.classType + '_Complete', function(e, data) {
                        _themeMode.trigger('MainSlider_Init', data);
                        _themeMode.trigger('BgStretcher_Init', data);
                        _themeMode.trigger('MenuAligns_Init', data);
                        _themeMode.trigger('StuffSlider_Init', data);
                        _themeMode.trigger('EventAnimate_Init', data);
                        _themeMode.trigger('GridsDiagramms_Init', data);
                        _themeMode.trigger('Disquis_Init', data);
                        _themeMode.trigger('StickyHeader_Init', data);
                        _themeMode.trigger('GlobalScripts_Init', data);
                        _themeMode.trigger('BackgroundImg_Init', data);
                        _themeMode.trigger('Parallax_Init', data);
                        _themeMode.trigger('ScrollPlugin_Init', data);
                        _themeMode.trigger('BarChart_Init', data);
                        _themeMode.trigger('GoogleMap_Init', data);
                        _themeMode.trigger('EventSlider_Init', data);
                        _themeMode.trigger('StuffPage_Init', data);
                        _themeMode.trigger('AboutDiagramms_Init', data);
                        _themeMode.trigger('Sharrre_Init', data);
                        _themeMode.trigger('DtMenu_Init', data);
                        _themeMode.trigger('FormSubscribe_Init', data);
                        _themeMode.trigger('FormFieldsSubscribe_Init', data);
                    });
                },
                setImage_CompleteBind: function() {
                    _themeMode.bind($window, 'Images_ImagesComplete', function(e, data) {
                        _themeMode.trigger('MainSlider_Init', data);
                        _themeMode.trigger('BgStretcher_Init', data);
                        _themeMode.trigger('StuffSlider_Init', data);

                    });

                }
            }
        },

        _setCustomMethods = function() {
            _themeMode.globals.customResurrect = function() {};
            _themeMode.globals.customDestroy = function() {};
        };

    //PUBLIC METHODS
    _themeMode.addMethod('init', function() {
        _themeMode.bind($window, 'siteConfigComplete', function() {
            _globals.preloaded = true;
            _init();

        });
    });

    //GO!
    _init();

});