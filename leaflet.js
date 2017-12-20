
let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
let Thwaitehouse;
Thwaitehouse=L.marker([40.785091, -73.968285]);
Thwaitehouse.addTo(firstMap);
Thwaitehouse.bindPopup("This is The Thwaitehouse.");
let ColumbiaUniversity;
ColumbiaUniversity=L.marker([40.806290, -73.963005]);
ColumbiaUniversity.addTo(firstMap);
ColumbiaUniversity.bindPopup("This is Columbia University.");
let PortAuthority;
PortAuthority=L.marker([40.756961, -73.990275]);
PortAuthority.addTo(firstMap);
PortAuthority.bindPopup("This is Port Authority bus station.");
let WorldTrade;
WorldTrade=L.marker([40.712742, -74.013382]);
WorldTrade.addTo(firstMap);
WorldTrade.bindPopup("This is The World Trade Center.");
let TheMet;
TheMet=L.marker([40.779416, -73.9633727]);
TheMet.addTo(firstMap);
TheMet.bindPopup("This is the Metropolitan Museum of Art");
let Publiclib;
Publiclib=L.marker([40.753181, -73.982254]);
Publiclib.addTo(firstMap);
Publiclib.bindPopup("This is the New York Public Library");
let bobstLibrary;
bobstLibrary=L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
let Frickcollection;
Frickcollection=L.marker([40.7712, -73.9673]);
Frickcollection.addTo(firstMap);
Frickcollection.bindPopup("This is the Frick Collection");
