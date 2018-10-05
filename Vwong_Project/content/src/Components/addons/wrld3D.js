import React from "react";
import {L, WrldPoiApi} from "wrld.js"
class mapquestAPI extends React.Component {
    render() {
        return (
            
             <div id="map" 
            //  style={"height: 250px"}
             >
             </div>
        
        )
    }
    
}

var map = L.Wrld.map("map", "d0792614d7fa19e4dc9134d8462e5649", {
    center: [37.7952, -122.4028],
    zoom: 15
  });

  var poiApi = new WrldPoiApi("d0792614d7fa19e4dc9134d8462e5649");
  var markers = [];

  function displaySearchResults(success, results) {
      map.closePopup();
      if (success) {
          results.forEach(function(result) {
              var marker = L.marker([result["lat"], result["lon"]], {
                 title: result["title"],
                 elevation: result["height_offset"]
              }).addTo(map);

              markers.push(marker);
          })
      }
      else {
          map.openPopup("POI API query failed!", map.getCenter());
      }
  }

  function searchPoisAroundClick(event) {
      markers.forEach(function(marker) { marker.remove(); });
      map.openPopup("Searching...", event.latlng);

      var callback = displaySearchResults;
      var options = { range: 500, number: 5 };
      poiApi.searchTags([], event.latlng, callback, options);
  }

  map.on("click", searchPoisAroundClick);

export default mapquestAPI