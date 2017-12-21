
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
Thwaitehouse.bindPopup("This is The Thwaite house. It is located on the Upper West side an area known for its prime residential location and therefore its wealth. This location is significant because of the prominance of Murray Thwaite as a journalist but also as a person of wealth and significance in society. It is only fitting that he has a gorgeous apartment overlooking the park.");
let ColumbiaUniversity;
ColumbiaUniversity=L.marker([40.806290, -73.963005]);
ColumbiaUniversity.addTo(firstMap);
ColumbiaUniversity.bindPopup("This is Columbia University. It is an Ivy League University and was the first univesity in Manhattan. Murray Thwaite was interviewed by a student at Columbia University, and he also considers becoming a professor at the school.This is significant because as a premier univesity, they only hire they best and most prominant professors and for Murray to have the option to teach at Columbia speaks to his influence as a journalist.");
let PortAuthority;
PortAuthority=L.marker([40.756961, -73.990275]);
PortAuthority.addTo(firstMap);
PortAuthority.bindPopup("This is Port Authority bus station. Port Authority may be quite a surprise to be on this list of locations as it is a bus station and poeple of prominance and wealth do not exactly frequent buses, but it is important to consider the this location when speaking of the character Bootie. Bootie brings a new perspective into the book as well as new locations that we would not see the other characters. From his aprtment in Brooklyn to the article that he wrote about Murray Bootie is always pushing the Thwaite family and values. His arrival at Port Authority is just one of the first examples of that.");
let WorldTrade;
WorldTrade=L.marker([40.712742, -74.013382]);
WorldTrade.addTo(firstMap);
WorldTrade.bindPopup("This is The World Trade Center. On september 11th 2001 the Twin Towers which were once in this location were destroyed in a terrorist attack. This was a huge event in American history, probably the most prominant event since the founding of the US as we know it. International security messures are so drastically different and will never be the same because of it. Now in that location stands a new World Trade Center. This location is prominant to the book because of the event's lack of prominance in the book. It is expected for all the characters to change or for 9/11 to be a huge turning point but it is not. This speaks to the privilege of the characters and how much it would really take for their lives to be affected.");
let TheMet;
TheMet=L.marker([40.779416, -73.9633727]);
TheMet.addTo(firstMap);
TheMet.bindPopup("This is the Metropolitan Museum of Art. Originally created to bring culture to the everyday American poeple, the Met Museum is home to many collections of art and is often changing. The Met also puts together a huge gala that costs 30 thousand dollars for people not on the guest list. The event is put on to fundraise for the museum and is a celebration of arts and fashion. While most of us will never attend the gala, the Met is open to the public and showcases some of the worlds finest art. It is only fitting for Danille's mother to want to visit the Met on her trips to New York. It is a classic pinnacle of New York Culture.");
let Publiclib;
Publiclib=L.marker([40.753181, -73.982254]);
Publiclib.addTo(firstMap);
Publiclib.bindPopup("This is the New York Public Library. While the New York Public Library is not exactly a cultural cornerstone of New York, it is beautiful. It also makes sense that Danielle's mother would want to visit it.");
let bobstLibrary;
bobstLibrary=L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library, the library at NYU. While this location is not directly mentioned in the book, it is a relavent location. NYU is both one of America's most expensive universities and also one is in one of the most expensive neighbourhoods in not only New York but the whole US. More importantly, NYU is at the forefront of the education in the artistic field, which journalism often falls under. Murray once taught at NYU and since NYU is so large and spread out, Bobst is a good marker for the university. NYU is constantly bringing in notable people to be professors, from Ta-Nehisi Coates to James Franco. Murray's time at NYU is notable for that reason.");
let Frickcollection;
Frickcollection=L.marker([40.7712, -73.9673]);
Frickcollection.addTo(firstMap);
Frickcollection.bindPopup("This is the Frick Collection. It contains the art collection of Henry Clay Frick, which was made of many well respected and valuable pieces of art. Henry Frick's family is what would be called the epitome of old money, he not only came from a good family but he collected his own wealth throgh his affiliation with Carnegie steel, one of the first big American businesses. This allowed him to collect this art. It makes sense that Danielle's mother would want to visit the Frick Collection, Henry Frick's life was the epitome of true American wealth. ");
