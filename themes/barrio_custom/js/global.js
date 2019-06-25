/**
 * @file
 * Global utilities.
 *
 */

var element = document.querySelector('#mySlider .carousel-inner .carousel-item');
element.classList.add("active");

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.barrio_custom = {
    attach: function (context, settings) {

    }
  };

})(jQuery, Drupal);


/* 
<div class="views-field views-vield-youtube-icon">
  <i class="far fa-play-circle"></i>
</div> 
*/
