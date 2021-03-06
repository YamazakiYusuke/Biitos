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
//= require audiojs
//= require jquery/dist/jquery.js
//= require jquery-ui
//= require bootstrap/dist/js/bootstrap.min
//= require_tree .

$(document).on('turbolinks:load', function() {
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });
  $(document).on('change', '#post_picture', function() {
    var picture = $('#post_picture').prop('files')[0].name;
    $('#picture_form').html(picture)
  });
  $(document).on('change', '#post_music, #dm_message_collab_music ,#group_message_group_music', function() {
    var music = $('#post_music, #dm_message_collab_music, #group_message_group_music').prop('files')[0].name;
    $('#collab_music_form, #group_music_form').html(music)
  });
});
