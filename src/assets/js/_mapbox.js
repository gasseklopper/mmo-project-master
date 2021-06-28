const mapboxgl = require('mapbox-gl');

var places = {
	"type":"FeatureCollection",
	"features":[
	   	{
		  "type":"Feature",
		  "properties":{
			 "description":"<strong>Frankfurter Küche</strong><p><a href=\"http://www.restaurant-frankfurter-kueche.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 86, 60314 Frankfurt am Main</p>",
			 "icon":"Restaurants"
		  },
		  "geometry":{
			 "type":"Point",
			 "coordinates":[
				8.704224783467328,
				50.111681170124484
			 ]
		  }
	   	},
	   	{
		"type":"Feature",
		"properties":{
		   "description":"<strong>'Das Leben ist Schön</strong><p><a href=\"http://www.daslebenistschoen.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 198, 60314 Frankfurt am Main</p>",
		   "icon":"Restaurants"
		},
		"geometry":{
		   "type":"Point",
		   "coordinates":[
			 8.723497812302732,
			 50.11535621512961
		   ]
		}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>'Soul Food Factory East</strong><p><a href=\"http://www.soul-food-factory.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 124, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.711172127644243,
				50.11132723047215
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Saravini</strong><p><a href=\"http://www.saravini-frankfurt.de/mittagskarte/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 119, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				 8.710194527644237,
				 50.11172910920639
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>'The Tasty Toast</strong><p>Osthafenplatz 4, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71285928352579,
				50.11090767357005
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Stones</strong><p><a href=\"https://www.stonesfood.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 125, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712307297113504,
				50.11246691431603
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Tawaraya</strong><p>Hanauer Landstraße 131, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71320475654297,
				50.11222598741672
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Cocothai</strong><p><a href=\"https://www.cocothaifrankfurtammain.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 151, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71526672770677,
				50.112919324067384
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Urfa</strong><p><a href=\"https://www.urfa-grill-pizzeria.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 133, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.713368798870526,
				50.11229886602847
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Aroydee</strong><p><a href=\"https://www.aroydee.de/Frankfurt\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 72, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.703535627706737,
				50.11280334433856
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Goldman</strong><p><a href=\"http://www.goldman-restaurant.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 127, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712951143051455,
				50.11208490623492
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Oosten</strong><p><a href=\"https://oosten-frankfurt.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Mayfarthstraße 4, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.702709870034257,
				50.10785792533555
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Gref-Völsings</strong><p><a href=\"https://www.gref-voelsings.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 132, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.7124484565429,
				50.1116097900726
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Best-Worscht In Town</strong><p><a href=\"https://www.bestworschtintown.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 270, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.72698031236205,
				50.1165047893076 
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Bei Frau Nanna</strong><p><a href=\"https://order.beifraunanna.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Ernst-Achilles-Platz 3, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70476983642246,
				50.1128814042537
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>LEUCHTENDROTER</strong><p><a href=\"http://leuchtendroter.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Lindleystraße 17, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.718510583561219,
				50.11257783263066
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kahuna Poké Bros.</strong><p><a href=\"https://kahunapokebros.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 160A, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.717488819399943,
				50.11311594184854
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Ben's Burger</strong><p><a href=\"https://bens-burger.business.site/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 134, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712697437075015,
				50.11151811854781
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Jesse James</strong><p><a href=\"http://www.jessejames.eu/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 83, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.705296327706698,
				50.11207194717568
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>COMAI East - modern viet kitchen</strong><p><a href=\"https://www.comai.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 130, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.7123598408274,
				50.11133081012636
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Pizzeria Mille Lire</strong><p><a href=\"http://www.pizzeria-mille-lire.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Sonnemannstraße 71, 60314 Frankfurt am Main</p>",
			   "icon":"Restaurants"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70313924526421,
				50.111192054739604
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Coffee Fellows</strong><p><a href=\"http://www.coffee-fellows-ostend.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 115, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709015614425825,
				50.11224196267669
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Wiener Feinbäckerei</strong><p><a href=\"https://heberer.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 108, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70924599781994,
				50.111330420991095
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Aniis</strong><p><a href=\"http://www.aniis.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 82, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.704047841198193,
				50.11191788713086
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Stock Avenue 81</strong><p><a href=\"http://www.melia.com/de/lodgings/deutschland/frankfurt/innside-frankfurt-ostend/restaurants.html\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 81, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.704830970034363,
				50.112325267256004
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Bäckerei und Konditorei Huck</strong><p><a href=\"https://www.baeckerei-huck.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Sonnemannstraße 81, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70409040574631,
				50.111376848593906
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Frankfurt Pub</strong><p><a href=\"http://www.frankfurt-pub.de/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Hanauer Landstraße 99, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.708437927706713,
				50.111746607401514
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Eiscafé Café a Roma</strong><p>Sonnemannstraße 51, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.700960888265074,
				50.11085074470636
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Marmion Bar</strong><p><a href=\"https://www.marmion-bar.de\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p><p>Lindleystraße 17, 60314 Frankfurt am Main</p>",
			   "icon":"Bar-Café"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.718510583561219,
				50.11257783263066
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Alnatura Super Natur Markt</strong><p>Hanauer Landstraße 110, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709294277580927,
				50.11124097596751
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Edeka</strong><p>Ferdinand-Happ-Straße 59, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.715864727706792,
				50.11446867774984
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Lidl</strong><p>Hanauer Landstraße 219, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.721729185379182,
				50.115486293551406
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Rewe</strong><p>Louis-Appia-Passage 7 7, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.705509785379135,
				50.112873643153115
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Aldi Süd</strong><p>Hanauer Landstraße 285, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.724419070034426,
				50.11658945000033
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Me.Ta</strong><p>Hanauer Landstraße 208 -216, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.726406085457684,
				50.11562919293627
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>dm</strong><p>Louis-Appia-Passage 6, 60314 Frankfurt am Main</p>",
			   "icon":"Retail"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.705571970034336,
				50.11244186549421
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fitness First</strong><p>Hanauer Landstraße 148, 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71600512770675,
				50.11236760526015
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fitseveneleven east blck</strong><p>Hanauer Landstraße 120, 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.710570127706724,
				50.11133183045381
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fitseveneleven east pink</strong><p>Hanauer Landstraße 147, 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.714824341198113,
				50.11278522362572
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kieser Training</strong><p>Hanauer Landstraße 291A, 60314 Frankfurt am Main</p>",
			   "icon":"Fitness"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.716392498870569,
				50.113392181835025
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Fritz-Rémond-Theater</strong><p>Bernhard-Grzimek-Allee 1, 60316 Frankfurt am Main</p>",
			   "icon":"Kultur-Freizeit"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.699309256543005,
				50.11610529237147
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Romanfabrik</strong><p>Hanauer Landstraße 186, 60314 Frankfurt am Main</p>",
			   "icon":"Kultur-Freizeit"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.722945141198247,
				50.114824976214166
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kunstverein Familie Montez</strong><p>Honsellstraße 7, 60314 Frankfurt am Main</p>",
			   "icon":"Kultur-Freizeit"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709860525853374,
				50.1089605822416
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Union Halle</strong><p>Hanauer Landstraße 188, 60314 Frankfurt am Main</p>",
			   "icon":"Kultur-Freizeit"
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.72292931217596,
				50.11426644210688
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>25hours</strong><p>Hanauer Landstraße 127, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.712797538150072,
				50.11210810538992
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>INNSIDE</strong><p>Hanauer Landstraße 81, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.704878827706677,
				50.112383305205896, 
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>B&B Hotel Frankfurt City-Ost</strong><p>Hanauer Landstraße 117, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709716241586767,
				50.11160000635536
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>MotelOne</strong><p>Hanauer Landstraße 142, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.713694256542883,
				50.11203960791258
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Moxy</strong><p>Hanauer Landstraße 162, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71785704495354,
				50.11326424062049
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Hampton by Hilton Frankfurt City Centre East</strong><p>Grusonstraße 4, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70798850585079,
				50.112528227125246
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>LINDLEY LINDENBERG</strong><p>Lindleystraße 17, 60314 Frankfurt am Main</p>",
			   "icon":"Hotels",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.718837104529054,
				50.11282985876722
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Die Knoppschachtel</strong><p>Ferdinand-Happ-Straße 57, 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.715007013560411,
				50.11448051790032
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>EZB Kita</strong><p>Ferdinand-Happ-Straße 57, 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.715007013560411,
				50.11448051790032
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Kindergarten d. Evangelisch-Luth.</strong><p>Röderbergweg 66, 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.707768964236756,
				50.115814262790835
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>FRÖBEL-Kindergarten</strong><p>Honsellstraße 18, 60314 Frankfurt am Main</p>",
			   "icon":"Kita",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.709864689196351,
				50.110742092904175
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Frankfurter Sparkasse</strong><p>Grusonstraße 3-5, 60314 Frankfurt am Main</p>",
			   "icon":"Banken",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70621865115999,
				50.11208644119723, 
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Europäische Zentralbank (EZB)</strong><p>Sonnemannstraße 20, 60314 Frankfurt am Main</p>",
			   "icon":"Banken",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.70185343846062,
				50.10999246042122
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Schwedler See</strong><p>Schwedlerstraße, 60314 Frankfurt am Main</p>",
			   "icon":"Kultur-Freizeit",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.72247076419106,
				50.1126669871857
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Hafenpark</strong><p>Mayfarthstraße, 60314 Frankfurt am Main</p>",
			   "icon":"Kultur-Freizeit",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.707727030979154,
				50.10780485816412
			   ]
			}
		},
		{
			"type":"Feature",
			"properties":{
			   "description":"<strong>Tankstelle Esso</strong><p>Hanauer Landstraße 178, 60314 Frankfurt am Main</p>",
			   "icon":"Tankstelle",
			},
			"geometry":{
			   "type":"Point",
			   "coordinates":[
				8.71785704495354,
				50.11326424062049
			   ]
			}
		},
		{
			'type': 'Feature',
			'properties': {
				'description':
		'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
				'icon': 'castle-15'
			},
			'geometry': {
			'type': 'Point',
			'coordinates': [8.71157213340723, 50.11154494192954]
			}
		},
	  
	]
 };

 const mapPresent = document.querySelectorAll('.maps')

 mapPresent.forEach((elem) => {
	
	var filterGroup = document.getElementById('filter-group');
	mapboxgl.accessToken = 'pk.eyJ1IjoibW1vcmxleWhsIiwiYSI6ImNrbHV5c25kZjBuZm0yd28zYncwdGlnOWcifQ.0ii1h91pTh7MM9NLoIXuEA';
	
	var mq = window.matchMedia( "(min-width: 820px)" );
	
	console.log('mq', mq)
	
	if (mq.matches){
		var map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID
			center: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]
			// starting zoom
			zoom: 16,
			attributionControl: true,
			logoEnabled: false
		});
	} else {
		var map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID
			center: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]
			// starting zoom
			zoom: 15,
			attributionControl: true,
			logoEnabled: false
		});
	};
	
	
	//disable zoom on map
	map.scrollZoom.disable();
	
	//disable Mobile desktop behavoir
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		map.dragPan.disable();
		// map.scrollZoom.enable();
		const isTouchEvent = e => e.originalEvent && "touches" in e.originalEvent;
		const isTwoFingerTouch = e => e.originalEvent.touches.length >= 2;
	  
		map.on("dragstart", event => {
		  if (isTouchEvent(event) && !isTwoFingerTouch(event)) {
			 map.dragPan.disable();
		  }
		});
	  
		// Drag events not emited after dragPan disabled, so I use touch event here
		map.on("touchstart", event => {
			if (isTouchEvent(event) && isTwoFingerTouch(event)) {
			 map.dragPan.enable();
		  }
		});
	}
	// Add zoom and rotation controls to the map.
	map.addControl(new mapboxgl.NavigationControl({
		// Hide rotation control.
		showCompass: false
	}), 'bottom-left');
	
	map.on('load', function () {
		// Add a GeoJSON source containing place coordinates and information.
		map.addSource('places', {
			'type': 'geojson',
			'data': places,
		});
		 
		places.features.forEach(function (feature) {
			var symbol = feature.properties['icon'];
			console.log('symbol', symbol)
			var layerID = 'poi-' + symbol;
			console.log('layerID', layerID)
		
			
	
		// Add a layer for this symbol type if it hasn't been added already.
			if (!map.getLayer(layerID)) {
				map.addLayer({
					'id': layerID,
					'type': 'symbol',
					'source': 'places',
					
					'layout': {
					'icon-image': symbol,
					'icon-allow-overlap': true,
					// "icon-offset": [
					// 	"case",
					// 	["==", ["get", "icon"], "cafe-15"],
					// 	["literal", [5, -19]],
					// 	["literal", [0, 0]]
					//   ]
					},
					'filter': ['==', 'icon', symbol]
				});
	
				// Change icon size on zoom
				// map.on('zoom', () => {
				//     const scalePercent = 1 + (map.getZoom() - 8)  * 0.4;
				//     const svgElement = symbol.getElement().children[0];
				//     svgElement.style.transform = `scale(${scalePercent})`;
				//     svgElement.style.transformOrigin = 'bottom';
				// });
				
				// Add checkbox and label elements for the layer.
				var input = document.createElement('input');
				input.type = 'checkbox';
				input.id = layerID;
				input.checked = true;
				filterGroup.appendChild(input);
			
				var label = document.createElement('label');
				label.setAttribute('for', layerID);
				label.textContent = symbol;
				filterGroup.appendChild(label);
			
			// When the checkbox changes, update the visibility of the layer.
				input.addEventListener('change', function (e) {
					map.setLayoutProperty(
						layerID,
						'visibility',
						e.target.checked ? 'visible' : 'none'
					);
				});
	
				map.on('click', layerID, function (e) {
					var coordinates = e.features[0].geometry.coordinates.slice();
					var description = e.features[0].properties.description;
					 
					// Ensure that if the map is zoomed out such that multiple
					// copies of the feature are visible, the popup appears
					// over the copy being pointed to.
					while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
					}
					 
					new mapboxgl.Popup()
					.setLngLat(coordinates)
					.setHTML(description)
					.addTo(map);
				});
					 
					// Change the cursor to a pointer when the mouse is over the places layer.
				map.on('mouseenter', layerID, function () {
					map.getCanvas().style.cursor = 'pointer';
				});
					 
					// Change it back to a pointer when it leaves.
				map.on('mouseleave', layerID, function () {
					map.getCanvas().style.cursor = '';
				});
			}
		});
	
	
	});
	
	map.on('click', 'places', function (e) {
		var coordinates = e.features[0].geometry.coordinates.slice();
		var description = e.features[0].properties.description;
		 
		// Ensure that if the map is zoomed out such that multiple
		// copies of the feature are visible, the popup appears
		// over the copy being pointed to.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
		 
		new mapboxgl.Popup()
		.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
	});
		 
	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'places', function () {
		map.getCanvas().style.cursor = 'pointer';
	});
		
	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', function () {
		map.getCanvas().style.cursor = '';
	});
 })
 