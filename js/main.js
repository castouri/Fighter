$(document).on('pop-initialized', function(){
  // Instead of listening for the document.ready event, your theme
  // should listen for document.pop-initialized. 

  $('.asset').live('initialize', function(e, asset){
	Populr.ThemeEngine.repack();
  });

  $('.asset').live('destroy', function(e, asset){
	Populr.ThemeEngine.repack();
  });  
    
  $('.asset-type-documentgroup.asset-size-l ul.documents li:nth-child(even)').addClass('alternate');
  $('.asset-type-documentgroup.asset-size-l ul.documents li:nth-child(2)').addClass('first');

});