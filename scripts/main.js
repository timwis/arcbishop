(function($) {
    var map = new L.Map('map'),
        url = 'http://gis.phila.gov/arcgis/rest/services/BaseMaps/GrayBase_WM/MapServer/tile/{z}/{y}/{x}',
        attribution = 'City of Philadelphia',
        layer = L.tileLayer(url, {maxZoom: 17, attribution: attribution, subdomains: 'abcd'});
    
    map.setView([39.9524, -75.1636], 12).addLayer(layer);
    
    $(document).ready(function() {
        $('[data-toggle]').on('click', function(e) {
            $('body').removeClass('viewing-map').removeClass('viewing-list').addClass('viewing-' + $(this).data('toggle'));
        });
    });
})(window.jQuery);