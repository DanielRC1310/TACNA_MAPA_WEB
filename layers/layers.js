var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provincia_tacna_1 = new ol.format.GeoJSON();
var features_Provincia_tacna_1 = format_Provincia_tacna_1.readFeatures(json_Provincia_tacna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincia_tacna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincia_tacna_1.addFeatures(features_Provincia_tacna_1);
var lyr_Provincia_tacna_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincia_tacna_1, 
                style: style_Provincia_tacna_1,
                popuplayertitle: 'Provincia_tacna',
                interactive: true,
    title: 'Provincia_tacna<br />\
    <img src="styles/legend/Provincia_tacna_1_0.png" /> CANDARAVE<br />\
    <img src="styles/legend/Provincia_tacna_1_1.png" /> JORGE BASADRE<br />\
    <img src="styles/legend/Provincia_tacna_1_2.png" /> TACNA<br />\
    <img src="styles/legend/Provincia_tacna_1_3.png" /> TARATA<br />\
    <img src="styles/legend/Provincia_tacna_1_4.png" /> <br />' });
var lyr_dem_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'dem<br />\
    <img src="styles/legend/dem_2_0.png" /> 2<br />\
    <img src="styles/legend/dem_2_1.png" /> 737<br />\
    <img src="styles/legend/dem_2_2.png" /> 1472<br />\
    <img src="styles/legend/dem_2_3.png" /> 2207<br />\
    <img src="styles/legend/dem_2_4.png" /> 2942<br />\
    <img src="styles/legend/dem_2_5.png" /> 3677<br />\
    <img src="styles/legend/dem_2_6.png" /> 4412<br />\
    <img src="styles/legend/dem_2_7.png" /> 5091<br />\
    <img src="styles/legend/dem_2_8.png" /> 5656<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/dem_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7919911.534613, -2079086.191472, -7732991.537609, -1893295.543032]
        })
    });
var format_geoproce_rasterlimite_tacna_3 = new ol.format.GeoJSON();
var features_geoproce_rasterlimite_tacna_3 = format_geoproce_rasterlimite_tacna_3.readFeatures(json_geoproce_rasterlimite_tacna_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoproce_rasterlimite_tacna_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoproce_rasterlimite_tacna_3.addFeatures(features_geoproce_rasterlimite_tacna_3);
var lyr_geoproce_rasterlimite_tacna_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoproce_rasterlimite_tacna_3, 
                style: style_geoproce_rasterlimite_tacna_3,
                popuplayertitle: 'geoproce_raster — limite_tacna',
                interactive: true,
                title: '<img src="styles/legend/geoproce_rasterlimite_tacna_3.png" /> geoproce_raster — limite_tacna'
            });
var format_RVD_eje_4 = new ol.format.GeoJSON();
var features_RVD_eje_4 = format_RVD_eje_4.readFeatures(json_RVD_eje_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVD_eje_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_eje_4.addFeatures(features_RVD_eje_4);
var lyr_RVD_eje_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_eje_4, 
                style: style_RVD_eje_4,
                popuplayertitle: 'RVD_eje',
                interactive: true,
                title: '<img src="styles/legend/RVD_eje_4.png" /> RVD_eje'
            });
var format_RVV_eje_5 = new ol.format.GeoJSON();
var features_RVV_eje_5 = format_RVV_eje_5.readFeatures(json_RVV_eje_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVV_eje_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_eje_5.addFeatures(features_RVV_eje_5);
var lyr_RVV_eje_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_eje_5, 
                style: style_RVV_eje_5,
                popuplayertitle: 'RVV_eje',
                interactive: true,
                title: '<img src="styles/legend/RVV_eje_5.png" /> RVV_eje'
            });
var format_Rios_quebradas_6 = new ol.format.GeoJSON();
var features_Rios_quebradas_6 = format_Rios_quebradas_6.readFeatures(json_Rios_quebradas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_quebradas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_quebradas_6.addFeatures(features_Rios_quebradas_6);
var lyr_Rios_quebradas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_quebradas_6, 
                style: style_Rios_quebradas_6,
                popuplayertitle: 'Rios_quebradas',
                interactive: true,
                title: '<img src="styles/legend/Rios_quebradas_6.png" /> Rios_quebradas'
            });
var format_ccee_tacnaccee_tacna_7 = new ol.format.GeoJSON();
var features_ccee_tacnaccee_tacna_7 = format_ccee_tacnaccee_tacna_7.readFeatures(json_ccee_tacnaccee_tacna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ccee_tacnaccee_tacna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ccee_tacnaccee_tacna_7.addFeatures(features_ccee_tacnaccee_tacna_7);
var lyr_ccee_tacnaccee_tacna_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ccee_tacnaccee_tacna_7, 
                style: style_ccee_tacnaccee_tacna_7,
                popuplayertitle: 'ccee_tacna-ccee_tacna',
                interactive: true,
    title: 'ccee_tacna-ccee_tacna<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_4.png" /> Básica Especial - PRITE<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_5.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_6.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_7.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_8.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_9.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_10.png" /> Primaria<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_11.png" /> Secundaria<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_12.png" /> Superior Formación Artística<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_13.png" /> Superior Pedagógica<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_14.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_15.png" /> Técnico Productiva - CETPRO<br />\
    <img src="styles/legend/ccee_tacnaccee_tacna_7_16.png" /> <br />' });
var group_srtm_images = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'srtm_images'});

lyr_OSMStandard_0.setVisible(true);lyr_Provincia_tacna_1.setVisible(true);lyr_dem_2.setVisible(true);lyr_geoproce_rasterlimite_tacna_3.setVisible(true);lyr_RVD_eje_4.setVisible(true);lyr_RVV_eje_5.setVisible(true);lyr_Rios_quebradas_6.setVisible(true);lyr_ccee_tacnaccee_tacna_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provincia_tacna_1,lyr_dem_2,lyr_geoproce_rasterlimite_tacna_3,lyr_RVD_eje_4,lyr_RVV_eje_5,lyr_Rios_quebradas_6,lyr_ccee_tacnaccee_tacna_7];
lyr_Provincia_tacna_1.set('fieldAliases', {'fid': 'fid', 'COUNT': 'Cantidad de distritos: ', 'FIRST_IDPR': 'Codigo:', 'NOMBPROV': 'Nombre de provincia de Tacna:', 'FIRST_NOMB': 'FIRST_NOMB', 'ha': 'Superficie de "Ha":', 'enlaces': 'Enlace:', });
lyr_geoproce_rasterlimite_tacna_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_RVD_eje_4.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_eje_5.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_Rios_quebradas_6.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_ccee_tacnaccee_tacna_7.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Provincia_tacna_1.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'ha': 'TextEdit', 'enlaces': 'TextEdit', });
lyr_geoproce_rasterlimite_tacna_3.set('fieldImages', {'fid': '', 'osm_id': '', 'class': '', 'type': '', 'name': '', 'address': '', 'extratags': '', });
lyr_RVD_eje_4.set('fieldImages', {'fid': 'TextEdit', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', 'SENTIDO': 'TextEdit', 'BASE': 'TextEdit', 'DATA': 'TextEdit', 'FECHA_ACTU': 'TextEdit', 'FUENTE': 'TextEdit', 'COD_RODADU': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_RVV_eje_5.set('fieldImages', {'fid': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Rios_quebradas_6.set('fieldImages', {'fid': 'TextEdit', 'Rasgo_Prin': 'TextEdit', 'Rasgo_Secu': 'TextEdit', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_ccee_tacnaccee_tacna_7.set('fieldImages', {'Código Modular': 'TextEdit', 'Anexo': 'TextEdit', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Código DRE/UGEL': 'TextEdit', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'Código Centro Poblado': 'TextEdit', 'Código Local': 'TextEdit', 'Dirección': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Altitud': 'TextEdit', 'Fuente de coordenadas': 'TextEdit', });
lyr_Provincia_tacna_1.set('fieldLabels', {'fid': 'no label', 'COUNT': 'header label - always visible', 'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'header label - always visible', 'ha': 'header label - always visible', 'enlaces': 'header label - always visible', });
lyr_geoproce_rasterlimite_tacna_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_RVD_eje_4.set('fieldLabels', {'fid': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_RVV_eje_5.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'header label - always visible', 'OBS': 'no label', });
lyr_Rios_quebradas_6.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'no label', 'Rasgo_Secu': 'no label', 'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_ccee_tacnaccee_tacna_7.set('fieldLabels', {'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_ccee_tacnaccee_tacna_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});