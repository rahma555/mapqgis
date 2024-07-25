var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Details_3 = new ol.format.GeoJSON();
var features_Details_3 = format_Details_3.readFeatures(json_Details_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Details_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Details_3.addFeatures(features_Details_3);
var lyr_Details_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Details_3, 
                style: style_Details_3,
                popuplayertitle: "Details ",
                interactive: true,
                title: '<img src="styles/legend/Details_3.png" /> Details '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_Details_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_GoogleLabels_2,lyr_Details_3];
lyr_Details_3.set('fieldAliases', {'landfill': 'landfill', 'Y': 'Y', 'X': 'X', 'open year': 'open year', 'closure year': 'closure year', });
lyr_Details_3.set('fieldImages', {'landfill': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'open year': 'Range', 'closure year': 'TextEdit', });
lyr_Details_3.set('fieldLabels', {'landfill': 'no label', 'Y': 'no label', 'X': 'no label', 'open year': 'no label', 'closure year': 'no label', });
lyr_Details_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});