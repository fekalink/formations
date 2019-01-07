
 var autocomplete = new kt.OsmNamesAutocomplete(
          'none', 
          'https://geocoder.tilehosting.com/', 
           MUSICBAND.config.OSMKey
 );
 autocomplete.registerCallback(function(item) {
        alert(JSON.stringify(item, ' ', 2));
 });

