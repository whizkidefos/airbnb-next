import { PrinterIcon } from '@heroicons/react/outline';
import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    //Transform the search object into coordinates
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/whizkidefos/cktmnlsro2uzo17myjxnnof3t'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result  => (
               <div className="" key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p 
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce" aria-label="push pin">
                            <PrinterIcon className="bg-red-400 h-5" />
                        </p>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            <article className="rounded-full px-2 py-2 border-t-2">
                                {result.title}
                            </article>
                        </Popup>
                    ): (false)}
               </div>
            ))}
        </ReactMapGL>
    )
}

export default Map;
