$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "x: " + event.pageX + ", y: " + event.pageY );
});
