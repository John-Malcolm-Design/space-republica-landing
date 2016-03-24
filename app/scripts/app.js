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

function generateStar(){
    var minWidth = 20;
    var maxWidth = 70;
    
    var minTilt = -6;
    var maxTilt = 18;
    
    var width = getRandomArbitrary(minWidth, maxWidth);
    var posx = (Math.random() * ($(document).width() - width)).toFixed();
    var posy = (Math.random() * ($(document).height() - width)).toFixed();
    var rotation = getRandomArbitrary(minTilt, maxTilt);
    var img = $('<img class="star">');
    img.attr('src', 'images/star.svg');
    img.css({
        'position': 'absolute',
        'width': width + 'px',
        'left': posx + 'px',
        'top': posy + 'px',
        'display' : 'none',
        'transform': 'rotate('+rotation+'deg)'
    });
    // $(img, img1).appendTo( '.canvas' ).fadeIn(500).delay(1000).fadeOut(500, function(){
    //   $(this).remove();
    //   generateStar();
    // });
    $(img).appendTo( '.canvas' ).fadeIn(500).delay(1000);
    
}

$(document).ready(function(){
    console.log('ready');
    generateStar();
    generateStar();
    generateStar();
    generateStar();
    generateStar();
    generateStar();
    generateStar();
    generateStar();
    generateStar();
    generateStar();

});