import React, {useState, useEffect} from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {

  // const [color, setColor] = useState('#CC1034');

  useEffect(() => {
    if(casesType==='recovered'){
      {showDataOnMap(countries, casesType, "rgb(125, 215, 29)")}
    }
    else if(casesType==='cases'){
      {showDataOnMap(countries, casesType, "rgb(204, 16, 52)")}

      // setColor("rgb(204, 16, 52)");
    }
    else{
      {showDataOnMap(countries, casesType, "rgb(251, 68, 67)")}
      // setColor("rgb(251, 68, 67)");
    }  
  }, [casesType])
  
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>

  );
}

export default Map;
