  $(function() {
    $("#ws-slider").slider({
      range: "max",
      min: 0,
      max: 20,
      value: MAX_WS,
      slide: function( event, ui ) {
        $( "#amount_ws" ).val( ui.value );
        MAX_WS = ui.value;
        refreshStuff();
      }
    });
    $( "#amount_ws" ).val( $( "#ws-slider" ).slider( "value" ) );
  });

  $(function() {
    $("#gust-slider").slider({
      range: "max",
      min: 0,
      max: 20,
      value: MAX_GUST,
      slide: function( event, ui ) {
        $( "#amount_gust" ).val( ui.value );
        MAX_GUST = ui.value;
        refreshStuff();
      }
    });
    $( "#amount_gust" ).val( $( "#gust-slider" ).slider( "value" ) );
  });

  $(function() {
    $("#amount_ws").on('input', function(e) {
        console.log($(this).val());
        MAX_WS = $(this).val();
        refreshStuff();
    });
  });

  $(function() {
    $("#amount_gust").on('input', function(e) {
        MAX_GUST = $(this).val();
        refreshStuff();
    });
  });


function refreshStuff() {
        var div = document.getElementById('times');
        div.innerHTML = '';
        getData();
}
