import { default as React, Component } from 'react';
//import Helmet from 'react-helmet';
//import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import GoogleMapReact from 'google-map-react';

import _ from "lodash";
/* global google */

const data = [
    {
        agg: {
            location: {
                lon: 105.84999985992908,
                lat: 21.03329828940332
            }
        },
        doc_count: 1336650,
        key: "w7er"
    },
    {
        agg: {
            location: {
                lon: 106.64379995316267,
                lat: 10.814199959859252
            }
        },
        doc_count: 482827,
        key: "w3gv"
    },
    {
        agg: {
            location: {
                lon: 108.2181796990335,
                lat: 16.069298945367336
            }
        },
        doc_count: 38013,
        key: "w6ug"
    },
    {
        agg: {
            location: {
                lon: 106.80173110216856,
                lat: 10.951612880453467
            }
        },
        doc_count: 32436,
        key: "w3gy"
    },
    {
        agg: {
            location: {
                lon: 106.50305204093456,
                lat: 10.518753211945295
            }
        },
        doc_count: 31376,
        key: "w3ge"
    },
    {
        agg: {
            location: {
                lon: 106.68219996616244,
                lat: 20.85609999485314
            }
        },
        doc_count: 25752,
        key: "w7ey"
    },
    {
        agg: {
            location: {
                lon: 109.17584113776684,
                lat: 12.249999940395355
            }
        },
        doc_count: 23781,
        key: "w6jt"
    },
];

const AnyReactComponent = ({ text }) => <div className="map-marker">{text}</div>;

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

class GeoMap extends Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    render() {
        var body = this.props.geomap;
        /*var convertedData = body.map((obj, i) => {
            return (
                _.dropRight(body, body.length-1)
            )
        }
        );*/
        console.log(body);
        var convertedData = _.dropRight(body, body.length - 1)[0]
        console.log(convertedData);
        var center = { lat: 59.95, lng: 30.33 };
        return (
            <div className="mahmap">
                <GoogleMapReact
                    resetBoundsOnResize
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {_.map(this.props.geomap, (a, i) => {
                        let lat = parseFloat(a.agg.location.lat);
                        let lon = parseFloat(a.agg.location.lon);
                        let key = a.key;
                        return (
                            /*<Marker key={i}
                              position={{ lat : lat, lng : lon }}
                              defaultAnimation={2}
                            />*/
                            <AnyReactComponent
                                key={key}
                                lat={lat}
                                lng={lon}
                                zoom={11}
                            />
                        )
                    })}
                    {/*<AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />*/}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GeoMap;