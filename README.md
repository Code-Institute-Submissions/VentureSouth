# Venture South
Venture South is a tourist website for anyone willing to tour the southern part of Africa. 
The website shows the user rows of cards that are each linked to a secific page.
Each card either shows one of the cities, beaches or national parks, and the corresponding page uses the 
Google Maps Places API to diplay the coordinates of the place and displays surrounding key areas for the user to see.

## UX
This website is designed for tourists or as a navigation tool for users at one of the destinations provided on the website 
to see what other nearby attractions, hotels, beaches etc that they can explore within those areas. The website allows users to do this
by using either the navigation bar at the top to get directed straight to their desired type of destination or by allowing the user to explore
the different types of destinations by scrolling down the home page and having a look at 4 of each type. 

* A new user will want know what the website is about, the image reel with slogans give the user an insight of what the web page is about including the welcome section with a breif overview.
* User in Angola for example would like to know what beaches they can go to and the surrounding hotels for a place to stay in, or a resturant to eat within that area. They can acheve this by visiting the beaches or cities page and viewing what hotels, resturants etc Angola can provide once set on a destination.
* The user may want to view different destinations at once without losing the information on the previous page hence why each destionation has a target to a new tab. 
* Tourist looking for national parks and safaries in any given country can view the national parks page and use the more/less buttons and the accordion to look through the different types in each country.
* A tourist trekking in national parks would like to know where the camps are located in the national park and they can do this on the destination page.

## Features

### Exisiting Features
* View the different beaches, by clicking on the beaches link and filtering by counrty.
* View the different cities, by clicking on the cities link and filtering by counrty.
* View the different national parks, by clicking on the national parks link and filtering by counrty.
* View nearby destinations or key areas by clicking on the buttons above the map some are preloaded for the user.
* Its easier for the user to distinguish the destination from the search results with the blue google maps icon.

### Features Left to Implement
* GPS location between users and destionation or key areas surrounding the destination. 
* More links to different destinations 
* When hotels are loaded a value of how much that hotel would cost per night on that day and time.
* Ability for the user to book/reserve for safaries, hotels and resturants. 
* Ability for the user to leave a review on the visit. 


## Technologies Used
* [Jquery](https://jquery.com/)
    * Used to manpulate the DOM for the purpose of making the buttons and icons more interactive when clicked.
* [Google Maps API](https://cloud.google.com/maps-platform/places/)
    * Used to load and generate the map for each destination and search via keyword for nearby areas.
* Vanilla JS
    * To create the custom slider for the home page.
* [Bootstrap 4.1.3](https://getbootstrap.com/)
    * Used to create the layout and edited the SCSS variables for custom color themes. 

## Testing
* Home Page
    * Test to see if image reel works 
        * Loaded page on Safari and reel still works
        * Checked on desktop, laptop and mobile width screens and it works as expected.
        * Loaded page on Firefox and reel still works
        * Checked on desktop, laptop and mobile width screens and it works as expected.
        * Loaded page on Chrome and reel still works
        * Checked on desktop, laptop and mobile width screens and it works as expected.
    
    * Chrome
        1. All nav links clicked and they work as expected
        2. Clicked beaches header and it takes me to the beaches page
        3. Clicked cities header and it takes me to the cities page
        4. Clicked national parks header and it takes me to the national parks page
        5. Clicked each card link and it opens a new tab as expected.
        6. Buttons lead to the corresponding section pages.
    
    * Safari
        1. All nav links clicked and they work as expected
        2. Clicked beaches header and it takes me to the beaches page
        3. Clicked cities header and it takes me to the cities page
        4. Clicked national parks header and it takes me to the national parks page
        5. Clicked each card link and it opens a new tab as expected.
        6. Buttons lead to the corresponding section pages.
    
    * Firefox
        1. All nav links clicked and they work as expected
        2. Clicked beaches header and it takes me to the beaches page
        3. Clicked cities header and it takes me to the cities page
        4. Clicked national parks header and it takes me to the national parks page
        5. Clicked each card link and it opens a new tab as expected.
        6. Buttons lead to the corresponding section pages.

* Beaches Page
    * Chrome 
        1. Clicked the beaches link on chrome and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Clicked more/less buttons on the page each works as expected with accordion effect.
        5. Clicked the country heading and accordion effect is present with icon changing direction.
        6. Each navigation link takes you to the corresponding page.
    
    * Safari
        1. Clicked the beaches link on Safari and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Clicked more/less buttons on the page each works as expected with accordion effect.
        5. Clicked the country heading and accordion effect is present with icon changing direction.
        6. Each navigation link takes you to the corresponding page.

    * Firefox 
        1. Clicked the beaches link on Firefox and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Clicked more/less buttons on the page each works as expected with accordion effect.
        5. Clicked the country heading and accordion effect is present with icon changing direction.
        6. Each navigation link takes you to the corresponding page.

* Cities Page
    * Chrome 
        1. Clicked the cities link on chrome and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Clicked more/less buttons on the page each works as expected with accordion effect.
        5. Clicked the country heading and accordion effect is present with icon changing direction.
        6. Each navigation link takes you to the corresponding page.
    
    * Safari
        1. Clicked the cities link on Safari and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Clicked more/less buttons on the page each works as expected with accordion effect.
        5. Clicked the country heading and accordion effect is present with icon changing direction.
        6. Each navigation link takes you to the corresponding page.

    * Firefox 
        1. Clicked the cities link on Firefox and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Clicked more/less buttons on the page each works as expected with accordion effect.
        5. Clicked the country heading and accordion effect is present with icon changing direction.
        6. Each navigation link takes you to the corresponding page.

* National Parks Page
    * Chrome 
        1. Clicked the national parks link on Chrome and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Checked to see if each destination page without buttons loads with camps on the map.
        5. Clicked more/less buttons on the page each works as expected with accordion effect.
        6. Clicked the country heading and accordion effect is present with icon changing direction.
        7. Each navigation link takes you to the corresponding page.
    
    * Safari
        1. Clicked the national parks link on Safari and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Checked to see if each destination page without buttons loads with camps on the map.
        5. Clicked more/less buttons on the page each works as expected with accordion effect.
        6. Clicked the country heading and accordion effect is present with icon changing direction.
        7. Each navigation link takes you to the corresponding page.

    * Firefox 
        1. Clicked the national parks link on Firefox and it loads.
        2. Clicked each card link and it opens a new tab as expected.
        3. Clicked each button on the destination page and they all work.
        4. Checked to see if each destination page without buttons loads with camps on the map.
        5. Clicked more/less buttons on the page each works as expected with accordion effect.
        6. Clicked the country heading and accordion effect is present with icon changing direction.
        7. Each navigation link takes you to the corresponding page.
        
* During the creation of the places.js file the testing was done in the console to make sure that the desired/expected results where present.
    * for example on line 61 that test was initiated to make sure that the correct destId was loaded when the page is loaded.
    * on line 105 a test was initiated to make sure that the init function was being called with the specific destination and map_type.

Venture South works the same on each browser this could be due to the fact that I have used the latest verstion of boostrap making it behave similar in different environments. 

### Unexpected bugs
* When using the API to search via keywords it sometimes returns some unexpected results, not only that but when using keywords 
  that should have an expected result like cities sometimes it dosent return any cities at all.

## Deployment


## Credits

### Content

#### National Parks
* [Nxai Pan National Park](https://en.wikipedia.org/wiki/Nxai_Pan_National_Park)
* [Moremi](https://www.moremigamereserve.com/)
* [Mokolodi National Park](https://en.wikipedia.org/wiki/Mokolodi_Nature_Reserve)
* [Kalahari National Park](https://www.centralkalaharigamereserve.com/)
* [Mupa National Park](https://www.wikilistia.com/mupa-national-park/)
* [Kissama National Park](https://angolatravelandtours.com/day-tour-from-luanda-to-kissama-national-park/)
* [Iona National Park](https://www.flickr.com/photos/a-weidinger/5985735176)
* [Cameia National Park](https://www.africatouroperators.org/angola/cameia-national-park)
* [Bicuar National Park](https://sites.google.com/site/touringangola/bicauri-na)
* [Limpopo National Park](https://www.thecrazytourist.com/15-best-places-visit-mozambique/14/)
* [Niassa Reserve](https://www.thecrazytourist.com/15-best-places-visit-mozambique/12/)
* [Quirimbas National Park](https://www.thecrazytourist.com/15-best-places-visit-mozambique/6/)
* [Gorongosa National Park](https://www.thecrazytourist.com/15-best-places-visit-mozambique/4/)
* [Serengeti National Park](https://africawildlifes.com/best-of-serengeti-national-park-in-tanzania/)
* [Chobe National Park](http://chobenationalpark.co.za/)
* [Zambezi National Park](https://www.lowerzambezi.com/)
* [Hawange National Park](http://zimparks.org/parks/national-parks/hwange/)
* 
#### Cities
* [Lugela](https://www.thecrazytourist.com/15-best-places-visit-mozambique/13/)
* [Island of Mozambique](https://www.thecrazytourist.com/15-best-places-visit-mozambique/7/)
* [Tofo](https://www.thecrazytourist.com/15-best-places-visit-mozambique/5/)
* [Pemba](https://www.thecrazytourist.com/15-best-places-visit-mozambique/3/)
* [Bazaruto Archipelago](https://www.thecrazytourist.com/15-best-places-visit-mozambique/1/)
* [Maputo](https://www.thecrazytourist.com/15-best-places-visit-mozambique/2/)
* [Selebi-Phikwe](https://uk.hotels.com/de1643761/hotels-selebi-phikwe-botswana/)
* [Maun](https://itineraries.newafricanfrontiers.com/Itinerary/Destinations/56816852-6949-4322-b7ca-db6a2b4bb759)
* [Francistown](https://en.wikipedia.org/wiki/Francistown)
* [Namibe](https://wikitravel.org/en/Namibe)
* [Luanda](https://www.tripadvisor.co.uk/Tourism-g293763-Luanda_Luanda_Province-Vacations.html)
* [Lubango](https://www.traveldrafts.com/visit-lubango-best-place-to-rest-in-angola/)
* [Lobito](https://en.wikivoyage.org/wiki/Lobito)
* [Huambo](http://www.taag.com/en/Destinations/Destination-Guide/Destination/huambo)
* [Benguela](https://en.wikivoyage.org/wiki/Benguela)
* [Lusaka](https://www.lonelyplanet.com/zambia/lusaka)
* [Cape Town](https://www.lonelyplanet.com/south-africa/cape-town)
* [Windhoek City](https://www.tripadvisor.co.uk/Tourism-g293821-Windhoek_Khomas_Region-Vacations.html)
* [Gabarone City](http://www.botswanatourism.co.bw/explore/gaborone)

#### Beaches
* [Ponta Mamoli](https://www.mozambiquetravel.com/where-to-stay/ponta-mamoli)
* [Pangane](http://www.accommodationmozambique.co.za/cabo-delgado/pangane/)
* [Praia Morena](https://en.wikivoyage.org/wiki/Benguela)
* [Porto Amboim](https://www.traveldrafts.com/best-beaches-in-angola/)
* [Mussulo](https://www.traveldrafts.com/best-beaches-in-angola/)
* [Vilankulo](https://www.thecrazytourist.com/15-best-places-visit-mozambique/10/)
* [Ponta do Ouro](https://www.thecrazytourist.com/15-best-places-visit-mozambique/9/)
* [Luanda](https://www.traveldrafts.com/best-beaches-in-angola/)
* [Camps Bay](https://www.tripadvisor.co.uk/Tourism-g312658-Camps_Bay_Western_Cape-Vacations.html)
* [Inhaca Island](https://www.lonelyplanet.com/mozambique/inhaca-island)
* [Cabo Ledo](https://www.tripadvisor.co.uk/ShowUserReviews-g293763-d4258787-r521655277-Cabo_Ledo-Luanda_Luanda_Province.html)
* [Paradise Beach](https://en.wikipedia.org/wiki/Tourism_in_Zanzibar)

### Media

#### Image Reel
* [Pavilion](https://www.istockphoto.com/gb/photo/pavilion-riverside-gm476608386-66078587)
* [Savanna](https://www.istockphoto.com/gb/photo/savanna-sunrise-and-acacia-tree-in-tanzania-africa-gm621359868-108486303)
* [Victoria Falls](https://www.istockphoto.com/gb/photo/the-victoria-falls-gm143922110-18629800)
* [Okavango](https://www.istockphoto.com/gb/photo/bright-landscape-view-of-okavango-delta-botswana-gm155153243-18538168)

#### Google Icon
* [Google Maps Icon](https://www.google.co.uk/search?tbm=isch&sa=1&ei=1bPRW7atFZSfgQb98pHgBw&q=google+maps+icon+blue&oq=google+maps+icon+blue&gs_l=img.3..0i8i30k1l2.32138.35961.0.37021.13.13.0.0.0.0.50.565.13.13.0....0...1c.1.64.img..0.13.563...0j0i24k1j0i30k1j0i5i30k1j0i67k1.0.r1hLPBf5RDk#imgrc=zi2ftPAXEXix9M:)

#### National Parks
* [Nxai Pan National Park](https://en.wikipedia.org/wiki/Nxai_Pan_National_Park)
* [Moremi National Park](https://www.moremigamereserve.com/media/cache/4f/fd/4ffdf844656d220b3c3325ea2b1a2411.jpg)
* [Mokolodi National Park](https://en.wikipedia.org/wiki/Mokolodi_Nature_Reserve)
* [Kalahari National Park](https://www.centralkalaharigamereserve.com/media/cache/4c/ac/4cac4a3e25610de2f04fecebe522d71b.jpg)
* [Mupa National Park](https://www.wikilistia.com/mupa-national-park/)
* [Kissama National Park](https://angolatravelandtours.com/day-tour-from-luanda-to-kissama-national-park/)
* [Iona National Park](https://www.flickr.com/photos/a-weidinger/5985735176)
* [Cameia National Park](http://www.traveltourismblog.com/images/Angola%20Calendula%20falls.jpg)
* [Bicuar National Park](https://sites.google.com/site/touringangola/bicauri-na)
* [Limpopo National Park](https://www.thecrazytourist.com/15-best-places-visit-mozambique/14/)
* [Niassa Reserve](https://www.thecrazytourist.com/15-best-places-visit-mozambique/12/)
* [Quirimbas National Park](https://www.thecrazytourist.com/15-best-places-visit-mozambique/6/)
* [Gorongosa National Park](https://www.thecrazytourist.com/15-best-places-visit-mozambique/4/)
* [Serengeti National Park](https://africawildlifes.com/best-of-serengeti-national-park-in-tanzania/)
* [Chobe National Park](https://www.picswe.com/pics/chobe-national-91.html)
* [Zambezi National Park](https://www.istockphoto.com/gb/photo/elephant-with-baby-crossing-the-river-zambezi-gm682243346-125106657)
* [Hawange National Park](https://www.istockphoto.com/gb/photo/view-from-camp-in-hwange-national-park-gm606666442-103993053)

#### Cities
* [Lugela](https://www.thecrazytourist.com/15-best-places-visit-mozambique/13/)
* [Island of Mozambique](https://www.thecrazytourist.com/15-best-places-visit-mozambique/7/)
* [Tofo](https://www.thecrazytourist.com/15-best-places-visit-mozambique/5/)
* [Pemba](https://www.thecrazytourist.com/15-best-places-visit-mozambique/3/)
* [Bazaruto Archipelago](https://www.thecrazytourist.com/15-best-places-visit-mozambique/1/)
* [Maputo](https://www.istockphoto.com/gb/photo/maputo-scenic-city-view-gm518003128-89779759)
* [Selebi-Phikwe](http://www.crestamarakanelo.com/hotels/cresta-bosele/)
* [Maun](https://itineraries.newafricanfrontiers.com/Itinerary/Destinations/56816852-6949-4322-b7ca-db6a2b4bb759)
* [Francistown](https://en.wikipedia.org/wiki/Francistown)
* [Namibe](http://mercado.co.ao/business/empresarios-espanhois-visitam-provincia-do-namibe/)
* [Luanda](https://www.istockphoto.com/gb/photo/luanda-bay-area-gm487479162-72948393)
* [Lubango](http://nutritionandhealthcare.info/page/lubango/angola/default.html)
* [Lobito](https://www.alamy.com/stock-photo-city-view-of-lobito-residential-areas-harbour-port-and-docks-and-the-28811595.html?pv=1&stamp=2&imageid=A7DDABB8-B394-429B-B3E6-7E394D3891D6&p=16876&n=0&orientation=0&pn=2&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d2%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dbenguela%2520angola%26qt_raw%3dbenguela%2520angola%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d0%26ispremium%3d1%26flip%3d0)
* [Huambo](https://www.alamy.com/stock-photo-panorama-of-the-city-of-huambo-angola-41509350.html?pv=1&stamp=2&imageid=E039DD21-63FD-4B87-A08A-B31DE14B62DA&p=141606&n=33&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3Dbar%26st%3D0%26sortby%3D2%26qt%3Dhuambo%2520angola%26qt_raw%3Dhuambo%2520angola%26qn%3D%26lic%3D3%26edrf%3D0%26mr%3D0%26pr%3D0%26aoa%3D1%26creative%3D%26videos%3D%26nu%3D%26ccc%3D%26bespoke%3D%26apalib%3D%26ag%3D0%26hc%3D0%26et%3D0x000000000000000000000%26vp%3D0%26loc%3D0%26ot%3D0%26imgt%3D0%26dtfr%3D%26dtto%3D%26size%3D0xFF%26blackwhite%3D%26cutout%3D%26archive%3D1%26name%3D%26groupid%3D%26pseudoid%3D%26userid%3D%26id%3D%26a%3D%26xstx%3D0%26cbstore%3D1%26resultview%3DsortbyPopular%26lightbox%3D%26gname%3D%26gtype%3D%26apalic%3D%26tbar%3D1%26pc%3D%26simid%3D%26cap%3D1%26customgeoip%3D%26vd%3D0%26cid%3D%26pe%3D%26so%3D%26lb%3D%26fi%3D0%26langcode%3Den%26upl%3D0%26cufr%3D%26cuto%3D%26howler%3D%26cvrem%3D0%26cvtype%3D0%26cvloc%3D0%26cl%3D0%26upfr%3D%26upto%3D%26primcat%3D%26seccat%3D%26cvcategory%3D*%26restriction%3D%26random%3D%26ispremium%3D1%26flip%3D0%26saveQry%3D%26editorial%3D1%26t%3D0%26edoptin%3D)
* [Benguela](https://www.alamy.com/stock-photo-estadio-de-nacional-ombaka-ombaka-stadium-benguela-province-angola-28811748.html?pv=1&stamp=2&imageid=0E2AE37C-3EAD-4C0B-BE89-461DDAE21CFC&p=16876&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3Dbar%26st%3D0%26sortby%3D2%26qt%3DBenguela%252C%2520Est%25C3%25A1dio%2520Nacional%2520de%2520Ombaka%2520Stadium%26qt_raw%3DBenguela%252C%2520Est%25C3%25A1dio%2520Nacional%2520de%2520Ombaka%2520Stadium%26qn%3D%26lic%3D3%26edrf%3D0%26mr%3D0%26pr%3D0%26aoa%3D1%26creative%3D%26videos%3D%26nu%3D%26ccc%3D%26bespoke%3D%26apalib%3D%26ag%3D0%26hc%3D0%26et%3D0x000000000000000000000%26vp%3D0%26loc%3D0%26ot%3D0%26imgt%3D0%26dtfr%3D%26dtto%3D%26size%3D0xFF%26blackwhite%3D%26cutout%3D%26archive%3D1%26name%3D%26groupid%3D%26pseudoid%3D%26userid%3D%26id%3D%26a%3D%26xstx%3D0%26cbstore%3D1%26resultview%3DsortbyPopular%26lightbox%3D%26gname%3D%26gtype%3D%26apalic%3D%26tbar%3D1%26pc%3D%26simid%3D%26cap%3D1%26customgeoip%3D%26vd%3D0%26cid%3D%26pe%3D%26so%3D%26lb%3D%26fi%3D0%26langcode%3Den%26upl%3D0%26cufr%3D%26cuto%3D%26howler%3D%26cvrem%3D0%26cvtype%3D0%26cvloc%3D0%26cl%3D0%26upfr%3D%26upto%3D%26primcat%3D%26seccat%3D%26cvcategory%3D*%26restriction%3D%26random%3D%26ispremium%3D1%26flip%3D0%26saveQry%3D%26editorial%3D1%26t%3D0%26edoptin%3D)
* [Lusaka](https://www.istockphoto.com/gb/photo/skyline-photo-of-lusaka-city-at-night-gm515706884-88621279)
* [Cape Town](https://www.istockphoto.com/gb/photo/cape-town-and-the-12-apostels-from-above-gm620737858-108323991)
* [Windhoek City](https://www.istockphoto.com/gb/photo/panoramic-view-of-windhoek-city-at-sunset-gm977762158-265820208)
* [Gabarone City](https://www.istockphoto.com/in/photo/gabarone-skyline-building-at-night-botswana-africa-gm494573090-77523013)

#### Beaches
* [Ponta Mamoli](https://www.dreamstime.com/royalty-free-stock-image-beach-ponta-mamoli-image23967756)
* [Pangane](https://www.shutterstock.com/image-photo/pangane-beach-mozambique-123046645?src=QcvntjHsGnIUVHLG7UCGeQ-1-16)
* [Praia Morena](https://www.flickr.com/photos/davidstanleytravel/19699922970)
* [Porto Amboim](https://www.istockphoto.com/gb/photo/praia-de-porto-amboim-kwanza-sul-angola-gm874541774-244189009)
* [Mussulo](https://www.istockphoto.com/gb/photo/tropical-beach-with-palm-trees-in-angola-gm1000959840-270618520)
* [Vilankulo](https://www.thecrazytourist.com/15-best-places-visit-mozambique/10/)
* [Ponta do Ouro](https://www.thecrazytourist.com/15-best-places-visit-mozambique/9/)
* [Luanda](https://www.istockphoto.com/gb/photo/luanda-gm848162484-139144073)
* [Camps Bay](https://www.istockphoto.com/gb/photo/twelve-apostles-mountain-in-camps-bay-cape-town-south-africa-gm477451698-67195193)
* [Inhaca Island](https://www.istockphoto.com/gb/photo/inhaca-island-main-port-gm525965676-92503063)
* [Cabo Ledo](https://www.istockphoto.com/ae/photo/golden-hour-sunset-at-cabo-ledo-beach-angola-gm824541232-133506109)
* [Paradise Beach](https://www.istockphoto.com/gb/photo/paradise-beach-gm674782094-123714789)

### Acknoledgements 
* I received insperation for this project when I went to Zambia for a holiday and realised that there were so many attractions 
  I could have seen and been to if only I had an app or website that would show me the nearest attactions with places to stay and eat within a certain area. 
  So I wanted to build one myself not just for Zambia but the surrounding countrys aswell.