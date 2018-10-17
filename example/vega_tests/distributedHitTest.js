document.addEventListener("DOMContentLoaded", () => {
  const distrib_hittests = [
    {
      "test_name": "single-layer line hittest",
      "vega": {
        "width": 1140,
        "height": 893,
        "data": [
          {
            "name": "linemap",
            "format": {
              "type": "lines",
              "coords": {
                "x": [
                  "mapd_geo"
                ],
                "y": [
                  {
                    "from": "mapd_geo"
                  }
                ]
              },
              "layout": "interleaved"
            },
            "sql": "SELECT kaggle_taxi_waypoints.rowid as rowid, kaggle_taxi_waypoints.mapd_geo FROM kaggle_taxi_waypoints WHERE MOD(kaggle_taxi_waypoints.rowid * 265445761, 4294967296) < 251938669 AND ((ST_Intersects(ST_GeomFromText('POLYGON((-17.183235188297942 30.569400426827457, 9.771197035665978 30.569400426827457, 9.771197035665978 46.90994185736457, -17.183235188297942 46.90994185736457, -17.183235188297942 30.569400426827457))'), kaggle_taxi_waypoints.mapd_geo)))"
          }
        ],
        "scales": [
          {
            "name": "x",
            "type": "linear",
            "domain": [
              -1912828.991079938,
              1087724.6783018399
            ],
            "range": "width"
          },
          {
            "name": "y",
            "type": "linear",
            "domain": [
              3576952.951613164,
              5927386.65930033
            ],
            "range": "height"
          },
          {
            "name": "linemap_strokeColor",
            "type": "linear",
            "domain": [
              0,
              0.125,
              0.25,
              0.375,
              0.5,
              0.625,
              0.75,
              0.875,
              1
            ],
            "range": [
              "rgba(17,95,154,0.625)",
              "rgba(25,132,197,0.6971153846153846)",
              "rgba(34,167,240,0.7692307692307692)",
              "rgba(72,181,196,0.8413461538461539)",
              "rgba(118,198,143,0.9134615384615384)",
              "rgba(166,215,91,0.985576923076923)",
              "rgba(201,229,47,1)",
              "rgba(208,238,17,1)",
              "rgba(208,244,0,1)"
            ],
            "accumulator": "density",
            "minDensityCnt": "-2ndStdDev",
            "maxDensityCnt": "2ndStdDev",
            "clamp": true
          }
        ],
        "projections": [
          {
            "name": "mercator_map_projection",
            "type": "mercator",
            "bounds": {
              "x": [
                -17.183235188297942,
                9.771197035665978
              ],
              "y": [
                30.569400426827457,
                46.90994185736457
              ]
            }
          }
        ],
        "marks": [
          {
            "type": "lines",
            "from": {
              "data": "linemap"
            },
            "properties": {
              "x": {
                "field": "x"
              },
              "y": {
                "field": "y"
              },
              "strokeColor": {
                "scale": "linemap_strokeColor",
                "value": 0
              },
              "strokeWidth": 1,
              "lineJoin": "miter",
              "miterLimit": 10
            },
            "transform": {
              "projection": "mercator_map_projection"
            }
          }
        ]
      },
      "hitInfo": {
        "pixel": {x: 461, y: 531},
        "data_args": {"linemap": ["mapd_geo"]},
        "expected_results": {"mapd_geo": "LINESTRING (-8.61757195024638 41.1461099894466,-8.61759893997461 41.1461099894466,-8.6175089183345 41.1455069953322,-8.6174009594216 41.1450839606789,-3.93094796870414 40.3577099788737,-8.58593697128163 41.1434369586145,-8.58325492990355 41.1436709813511,-8.58130194646367 41.1436889605334,-8.57956496466862 41.1439769627266,-8.57821497534318 41.1444899771104,-8.57685593356232 41.1443099757397,-8.57483991821056 41.1438509827218,-8.57328297969572 41.1440219735466,-8.57087997187436 41.144678989027,-8.56920593817216 41.1466139932846,-8.56734297637238 41.145380973418,-8.56551597293723 41.1441749851891,-8.56392299223874 41.1448049690317,-8.56197897743526 41.1446519992988,-8.56098899085121 41.1440039943643,-8.55998995181173 41.144084963549,-8.55930598851261 41.1446699784811,-8.55938695769728 41.1447509895753,-8.55941394742551 41.1447419790294,-8.55941394742551 41.1447509895753,-8.55942299988094 41.1447779793035)"}
      }
    },
    {
      "test_name": "multi-layer line hittest 1",
      "vega": {
        "width": 1029,
        "height": 818,
        "data": [
          {
            "name": "linemapLayer0",
            "format": {
              "type": "lines",
              "coords": {
                "x": [
                  "mapd_geo"
                ],
                "y": [
                  {
                    "from": "mapd_geo"
                  }
                ]
              },
              "layout": "interleaved"
            },
            "sql": "SELECT kaggle_taxi_waypoints.rowid as rowid, kaggle_taxi_waypoints.mapd_geo FROM kaggle_taxi_waypoints WHERE MOD(kaggle_taxi_waypoints.rowid * 265445761, 4294967296) < 251938373 AND ((ST_Intersects(ST_GeomFromText('POLYGON((-36.913779 31.992111, 52.900803 31.992111, 52.900803 51.037119, -36.913779 51.037119, -36.913779 31.992111))'), kaggle_taxi_waypoints.mapd_geo)))"
          },
          {
            "name": "heatmap_querygeoheatLayer1",
            "sql": "SELECT reg_hex_horiz_pixel_bin_x(conv_4326_900913_x(lon),-1570658.266395908,-2860.8154437588983,conv_4326_900913_y(lat),4291015.906782603,5537331.081594614,9.990291262135923,11.535794698953882,0,0,1029,818) as x, reg_hex_horiz_pixel_bin_y(conv_4326_900913_x(lon),-1570658.266395908,-2860.8154437588983,conv_4326_900913_y(lat),4291015.906782603,5537331.081594614,9.990291262135923,11.535794698953882,0,0,1029,818) as y, count(*) as color FROM tweets_nov_feb GROUP BY x, y"
          },
          {
            "name": "heatmap_querygeoheatLayer1_stats",
            "source": "heatmap_querygeoheatLayer1",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "color",
                  "color",
                  "color",
                  "color"
                ],
                "ops": [
                  "min",
                  "max",
                  "avg",
                  "stddev"
                ],
                "as": [
                  "minimum",
                  "maximum",
                  "mean",
                  "deviation"
                ]
              },
              {
                "type": "formula",
                "expr": "max(minimum, mean-2*deviation)",
                "as": "mincolor"
              },
              {
                "type": "formula",
                "expr": "min(maximum, mean+2*deviation)",
                "as": "maxcolor"
              }
            ]
          }
        ],
        "scales": [
          {
            "name": "x",
            "type": "linear",
            "domain": [
              -1570658.266395908,
              -2860.8154437588983
            ],
            "range": "width"
          },
          {
            "name": "y",
            "type": "linear",
            "domain": [
              4291015.906782603,
              5537331.081594614
            ],
            "range": "height"
          },
          {
            "name": "heat_colorgeoheatLayer1",
            "type": "quantize",
            "domain": {
              "data": "heatmap_querygeoheatLayer1_stats",
              "fields": [
                "mincolor",
                "maxcolor"
              ]
            },
            "range": [
              "rgba(17,95,154,0.5)",
              "rgba(25,132,197,0.5)",
              "rgba(34,167,240,0.5)",
              "rgba(72,181,196,0.5)",
              "rgba(118,198,143,0.5)",
              "rgba(166,215,91,0.5)",
              "rgba(201,229,47,0.5)",
              "rgba(208,238,17,0.5)",
              "rgba(208,244,0,0.5)"
            ],
            "default": "rgba(13,8,135,0.5)",
            "nullValue": "rgba(13,8,135,0.5)"
          }
        ],
        "projections": [
          {
            "name": "mercator_map_projection",
            "type": "mercator",
            "bounds": {
              "x": [
                -14.109463270257038,
                -0.02569914238526394
              ],
              "y": [
                35.930161172626995,
                44.462722817504385
              ]
            }
          }
        ],
        "marks": [
          {
            "type": "lines",
            "from": {
              "data": "linemapLayer0"
            },
            "properties": {
              "x": {
                "field": "x"
              },
              "y": {
                "field": "y"
              },
              "strokeColor": "rgba(17,95,154,1)",
              "strokeWidth": 1,
              "lineJoin": "miter",
              "miterLimit": 10
            },
            "transform": {
              "projection": "mercator_map_projection"
            }
          },
          {
            "type": "symbol",
            "from": {
              "data": "heatmap_querygeoheatLayer1"
            },
            "properties": {
              "shape": "hexagon-horiz",
              "xc": {
                "field": "x"
              },
              "yc": {
                "field": "y"
              },
              "width": 9.990291262135923,
              "height": 11.535794698953882,
              "fillColor": {
                "scale": "heat_colorgeoheatLayer1",
                "field": "color"
              }
            }
          }
        ]
      },
      "hitInfo": {
        "pixel": {x: 497, y: 516},
        "data_args": {"linemapLayer0": ["mapd_geo"]},
        "expected_results": {"mapd_geo": "LINESTRING (-8.55599396329187 41.2009829986845,-8.55224993478146 41.2010189989586,-8.54968498859074 41.2012079689657,-8.54476196157968 41.2013429595164,-8.53822793277829 41.2014329811565,-8.53150497587933 41.2027379596619,-8.52529499145471 41.202872992122,-8.51885098429343 41.2000739812851,-8.51284794905821 41.1985799908631,-8.50694398791853 41.197004989347,-8.50113893323631 41.1969329887987,-8.49504596018002 41.1967799771562,-8.48887193412002 41.1963299946842,-8.48386793792428 41.1938459757687,-8.48006096132102 41.1899399669794,-8.47393194608108 41.187590980524,-8.468216996858 41.1870599869578,-8.46184499024499 41.1871859669626,-8.45531993008001 41.1859439784595,-8.45058599880458 41.1831449676227,-8.44539299069224 41.1803999781517,-8.44139691835334 41.1767369607355,-8.43652795461776 41.1739739920823,-8.43053397183797 41.1724709911144,-8.42455792633097 41.1736859898892,-8.41858196464301 41.1752519808594,-8.41301093269745 41.172902994404,-8.4081599900537 41.1698429711023,-8.40344399605107 41.1663059756003,-8.3975939305488 41.1646859632641,-8.39190597105394 41.1660899739555,-8.38692896458643 41.1686279723275,-8.38150193373743 41.171561973715,-8.37817197124389 41.1755579622349,-8.37656096945357 41.1808229708955,-8.37179996463088 41.183756972283,-8.36679596843515 41.1863669712033,-8.36153992841092 41.1893999628673,-8.35725593769795 41.1935579735756,-8.35197299176453 41.1968969885245,-8.34550199487503 41.1986249597737,-8.33876998552064 41.1991919955235,-8.33246092700048 41.1978779645627,-8.32610694147931 41.1976169940073,-8.31991497814651 41.2002539826558,-8.31329998016045 41.2018919741744,-8.30673896163085 41.201774962806,-8.30078998967111 41.2040069798026,-8.29510194635722 41.2069679709184,-8.28975596851192 41.2100459734025,-8.28462599231146 41.2134299991715,-8.27817293269475 41.2140419619223,-8.2726739851165 41.2153289612454,-8.26771499974081 41.2181819934483,-8.26162194286549 41.2196399835961,-8.25546593789731 41.2194599822254,-8.24899494100781 41.2196669733243,-8.24268596630669 41.219549961956,-8.23771792847557 41.2221509922399,-8.23301995556477 41.2250939622638,-8.22901499840851 41.2282529758421,-8.22436195249872 41.2306559836635,-8.21923197629826 41.2321139738113,-8.2135709227126 41.2311419664096,-8.20809896486257 41.2327439995635,-8.20245593236874 41.2343009799879,-8.19655197122905 41.2353539984838,-8.19090893873522 41.2369739689105,-8.18509499923563 41.2358489917758,-8.1794609353782 41.2350209854706,-8.17660798699437 41.2308359850342,-8.17385394506802 41.2268759967884,-8.16905698188071 41.2240319751315,-8.16477299116774 41.2212869856606,-8.15930991813508 41.2209359934651,-8.15449493385595 41.2189289886593,-8.14950895875204 41.220395989353,-8.14676396928111 41.2239689851291,-8.14207496500671 41.2248959817108,-8.13965393609351 41.2246259587,-8.13597293949499 41.2243199773246,-8.1319589298833 41.2265069835011,-8.1281879954637 41.2298459984501,-8.12407499557551 41.2330859812131,-8.12060094816638 41.2363619642502,-8.118350993897 41.2405649857784,-8.11378796962732 41.2438319582696,-8.11002592002509 41.2470899621244,-8.10751495329082 41.2510139920055,-8.10256493655153 41.2537319917482,-8.09851496857522 41.2571789656101,-8.09378095348076 41.2589699687711,-8.08760692742076 41.2587629776722,-8.08222499121084 41.2592669815101,-8.07728394310795 41.2608959624827,-8.07245999019242 41.2622639729,-8.06741098317663 41.2617239687879,-8.062892969727 41.2597979750763,-8.05823095518082 41.2587719882181,-8.05332594926158 41.258429964659,-8.04954596238655 41.2564499914909,-8.04489291647677 41.2554149940868,-8.04006896356124 41.255144971076,-8.03613592313423 41.2558199657387,-8.03343594448335 41.2576919799939,-8.03158195131998 41.2590149795911,-8.0315009821353 41.2612379860418,-8.02920593322683 41.2634339608547,-8.02628995293113 41.2647119915414,-8.02295999043759 41.2655849667571,-8.01918897219896 41.2661519605974,-8.01660592109738 41.2687259592436,-8.01397794299479 41.2716059811747,-8.0098649431066 41.2728299904954,-8.00720997527577 41.2751519872226,-8.0035829581337 41.2750349758542,-8.0000189729035 41.2764929660021,-7.99812893755647 41.2792739976567,-7.99505093507238 41.2813709821931,-7.99193697422367 41.2799399817735,-7.99202699586378 41.2762409640831,-7.99208097532023 41.2726409785788,-7.9891469739327 41.2706609635012,-7.98541199787772 41.2692839844475,-7.98230692184638 41.2676819932031,-7.97930091991057 41.2672319688216,-7.9793189410024 41.2643699679823,-7.97818495332179 41.2627679767379,-7.9766819942634 41.2626149650955,-7.9751159194741 41.2629839783828,-7.97336996904266 41.2637759844138,-7.97197496889717 41.264855992638,-7.97016598655384 41.2650449626451,-7.96946391834387 41.2637309735938,-7.97022893464669 41.2619219912504,-7.96986893190531 41.2596359947974,-7.96885195559303 41.2565849820415,-7.964873988165 41.2557659862823,-7.96053593417655 41.2557119649163,-7.95683691648619 41.2554599629973,-7.95330897343965 41.2579439819129,-7.94960098711289 41.2601939780918,-7.94712597874325 41.2624529848166,-7.94602794942727 41.2653959967501,-7.94383197461433 41.2681049859468,-7.9419419392673 41.2708319962355,-7.93826999512421 41.2730369815943,-7.93574092347908 41.2756649596969,-7.93169095550277 41.2763579754514,-7.92791096862774 41.2778069969629,-7.92426593039383 41.2798049912228,-7.92089095708024 41.281874986031,-7.91687694746856 41.2810919905459,-7.91372694443619 41.2792469660189,-7.91051399331098 41.2776719645027,-7.90694992426175 41.2762139743549,-7.90244993190395 41.2765829876422,-7.89879592503365 41.2765469873681,-7.89605093556272 41.27695195902,-7.8933869990955 41.2771499814825,-7.89065994689737 41.2772309925767,-7.88809491688763 41.2781399680665,-7.88567397179346 41.280830978081,-7.88361294562165 41.2826039601502,-7.88059797504945 41.2817489641168,-7.8771779909158 41.2811909808224,-7.8737219645985 41.2809659686317,-7.87076994211915 41.2805249967056,-7.86768297099866 41.2810739694541,-7.86525297344907 41.2796249898521,-7.86194094822832 41.278787973001,-7.85828694135802 41.278094999156,-7.8548939469526 41.2787609832728,-7.85136592008703 41.2794539990274,-7.84812597923359 41.2797689909487,-7.8448499961965 41.2802549736948,-7.84181692071344 41.281325971373,-7.83886498205311 41.2828559620692,-7.83424797832698 41.2835309986414,-7.83044997036012 41.2849889887893,-7.82591393581867 41.2840979924817,-7.82157596564925 41.2840529816617,-7.81714797383973 41.2846739968679,-7.81343093505755 41.2849979993352,-7.80999292983207 41.2855199823554,-7.80657294569843 41.2847729871444,-7.80331498375317 41.2830269948035,-7.79996691634877 41.2812179705506,-7.797356959338 41.2791299965601,-7.79509795261319 41.2769699801118,-7.79300096807675 41.274710973387,-7.79007593532562 41.2730729818684,-7.78676399392391 41.274413960648,-7.78328097787838 41.2752509774991,-7.7794649488197 41.2756559910605,-7.77645894688389 41.274962975306,-7.77266999137246 41.2764659762739,-7.76959198888838 41.2773569725814,-7.76650493394886 41.2775999639545,-7.76189698267816 41.2787699938187,-7.75627197127616 41.278490960262,-7.7505029587776 41.2781399680665,-7.7452649398452 41.277842997237,-7.73963095980679 41.2775189947698,-7.73398792731296 41.2771949923025,-7.72863298083126 41.2769339798377,-7.72457396039952 41.2779419875135,-7.72091098489282 41.2802549736948,-7.71680695364103 41.2822529679547,-7.7122889401914 41.2839809811134,-7.70764494673705 41.2844309635854,-7.70296499491807 41.2851509690681,-7.69843792901302 41.2868249608608,-7.69440598212853 41.289245989774,-7.69158899210933 41.2926569633617,-7.68807898633558 41.2953299941939,-7.68428097836873 41.2979489617506,-7.68048297040187 41.3005859923086,-7.67645999215378 41.303132959317,-7.67201397925243 41.3056439679608,-7.66775697826769 41.3085779693483,-7.66456196441528 41.3123309664951,-7.66184396467257 41.316182995828,-7.65853193945183 41.319413968045,-7.65437392874359 41.3216819853157,-7.64946892282435 41.3228429627246,-7.64436593635211 41.3235629682073,-7.63892096823031 41.3243639847843,-7.63302597572702 41.3252189808177,-7.6278509887065 41.326577980689,-7.62556499225347 41.3302949775617,-7.62399891746417 41.3344349671781,-7.62127194908507 41.3382149959627,-7.61612395179278 41.3403299596814,-7.61066096257915 41.3421929633907,-7.60632299240973 41.3451449858701,-7.60204797033316 41.3480069867093,-7.59893392566542 41.3515079819371,-7.59681892003716 41.3556479715536,-7.593650979732 41.3593109889698,-7.58879098463282 41.3608049793918,-7.58346294406031 41.3595989911629,-7.57780197429368 41.3596079597993,-7.57162794823368 41.3597069919853,-7.565723987094 41.3598689722642,-7.56042293624972 41.3622719800855,-7.55735398622106 41.3663039688795,-7.5551489589527 41.3707949926009,-7.55028896385352 41.3739359850874,-7.54396196806057 41.3736029720742,-7.53813897610555 41.3720909605604,-7.53236996360699 41.3719469594639,-7.52726697713475 41.3747639913926,-7.52273999504873 41.3777429616906,-7.51744799665988 41.3801909803321,-7.51229999936758 41.3826749992476,-7.50646795495714 41.3821709954097,-7.50134694739308 41.3795339648517,-7.49557793489451 41.3778509625131,-7.48934992937806 41.3779319736072,-7.48349097905843 41.3802809600626,-7.48040392411892 41.3845019607733,-7.47675896970404 41.3884259906544,-7.47039593172744 41.3891729858654,-7.46413196784637 41.3881019881871,-7.45755292822493 41.3893259975078,-7.45136993352853 41.3910809584852,-7.44668092925413 41.3942219928811,-7.44420592088448 41.3986589952366,-7.43980491880318 41.4020339685502,-7.434197928493 41.4035099797899,-7.42842899981347 41.4050759707601,-7.42272293540776 41.4064889919974,-7.41796193058508 41.4096299844839,-7.41380391987683 41.4131849591682,-7.41089699203656 41.4173609909682,-7.40650495859166 41.4205829945489,-7.40230193706337 41.4237959875836,-7.39692896948984 41.4260639629448,-7.39118694671951 41.4264149970498,-7.38563393586578 41.4248219744418,-7.38079196185842 41.4217979933237,-7.37466294661847 41.4204749937265,-7.36857894219858 41.4223739977099,-7.36256693832696 41.4238949778601,-7.35849894925882 41.4275849850045,-7.35295499086052 41.4292589767972,-7.34747398055507 41.4298439917294,-7.34204694970606 41.4311579807807,-7.33746598816359 41.4335069672361,-7.33207499949824 41.4350999898441,-7.32646792536903 41.4357299736867,-7.3211039264319 41.4356939734126,-7.31654995461765 41.4375029976654,-7.31254499746139 41.4390779991816,-7.30810795319644 41.4402209974081,-7.30476893824747 41.441678987556,-7.30316698891258 41.4422639605786,-7.30312197809253 41.4423449716728,-7.30315793645715 41.4423809719469,-7.30315793645715 41.4423989930388,-7.30315793645715 41.4424169722211,-7.30314896782075 41.4424169722211,-7.30314896782075 41.4424079616752,-7.30315793645715 41.4423989930388,-7.30315793645715 41.4424079616752,-7.30313094672893 41.4424349933129,-7.30313094672893 41.4424439619493,-7.30313094672893 41.4424349933129,-7.30312197809253 41.4424529724952,-7.30315793645715 41.4423899824928,-7.30319397864081 41.4423179819446,-7.3032029472772 41.4422819816704,-7.30319397864081 41.4422729711245,-7.30317595754898 41.4423089713987,-7.30315793645715 41.4423359611269,-7.30315793645715 41.4423449716728,-7.30314896782075 41.4423629927646,-7.30314896782075 41.4423449716728,-7.30313999918436 41.4423269924905,-7.30313094672893 41.4423269924905,-7.30313999918436 41.4423179819446,-7.30313094672893 41.4423269924905,-7.30313094672893 41.4423089713987,-7.30313999918436 41.4422729711245,-7.30314896782075 41.4422189916681,-7.30315793645715 41.4422189916681,-7.30315793645715 41.4422279603045,-7.30318492618538 41.4422099811222,-7.30317595754898 41.4422369708504,-7.30316698891258 41.4422639605786,-7.30316698891258 41.4422819816704,-7.30317595754898 41.4422819816704,-7.30287898671947 41.4425249730435,-7.30182596822354 41.4430469979733,-7.29953091931507 41.4442259964739,-7.2958949335366 41.4459179674489,-7.29198896665684 41.448050994169,-7.28819992732639 41.4502019581619,-7.28349298577918 41.4509219636446,-7.27826393548318 41.4508499630964,-7.27263892408118 41.4509399847365,-7.26794991980677 41.4528929681764,-7.26520493033584 41.4564479847702,-7.26207294839531 41.4600119700003,-7.25702394137952 41.4615869715165,-7.25166899489782 41.462783991109,-7.24627792241344 41.4645839629064,-7.2403289504537 41.4677879873048,-7.23382199519958 41.4704339864992,-7.22852999681073 41.4726299613121,-7.22378692926084 41.4755189937891,-7.21897194498171 41.4785339643613,-7.21339194439975 41.4812069951935,-7.20947692506457 41.485085972345,-7.20422096885937 41.4877049818112,-7.19990093596275 41.4910799970343,-7.19456392675385 41.4940319776042,-7.19060398041764 41.497829985571,-7.18485298901091 41.4995669673661,-7.18210799953998 41.5034819867012,-7.18319697640054 41.5083419818004,-7.18058693557074 41.5124459711427,-7.17580799347526 41.5155779949928,-7.17081296591592 41.518187993913,-7.16465696094775 41.5179359919941,-7.15894192790563 41.5164149699343,-7.15283093375751 41.5165769921227,-7.14707994235078 41.5186649661132,-7.14060894546127 41.5188539780299,-7.13433592912477 41.5188539780299,-7.12796392251177 41.519879964888,-7.12150197807769 41.5212029644853,-7.11493199091169 41.5218689905116,-7.10828095074197 41.5217069683232,-7.1020349241337 41.522966977918,-7.09661694574012 41.5256489773866,-7.09154094899611 41.5285109782259,-7.08691497663358 41.5317509609888,-7.08157796742468 41.5347929631988,-7.07480999970567 41.5356479592322,-7.06909496666356 41.5386719822598,-7.06367698826998 41.5413269920001,-7.0591139640003 41.5450169991446,-7.05392992452436 41.5478249786179,-7.04715298816895 41.5472039634116,-7.04015099771328 41.5478429997097,-7.03505697987743 41.5512899735716,-7.0319339665733 41.5557179653811,-7.02672293736912 41.5588049784111,-7.02188096336177 41.5618919914411,-7.01554499893242 41.5621799936342,-7.01016297890347 41.5641959670764,-7.00490693887924 41.566625964626,-6.99847198417339 41.5667069757202,-6.9927839408595 41.5668869770909,-6.98739295219415 41.5687769705284,-6.98134498995791 41.5691909946358,-6.97617897157379 41.5718009935561,-6.9708329937285 41.5745639622093,-6.96418195355878 41.5748519644024,-6.9583769826956 41.5771019605813,-6.95235592636855 41.5774889949604,-6.94633495386054 41.5785959929128,-6.94151091712597 41.5816559743051,-6.93605698036778 41.5828889941717,-6.93035099978109 41.5847069870609,-6.92508599112047 41.5872089851588,-6.91936198944196 41.5899179743556,-6.91381794722463 41.5925279732759,-6.90894898348905 41.59560597576,-6.90446692840404 41.5991069709878,-6.89997598850167 41.6026259873075,-6.89519696258716 41.6056679895174,-6.88966197282526 41.6077649740538,-6.88438799552824 41.6097539996774,-6.87957292743007 41.6123459775058,-6.87553192809016 41.6156489921807,-6.87036599352507 41.6184299819257,-6.86519997514095 41.6210939603025,-6.85911597072106 41.623577979218,-6.85381491987678 41.6264759803314,-6.84849593175971 41.6293829919907,-6.84534592872734 41.6335499713354,-6.8428709203577 41.6380229739649,-6.83891994265789 41.641649991107,-6.83604897318224 41.6458619812717,-6.83576097098913 41.6508299771933,-6.83134194781601 41.654591984886,-6.82718393710776 41.65862397368,-6.82181096953424 41.6613419734227,-6.81624899004411 41.6638439715206,-6.8112719835766 41.6670569645553,-6.81109194029639 41.6722949834877,-6.81511491854448 41.6766869750231,-6.81695994307145 41.6816279812165,-6.81463798825379 41.6862809852167,-6.81218996961237 41.6909069994888,-6.81111893002462 41.6959019851386,-6.80933693740952 41.7008339807861,-6.80705094095648 41.7057299761594,-6.80491799805542 41.7105179707103,-6.80488195587177 41.7148649933351,-6.80812198054424 41.7184559682936,-6.81215392742872 41.7219929637956,-6.8166179614219 41.7247109635383,-6.81948893089755 41.7284009706827,-6.81898492705961 41.7327209616698,-6.81613197867578 41.7367889926474,-6.81335999947663 41.7411899947287,-6.81012894344056 41.7456629973583,-6.80718597341663 41.7500909891678,-6.80582693163577 41.7548879942647,-6.80185793284413 41.7588029716903,-6.79718694966155 41.7611159997811,-6.79448697101068 41.7616109930731,-6.79250699784258 41.7626999699337,-6.79206594209749 41.7648779655643,-6.79223693292226 41.7677129766753,-6.79301997031691 41.7709439908019,-6.79262392539188 41.7744989654862,-6.79438798073418 41.7781259826283,-6.79643098581416 41.7817439892244,-6.79781693350422 41.7857129880161,-6.79817693624561 41.789996978729,-6.79850098062237 41.7938219764241,-6.80119199063684 41.7973949722002,-6.80252395887045 41.8008869987917,-6.80319895353317 41.8042079926488,-6.80391895901594 41.8076459978743,-6.8040629601125 41.8108319592713,-6.8024789480504 41.8117049763965,-6.80092192571653 41.8114799642058,-6.79841095898226 41.8103009657051,-6.79534192513458 41.8089419658337,-6.7925339875708 41.8077179984226,-6.79033792893884 41.806223966091,-6.78789896275285 41.8047479967609,-6.78510896246187 41.8038749796356,-6.78138295504329 41.8037309785391,-6.77786398063314 41.8034969977119,-6.77694599459737 41.8034699660742,-6.77618097829455 41.8035509771684,-6.77446193377229 41.8032629749753,-6.77401199320984 41.803739989085,-6.77412892075913 41.8039829804581,-6.77413797321456 41.8040009596404,-6.77413797321456 41.8040009596404,-6.77413797321456 41.8040009596404,-6.77412892075913 41.8040099701863,-6.77412892075913 41.803991991004,-6.77412892075913 41.803991991004,-6.77412892075913 41.8040009596404,-6.77412892075913 41.8039829804581)"}
      }
    },
    {
      "test_name": "multi-layer line hittest 2",
      "vega": {
        "width": 1029,
        "height": 818,
        "data": [
          {
            "name": "linemapLayer0",
            "format": {
              "type": "lines",
              "coords": {
                "x": [
                  "mapd_geo"
                ],
                "y": [
                  {
                    "from": "mapd_geo"
                  }
                ]
              },
              "layout": "interleaved"
            },
            "sql": "SELECT kaggle_taxi_waypoints.rowid as rowid, kaggle_taxi_waypoints.mapd_geo FROM kaggle_taxi_waypoints WHERE MOD(kaggle_taxi_waypoints.rowid * 265445761, 4294967296) < 251941033 AND ((ST_Intersects(ST_GeomFromText('POLYGON((-11.693034219795038 37.826233952026755, -3.171302854949772 37.826233952026755, -3.171302854949772 42.980613276902545, -11.693034219795038 42.980613276902545, -11.693034219795038 37.826233952026755))'), kaggle_taxi_waypoints.mapd_geo)))"
          },
          {
            "name": "heatmap_querygeoheatLayer1",
            "sql": "SELECT reg_hex_horiz_pixel_bin_x(conv_4326_900913_x(lon),-1163670.665964676,-520206.77330896916,conv_4326_900913_y(lat),4682601.926550466,5194121.328099031,9.990291262135923,11.535794698953882,0,0,1029,818) as x, reg_hex_horiz_pixel_bin_y(conv_4326_900913_x(lon),-1163670.665964676,-520206.77330896916,conv_4326_900913_y(lat),4682601.926550466,5194121.328099031,9.990291262135923,11.535794698953882,0,0,1029,818) as y, count(*) as color FROM tweets_nov_feb WHERE ((lon >= -11.693034219795038 AND lon <= -3.171302854949772) AND (lat >= 37.826233952026755 AND lat <= 42.980613276902545)) GROUP BY x, y"
          },
          {
            "name": "heatmap_querygeoheatLayer1_stats",
            "source": "heatmap_querygeoheatLayer1",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "color",
                  "color",
                  "color",
                  "color"
                ],
                "ops": [
                  "min",
                  "max",
                  "avg",
                  "stddev"
                ],
                "as": [
                  "minimum",
                  "maximum",
                  "mean",
                  "deviation"
                ]
              },
              {
                "type": "formula",
                "expr": "max(minimum, mean-2*deviation)",
                "as": "mincolor"
              },
              {
                "type": "formula",
                "expr": "min(maximum, mean+2*deviation)",
                "as": "maxcolor"
              }
            ]
          }
        ],
        "scales": [
          {
            "name": "x",
            "type": "linear",
            "domain": [
              -1163670.665964676,
              -520206.77330896916
            ],
            "range": "width"
          },
          {
            "name": "y",
            "type": "linear",
            "domain": [
              4682601.926550466,
              5194121.328099031
            ],
            "range": "height"
          },
          {
            "name": "heat_colorgeoheatLayer1",
            "type": "quantize",
            "domain": {
              "data": "heatmap_querygeoheatLayer1_stats",
              "fields": [
                "mincolor",
                "maxcolor"
              ]
            },
            "range": [
              "rgba(17,95,154,0.5)",
              "rgba(25,132,197,0.5)",
              "rgba(34,167,240,0.5)",
              "rgba(72,181,196,0.5)",
              "rgba(118,198,143,0.5)",
              "rgba(166,215,91,0.5)",
              "rgba(201,229,47,0.5)",
              "rgba(208,238,17,0.5)",
              "rgba(208,244,0,0.5)"
            ],
            "default": "rgba(13,8,135,0.5)",
            "nullValue": "rgba(13,8,135,0.5)"
          }
        ],
        "projections": [
          {
            "name": "mercator_map_projection",
            "type": "mercator",
            "bounds": {
              "x": [
                -10.453431450610367,
                -4.673096954300632
              ],
              "y": [
                38.726720807427455,
                42.2208633165549
              ]
            }
          }
        ],
        "marks": [
          {
            "type": "lines",
            "from": {
              "data": "linemapLayer0"
            },
            "properties": {
              "x": {
                "field": "x"
              },
              "y": {
                "field": "y"
              },
              "strokeColor": "rgba(17,95,154,1)",
              "strokeWidth": 1,
              "lineJoin": "miter",
              "miterLimit": 10
            },
            "transform": {
              "projection": "mercator_map_projection"
            }
          },
          {
            "type": "symbol",
            "from": {
              "data": "heatmap_querygeoheatLayer1"
            },
            "properties": {
              "shape": "hexagon-horiz",
              "xc": {
                "field": "x"
              },
              "yc": {
                "field": "y"
              },
              "width": 9.990291262135923,
              "height": 11.535794698953882,
              "fillColor": {
                "scale": "heat_colorgeoheatLayer1",
                "field": "color"
              }
            }
          }
        ]
      },
      "hitInfo": {
        "pixel": {x: 521, y: 520},
        "data_args": {"linemapLayer0": ["mapd_geo"]},
        "expected_results": {"mapd_geo": "LINESTRING (-8.61757195024638 41.1461099894466,-8.61759893997461 41.1461099894466,-8.6175089183345 41.1455069953322,-8.6174009594216 41.1450839606789,-3.93094796870414 40.3577099788737,-8.58593697128163 41.1434369586145,-8.58325492990355 41.1436709813511,-8.58130194646367 41.1436889605334,-8.57956496466862 41.1439769627266,-8.57821497534318 41.1444899771104,-8.57685593356232 41.1443099757397,-8.57483991821056 41.1438509827218,-8.57328297969572 41.1440219735466,-8.57087997187436 41.144678989027,-8.56920593817216 41.1466139932846,-8.56734297637238 41.145380973418,-8.56551597293723 41.1441749851891,-8.56392299223874 41.1448049690317,-8.56197897743526 41.1446519992988,-8.56098899085121 41.1440039943643,-8.55998995181173 41.144084963549,-8.55930598851261 41.1446699784811,-8.55938695769728 41.1447509895753,-8.55941394742551 41.1447419790294,-8.55941394742551 41.1447509895753,-8.55942299988094 41.1447779793035)"}
      }
    }
  ]

  

  // need to do this because mapd-conector::getResultRowForPixel() cannot be called
  // synchronously currently
  const processRenderAndHitTestSync = (w, con, all_hittest_info) => {
    const runRenderAndHitTest = idx => {
      if (idx === all_hittest_info.length) {
        return
      }

      const hittest_info = all_hittest_info[idx];
      const vega = hittest_info.vega;
      const hittest_pixel = new TPixel(hittest_info.hitInfo.pixel);
      const table_col_names = hittest_info.hitInfo.data_args;
      const expected_results = hittest_info.hitInfo.expected_results;

      const results = con.renderVega(1, JSON.stringify(vega))
      const blobUrl = "data:image/png;base64," + results.image
      w.document.write("<img src='" + blobUrl + "' alt='backend-rendered png'/>")
      
      const hittestValidateCB = data => {
          const expected_vals = Object.entries(expected_results)
          for (const expected_val of expected_vals) {
            const key = expected_val[0];
            const val = expected_val[1];
            if (data[0].row_set === undefined || !data[0].row_set.length) {
              throw new Error(`Did not get hit-test results "${hittest_info.test_name}"`);
            }
            if (data[0].row_set[0][key] === undefined) {
              throw new Error(`Did not get expected key: "${key}" in the results for test "${hittest_info.test_name}"`);
            }
            if (data[0].row_set[0][key] !== val) {
              throw new Error(`Expecting ${val} for "${key}" in hittest results. Got ${data[0].row_set[0][key]} instead for test "${hittest_info.test_name}"`)
            }
          }
        }

      con.getResultRowForPixel(
        1, // widgetId
        hittest_pixel,
        table_col_names,
        (error, data) => {
          if (error) {
            throw error
          }
          hittestValidateCB(data)
          runRenderAndHitTest(++idx)
        }
      )
    }

    runRenderAndHitTest(0)
  }

  new MapdCon()
    .protocol("http")
    .host("localhost")
    .port("9090")
    .dbName("mapd")
    .user("mapd")
    .password("HyperInteractive")
    .connect((error, con) => {
      if (error) {
        throw error
      }

      const w = window.open("distrib hittest", "distrib hittest results")
      processRenderAndHitTestSync(
        w,
        con,
        distrib_hittests)

      // var results = con.renderVega(1, JSON.stringify(CROOTdistriblinehittest))
            // var blobUrl = 'data:image/png;base64,' + results.image;
            // var w=window.open('about:blank','backend-rendered png');
            // w.document.write("<img src='"+blobUrl+"' alt='backend-rendered png'/>")

            // con.getResultRowForPixel(
            //   1, // widgetId
            //   new TPixel({ x: 364, y: 557 }),
            //   {linemap: ["rowid", "mapd_geo"]},
            //   [(e, d) => {
            //     console.log(`CROOT: got an answer ${e} ${d}`)
            //   }],// callbacks
            //   2 // pixelRadius = 2
            // )
    })
})
