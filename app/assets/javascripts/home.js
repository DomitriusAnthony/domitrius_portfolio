// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
(function() {
  var app = angular.module('portfolioProject', []);

  app.controller('ProjectController', function(){
  	this.project = websites
  })


  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

})

var websites = [{
	name: 'PressStart'
	description: "PressStart is a social platform for gamers and content creators to connect and build their following. This app allows users to signup/login through Devise, upload images with Paperclip & AWS s3, make posts/comments, follow/unfollow other users, and chat in real time using Websockets/Action Cable and Redis."
	image: "images/pressstart.jpg"
}]
