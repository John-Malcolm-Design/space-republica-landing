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
  
  
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function generateStar(col){
    var minWidth = 10;
    var maxWidth = 50;
    
    var minTilt = -6;
    var maxTilt = 18;
    
    var width = getRandomArbitrary(minWidth, maxWidth);
    var delay = getRandomArbitrary(1000, 9000);
    var delaySmall = getRandomArbitrary(0, 500);
    var fade = getRandomArbitrary(700, 1400);
    var posy = (Math.random() * (($(document).height() / 2) - width)).toFixed();
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
    // $(img, img1).appendTo( '.canvas' ).fadeIn(500).delay(1000).fadeOut(500, function(){
    //   $(this).remove();
    //   generateStar();
    // });
    $(img).appendTo(col).delay(delaySmall).fadeIn(fade).delay(delay).fadeOut(delay, function(){
    $(this).remove();
        generateStar(col);
    });
    
}

$(document).ready(function(){
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

});