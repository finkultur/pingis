  $(function() {
    $("#ws-slider").slider({
      range: "max",
      min: 0,
      max: 20,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
        MAX_WS = ui.value;
        var div = document.getElementById('times');
        div.innerHTML = '';
        getData();
      }
    });
    $( "#amount" ).val( $( "#ws-slider" ).slider( "value" ) );
  });

  $(function() {
    $("#gust-slider").slider({
      range: "max",
      min: 0,
      max: 20,
      value: 10,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
        MAX_GUST = ui.value;
        var div = document.getElementById('times');
        div.innerHTML = '';
        getData();
      }
    });
    $( "#amount2" ).val( $( "#gust-slider" ).slider( "value" ) );
  });

