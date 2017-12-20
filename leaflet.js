
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
Thwaitehouse=L.marker([40.785091, -73.968285])
Thwaitehouse.addTo(firstMap)
let ColumbiaUniversity;
ColumbiaUniversity=L.marker([40.806290, -73.963005])
ColumbiaUniversity.addTo(firstMap)
let PortAuthority;
PortAuthority=L.marker([40.756961, -73.990275])
PortAuthority.addTo(firstMap)
let Daniellesapt;
Daniellesapt=L.marker([40.800996796 -73.959829494])
Daniellesapt.addTo(firstMap)
