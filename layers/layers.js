var wms_layers = [];

var format_USStatesAsianPopulation_0 = new ol.format.GeoJSON();
var features_USStatesAsianPopulation_0 = format_USStatesAsianPopulation_0.readFeatures(json_USStatesAsianPopulation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USStatesAsianPopulation_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USStatesAsianPopulation_0.addFeatures(features_USStatesAsianPopulation_0);
var lyr_USStatesAsianPopulation_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USStatesAsianPopulation_0, 
                style: style_USStatesAsianPopulation_0,
                popuplayertitle: "US States & Asian Population",
                interactive: true,
    title: 'US States & Asian Population<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_0.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_1.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_2.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_3.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_4.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_5.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_6.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_7.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_8.png" /> 0 - 0<br />\
    <img src="styles/legend/USStatesAsianPopulation_0_9.png" /> 0 - 0<br />'
        });

lyr_USStatesAsianPopulation_0.setVisible(true);
var layersList = [lyr_USStatesAsianPopulation_0];
lyr_USStatesAsianPopulation_0.set('fieldAliases', {'gid': 'gid', 'arealand': 'arealand', 'division': 'division', 'intptlat': 'intptlat', 'name': 'name', 'objectid': 'objectid', 'areawater': 'areawater', 'intptlon': 'intptlon', 'oid': 'oid', 'funcstat': 'funcstat', 'centlon': 'centlon', 'stusab': 'stusab', 'state': 'state', 'statens': 'statens', 'centlat': 'centlat', 'basename': 'basename', 'mtfcc': 'mtfcc', 'region': 'region', 'lsadc': 'lsadc', 'geoid': 'geoid', 'AA_Population_Asian': 'AA_Population_Asian', });
lyr_USStatesAsianPopulation_0.set('fieldImages', {'gid': 'TextEdit', 'arealand': 'TextEdit', 'division': 'TextEdit', 'intptlat': 'TextEdit', 'name': 'TextEdit', 'objectid': 'TextEdit', 'areawater': 'TextEdit', 'intptlon': 'TextEdit', 'oid': 'TextEdit', 'funcstat': 'TextEdit', 'centlon': 'TextEdit', 'stusab': 'TextEdit', 'state': 'TextEdit', 'statens': 'TextEdit', 'centlat': 'TextEdit', 'basename': 'TextEdit', 'mtfcc': 'TextEdit', 'region': 'TextEdit', 'lsadc': 'TextEdit', 'geoid': 'TextEdit', 'AA_Population_Asian': 'TextEdit', });
lyr_USStatesAsianPopulation_0.set('fieldLabels', {'gid': 'hidden field', 'arealand': 'hidden field', 'division': 'hidden field', 'intptlat': 'hidden field', 'name': 'no label', 'objectid': 'hidden field', 'areawater': 'hidden field', 'intptlon': 'hidden field', 'oid': 'hidden field', 'funcstat': 'hidden field', 'centlon': 'hidden field', 'stusab': 'hidden field', 'state': 'hidden field', 'statens': 'hidden field', 'centlat': 'hidden field', 'basename': 'hidden field', 'mtfcc': 'hidden field', 'region': 'hidden field', 'lsadc': 'hidden field', 'geoid': 'hidden field', 'AA_Population_Asian': 'no label', });
lyr_USStatesAsianPopulation_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});