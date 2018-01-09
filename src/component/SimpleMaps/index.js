import React, { Component } from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer , LayersControl} from 'react-leaflet'


class SimpleMaps extends Component {
    handleMoveend(props){
        console.log("mapMove", props);
    }
    
    render(){
        return (
            <Map
                className="simpleMaps"
                center={this.props.center}
                zoom={this.props.zoom}
                onMoveend={this.handleMoveend}
            >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
              
                <LayersControl>
                  <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                      url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                  </LayersControl.BaseLayer>
                  
                  <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
                    <TileLayer
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    </LayersControl.BaseLayer>
                </LayersControl>
              
                <Marker position={this.props.center}>
                  <Popup>
                    <span>A pretty CSS3 popup.<br />Easily customizable.</span>
                  </Popup>
                </Marker>
            </Map>
            
        )
    }
}

export default SimpleMaps