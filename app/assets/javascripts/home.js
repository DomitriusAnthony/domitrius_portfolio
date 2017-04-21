// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
(function(){
  var app = angular.module('portfolio', [])

  app.controller('PortfolioController', function(){
  	this.projects = websites;
  });


  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

	var websites = [{
		name: 'PressStart',
		description: "PressStart is a social platform for gamers and content creators to connect and build their following. This app allows users to signup/login through Devise, upload images with Paperclip & AWS s3, make posts/comments, follow/unfollow other users, and chat in real time using Websockets/Action Cable and Redis.",
		image: "../assets/pressstart.png",
		link1: "https://pressstart.herokuapp.com/",
		link2: "https://www.github.com/DomitriusAnthony/pressstart",
		recording: "../assets/pressstart-recording.mp4"
	 	}
	//, 
	// {
	// 	name: "School'd",
	// 	description: "School'd is targeted for middle school level kids to complete multiple challenges to learn the basic HTML & CSS setup for a page. By the end of the challenges they will have a fully fleshed out profile page, created by them. The challenges are JS DOM-manipulation which store in the database. ",
	// 	image: "../assets/schoold.png",
	// 	link1: "www.schoold.herokuapp.com",
	// 	link2: "www.github.com/DomitriusAnthony/schoold",
	// 	recording: "../assets/schoold-recording.mp4"
	// }
	]
})();