// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require tab-menu.js
//= require_tree .

function reveal(event) {
  var elements = document.querySelectorAll(".video-popup");

  elements.forEach(ele => {
    if (ele.classList.contains("hidden")) {
      if (ele === event.target.nextElementSibling) {
        ele.classList.remove("hidden");
      }
    } else {
      ele.classList.add("hidden");
    }
  })
}

function revealCarat(event) {
  var element = document.querySelector("#modal");
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}