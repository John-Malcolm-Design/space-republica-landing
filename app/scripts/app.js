'use strict';

/**
 * @ngdoc overview
 * @name spaceRepublicaApp
 * @description
 * # spaceRepublicaApp
 *
 * Main module of the application.
 */
angular
  .module('spaceRepublicaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  var globeSize = 900;
  var globeBottom = -60;
  
  var rocketBottom = 270;
  var rocketWidth = 200;
  var rocketLeft = 80;
  
  var balloonLeft = 21;
  var balloonWidth = 200;
  var balloonBottom = 370; 
  
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function generateStar(col){
    
    // for(var i = amount; i <= amount; i++){
        var minWidth = 20;
        var maxWidth = 70;
        var minTilt = -6;
        var maxTilt = 18;

        var width = getRandomArbitrary(minWidth, maxWidth);
        var delay = getRandomArbitrary(1000, 9000);
        var delaySmall = getRandomArbitrary(0, 500);
        var fade = getRandomArbitrary(700, 1400);
        var posy = (Math.random() * (($(document).height()) - width)).toFixed();
        var rotation = getRandomArbitrary(minTilt, maxTilt);
        
        var img = $('<img class="star">');
        img.attr('src', 'images/star.svg');
        img.css({
            'display' : 'none',
            'position': 'absolute',
            'width': width + 'px',
            'top': posy + 'px',
            'transform': 'rotate('+rotation+'deg)'
        });
        $(img).appendTo(col).delay(delaySmall).fadeIn(fade).delay(delay).fadeOut(delay, function(){
        $(this).remove();
            generateStar(col);
        });
    // }
        
}

function buildBorders(){
    $( '.topcorner' ).animate({
    width: ['50%', 'easeInQuint']
  }, 500, function() {
    // Animation complete.
  });

    $( '.bottomcorner' ).animate({
    width: ['20%', 'easeInQuint']
  }, 500, function() {
    // Animation complete.
  });
}

function raiseBalloon(){
    $( '.balloon' ).animate({    
    left: [balloonLeft+'%', 'easeOutQuint'],
    width: [balloonWidth+'px', 'easeOutQuint'],
    bottom: [balloonBottom+'px', 'easeOutQuint'],
  }, 2000, function() {
    $( '.absolute-center' ).show( 'slow', function type(){
        $(function(){
        $('#newsoon').typed({
            strings: ['New website coming soon ', 'Subscribe for updates... '],
            typeSpeed: 0
        });
    });
    } );
  });
}


function flyRocket(){
    $( '.rocket' ).animate({
    width: [rocketWidth + 'px', 'swing'],
    left: [rocketLeft+'%', 'swing'],
    bottom: [rocketBottom +'px', 'swing'],
  }, 800, function() {
    raiseBalloon();
  });
}


function raiseRoof(){
    $( '.globe' ).animate({
    width: [globeSize, 'easeInQuint'],
    borderWidth: ['15px', 'easeInQuint'],
    marginLeft: ['-' + (globeSize / 2) + 'px', 'easeInQuint'],
    bottom: [globeBottom+'%', 'easeInQuint']
  }, 1100, function() {
    flyRocket();
  });
}



$(document).ready(function(){
    if($( window ).width() > 996){
    
    if($( window ).width() < 1600){
        globeSize = 700;
        rocketWidth = 150;
        rocketBottom = 200;
        balloonWidth = 170;
        balloonBottom = 320; 
    }
    
    if($( window ).height() < 900){
        // globeBottom = -60;
    }
    
    
    console.log('ready');
    generateStar('.top12');
    generateStar('.top1');
    generateStar('.top11');
    generateStar('.top2');
    generateStar('.top10');
    generateStar('.top3');
    generateStar('.top9');
    generateStar('.top4');
    generateStar('.top8');
    generateStar('.top5');
    generateStar('.top7');
    generateStar('.top6');
    generateStar('.top6');
    generateStar('.top7');
    generateStar('.top5');
    generateStar('.top8');
    generateStar('.top4');
    generateStar('.top9');
    generateStar('.top3');
    generateStar('.top10');
    generateStar('.top2');
    generateStar('.top11');
    generateStar('.top1');
    generateStar('.top12');

    generateStar('.top1');
    generateStar('.top2');
    generateStar('.top3');
    generateStar('.top4');
    generateStar('.top5');
    generateStar('.top6');
    generateStar('.top7');
    generateStar('.top8');
    generateStar('.top9');
    generateStar('.top10');
    generateStar('.top11');
    generateStar('.top12');

buildBorders();
    raiseRoof();
    
    } else{
        $('body').css({
            'overflow': 'scroll',
            'backgroundColor': 'white'
        });
        
        $( '.absolute-center' ).css({
            'position': 'relative',
            'width': '100%',
            'height': '100%',
            'borderRadius': '0',
            'top': '0',
            'marginTop': '0' 
            
        });
        $( '.logo' ).css({
            'marginBottom': '20px',
            'display': 'inline-block',
            'width': 'auto'
                });
        $( '.absolute-center' ).show( 'slow', function type(){
    } );
    }
    
});