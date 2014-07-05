(function($) {
    var map = new L.Map('map'),
        url = 'http://gis.phila.gov/arcgis/rest/services/BaseMaps/GrayBase_WM/MapServer/tile/{z}/{y}/{x}',
        attribution = 'City of Philadelphia',
        layer = L.tileLayer(url, {maxZoom: 17, attribution: attribution, subdomains: 'abcd'});
    
    map.setView([39.9524, -75.1636], 11).addLayer(layer);
})(window.jQuery);