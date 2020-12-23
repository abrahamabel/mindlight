import {from, of} from "rxjs";
import {concatMap, delay} from "rxjs/operators";

const focusData = [
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35439163163020054,
    timestamp: 1608738874660
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4250440008507573,
    timestamp: 1608738875664
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3168055655292988,
    timestamp: 1608738876663
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4339322793625627,
    timestamp: 1608738877667
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40796129920829716,
    timestamp: 1608738878667
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2897874253293384,
    timestamp: 1608738879659
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23453840798289444,
    timestamp: 1608738880657
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3079730208194597,
    timestamp: 1608738881661
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21042132599064278,
    timestamp: 1608738882663
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47426878499852276,
    timestamp: 1608738883653
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2666562437208917,
    timestamp: 1608738884656
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2423289870990351,
    timestamp: 1608738885659
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4405824300089002,
    timestamp: 1608738886655
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47586184317826447,
    timestamp: 1608738887662
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3834569408181986,
    timestamp: 1608738888655
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48389742769442023,
    timestamp: 1608738889654
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36915993725864116,
    timestamp: 1608738890652
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24625315208998264,
    timestamp: 1608738891658
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49411532150084453,
    timestamp: 1608738892660
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4989791903872078,
    timestamp: 1608738893651
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38672569662827877,
    timestamp: 1608738894652
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4000661535878003,
    timestamp: 1608738895651
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.449415346877455,
    timestamp: 1608738896655
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.10812930690649256,
    timestamp: 1608738897658
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3608642890976814,
    timestamp: 1608738898653
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5576170779159657,
    timestamp: 1608738899648
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3734116986606177,
    timestamp: 1608738900651
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5304133352862735,
    timestamp: 1608738901646
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3930778580596034,
    timestamp: 1608738902659
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2775878036435001,
    timestamp: 1608738903653
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4563290412782559,
    timestamp: 1608738904653
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3957621037517486,
    timestamp: 1608738905648
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5569212536164927,
    timestamp: 1608738906649
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49998922951648067,
    timestamp: 1608738907654
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49981667298367116,
    timestamp: 1608738908652
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41643598781226215,
    timestamp: 1608738909648
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3989351983106754,
    timestamp: 1608738910651
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3126354267827526,
    timestamp: 1608738911649
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3510477153522326,
    timestamp: 1608738912651
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43073947281492914,
    timestamp: 1608738913647
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38680538791080693,
    timestamp: 1608738914649
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5256301939816896,
    timestamp: 1608738915648
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5596598354439075,
    timestamp: 1608738916645
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4637445934272737,
    timestamp: 1608738917652
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2890133888751367,
    timestamp: 1608738918650
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24006356810666155,
    timestamp: 1608738919644
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5194727043210633,
    timestamp: 1608738920646
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.25032462548152823,
    timestamp: 1608738921648
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4205501527298383,
    timestamp: 1608738922651
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2814009031518856,
    timestamp: 1608738923644
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4582964654884979,
    timestamp: 1608738924647
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5695863946253613,
    timestamp: 1608738925642
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27214895389076027,
    timestamp: 1608738926642
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4202822375035653,
    timestamp: 1608738927652
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.308723556524968,
    timestamp: 1608738928644
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41789798596078287,
    timestamp: 1608738929642
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28627258183519805,
    timestamp: 1608738930641
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2569472231223793,
    timestamp: 1608738931654
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.54360703626232,
    timestamp: 1608738932642
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2630160590030676,
    timestamp: 1608738933636
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4987523948981896,
    timestamp: 1608738934634
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47434800722794546,
    timestamp: 1608738935636
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4502276997378568,
    timestamp: 1608738936634
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30543951467774555,
    timestamp: 1608738937640
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5323393645025964,
    timestamp: 1608738938635
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4476935894712525,
    timestamp: 1608738939630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5007175565051356,
    timestamp: 1608738940633
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.17393896105588436,
    timestamp: 1608738941630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4372921329991285,
    timestamp: 1608738942630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4522470763788066,
    timestamp: 1608738943629
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44964126651029573,
    timestamp: 1608738944630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5274169532103732,
    timestamp: 1608738945630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3145850453057845,
    timestamp: 1608738946624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32127973457537273,
    timestamp: 1608738947636
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2852185142449237,
    timestamp: 1608738948631
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40289117578608336,
    timestamp: 1608738949630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.15356775620200325,
    timestamp: 1608738950627
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26884186841108393,
    timestamp: 1608738951624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5373611652346478,
    timestamp: 1608738952634
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3625546080080324,
    timestamp: 1608738953626
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3400415702615421,
    timestamp: 1608738954628
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34474630992701377,
    timestamp: 1608738955630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.334733597227413,
    timestamp: 1608738956627
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27104235689803663,
    timestamp: 1608738957632
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26523142773112035,
    timestamp: 1608738958626
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3105325397261716,
    timestamp: 1608738959625
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28332770602782165,
    timestamp: 1608738960628
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3606450104679878,
    timestamp: 1608738961621
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1976452359837147,
    timestamp: 1608738962628
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30696348453014477,
    timestamp: 1608738963622
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30866011297688667,
    timestamp: 1608738964622
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3054804767035378,
    timestamp: 1608738965618
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4889467413734385,
    timestamp: 1608738966622
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3013271500803338,
    timestamp: 1608738967628
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36868808585059876,
    timestamp: 1608738968623
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1867277149297763,
    timestamp: 1608738969623
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24582405393823828,
    timestamp: 1608738970619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2799046172120512,
    timestamp: 1608738971620
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5188498623780833,
    timestamp: 1608738972624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.16979284629104746,
    timestamp: 1608738973620
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1877846440911327,
    timestamp: 1608738974624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40730949059921556,
    timestamp: 1608738975619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46387328063081035,
    timestamp: 1608738976618
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.15652602235144442,
    timestamp: 1608738977625
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38616814565566593,
    timestamp: 1608738978617
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.18380316539986497,
    timestamp: 1608738979621
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42880361447220094,
    timestamp: 1608738980622
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32524999162267676,
    timestamp: 1608738981617
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5138534533151705,
    timestamp: 1608738982647
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3412934422830196,
    timestamp: 1608738983625
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34697411445591,
    timestamp: 1608738984624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.20067425882426526,
    timestamp: 1608738985622
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21131095785628143,
    timestamp: 1608738986624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32896802236901623,
    timestamp: 1608738987630
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2589611457359515,
    timestamp: 1608738988619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45964067755235205,
    timestamp: 1608738989621
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34972664952389926,
    timestamp: 1608738990619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45245700182282467,
    timestamp: 1608738991619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45519642437437785,
    timestamp: 1608738992623
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5562367971572224,
    timestamp: 1608738993618
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5068613091555217,
    timestamp: 1608738994619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44396947650514446,
    timestamp: 1608738995617
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4115980135087939,
    timestamp: 1608738996619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38360878215777516,
    timestamp: 1608738997619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4300998522862912,
    timestamp: 1608738998614
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33568207567662284,
    timestamp: 1608738999618
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.383161382365884,
    timestamp: 1608739000616
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4543543049662649,
    timestamp: 1608739001621
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43793855660769054,
    timestamp: 1608739002616
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.517180252899986,
    timestamp: 1608739003619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32885134166391167,
    timestamp: 1608739004617
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4414366294799937,
    timestamp: 1608739005618
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30574995082997347,
    timestamp: 1608739006614
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48723995276392956,
    timestamp: 1608739007624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1716130925271449,
    timestamp: 1608739008617
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2078663379925378,
    timestamp: 1608739009616
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2675696174508033,
    timestamp: 1608739010615
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4004553136067995,
    timestamp: 1608739011625
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3219852642477648,
    timestamp: 1608739012624
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5053781701629948,
    timestamp: 1608739013613
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5905089805089812,
    timestamp: 1608739014615
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5112361477045231,
    timestamp: 1608739015613
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41492738304919674,
    timestamp: 1608739016616
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5516974015806637,
    timestamp: 1608739017619
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4913196200373178,
    timestamp: 1608739018609
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2812942748215108,
    timestamp: 1608739019611
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5900881848355901,
    timestamp: 1608739020608
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21919447237825376,
    timestamp: 1608739021613
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4563637064828288,
    timestamp: 1608739022614
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2484668014980787,
    timestamp: 1608739023611
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.486122618870526,
    timestamp: 1608739024611
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39636141386149915,
    timestamp: 1608739025610
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5601028489459293,
    timestamp: 1608739026608
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19893807761487695,
    timestamp: 1608739027616
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5056163146489958,
    timestamp: 1608739028610
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.668860570381314,
    timestamp: 1608739029606
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42252308196866833,
    timestamp: 1608739030610
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23804814807159969,
    timestamp: 1608739031621
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5953469361913679,
    timestamp: 1608739032614
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2815809085898098,
    timestamp: 1608739033607
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4024048770985918,
    timestamp: 1608739034605
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4032333396055234,
    timestamp: 1608739035605
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22906150181612173,
    timestamp: 1608739036609
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.18559237342333001,
    timestamp: 1608739037610
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47109505423607406,
    timestamp: 1608739038604
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5614850842122783,
    timestamp: 1608739039604
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34096025646877326,
    timestamp: 1608739040603
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5355624946565655,
    timestamp: 1608739041601
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4437965455445987,
    timestamp: 1608739042609
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43769608758003004,
    timestamp: 1608739043605
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38648910929232394,
    timestamp: 1608739044602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21321885726081155,
    timestamp: 1608739045602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4528820743956272,
    timestamp: 1608739046603
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45045144713381924,
    timestamp: 1608739047609
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5744706239594056,
    timestamp: 1608739048602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.29981234888198227,
    timestamp: 1608739049599
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35206409384216575,
    timestamp: 1608739050599
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3449378047060231,
    timestamp: 1608739051602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3327274625954468,
    timestamp: 1608739052607
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2991157312427609,
    timestamp: 1608739053599
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2454234460961811,
    timestamp: 1608739054604
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47108742837036627,
    timestamp: 1608739055601
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5366922271742854,
    timestamp: 1608739056599
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1691300375362888,
    timestamp: 1608739057602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4854965035293352,
    timestamp: 1608739058598
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37040111694503847,
    timestamp: 1608739059603
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.526660798074918,
    timestamp: 1608739060599
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.20175382880164602,
    timestamp: 1608739061600
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30311362274648557,
    timestamp: 1608739062605
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5504829143542932,
    timestamp: 1608739063600
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.255400487750033,
    timestamp: 1608739064602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4683657735913573,
    timestamp: 1608739065596
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40544468380951487,
    timestamp: 1608739066597
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2723715570521444,
    timestamp: 1608739067603
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4915327213038934,
    timestamp: 1608739068600
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2655708966975204,
    timestamp: 1608739069604
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36058499841518876,
    timestamp: 1608739070596
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36883806085278364,
    timestamp: 1608739071596
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3184323549740347,
    timestamp: 1608739072602
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39790286131840014,
    timestamp: 1608739073609
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5023569603772517,
    timestamp: 1608739074601
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24143614623987908,
    timestamp: 1608739075591
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43215484567656726,
    timestamp: 1608739076593
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44741414191160894,
    timestamp: 1608739077595
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5080745073061737,
    timestamp: 1608739078590
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.12726643039294305,
    timestamp: 1608739079591
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5920947073879835,
    timestamp: 1608739080589
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4800834798202259,
    timestamp: 1608739081592
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2987557545426796,
    timestamp: 1608739082595
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31341924597264825,
    timestamp: 1608739083587
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.326109687007451,
    timestamp: 1608739084586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4379517475578814,
    timestamp: 1608739085589
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.504689487451934,
    timestamp: 1608739086586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39309098479595683,
    timestamp: 1608739087592
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3702794950487708,
    timestamp: 1608739088583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3642398394191861,
    timestamp: 1608739089581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3648587658578655,
    timestamp: 1608739090586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38343867902588435,
    timestamp: 1608739091584
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4414490820732425,
    timestamp: 1608739092592
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3678995019854413,
    timestamp: 1608739093585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5462305138999193,
    timestamp: 1608739094588
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4284063352940443,
    timestamp: 1608739095585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4247619720302535,
    timestamp: 1608739096587
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3311371566924949,
    timestamp: 1608739097590
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30302470447422214,
    timestamp: 1608739098585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46120211073250894,
    timestamp: 1608739099583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4966356332753331,
    timestamp: 1608739100584
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3075341868695212,
    timestamp: 1608739101583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4260821541559562,
    timestamp: 1608739102592
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35667950971632184,
    timestamp: 1608739103585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5873587397816744,
    timestamp: 1608739104587
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4137335691347773,
    timestamp: 1608739105583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4535746179684925,
    timestamp: 1608739106582
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5068917076712196,
    timestamp: 1608739107586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36302460105037654,
    timestamp: 1608739108580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21092452819591315,
    timestamp: 1608739109579
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27317984391172756,
    timestamp: 1608739110582
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37080856500495046,
    timestamp: 1608739111582
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41750262350852074,
    timestamp: 1608739112581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43914432296726985,
    timestamp: 1608739113576
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49258848004465267,
    timestamp: 1608739114580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4152646729760486,
    timestamp: 1608739115581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3737087682508808,
    timestamp: 1608739116579
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27065779340611507,
    timestamp: 1608739117584
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35891341712711256,
    timestamp: 1608739118596
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3843995514194926,
    timestamp: 1608739119588
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2747836509876068,
    timestamp: 1608739120589
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3584906411688162,
    timestamp: 1608739121588
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.16591158079836532,
    timestamp: 1608739122591
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3507477239495551,
    timestamp: 1608739123587
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45007405964868463,
    timestamp: 1608739124586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5650512211817228,
    timestamp: 1608739125580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42112865298459307,
    timestamp: 1608739126583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27611270149576617,
    timestamp: 1608739127585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31004891169677373,
    timestamp: 1608739128586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5812570507854928,
    timestamp: 1608739129583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.18570833825803207,
    timestamp: 1608739130583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31943589993338234,
    timestamp: 1608739131580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.25817281008995135,
    timestamp: 1608739132581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4246929540809068,
    timestamp: 1608739133581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49953508883762704,
    timestamp: 1608739134581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5741541645042902,
    timestamp: 1608739135582
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33728465064543567,
    timestamp: 1608739136577
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43822527902630815,
    timestamp: 1608739137586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4975928626348641,
    timestamp: 1608739138578
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6176420012467603,
    timestamp: 1608739139578
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5516601339723785,
    timestamp: 1608739140578
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4465188398139013,
    timestamp: 1608739141581
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3541099394412195,
    timestamp: 1608739142585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5018352995195406,
    timestamp: 1608739143579
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37908457453474603,
    timestamp: 1608739144573
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48221002172188854,
    timestamp: 1608739145577
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3282365400738483,
    timestamp: 1608739146579
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21039409170280052,
    timestamp: 1608739147584
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36004542277099794,
    timestamp: 1608739148580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4334298747423857,
    timestamp: 1608739149580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40537504394650237,
    timestamp: 1608739150571
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2538171556923589,
    timestamp: 1608739151576
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4944795045914339,
    timestamp: 1608739152580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5556695958677945,
    timestamp: 1608739153576
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39329655186716506,
    timestamp: 1608739154580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23698018604528043,
    timestamp: 1608739155577
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3619389771485197,
    timestamp: 1608739156574
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.17200948554216403,
    timestamp: 1608739157583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33545568247904956,
    timestamp: 1608739158575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31064982653951984,
    timestamp: 1608739159578
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43275792915541456,
    timestamp: 1608739160575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3298895624053196,
    timestamp: 1608739161574
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46948105751287666,
    timestamp: 1608739162584
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49593889059447815,
    timestamp: 1608739163577
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4827890957212735,
    timestamp: 1608739164586
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31554904498623954,
    timestamp: 1608739165578
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28279934228802556,
    timestamp: 1608739166576
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28863218802421287,
    timestamp: 1608739167580
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.463492560043665,
    timestamp: 1608739168577
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22405583760260042,
    timestamp: 1608739169577
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1958597451284707,
    timestamp: 1608739170573
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2873157311872033,
    timestamp: 1608739171571
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4479169370532362,
    timestamp: 1608739172579
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5006140718631358,
    timestamp: 1608739173574
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2353341541015524,
    timestamp: 1608739174572
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4826525953157047,
    timestamp: 1608739175572
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4724077702441988,
    timestamp: 1608739176573
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4371109991523544,
    timestamp: 1608739177579
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4536364889993184,
    timestamp: 1608739178575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.334097153541866,
    timestamp: 1608739179568
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3225961457582869,
    timestamp: 1608739180566
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2720894345776938,
    timestamp: 1608739181569
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30289632607642747,
    timestamp: 1608739182574
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32821476886532086,
    timestamp: 1608739183569
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3858786538141485,
    timestamp: 1608739184574
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46107552861943163,
    timestamp: 1608739185567
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2610933584236852,
    timestamp: 1608739186566
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3378473588036829,
    timestamp: 1608739187573
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4811750221226109,
    timestamp: 1608739188569
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33939415385898314,
    timestamp: 1608739189572
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4480737245561768,
    timestamp: 1608739190566
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24232080530814493,
    timestamp: 1608739191567
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5134357537824631,
    timestamp: 1608739192572
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3145211175210608,
    timestamp: 1608739193568
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.437042528572743,
    timestamp: 1608739194570
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3260675829116602,
    timestamp: 1608739195570
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.17880119260631192,
    timestamp: 1608739196568
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49016265707483153,
    timestamp: 1608739197575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3686686244276032,
    timestamp: 1608739198570
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5025213245759055,
    timestamp: 1608739199567
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5143184400041749,
    timestamp: 1608739200564
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28753361289677276,
    timestamp: 1608739201566
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4694552018835877,
    timestamp: 1608739202568
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4111369717313692,
    timestamp: 1608739203565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4878624540014381,
    timestamp: 1608739204567
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2644394161457134,
    timestamp: 1608739205566
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4866469011844022,
    timestamp: 1608739206574
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33573449535781086,
    timestamp: 1608739207570
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4884257203484047,
    timestamp: 1608739208567
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.510774865287894,
    timestamp: 1608739209569
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.500379526797623,
    timestamp: 1608739210564
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.20809411840699785,
    timestamp: 1608739211572
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40933361136552393,
    timestamp: 1608739212571
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31083415127352176,
    timestamp: 1608739213563
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19202034340217944,
    timestamp: 1608739214562
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5066840181129729,
    timestamp: 1608739215564
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2914352824685149,
    timestamp: 1608739216565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32604000285458173,
    timestamp: 1608739217567
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41603728434762755,
    timestamp: 1608739218564
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5721747351622246,
    timestamp: 1608739219565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4446437028451323,
    timestamp: 1608739220559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.469489731550988,
    timestamp: 1608739221559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22512491732766277,
    timestamp: 1608739222570
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40505698442973087,
    timestamp: 1608739223565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43432418692596597,
    timestamp: 1608739224562
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4806039791380019,
    timestamp: 1608739225563
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42885438629562783,
    timestamp: 1608739226560
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3802046088669565,
    timestamp: 1608739227568
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42146420836068654,
    timestamp: 1608739228556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47491459467502156,
    timestamp: 1608739229559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3612384039494635,
    timestamp: 1608739230557
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31244182355695743,
    timestamp: 1608739231559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30536084161120636,
    timestamp: 1608739232561
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2248364084267082,
    timestamp: 1608739233556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5169569059207806,
    timestamp: 1608739234556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28615129389046523,
    timestamp: 1608739235556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21093592958808294,
    timestamp: 1608739236555
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4861526918850518,
    timestamp: 1608739237558
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3706941852954247,
    timestamp: 1608739238557
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47723075416479444,
    timestamp: 1608739239553
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30633276111880037,
    timestamp: 1608739240556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4130395672949533,
    timestamp: 1608739241561
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23517463766558278,
    timestamp: 1608739242561
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49902153727343956,
    timestamp: 1608739243554
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4420781545901227,
    timestamp: 1608739244552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4531649561830009,
    timestamp: 1608739245552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.492661014247999,
    timestamp: 1608739246551
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43162875799035183,
    timestamp: 1608739247556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4294024747392678,
    timestamp: 1608739248572
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2753938130418869,
    timestamp: 1608739249558
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26531128562598966,
    timestamp: 1608739250560
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47599532715550613,
    timestamp: 1608739251559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.539651541249606,
    timestamp: 1608739252559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4310964333052668,
    timestamp: 1608739253564
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35470439567329803,
    timestamp: 1608739254555
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32799562802981824,
    timestamp: 1608739255555
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38344705117420574,
    timestamp: 1608739256559
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33877067668769767,
    timestamp: 1608739257558
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3813804255685384,
    timestamp: 1608739258557
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46441538264148585,
    timestamp: 1608739259558
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4269535221992272,
    timestamp: 1608739260553
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45887603256505194,
    timestamp: 1608739261555
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3800468495249671,
    timestamp: 1608739262557
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3742836721227093,
    timestamp: 1608739263555
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33912357810281724,
    timestamp: 1608739264551
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28187472823010395,
    timestamp: 1608739265552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45750569773549504,
    timestamp: 1608739266552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3227154368271657,
    timestamp: 1608739267565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3615550821336848,
    timestamp: 1608739268552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3858851239786203,
    timestamp: 1608739269552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3839669799705974,
    timestamp: 1608739270552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5378497629525658,
    timestamp: 1608739271557
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5379430048605076,
    timestamp: 1608739272562
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39242885903701674,
    timestamp: 1608739273556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44465072158368013,
    timestamp: 1608739274553
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4570517138357707,
    timestamp: 1608739275551
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3953143775120492,
    timestamp: 1608739276556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3928976703943496,
    timestamp: 1608739277554
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30336922651551806,
    timestamp: 1608739278551
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49526478653302064,
    timestamp: 1608739279550
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5584446282438094,
    timestamp: 1608739280549
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4337847223259994,
    timestamp: 1608739281552
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6013204719098671,
    timestamp: 1608739282556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5254822016510297,
    timestamp: 1608739283556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44303873575002767,
    timestamp: 1608739284551
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40926320830994356,
    timestamp: 1608739285550
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3710709551993436,
    timestamp: 1608739286548
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5901195035233266,
    timestamp: 1608739287562
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4900556241358143,
    timestamp: 1608739288554
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34560301962456214,
    timestamp: 1608739289554
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3531003013711092,
    timestamp: 1608739290551
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5219234045496229,
    timestamp: 1608739291553
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5221064837806784,
    timestamp: 1608739292565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31631694103670027,
    timestamp: 1608739293549
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3812587085944759,
    timestamp: 1608739294546
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4023948765372541,
    timestamp: 1608739295548
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.509473001279179,
    timestamp: 1608739296548
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5459033195303653,
    timestamp: 1608739297554
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45747852071433703,
    timestamp: 1608739298546
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32929097903050947,
    timestamp: 1608739299864
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4019732143019671,
    timestamp: 1608739300545
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.297891008895738,
    timestamp: 1608739301546
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4324181687615232,
    timestamp: 1608739302565
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5228012969343315,
    timestamp: 1608739303542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4804192605292202,
    timestamp: 1608739304547
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5965772421308401,
    timestamp: 1608739305540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5172868953782005,
    timestamp: 1608739306545
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.391193904797253,
    timestamp: 1608739307564
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5043365078635407,
    timestamp: 1608739308538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32731043878374844,
    timestamp: 1608739309539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24110084993807296,
    timestamp: 1608739310536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19810231792199032,
    timestamp: 1608739311540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23427020201524787,
    timestamp: 1608739312590
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.15246696869036486,
    timestamp: 1608739313540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.08448958340040578,
    timestamp: 1608739314539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.14506321957913054,
    timestamp: 1608739315544
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0,
    timestamp: 1608739316541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.06349475304738739,
    timestamp: 1608739317575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35687787654747816,
    timestamp: 1608739318542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.16772246272754057,
    timestamp: 1608739319539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.06156085248252496,
    timestamp: 1608739320539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.29838634658597823,
    timestamp: 1608739321542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43301356197933943,
    timestamp: 1608739322578
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28044960844578914,
    timestamp: 1608739323538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.434527533110525,
    timestamp: 1608739324540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.057692732810367714,
    timestamp: 1608739325539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.25185263244122935,
    timestamp: 1608739326535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.546613547525294,
    timestamp: 1608739327575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5010127060776008,
    timestamp: 1608739328538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3221519272855067,
    timestamp: 1608739329536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3514921099525459,
    timestamp: 1608739330535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41319843087195574,
    timestamp: 1608739331535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49129764141714855,
    timestamp: 1608739332596
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48797520729655797,
    timestamp: 1608739333547
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44296287771049525,
    timestamp: 1608739334544
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37707757274311565,
    timestamp: 1608739335543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4488391189742208,
    timestamp: 1608739336543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3660244358376241,
    timestamp: 1608739337592
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1030527927215435,
    timestamp: 1608739338543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.465633771665332,
    timestamp: 1608739339542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22620250915790618,
    timestamp: 1608739340540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3965718737650212,
    timestamp: 1608739341537
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4268749680075298,
    timestamp: 1608739342585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30696910168954306,
    timestamp: 1608739343542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2840648064875722,
    timestamp: 1608739344543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48986372150499313,
    timestamp: 1608739345540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34203823936436856,
    timestamp: 1608739346540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4946537857461374,
    timestamp: 1608739347583
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44053390553528216,
    timestamp: 1608739348541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3623702414964376,
    timestamp: 1608739349540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3872000742247044,
    timestamp: 1608739350538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43680720482042834,
    timestamp: 1608739351539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.18321732521199363,
    timestamp: 1608739352589
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4467109416098846,
    timestamp: 1608739353538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3937527704164703,
    timestamp: 1608739354540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34119750697129875,
    timestamp: 1608739355540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34113846721243873,
    timestamp: 1608739356541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3180610383386297,
    timestamp: 1608739357548
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31827806088898175,
    timestamp: 1608739358543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1636322131005071,
    timestamp: 1608739359547
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3073243288636939,
    timestamp: 1608739360538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4578382395879108,
    timestamp: 1608739361543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3479011987575509,
    timestamp: 1608739362550
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5006184011454344,
    timestamp: 1608739363546
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43085014631666363,
    timestamp: 1608739364543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46250229754579825,
    timestamp: 1608739365539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42702960065969986,
    timestamp: 1608739366541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45766759092073156,
    timestamp: 1608739367556
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48789200926758297,
    timestamp: 1608739368542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31758649244648784,
    timestamp: 1608739369544
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4062763959616113,
    timestamp: 1608739370542
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5064078491235261,
    timestamp: 1608739371539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45595539342499125,
    timestamp: 1608739372560
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49214248515422726,
    timestamp: 1608739373543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34995894675222583,
    timestamp: 1608739374541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21457406834586634,
    timestamp: 1608739375545
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3127388097009579,
    timestamp: 1608739376539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3929594937353357,
    timestamp: 1608739377582
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5021515458033975,
    timestamp: 1608739378545
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6084770572828859,
    timestamp: 1608739379540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3498300134961413,
    timestamp: 1608739380538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4731853085466203,
    timestamp: 1608739381536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49597584142356876,
    timestamp: 1608739382569
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4688750201226921,
    timestamp: 1608739383541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3948911176524668,
    timestamp: 1608739384534
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47491090773434413,
    timestamp: 1608739385535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49671051941778827,
    timestamp: 1608739386536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42677048070239865,
    timestamp: 1608739387576
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3600859243941122,
    timestamp: 1608739388539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48825224968623865,
    timestamp: 1608739389536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4446210741314502,
    timestamp: 1608739390531
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42524398713371,
    timestamp: 1608739391536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40180297618643446,
    timestamp: 1608739392575
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4027403594498772,
    timestamp: 1608739393543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5131542687924002,
    timestamp: 1608739394539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5155682037609226,
    timestamp: 1608739395531
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49855846064983245,
    timestamp: 1608739396537
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3629639978986745,
    timestamp: 1608739397582
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48610176376210656,
    timestamp: 1608739398543
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5167236551588515,
    timestamp: 1608739399536
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42043125640184686,
    timestamp: 1608739400535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40811243407833847,
    timestamp: 1608739401530
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37025775731459076,
    timestamp: 1608739402585
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2235588343380096,
    timestamp: 1608739403540
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.14599961190722316,
    timestamp: 1608739404537
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.0680759874424366,
    timestamp: 1608739405533
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2017347663862963,
    timestamp: 1608739406535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.11036909244229769,
    timestamp: 1608739407590
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.13382636643092438,
    timestamp: 1608739408541
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.15041738901502502,
    timestamp: 1608739409538
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5061884391785394,
    timestamp: 1608739410534
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.25598765933566137,
    timestamp: 1608739411535
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.14880821172653586,
    timestamp: 1608739412588
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5867848921986363,
    timestamp: 1608739413539
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47887026024604784,
    timestamp: 1608739414533
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5628376818683944,
    timestamp: 1608739415533
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48337774223415875,
    timestamp: 1608739416532
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44097165022883755,
    timestamp: 1608739417537
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4276128207632327,
    timestamp: 1608739418531
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37313049045978564,
    timestamp: 1608739419532
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3922169571078793,
    timestamp: 1608739420537
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4355222630967189,
    timestamp: 1608739421531
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5077963724118413,
    timestamp: 1608739422534
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4646278602530126,
    timestamp: 1608739423550
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38317578704711486,
    timestamp: 1608739424530
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34239991782693147,
    timestamp: 1608739425530
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4054051669831866,
    timestamp: 1608739426529
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3415063474014267,
    timestamp: 1608739427529
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3143492596635968,
    timestamp: 1608739428537
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33127640121657564,
    timestamp: 1608739429528
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5812529882566,
    timestamp: 1608739430526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5372656903555063,
    timestamp: 1608739431528
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5437958543549528,
    timestamp: 1608739432526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.448788482528168,
    timestamp: 1608739433530
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45243705180676136,
    timestamp: 1608739434526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3977507678208674,
    timestamp: 1608739435522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40425815212849847,
    timestamp: 1608739436521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4835909097628514,
    timestamp: 1608739437524
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5702972676487671,
    timestamp: 1608739438530
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40492404592779857,
    timestamp: 1608739439525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3606656964460612,
    timestamp: 1608739440522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4391481307782732,
    timestamp: 1608739441524
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5401267212356763,
    timestamp: 1608739442523
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49844199072093376,
    timestamp: 1608739443530
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5083249761392736,
    timestamp: 1608739444523
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35023424186563845,
    timestamp: 1608739445524
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3449552798686349,
    timestamp: 1608739446522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40890563271563557,
    timestamp: 1608739447523
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.18842131082667332,
    timestamp: 1608739448527
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47630754868958547,
    timestamp: 1608739449521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48917716254339394,
    timestamp: 1608739450522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39283656129262656,
    timestamp: 1608739451523
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4996954472250146,
    timestamp: 1608739452522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4974557295604807,
    timestamp: 1608739453525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41073665897327877,
    timestamp: 1608739454522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.481421874804684,
    timestamp: 1608739455519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.011817894133148418,
    timestamp: 1608739456521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5380453657006341,
    timestamp: 1608739457519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4473814812347024,
    timestamp: 1608739458520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3508589694107986,
    timestamp: 1608739459519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5238202365645044,
    timestamp: 1608739460516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39126692934692353,
    timestamp: 1608739461516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2701337340504149,
    timestamp: 1608739462519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3292434376125621,
    timestamp: 1608739463524
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.609057343573836,
    timestamp: 1608739464517
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3724173669393175,
    timestamp: 1608739465520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5021117298279839,
    timestamp: 1608739466516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.16345593294880245,
    timestamp: 1608739467545
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45180898788503915,
    timestamp: 1608739468529
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40726094952919784,
    timestamp: 1608739469526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4102511917132677,
    timestamp: 1608739470527
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28713916212029994,
    timestamp: 1608739471526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30711637519456936,
    timestamp: 1608739472529
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5030662298803246,
    timestamp: 1608739473534
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2704461993784442,
    timestamp: 1608739474525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4166446795907804,
    timestamp: 1608739475520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3660371131753919,
    timestamp: 1608739476522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4379625126284455,
    timestamp: 1608739477521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31435931309440907,
    timestamp: 1608739478526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4065478419508262,
    timestamp: 1608739479524
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4689763851133157,
    timestamp: 1608739480523
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4580792046152211,
    timestamp: 1608739481525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3462731493487737,
    timestamp: 1608739482522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47511737358043904,
    timestamp: 1608739483527
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4398718385243994,
    timestamp: 1608739484519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4324003100266509,
    timestamp: 1608739485523
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23707580721057964,
    timestamp: 1608739486520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4112857541213249,
    timestamp: 1608739487522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5160622634370833,
    timestamp: 1608739488525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44587910554920196,
    timestamp: 1608739489518
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26181803759014616,
    timestamp: 1608739490517
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43711650123543544,
    timestamp: 1608739491517
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35316911015938,
    timestamp: 1608739492520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2906401098721244,
    timestamp: 1608739493521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.314622366638936,
    timestamp: 1608739494520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4060058024759273,
    timestamp: 1608739495519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31325531897366893,
    timestamp: 1608739496522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.405188453318918,
    timestamp: 1608739497519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2740721363520711,
    timestamp: 1608739498525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3613093302443796,
    timestamp: 1608739499518
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28850905013795686,
    timestamp: 1608739500519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3929386859292304,
    timestamp: 1608739501518
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5214315902241144,
    timestamp: 1608739502516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2743314361050532,
    timestamp: 1608739503521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22327679392449906,
    timestamp: 1608739504522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.340694632125247,
    timestamp: 1608739505522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34078948057631964,
    timestamp: 1608739506519
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3016939198479076,
    timestamp: 1608739507518
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4498296318034568,
    timestamp: 1608739508521
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.07240386372279942,
    timestamp: 1608739509517
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46774157827855367,
    timestamp: 1608739510516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4810544602741206,
    timestamp: 1608739511516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19444528489354707,
    timestamp: 1608739512518
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4251915639017688,
    timestamp: 1608739513525
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27986372185134817,
    timestamp: 1608739514512
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.03304632377322401,
    timestamp: 1608739515514
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0,
    timestamp: 1608739516528
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4358819921983575,
    timestamp: 1608739517518
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3197851261753892,
    timestamp: 1608739518524
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5214753321760269,
    timestamp: 1608739519516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3796771974157193,
    timestamp: 1608739520514
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4286942873690354,
    timestamp: 1608739521517
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1939611921929594,
    timestamp: 1608739522513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.20547909107073858,
    timestamp: 1608739523522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22707525155399055,
    timestamp: 1608739524516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4119676100612085,
    timestamp: 1608739525522
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5021785987085409,
    timestamp: 1608739526510
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.06913085591065284,
    timestamp: 1608739527511
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.13115200264941967,
    timestamp: 1608739528517
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44666345933085616,
    timestamp: 1608739529510
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3093236950224569,
    timestamp: 1608739530513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5708121166001596,
    timestamp: 1608739531513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4965050328888191,
    timestamp: 1608739532509
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4967143430528599,
    timestamp: 1608739533520
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.421444670794268,
    timestamp: 1608739534513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3807245984434322,
    timestamp: 1608739535509
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1330015012133609,
    timestamp: 1608739536513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4824668231054724,
    timestamp: 1608739537508
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2780218689366746,
    timestamp: 1608739538513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4703570465378146,
    timestamp: 1608739539510
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.39693125811932206,
    timestamp: 1608739540511
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.07819979512678903,
    timestamp: 1608739541509
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2557381296936991,
    timestamp: 1608739542513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44581126559467427,
    timestamp: 1608739543511
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.06301518047756062,
    timestamp: 1608739544512
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42145003379844265,
    timestamp: 1608739545512
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21435489292184917,
    timestamp: 1608739546511
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5621274613739438,
    timestamp: 1608739547511
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47721241647113066,
    timestamp: 1608739548511
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23520517338238683,
    timestamp: 1608739549510
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49966162229862837,
    timestamp: 1608739550508
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4209393424449017,
    timestamp: 1608739551508
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3780388253275668,
    timestamp: 1608739552510
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28234186468881994,
    timestamp: 1608739553513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4628238756674727,
    timestamp: 1608739554507
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3972175436319428,
    timestamp: 1608739555507
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5955740104000914,
    timestamp: 1608739556505
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5209590159960863,
    timestamp: 1608739557509
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5042003508952497,
    timestamp: 1608739558514
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5028358481265687,
    timestamp: 1608739559506
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.464340654437268,
    timestamp: 1608739560508
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40941491909066113,
    timestamp: 1608739561526
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3363827025763789,
    timestamp: 1608739562506
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5068144297659124,
    timestamp: 1608739563516
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.457937959709696,
    timestamp: 1608739564506
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41286167454852885,
    timestamp: 1608739565507
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5217541727286411,
    timestamp: 1608739566513
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5497167017246113,
    timestamp: 1608739567504
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3132373159790534,
    timestamp: 1608739568509
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5136997566909272,
    timestamp: 1608739569504
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2779821967663861,
    timestamp: 1608739570502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42141337434693327,
    timestamp: 1608739571504
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45538841424041243,
    timestamp: 1608739572503
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2659966990532375,
    timestamp: 1608739573507
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38973724510771696,
    timestamp: 1608739574502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32896179189685226,
    timestamp: 1608739575502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6333307582280603,
    timestamp: 1608739576502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4964055290631956,
    timestamp: 1608739577503
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5191044532462503,
    timestamp: 1608739578507
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4109083954754452,
    timestamp: 1608739579505
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31751124794841507,
    timestamp: 1608739580502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5745334451579931,
    timestamp: 1608739581505
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38470702518499,
    timestamp: 1608739582499
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3805637013968356,
    timestamp: 1608739583509
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3123566927855521,
    timestamp: 1608739584504
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2021907051489463,
    timestamp: 1608739585505
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2710817365769972,
    timestamp: 1608739586502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.503115020567432,
    timestamp: 1608739587502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4505363825470293,
    timestamp: 1608739588506
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4251506940578131,
    timestamp: 1608739589503
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46507328321860386,
    timestamp: 1608739590504
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49363495073974817,
    timestamp: 1608739591502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4173826516249708,
    timestamp: 1608739592500
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4444965332075699,
    timestamp: 1608739593503
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.270463381846705,
    timestamp: 1608739594500
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24931527855736857,
    timestamp: 1608739595500
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4506112037663941,
    timestamp: 1608739596501
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46823680467880424,
    timestamp: 1608739597502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2744473951177519,
    timestamp: 1608739598500
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43902018998690134,
    timestamp: 1608739599501
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3372624861956463,
    timestamp: 1608739600495
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3256176877040413,
    timestamp: 1608739601501
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33038085768341685,
    timestamp: 1608739602497
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3784706977366875,
    timestamp: 1608739603496
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4203687827202391,
    timestamp: 1608739604489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34282215928915777,
    timestamp: 1608739605491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2844693120887876,
    timestamp: 1608739606490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27048919452766396,
    timestamp: 1608739607488
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3758506042838265,
    timestamp: 1608739608493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3318389181626975,
    timestamp: 1608739609494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3526452270722553,
    timestamp: 1608739610493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38044237171744905,
    timestamp: 1608739611490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6232428242412398,
    timestamp: 1608739612492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2399030034792739,
    timestamp: 1608739613499
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3188983904278063,
    timestamp: 1608739614491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30622783342702536,
    timestamp: 1608739615489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5363386262166342,
    timestamp: 1608739616514
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3884399635930768,
    timestamp: 1608739617497
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40257778320436,
    timestamp: 1608739618503
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3870653139346566,
    timestamp: 1608739619498
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4934527321694376,
    timestamp: 1608739620501
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43583599322046107,
    timestamp: 1608739621504
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4314068801708615,
    timestamp: 1608739622495
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4088182173347693,
    timestamp: 1608739623501
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40477728799518836,
    timestamp: 1608739624492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4064531740208375,
    timestamp: 1608739625493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.533019457023261,
    timestamp: 1608739626496
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36382650114180154,
    timestamp: 1608739627493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49008628910461216,
    timestamp: 1608739628500
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43490020256140344,
    timestamp: 1608739629495
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2933166765117642,
    timestamp: 1608739630493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4209249781248628,
    timestamp: 1608739631491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.350863450417267,
    timestamp: 1608739632498
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40752571155923556,
    timestamp: 1608739633497
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2728218326036871,
    timestamp: 1608739634494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3120986273946435,
    timestamp: 1608739635494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5191139940331255,
    timestamp: 1608739636491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2746898357301608,
    timestamp: 1608739637490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40082038648529456,
    timestamp: 1608739638497
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44267427066644716,
    timestamp: 1608739639491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.1026155366573313,
    timestamp: 1608739640491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33378692837558627,
    timestamp: 1608739641494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.14202863026163748,
    timestamp: 1608739642494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23391339560680877,
    timestamp: 1608739643497
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2546057131721682,
    timestamp: 1608739644495
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4903376471819383,
    timestamp: 1608739645490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5280417449049035,
    timestamp: 1608739646489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3013215281554026,
    timestamp: 1608739647490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5653093985930585,
    timestamp: 1608739648498
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4340988941933239,
    timestamp: 1608739649493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5095981285096597,
    timestamp: 1608739650493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4463202428219832,
    timestamp: 1608739651492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4551161142851642,
    timestamp: 1608739652489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4701401231585679,
    timestamp: 1608739653498
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4817523423487414,
    timestamp: 1608739654493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4600674306789055,
    timestamp: 1608739655494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3948909116139582,
    timestamp: 1608739656492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6150570376722033,
    timestamp: 1608739657492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2789675342323679,
    timestamp: 1608739658494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.18346743859262665,
    timestamp: 1608739659491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3507564675774308,
    timestamp: 1608739660491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.326096016411796,
    timestamp: 1608739661489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4755759519546003,
    timestamp: 1608739662489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5619362171856888,
    timestamp: 1608739663495
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.545795325372701,
    timestamp: 1608739664492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3881128537805725,
    timestamp: 1608739665493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4339925739653494,
    timestamp: 1608739666493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5620678075961736,
    timestamp: 1608739667488
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6047024420157483,
    timestamp: 1608739668498
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49489648710376205,
    timestamp: 1608739669487
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2599993960912411,
    timestamp: 1608739670493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4348548211738751,
    timestamp: 1608739671491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19549235020774292,
    timestamp: 1608739672490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4687769704270003,
    timestamp: 1608739673495
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3897666931250061,
    timestamp: 1608739674489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27249386049731394,
    timestamp: 1608739675490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.529613871342655,
    timestamp: 1608739676488
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4925376063108845,
    timestamp: 1608739677491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40843858522466914,
    timestamp: 1608739678494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3930989614597985,
    timestamp: 1608739679490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.516963137419166,
    timestamp: 1608739680487
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4626170191976534,
    timestamp: 1608739681490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3184973477007931,
    timestamp: 1608739682490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2195331067610771,
    timestamp: 1608739683494
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.493280047089166,
    timestamp: 1608739684486
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44159108975966666,
    timestamp: 1608739685485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3661489284310682,
    timestamp: 1608739686486
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3610321687715895,
    timestamp: 1608739687488
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4943396436342804,
    timestamp: 1608739688493
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5250868426705495,
    timestamp: 1608739689502
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.21715183520749143,
    timestamp: 1608739690489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.286852970247392,
    timestamp: 1608739691489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.09020149330702609,
    timestamp: 1608739692488
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.06304703594426342,
    timestamp: 1608739693491
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.11377786487644254,
    timestamp: 1608739694492
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4869512908015618,
    timestamp: 1608739695483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4612204970833368,
    timestamp: 1608739696484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4096424060637598,
    timestamp: 1608739697483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5653054633988321,
    timestamp: 1608739698490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5062746282495585,
    timestamp: 1608739699485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4726594124408256,
    timestamp: 1608739700487
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.268401327916917,
    timestamp: 1608739701484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2810322788774949,
    timestamp: 1608739702483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44736877107011985,
    timestamp: 1608739703488
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5363829069527772,
    timestamp: 1608739704486
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4376475007588709,
    timestamp: 1608739705481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5734828751715859,
    timestamp: 1608739706485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4191606046040517,
    timestamp: 1608739707487
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3769796083874545,
    timestamp: 1608739708489
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.429986785314372,
    timestamp: 1608739709487
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4566435187023023,
    timestamp: 1608739710485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5413187117418689,
    timestamp: 1608739711485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6053079129243238,
    timestamp: 1608739712483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4058080103007402,
    timestamp: 1608739713490
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4873390866835823,
    timestamp: 1608739714483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.566607546155629,
    timestamp: 1608739715480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5308809815853387,
    timestamp: 1608739716482
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5027808232744564,
    timestamp: 1608739717486
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5827109198926465,
    timestamp: 1608739718485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35581342710559694,
    timestamp: 1608739719484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5621724103649028,
    timestamp: 1608739720480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43553790200505754,
    timestamp: 1608739721485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4553359998927426,
    timestamp: 1608739722478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4200663628119469,
    timestamp: 1608739723487
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4512714970516074,
    timestamp: 1608739724483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5346868934456163,
    timestamp: 1608739725483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5137278567210655,
    timestamp: 1608739726481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5068575010642811,
    timestamp: 1608739727481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4756694808806772,
    timestamp: 1608739728484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5106597796762982,
    timestamp: 1608739729484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4327314158983955,
    timestamp: 1608739730481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40400744897986385,
    timestamp: 1608739731483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3722115330588547,
    timestamp: 1608739732482
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5431631344499888,
    timestamp: 1608739733485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3314965736083347,
    timestamp: 1608739734484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2675755476975109,
    timestamp: 1608739735483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3222535939637382,
    timestamp: 1608739736480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2558881550510051,
    timestamp: 1608739737480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4082411721018938,
    timestamp: 1608739738486
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2249000800909478,
    timestamp: 1608739739480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4448272151318943,
    timestamp: 1608739740479
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.14895869087849573,
    timestamp: 1608739741480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.510354204018615,
    timestamp: 1608739742481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.25778806836018153,
    timestamp: 1608739743730
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3386181766985916,
    timestamp: 1608739744481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3476473594767453,
    timestamp: 1608739745480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4002563281992315,
    timestamp: 1608739746480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23614487967432327,
    timestamp: 1608739747482
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19841668353064018,
    timestamp: 1608739748484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4045613846443515,
    timestamp: 1608739749479
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28807537845714337,
    timestamp: 1608739750478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5460605176228668,
    timestamp: 1608739751478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26506708770172627,
    timestamp: 1608739752478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3533827576041653,
    timestamp: 1608739753483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2916950621092569,
    timestamp: 1608739754474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.25192144772969144,
    timestamp: 1608739755476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2915082600941318,
    timestamp: 1608739756478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32013817803957706,
    timestamp: 1608739757477
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3171329214914572,
    timestamp: 1608739758485
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2747258241956934,
    timestamp: 1608739759478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38281495326549875,
    timestamp: 1608739760473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26159745252561356,
    timestamp: 1608739761475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2791096825708376,
    timestamp: 1608739762478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3482300617347842,
    timestamp: 1608739763484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34937650855556207,
    timestamp: 1608739764481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.45737614661169335,
    timestamp: 1608739765474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4091610052481177,
    timestamp: 1608739766474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24316870352932066,
    timestamp: 1608739767474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.28044631204310766,
    timestamp: 1608739768484
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33137812931189553,
    timestamp: 1608739769475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.304643982407881,
    timestamp: 1608739770478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4153284089921023,
    timestamp: 1608739771475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48145088489079235,
    timestamp: 1608739772473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3617866485003332,
    timestamp: 1608739773482
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5384895172029948,
    timestamp: 1608739774478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44741019433804163,
    timestamp: 1608739775476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4150517403692034,
    timestamp: 1608739776477
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5121950384831281,
    timestamp: 1608739777474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.43664576077455497,
    timestamp: 1608739778481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.24381650221398443,
    timestamp: 1608739779476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3468332259716628,
    timestamp: 1608739780480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2202855965843098,
    timestamp: 1608739781475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6738944648341537,
    timestamp: 1608739782479
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4564449853033075,
    timestamp: 1608739783480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3024111924307827,
    timestamp: 1608739784478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.440300224207345,
    timestamp: 1608739785474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5214843341718105,
    timestamp: 1608739786476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2798359516472425,
    timestamp: 1608739787480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36971741821033755,
    timestamp: 1608739788482
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30713175679224103,
    timestamp: 1608739789476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4127105184504002,
    timestamp: 1608739790480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.494134526350142,
    timestamp: 1608739791480
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41879438542870195,
    timestamp: 1608739792479
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5028413884663907,
    timestamp: 1608739793497
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.41342081555805144,
    timestamp: 1608739794476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22403714012321518,
    timestamp: 1608739795478
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4259160681108331,
    timestamp: 1608739796475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3985701038204409,
    timestamp: 1608739797474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3568881788951649,
    timestamp: 1608739798483
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4299312498131549,
    timestamp: 1608739799476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3706819421548335,
    timestamp: 1608739800475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44167295837297865,
    timestamp: 1608739801473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3603451962668762,
    timestamp: 1608739802474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4238712091239755,
    timestamp: 1608739803479
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4349194058423235,
    timestamp: 1608739804476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2932007430141699,
    timestamp: 1608739805474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.34651129631384076,
    timestamp: 1608739806473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4627544701139537,
    timestamp: 1608739807472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42585993362970753,
    timestamp: 1608739808477
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4595138436498648,
    timestamp: 1608739809475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.6097109436858625,
    timestamp: 1608739810473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5026557077181133,
    timestamp: 1608739811472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3463844131418056,
    timestamp: 1608739812476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30500662874039003,
    timestamp: 1608739813477
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5288620927140276,
    timestamp: 1608739814472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42396924597141783,
    timestamp: 1608739815472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5351354671616948,
    timestamp: 1608739816472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.22951648605924516,
    timestamp: 1608739817476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4332419816063828,
    timestamp: 1608739818479
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5496337357431863,
    timestamp: 1608739819473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48097028164613675,
    timestamp: 1608739820471
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3916881169760668,
    timestamp: 1608739821472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.46696402943893217,
    timestamp: 1608739822474
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.57023245562819,
    timestamp: 1608739823475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47447105339820034,
    timestamp: 1608739824470
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3871095883700966,
    timestamp: 1608739825482
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47327002597069656,
    timestamp: 1608739826467
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.44500893763012234,
    timestamp: 1608739827465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27412483548596994,
    timestamp: 1608739828471
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31002591649943984,
    timestamp: 1608739829464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37910767600018175,
    timestamp: 1608739830465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.30956186624092724,
    timestamp: 1608739831471
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3766517369692286,
    timestamp: 1608739832465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4070035654905813,
    timestamp: 1608739833469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2723599059555098,
    timestamp: 1608739834469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3535929628103634,
    timestamp: 1608739835470
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32345141909421476,
    timestamp: 1608739836467
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31021879302460015,
    timestamp: 1608739837464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.37724203213306545,
    timestamp: 1608739838470
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.15656999391998055,
    timestamp: 1608739839464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4536840203932076,
    timestamp: 1608739840465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.49564590966720284,
    timestamp: 1608739841469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.27239283254065827,
    timestamp: 1608739842467
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4138316410158046,
    timestamp: 1608739843475
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4283832342786108,
    timestamp: 1608739844465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4317790750757682,
    timestamp: 1608739845467
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4886300355982507,
    timestamp: 1608739846463
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3298902136995253,
    timestamp: 1608739847465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3825828123256601,
    timestamp: 1608739848473
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4953295694225467,
    timestamp: 1608739849472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23757023926065712,
    timestamp: 1608739850469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2956407538436503,
    timestamp: 1608739851466
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.33118019785120534,
    timestamp: 1608739852470
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3886375331603875,
    timestamp: 1608739853476
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3503883641527387,
    timestamp: 1608739854467
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4888826456369583,
    timestamp: 1608739855469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.31042459031906355,
    timestamp: 1608739856464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.32068455942605495,
    timestamp: 1608739857469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.17541312347651164,
    timestamp: 1608739858470
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.38731225724675994,
    timestamp: 1608739859467
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.42065923131416566,
    timestamp: 1608739860466
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2828040027415119,
    timestamp: 1608739861464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.36363848063700965,
    timestamp: 1608739862464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.40019047156933873,
    timestamp: 1608739863472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3192579379360085,
    timestamp: 1608739864464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.5464344867073185,
    timestamp: 1608739865469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2294847250985057,
    timestamp: 1608739866466
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2604172480419693,
    timestamp: 1608739867466
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2687749818351412,
    timestamp: 1608739868465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2783804149131637,
    timestamp: 1608739869461
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3433160799316912,
    timestamp: 1608739870461
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48304012718808087,
    timestamp: 1608739871464
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.4809461284947653,
    timestamp: 1608739872481
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.35580820814749736,
    timestamp: 1608739873468
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.48357091472947444,
    timestamp: 1608739874465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.3423095646316902,
    timestamp: 1608739875465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.26224921187086875,
    timestamp: 1608739876463
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.23427563381129787,
    timestamp: 1608739877469
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.19032258915347863,
    timestamp: 1608739878472
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.47828993394181957,
    timestamp: 1608739879465
  },
  {
    label: 'focus',
    metric: 'awareness',
    probability: 0.2987377982104538,
    timestamp: 1608739880464
  }
];

export const simulatedFocus = from(focusData).pipe(concatMap(v => of(v).pipe(delay(1000))));
