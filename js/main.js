'use strict';
jQuery(function($){

var lightbox;
  
$(document).ready(function(){
  
  var galleries = $('.wp-block-gallery');
  
  
  if (galleries.length) {
    $('body').append('<div class="simple_gallery_lightbox_wrapper"></div>');
    lightbox = $('.simple_gallery_lightbox_wrapper');
  }
  
  
  
  galleries.each(function(){
    
    setupGallery($(this));
    
  });
  
  
  
  $('.simple_gallery_lightbox_wrapper').on('click', function(e){
    e.preventDefault();
    lightbox.hide();
    lightbox.empty();
    
    $('html, body').css({
      overflow: 'auto'
    });
    
  });
  
});  

  
function setupGallery(gallery) {
  
  var items = gallery.find('.blocks-gallery-item a');
  if (items.length == 0) {
    items = gallery.find('.blocks-gallery-item img');
  }
  
  items.on('click', function(e){
    
    $('html, body').css({
      overflow: 'hidden'
    });
    
    e.preventDefault();
    
    var thisItem = $(this);
    var image;
    if (thisItem.is('a')) {
       image = thisItem.find('img').clone();
    }
    else {
      image = thisItem.clone();
    }
    
    lightbox.append(image);
    lightbox.show();
    
  });
  
  
}
  
  
  
  
  
  
});
  
  