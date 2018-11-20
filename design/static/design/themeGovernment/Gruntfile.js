module.exports = function(grunt) {
    grunt.initConfig({
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'assets/themegovernment-design/css/not-min/style.css': 'assets/themegovernment-design/vendor/stylesheets/bootstrap.scss' // 'destination': 'source'
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'assets/themegovernment-design/css/not-min/',
                src: ['*.css', '!*.min.css'],
                dest: 'assets/themegovernment-design/css/min/',
                ext: '.min.css'
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: [
                    '.bootstrap-select.btn-group .dropdown-menu.open',  '.bootstrap-select.btn-group .dropdown-menu.dropdown-menu>li>a', 
                    '.bootstrap-select.btn-group .dropdown-menu li', '.bootstrap-select.btn-group .dropdown-menu.inner', 
                    '.bootstrap-select.btn-group .dropdown-toggle.selectpicker', 
                    '.bootstrap-select.btn-group .dropdown-toggle.selectpicker .caret', '.selectpicker .button',
                    '.selectpicker', '.dropdown-menu', '.dropdown-menu.open', '.dropdown-menu>li>a',
                    '.open', '.in', '.collapsing', '.navbar-collapse.in', '.collapse.in', /open.*/, '.btn-group', '.inner', '.tab-content', '.tab-pane', '.fade', '.fade.in',
                    '.bootstrap-select.btn-group .dropdown-menu.inner', '.bootstrap-select.btn-group .dropdown-menu', '.bootstrap-select .dropdown-toggle .filter-option', '.bootstrap-select .dropdown-toggle .filter-option',
                    '.bootstrap-select.btn-group:not(.input-group-btn), .bootstrap-select.btn-group[class*=col-]', '.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn)',
                    '.tooltip.top','.tooltip-arrow','.tooltip.top .tooltip-arrow','.tooltip-inner', '.tooltip.in', '.fade.in', '.tooltip', '.fade',
                    'text-center', '.form-group.has-error label.control-label', '.has-error input.form-control', '.form-validate .form-group.has-error label', '.form-validate.wh .form-group.has-error label',
                    '.has-error textarea', '.bg-col .form-validate .form-group.has-error label', '.bg-col .suc-title',
                    'footer .form-group.has-error label.control-label', '.form-group.muted', 'footer form button.muted',
                    '.col-xs-2','.col-xs-4','.col-xs-5','.col-xs-6', '.col-xs-7','.col-xs-8', '.col-xs-9', '.col-xs-10',
                    '.col-sm-1', '.col-sm-2','.col-sm-4','.col-sm-5','.col-sm-6', '.col-sm-7','.col-sm-8', '.col-sm-9', '.col-sm-10',
                    '.col-md-2','.col-md-4','.col-md-5','.col-md-6', '.col-md-7','.col-md-8', '.col-md-9', '.col-md-10',
                    '.col-lg-2','.col-lg-4','.col-lg-5','.col-lg-6', '.col-lg-7','.col-lg-8', '.col-lg-9','.col-lg-10',
                    '.work-item.active','.work-item.shown','.tab-pane.active', '.hidden',
                    'section.stuff .container.shown','section.stuff .container.active', '.project-stuff__quote-soc .soc-arr__no-arr-l', '.project-stuff__slider .slick-prev', '.project-stuff__slider .slick-next',
                    '.slick-track', '.slick-slider', '.slick-list', '.main .slider .slick-track', '.main .slider .slick-list',
                    '.main .slider.slick-slider', '.main .slider .slick-prev', '.main .slider .slick-next', 
                    '.stuff-slider .slick-prev','.stuff-slider .slick-next','.stuff-slider .slick-prev:before', '.slick-disabled', '.stuff-slider .slick-disabled',
                    '.project-stuff__slider .slick-next','.project-stuff__slider .slick-prev', '.project-stuff__slider .slick-disabled', '.project-stuff__slider .slick-disabled:after',
                    /slick-center.*/, '.stuff-slider .slick-slide', '.slick-active', '.stuff-slider__item.slick-center', '.stuff-slider .stuff-slider__item.slick-center', '.slick-center', '.slick-active', '.slick-slide', 
                    '.stuff-slider .slick-center', '.stuff-slider__item.slick-slide.slick-active.slick-center', '.project-stuff__slider-item.slick-center',
                    '.tw.shown','.tw.active', '.tab-bl.shown','.tab-bl.active', '.blue-chartN canvas', '.blue-chart-diagramm .diagramm-number','.blue-chart-diagramm .diagramm-number span',
                    '.red-chart-diagramm .diagramm-number','.red-chart-diagramm .diagramm-number span',
                    '.sm-diagramm .diagramm-number', '.sm-diagramm span', '.big-diagramm .diagramm-number', '.news .red-chart-diagramm .diagramm-number', '.news .red-chart-diagramm',
                    '.project-item__diagramm .sm-diagramm .diagramm-number','.project-item__diagramm .sm-diagramm .diagramm-number span','.red-chart-diagramm .sm-diagramm .diagramm-number',
                    'news-item__image-nobg',
                    '.publisher-anchor-color a', 'a.publisher-anchor-color', '#disqus_thread a',
                    '.sticky.active', '.sticky.active .sticky__diagramm', 
                    '.project-news__subscribe form input::-webkit-input-placeholder', '.project-news__subscribe form textarea::-webkit-input-placeholder', '.project-news__subscribe form input:-moz-placeholder', '.project-news__subscribe form textarea:-moz-placeholder',
                    '.project-news__subscribe form input::-moz-placeholder', '.project-news__subscribe form textarea::-moz-placeholder' ,'.project-news__subscribe form input:-ms-input-placeholder' , '.project-news__subscribe form textarea:-ms-input-placeholder',
                    '.event-partners__slider .slick-prev','.event-partners__slider .slick-next','.event-partners__slider .slick-prev:before','.event-partners__slider .slick-prev:after', '.event-partners__slider .slick-disabled',
                    '.top-navig.slick-slider', '.top-navig__item.slick-slide',
                    '.top-navig .slick-prev','.top-navig .slick-next', '.top-navig .slick-prev:after', '.top-navig .slick-prev:before', '.top-navig .slick-next:after', '.top-navig .slick-next:before', '.top-navig .slick-disabled',
                    '.all-cover.active', '.all-cover', '.all-cover__bg', '.all-cover__inner', '.all-cover__b-close', '.all-cover__inner .stuff__item',
                    '.all-cover__inner .stuff__item-img','.all-cover__inner .stuff__item-ttl','.all-cover__inner .stuff__item-descr','.all-cover__inner hr.first','.all-cover .project-stuff__quote-ln',
                    '.all-cover__inner .project-stuff__quote-soc','.all-cover__inner .section-details__thn','.all-cover__inner .section-details__thn hr','.all-cover__b-close .btn:hover', '.all-cover .project-stuff__quote-soc',
                    '.contacts-form input::-webkit-input-placeholder','.contacts-form form textarea::-webkit-input-placeholder', '::-webkit-input-placeholder',
                    '.about-diagramms__item-diagr .diagramm-number','.about-diagramms__item-diagr .diagramm-number span', '.about-diagramms__item-diagr-sm .diagramm-number', '.about-diagramms__item-diagr-sm .diagramm-number span', '.about-diagramms__item-diagr-sm .diagramm-number span.val-rgth',
                    '.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right','.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right li',
                    '.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right>li>a','.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right>li>span',
                    '.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right li i','.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right>li.dropdown-submenu>a',
                    '.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right>li.dropdown-submenu>.dropdown-menu','.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right>li.dropdown-submenu.active>a',
                    '.navbar-nav .dropdown>.dropdown-menu.dropdown-menu__right>li.dropdown-submenu.active>ul>li.active>span',
                    '.subview','.subview li','.subview .subviewopen', '.subview .subviewopen>a', '.subview .subviewopen>.dl-submenu',
                    '.subview .subviewopen>.dl-submenu>li','.subview .subviewopen>.dl-submenu>li>a','.subview .subviewopen>.dl-submenu>li>span',
                    '.subview .subviewopen>.dl-submenu>li>span>i', '.subview .subviewopen>.dl-submenu>li>a>i', '.subview li.subview', '.subview li.subview .dl-submenu', '.subview li.subview>a',
                    'nav .dropdown-menu>.active>a', 'nav .dropdown-menu>.active>a:focus', 'nav .dropdown-menu>.active>a:hover','.dt-back i','.dt-back a',
                    '.slider__bg-img.fw-image-parallax',''
                    ],
                    media: [
                    '(min-width: 480px) and (max-width: 767px)',
                    '(min-width: 768px) and (max-width: 991px)',
                    '(min-width: 992px) and (max-width: 1199px)',
                    '(min-width: 1200px)',
                    ],
                    // media: ['(min-width: 700px) handheld and (orientation: landscape)'],
                    // csspath: '../public/css/',
                    // raw: 'h1 { color: green }',
                    // stylesheets: ['lib/bootstrap/dist/css/bootstrap.css', 'src/public/css/main.css'],
                    // ignoreSheets: ['assets/themegovernment-design/js/plugins/slick/slick.css'],
                    // urls: ['http://localhost:3000/mypage', '...'], // Deprecated
                    // timeout: 1000,
                    // htmlroot: 'public',
                    // report: 'min'
                },
                files: {
                    'assets/themegovernment-design/css/style.min.css': ['assets/themegovernment-design/buttons.html', 'assets/themegovernment-design/main.html', 'assets/themegovernment-design/news.html', 'assets/themegovernment-design/news-view.html', 'assets/themegovernment-design/projects.html',
                    'assets/themegovernment-design/main-bordered.html','assets/themegovernment-design/projects-view.html','assets/themegovernment-design/events.html',
                    'assets/themegovernment-design/events-view.html', 'assets/themegovernment-design/stuff.html', 'assets/themegovernment-design/contacts.html',
                    'assets/themegovernment-design/about.html']
                }
            }
        },
        watch: {
            files: ['assets/themegovernment-design/vendor/stylesheets/bootstrap/*', 'assets/themegovernment-design/vendor/stylesheets/*'],
            tasks: ['sass', 'cssmin', 'uncss'],
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.registerTask('default', ['sass', 'cssmin', 'uncss', 'watch']);
}