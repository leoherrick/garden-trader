function initialize() {
   var myLatLng = new google.maps.LatLng(37.840707, -122.251661);
   var myOptions = {
    zoom: 16,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	mapTypeControl: false,
	mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	navigationControl: true,
	navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}   };

	var rockridge;
	var image = '/images/leaf.png';
	var leafLatLng = new google.maps.LatLng(37.840707, -122.251661);


   var map = new google.maps.Map(document.getElementById("map_canvas"),
       myOptions);

	var leafMarker = new google.maps.Marker({
	      position: leafLatLng,
	      map: map,
	      icon: image
	  });

   var rrCoords = [
    new google.maps.LatLng(	37.84261201760	,	-122.25773494800	),
	new google.maps.LatLng(	37.84289101600	,	-122.25752494900	),
	new google.maps.LatLng(	37.84305601920	,	-122.25738194600	),
	new google.maps.LatLng(	37.84356501690	,	-122.25700994900	),
	new google.maps.LatLng(	37.84464201580	,	-122.25611594800	),
	new google.maps.LatLng(	37.84473601930	,	-122.25604095000	),
	new google.maps.LatLng(	37.84589801750	,	-122.25511594800	),
	new google.maps.LatLng(	37.84607002050	,	-122.25497594900	),
	new google.maps.LatLng(	37.84714001700	,	-122.25410594800	),
	new google.maps.LatLng(	37.84723201800	,	-122.25404094700	),
	new google.maps.LatLng(	37.84773401820	,	-122.25363594800	),
	new google.maps.LatLng(	37.84931901890	,	-122.25233194600	),
	new google.maps.LatLng(	37.84939401760	,	-122.25227195100	),
	new google.maps.LatLng(	37.84945701770	,	-122.25227494800	),
	new google.maps.LatLng(	37.84950302110	,	-122.25227894700	),
	new google.maps.LatLng(	37.84962801850	,	-122.25228994700	),
	new google.maps.LatLng(	37.85034801870	,	-122.25236694600	),
	new google.maps.LatLng(	37.85089901640	,	-122.25243094800	),
	new google.maps.LatLng(	37.85091701520	,	-122.25237894800	),
	new google.maps.LatLng(	37.85088401640	,	-122.25187195000	),
	new google.maps.LatLng(	37.85134401700	,	-122.25082794600	),
	new google.maps.LatLng(	37.85139601680	,	-122.25067894900	),
	new google.maps.LatLng(	37.85143901730	,	-122.24946894700	),
	new google.maps.LatLng(	37.85163701730	,	-122.24845394500	),
	new google.maps.LatLng(	37.85165701810	,	-122.24737994600	),
	new google.maps.LatLng(	37.85177502050	,	-122.24615795000	),
	new google.maps.LatLng(	37.85212101800	,	-122.24537494500	),
	new google.maps.LatLng(	37.85185401790	,	-122.24493294900	),
	new google.maps.LatLng(	37.85185301250	,	-122.24485478400	),
	new google.maps.LatLng(	37.85185255650	,	-122.24481944900	),
	new google.maps.LatLng(	37.85185213860	,	-122.24478683400	),
	new google.maps.LatLng(	37.85185101620	,	-122.24469994900	),
	new google.maps.LatLng(	37.85184587500	,	-122.24433445000	),
	new google.maps.LatLng(	37.85184101730	,	-122.24398894900	),
	new google.maps.LatLng(	37.85208002010	,	-122.24197495000	),
	new google.maps.LatLng(	37.85203301870	,	-122.24195594800	),
	new google.maps.LatLng(	37.85191201790	,	-122.24193894800	),
	new google.maps.LatLng(	37.85174901630	,	-122.24193494500	),
	new google.maps.LatLng(	37.85151401670	,	-122.24198794800	),
	new google.maps.LatLng(	37.85140601580	,	-122.24201494900	),
	new google.maps.LatLng(	37.85119501740	,	-122.24212294900	),
	new google.maps.LatLng(	37.85099401730	,	-122.24228594900	),
	new google.maps.LatLng(	37.85089601760	,	-122.24239994700	),
	new google.maps.LatLng(	37.85081501700	,	-122.24255995000	),
	new google.maps.LatLng(	37.85039701740	,	-122.24361994500	),
	new google.maps.LatLng(	37.85025801790	,	-122.24394294600	),
	new google.maps.LatLng(	37.85024401740	,	-122.24400794800	),
	new google.maps.LatLng(	37.84932501670	,	-122.24339694600	),
	new google.maps.LatLng(	37.84925101760	,	-122.24336294500	),
	new google.maps.LatLng(	37.84919701700	,	-122.24335794600	),
	new google.maps.LatLng(	37.84914001740	,	-122.24334794600	),
	new google.maps.LatLng(	37.84907801660	,	-122.24335294800	),
	new google.maps.LatLng(	37.84901301690	,	-122.24337195000	),
	new google.maps.LatLng(	37.84897001500	,	-122.24339694600	),
	new google.maps.LatLng(	37.84892501680	,	-122.24341994700	),
	new google.maps.LatLng(	37.84890501820	,	-122.24340394900	),
	new google.maps.LatLng(	37.84887801630	,	-122.24343694700	),
	new google.maps.LatLng(	37.84883301790	,	-122.24348394900	),
	new google.maps.LatLng(	37.84878701700	,	-122.24353294900	),
	new google.maps.LatLng(	37.84874501750	,	-122.24356394900	),
	new google.maps.LatLng(	37.84841501580	,	-122.24383194600	),
	new google.maps.LatLng(	37.84817601570	,	-122.24402794800	),
	new google.maps.LatLng(	37.84811701600	,	-122.24407394800	),
	new google.maps.LatLng(	37.84806001560	,	-122.24412494900	),
	new google.maps.LatLng(	37.84774801630	,	-122.24437894900	),
	new google.maps.LatLng(	37.84728801940	,	-122.24456694600	),
	new google.maps.LatLng(	37.84712601880	,	-122.24461694800	),
	new google.maps.LatLng(	37.84683001890	,	-122.24479094800	),
	new google.maps.LatLng(	37.84673001720	,	-122.24483594800	),
	new google.maps.LatLng(	37.84657301670	,	-122.24481594700	),
	new google.maps.LatLng(	37.84625601850	,	-122.24501094700	),
	new google.maps.LatLng(	37.84573801610	,	-122.24534194700	),
	new google.maps.LatLng(	37.84461801720	,	-122.24602394800	),
	new google.maps.LatLng(	37.84446401710	,	-122.24610694800	),
	new google.maps.LatLng(	37.84366801910	,	-122.24661994700	),
	new google.maps.LatLng(	37.84351401990	,	-122.24671894900	),
	new google.maps.LatLng(	37.84303101750	,	-122.24699995100	),
	new google.maps.LatLng(	37.84237101660	,	-122.24742294900	),
	new google.maps.LatLng(	37.84138401650	,	-122.24804794700	),
	new google.maps.LatLng(	37.83968301750	,	-122.24910594800	),
	new google.maps.LatLng(	37.83922601890	,	-122.24939594700	),
	new google.maps.LatLng(	37.83803101820	,	-122.25014594900	),
	new google.maps.LatLng(	37.83799501720	,	-122.25022895000	),
	new google.maps.LatLng(	37.83721301900	,	-122.25072394500	),
	new google.maps.LatLng(	37.83692901760	,	-122.25090494600	),
	new google.maps.LatLng(	37.83679101860	,	-122.25099294800	),
	new google.maps.LatLng(	37.83668001700	,	-122.25091194900	),
	new google.maps.LatLng(	37.83650001680	,	-122.25102794800	),
	new google.maps.LatLng(	37.83627101680	,	-122.25116694800	),
	new google.maps.LatLng(	37.83621501570	,	-122.25120194800	),
	new google.maps.LatLng(	37.84006701640	,	-122.25135695000	),
	new google.maps.LatLng(	37.84036601660	,	-122.25136395000	),
	new google.maps.LatLng(	37.84093201850	,	-122.25140894600	),
	new google.maps.LatLng(	37.84173501810	,	-122.25149595000	),
	new google.maps.LatLng(	37.84237301610	,	-122.25156694500	),
	new google.maps.LatLng(	37.84255401900	,	-122.25157995000	),
	new google.maps.LatLng(	37.84327501550	,	-122.25164794800	),
	new google.maps.LatLng(	37.84347901830	,	-122.25167494500	),
	new google.maps.LatLng(	37.84401601650	,	-122.25174294700	),
	new google.maps.LatLng(	37.84434101610	,	-122.25177494600	),
	new google.maps.LatLng(	37.84453401930	,	-122.25178694800	),
	new google.maps.LatLng(	37.84474601620	,	-122.25180694900	),
	new google.maps.LatLng(	37.84462702030	,	-122.25208795000	),
	new google.maps.LatLng(	37.84434301840	,	-122.25281895100	),
	new google.maps.LatLng(	37.84376301780	,	-122.25429494700	),
	new google.maps.LatLng(	37.84373501720	,	-122.25440994700	),
	new google.maps.LatLng(	37.84363801910	,	-122.25466294900	),
	new google.maps.LatLng(	37.84336901780	,	-122.25537895000	),
	new google.maps.LatLng(	37.84297001720	,	-122.25663995000	),
	new google.maps.LatLng(	37.84290001640	,	-122.25685994900	),
	new google.maps.LatLng(	37.84284901900	,	-122.25700994900	),
	new google.maps.LatLng(	37.84267301830	,	-122.25753394700	),
	new google.maps.LatLng(	37.84261201760	,	-122.25773494800	)
   ];

  var shafterCoords = [
new google.maps.LatLng(	37.83767602020	,	-122.26559094800	),
new google.maps.LatLng(	37.83800101880	,	-122.26549594900	),
new google.maps.LatLng(	37.83823301860	,	-122.26540794700	),
new google.maps.LatLng(	37.83845901900	,	-122.26530094600	),
new google.maps.LatLng(	37.83856401630	,	-122.26524294800	),
new google.maps.LatLng(	37.83882201730	,	-122.26508795000	),
new google.maps.LatLng(	37.83917201670	,	-122.26486194600	),
new google.maps.LatLng(	37.83937401690	,	-122.26472794800	),
new google.maps.LatLng(	37.83953901930	,	-122.26459094900	),
new google.maps.LatLng(	37.83968901900	,	-122.26445094600	),
new google.maps.LatLng(	37.83992001670	,	-122.26422394700	),
new google.maps.LatLng(	37.84005802150	,	-122.26407095000	),
new google.maps.LatLng(	37.84023401970	,	-122.26386594600	),
new google.maps.LatLng(	37.84037801950	,	-122.26366395000	),
new google.maps.LatLng(	37.84047301650	,	-122.26352594800	),
new google.maps.LatLng(	37.84064801980	,	-122.26326494800	),
new google.maps.LatLng(	37.84087502120	,	-122.26289295100	),
new google.maps.LatLng(	37.84101602050	,	-122.26258994700	),
new google.maps.LatLng(	37.84106501680	,	-122.26250994700	),
new google.maps.LatLng(	37.84115001550	,	-122.26230594900	),
new google.maps.LatLng(	37.84124201530	,	-122.26212594800	),
new google.maps.LatLng(	37.84131001820	,	-122.26196394700	),
new google.maps.LatLng(	37.84136101660	,	-122.26182795000	),
new google.maps.LatLng(	37.84138501920	,	-122.26176195000	),
new google.maps.LatLng(	37.84139601930	,	-122.26174394700	),
new google.maps.LatLng(	37.84150201790	,	-122.26142594800	),
new google.maps.LatLng(	37.84161101860	,	-122.26106195000	),
new google.maps.LatLng(	37.84196701770	,	-122.25987094700	),
new google.maps.LatLng(	37.84215001820	,	-122.25930094900	),
new google.maps.LatLng(	37.84226201710	,	-122.25889995000	),
new google.maps.LatLng(	37.84241301980	,	-122.25835794800	),
new google.maps.LatLng(	37.84251901700	,	-122.25802895000	),
new google.maps.LatLng(	37.84256501890	,	-122.25788194700	),
new google.maps.LatLng(	37.84261201760	,	-122.25773494800	),
new google.maps.LatLng(	37.84267301830	,	-122.25753394700	),
new google.maps.LatLng(	37.84284901900	,	-122.25700994900	),
new google.maps.LatLng(	37.84290001640	,	-122.25685994900	),
new google.maps.LatLng(	37.84297001720	,	-122.25663995000	),
new google.maps.LatLng(	37.84336901780	,	-122.25537895000	),
new google.maps.LatLng(	37.84363801910	,	-122.25466294900	),
new google.maps.LatLng(	37.84373501720	,	-122.25440994700	),
new google.maps.LatLng(	37.84376301780	,	-122.25429494700	),
new google.maps.LatLng(	37.84434301840	,	-122.25281895100	),
new google.maps.LatLng(	37.84462702030	,	-122.25208795000	),
new google.maps.LatLng(	37.84474601620	,	-122.25180694900	),
new google.maps.LatLng(	37.84453401930	,	-122.25178694800	),
new google.maps.LatLng(	37.84434101610	,	-122.25177494600	),
new google.maps.LatLng(	37.84401601650	,	-122.25174294700	),
new google.maps.LatLng(	37.84347901830	,	-122.25167494500	),
new google.maps.LatLng(	37.84327501550	,	-122.25164794800	),
new google.maps.LatLng(	37.84255401900	,	-122.25157995000	),
new google.maps.LatLng(	37.84237301610	,	-122.25156694500	),
new google.maps.LatLng(	37.84173501810	,	-122.25149595000	),
new google.maps.LatLng(	37.84093201850	,	-122.25140894600	),
new google.maps.LatLng(	37.84036601660	,	-122.25136395000	),
new google.maps.LatLng(	37.84006701640	,	-122.25135695000	),
new google.maps.LatLng(	37.83621501570	,	-122.25120194800	),
new google.maps.LatLng(	37.83562201730	,	-122.25157195100	),
new google.maps.LatLng(	37.83568501750	,	-122.25167094600	),
new google.maps.LatLng(	37.83477301980	,	-122.25223995200	),
new google.maps.LatLng(	37.83476101600	,	-122.25230094600	),
new google.maps.LatLng(	37.83475499650	,	-122.25237320100	),
new google.maps.LatLng(	37.83475302020	,	-122.25239694800	),
new google.maps.LatLng(	37.83476901750	,	-122.25251894700	),
new google.maps.LatLng(	37.83479301640	,	-122.25264594900	),
new google.maps.LatLng(	37.83486401890	,	-122.25286194900	),
new google.maps.LatLng(	37.83501601620	,	-122.25315894800	),
new google.maps.LatLng(	37.83512601760	,	-122.25343895000	),
new google.maps.LatLng(	37.83543101650	,	-122.25424595100	),
new google.maps.LatLng(	37.83576701720	,	-122.25507994600	),
new google.maps.LatLng(	37.83588301630	,	-122.25538495100	),
new google.maps.LatLng(	37.83597101760	,	-122.25562694600	),
new google.maps.LatLng(	37.83633301670	,	-122.25650594800	),
new google.maps.LatLng(	37.83646001870	,	-122.25688695000	),
new google.maps.LatLng(	37.83656901520	,	-122.25729095000	),
new google.maps.LatLng(	37.83663101780	,	-122.25770094700	),
new google.maps.LatLng(	37.83671201950	,	-122.25825294900	),
new google.maps.LatLng(	37.83690001750	,	-122.25948395100	),
new google.maps.LatLng(	37.83698202160	,	-122.25996294900	),
new google.maps.LatLng(	37.83706801910	,	-122.26051895000	),
new google.maps.LatLng(	37.83711101920	,	-122.26087894900	),
new google.maps.LatLng(	37.83715601890	,	-122.26132394900	),
new google.maps.LatLng(	37.83722201720	,	-122.26182094700	),
new google.maps.LatLng(	37.83723801980	,	-122.26194894800	),
new google.maps.LatLng(	37.83730801730	,	-122.26228194900	),
new google.maps.LatLng(	37.83764502080	,	-122.26226194800	),
new google.maps.LatLng(	37.83799502010	,	-122.26220594800	),
new google.maps.LatLng(	37.83797501850	,	-122.26233294700	),
new google.maps.LatLng(	37.83791301710	,	-122.26291894600	),
new google.maps.LatLng(	37.83791001770	,	-122.26302994600	),
new google.maps.LatLng(	37.83789701750	,	-122.26330394700	),
new google.maps.LatLng(	37.83789701750	,	-122.26335094900	),
new google.maps.LatLng(	37.83789701750	,	-122.26340794800	),
new google.maps.LatLng(	37.83789301840	,	-122.26347495100	),
new google.maps.LatLng(	37.83792401760	,	-122.26367294700	),
new google.maps.LatLng(	37.83793701780	,	-122.26384294800	),
new google.maps.LatLng(	37.83793201590	,	-122.26398595200	),
new google.maps.LatLng(	37.83790601850	,	-122.26410494700	),
new google.maps.LatLng(	37.83786001950	,	-122.26421695000	),
new google.maps.LatLng(	37.83783601580	,	-122.26446495000	),
new google.maps.LatLng(	37.83779901780	,	-122.26467694600	),
new google.maps.LatLng(	37.83775001930	,	-122.26495694900	),
new google.maps.LatLng(	37.83772801520	,	-122.26518594600	),
new google.maps.LatLng(	37.83770901910	,	-122.26538395000	),
new google.maps.LatLng(	37.83767602020	,	-122.26559094800	)
]



   rockridge = new google.maps.Polygon({
     paths: rrCoords,
     strokeColor: "#FF0000",
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: "#fcb3b3",
     fillOpacity: 0.25
   });

   shafter = new google.maps.Polygon({
     paths: shafterCoords,
     strokeColor: "#5858d4",
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: "#a9a9f7",
     fillOpacity: 0.25
   });


  rockridge.setMap(map);
  shafter.setMap(map);


var initialLocation;
var theRock = new google.maps.LatLng(37.840707, -122.251661);
var browserSupportFlag =  new Boolean();

// Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  // Try Google Gears Geolocation
  } else if (google.gears) {
    browserSupportFlag = true;
    var geo = google.gears.factory.create('beta.geolocation');
    geo.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.latitude,position.longitude);
      map.setCenter(initialLocation);
    }, function() {
      handleNoGeoLocation(browserSupportFlag);
    });
  // Browser doesn't support Geolocation
  } else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      initialLocation = theRock;
    } else {
      initialLocation = theRock;
    }
    map.setCenter(initialLocation);
  }


 }

