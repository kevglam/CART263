"use strict";

let $intro;

$(document).ready(function(){

  $intro = $('#intro');

  $('#start').on('click',function() {

    if($intro.attr('src') === 'assets/images/intro.gif'){

      $("#intro").attr("src", "assets/images/normalspd.gif");
      }

      else {
        $("#intro").attr("src", "assets/images/normalspd.gif");
      }


    });

    $('#faster').on('click',function() {

      if($intro.attr('src') === 'assets/images/normalspd.gif'){

        $("#intro").attr("src", "assets/images/fastspd.gif");
        }

        else if($intro.attr('src') === 'assets/images/fastspd.gif') {
          $("#intro").attr("src", "assets/images/firespd.gif");
        }

        else {
          $("#intro").attr("src", "assets/images/firespd.gif");
        }


      });

      $('#break').on('click',function() {

        $("#intro").attr("src", "assets/images/breaktime.jpg");


        });

});
