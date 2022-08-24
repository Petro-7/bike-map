mapboxgl.accessToken = 'pk.eyJ1IjoiaWJpa2VrcmsiLCJhIjoiY2o4bjN6YXIzMHl0NDJxcWhic2F3MDRkcyJ9.wW55hVL7Nx6uTQ39FrEY0Q';

var map = new mapboxgl.Map({
    hash: true,
    container: 'map',
    style: 'mapbox://styles/ibikekrk/ckk79v1nk06y617o6t7xy00ck',
    center: [19.94765281677246, 50.061712298362735],
    zoom: 12,
    maxZoom: 16,
    minZoom: 5

});
map.touchZoomRotate.enable();

const navigationControl = new mapboxgl.NavigationControl();
const scaleControl = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'metric'
});
const geolocationControl = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
});

map.addControl(navigationControl, 'bottom-right');
map.addControl(scaleControl, 'bottom-left');
map.addControl(geolocationControl, 'top-right');

map.on('load', loadDefaultMapLayers());

function loadDefaultMapLayers() {
    return function () {

        map.addSource('sugerowane_trasy', {
            type: 'vector',
            url: 'mapbox://ibikekrk.cj8eyn8ty0osu33mn3slvfsel-6qez4'
        });
        map.addLayer({
            'id': 'sugerowane trasy w ruchu ogólnym',
            'type': 'line',
            'source': 'sugerowane_trasy',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#fd0d0d',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                },
                'line-dasharray': [1, 2]
            },
            'source-layer': 'sugerowane_trasy'
        });

        map.addSource('krk-infra-rower', {
            type: 'vector',
            url: 'mapbox://ibikekrk.cl472axbu01kz27p99947cew8-797hj'
        });

        map.addLayer({
            'id': 'w budowie',
            'type': 'line',
            'source': 'krk-infra-rower',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#faa004',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                },
                'line-dasharray': [2.5, 1.5]
            },
            'filter': [
                "all",
                [
                    "in",
                    "$type",
                    "Polygon",
                    "LineString",
                    "Point"
                ],
                [
                    "all",
                    ["in", "kategoria", "ddr-p", "cpr-p", "kontraruch-p", "kontrapas-p"]
                ]
            ],
            'source-layer': 'krk-infra-rower'
        });

        map.addLayer({
            'id': 'kontraruch',
            'type': 'line',
            'source': 'krk-infra-rower',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#1c9e05',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                },
                'line-dasharray': [2.5, 1.5]
            },
            'filter': [
                "all",
                [
                    "in",
                    "$type",
                    "Polygon",
                    "LineString",
                    "Point"
                ],
                [
                    "all",
                    ["in", "kategoria", "kontraruch", "kontrapas"]
                ]
            ],
            'source-layer': 'krk-infra-rower'
        });


        map.addLayer({
            'id': 'pas rowerowy',
            'type': 'line',
            'source': 'krk-infra-rower',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#1c9e05',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                }
            },
            'filter': [
                "all",
                [
                    "in",
                    "$type",
                    "Polygon",
                    "LineString",
                    "Point"
                ],
                [
                    "all",
                    ["in", "kategoria", "pas"]
                ]
            ],
            'source-layer': 'krk-infra-rower'
        });
        map.addLayer({
            'id': 'chodnik dopuszczony',
            'type': 'line',
            'source': 'krk-infra-rower',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#230ffa',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                },
                'line-dasharray': [1, 2]
            },
            'filter': [
                "all",
                [
                    "in",
                    "$type",
                    "Polygon",
                    "LineString",
                    "Point"
                ],
                [
                    "all",
                    ["in", "kategoria", "c16t22", "pord"]
                ]
            ],
            'source-layer': 'krk-infra-rower'
        });
        map.addLayer({
            'id': 'ciąg pieszo-rowerowy',
            'type': 'line',
            'source': 'krk-infra-rower',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#230ffa',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                },
                'line-dasharray': [2.5, 1.5]
            },
            'filter': [
                "all",
                [
                    "in",
                    "$type",
                    "Polygon",
                    "LineString",
                    "Point"
                ],
                [
                    "all",
                    ["in", "kategoria", "cpr"]
                ]
            ],
            'source-layer': 'krk-infra-rower'
        });
        map.addLayer({
            'id': 'droga dla rowerów',
            'type': 'line',
            'source': 'krk-infra-rower',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#230ffa',
                'line-opacity': 1,
                'line-width': {
                    "base": 1,
                    "stops": [[12, 1], [15, 2]]
                }
            },
            'filter': [
                "all",
                [
                    "in",
                    "$type",
                    "Polygon",
                    "LineString",
                    "Point"
                ],
                [
                    "all",
                    ["in", "kategoria", "ddr"]
                ]
            ],
            'source-layer': 'krk-infra-rower'
        });
    };
}