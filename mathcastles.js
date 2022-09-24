const terraform = require('./terraforms');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

let test = ["1119119999111991199991111111117119119919999991999199999111911611","1991999999999999999999999199111119999999999999999999999999999111","1999999999999999999999999999911111999999999999999999999999099191","1119999999999999999999999909999119199999999999999999999999009991","1199999999999999999999999990999111199999999999999999999999900991","1110999999999999999999999999099111109222222229992222222299990911","1110222226622222222222662290001111102222266222922222226622200001","1100222222222999222222222290000110002222222229992222222222900001","1000922222229999992222222990000110009999999999999999999999900001","1000999999999999999999999990000110009999999999999999999999900001","1000999999999999999999999990000111009999999999999999999999900011","1110999999999999999999999999111111111999999999999989999999991171","1111199999988888889999999999911111111199999999999999999999999911","1111119999999999999999999999999911111119999999999999999999999999","1116111199999999999999919999999911171111199999999999991999999999","1171111111111111111111999999999911111111111111111119999999999999"];

let anon = ["0011111111110000000111111111110000001111887766555556677811111000","0000016776432222223223355610000000000553444433333333333433800000","0000445544444433333334446477000011004456676534433334567765770011","1111556777795344433797777666111111115564333597344477542236661111","0011555433226733449422223466110000005544333334333342333234550000","0000554474443443344334443455000000075547999983433438999953557000","1007556957773443344378849555701111175543333334443433222232557111","1117444433333443334222222355711111174444332234433342222233447111","1107554333334443234322222355700100086654444464432343333233558000","0008665654544696466333333555000000006657933335999963323974660000","0000065369779992299767972466000000001655569997655779997435571000","0011175555433257763234434561111011111176566433322223344363611111","1111107665554467794445355560111111110007665542499722434556000111","1110000066553326932444557000001111000000066542379523455700000001","1000000000765337952457000000000000000000000754269535600000000000","0000000000006766666700000000000000000000000000000000000000000000"];

let anon2 = ["8888888888926655555662888855678888888888264133333313311588856677","8888888645411111111111131688566688888851444411111111111411888555","8888845544444411111114446428888888888456626514411114562265288888","8888856222295144411292222668888868888564111592144422543316688888","6688855411336211449433331468888866688544111114111143111314588888","6688854464441441144111111458888868882546629921411416995441528888","8888252656661441144156644552888888882541111114441411333313528888","8888244411111441114333333152888888882444113314411143333311428888","8888254111114441314133333152888888869654444464413141111311598888","8666965654544696466111111558888866688652911115999961131224688888","6886885169229923399262923468888866888865569992655229992415288888","7688882555411352261314414688888877688826566411133331144161888888","7777888665554462224445155588888878886682665543499233414558888888","8888876866551136913444552888888868008868866543129531455288888888","6600868888265112953452888888888866086888888254369515688888888888","5455888888886435911288888888888844455588888892666669888888888888"];

let anon3 = ["1111111111111111111111111111111111111111887766555556677811111111","1111116776432222223223355611111111111553444433333333333433811111","1111445544444433333334446477111111114456676534433334567765771111","1111556777795344433797777666111111115564333597344477542236661111","1111555433226733449422223466111111115544333334333342333234551111","1111554474443443344333333455111111175547789983433438997443557111","1117556757773443344378844555711111175543333334443433222232557111","1117444433333443334222222355711111174444332234433342222233447111","1117554333334443234322222355711111186654444464432343333233558111","1118665654544696466333333555111111116657933335999963323774661111","1111165369779972299767972466111111111655569997655779997435571111","1111175555433257763234434561111111111176566433322223344363611111","1111117665554467794445355561111111111117665542499722434556111111","1111111166553326932444557111111111111111166542379523455711111111","1111111111765337952457111111011111111111111754269535611111111111","1111111111116766666711111111111111111111111111111111111111111111"];

let anon4 = ["0000000000000000000000000000000000000000887766555556677800000000","0000006776432222223223355600000000000553444433333333333433800000","0000445544444433333334446477000000004456676534433334567765770000","0000556777795344433797777666000000005564333597344477542236660000","0000555433226733449422223466000000005544333334333342333234550000","0000554474443443344333333455000000075547789983433438997443557000","0007556757773443344378844555700000075543333334443433222232557000","0007444433333443334222222355700000074444332234433342222233447000","0007554333334443234322222355700000086654444464432343333233558000","0008665654544696466333333555000000006657933335999963323774660000","0000065369779972299767972466000000000655569997655779997435570000","0000075555433257763234434560000000000076566433322223344363600000","0000007665554467794445355560000000000007665542499722434556000000","0000000066553326932444557000000000000000066542379523455700000000","0000000000765337952457000000000000000000000754269535600000000000","0000000000006766666700000000000000000000000000000000000000000000",];

let hoodie = ["2222201111111111111111111102222222220111887766555556677811102222","2220116776432222223223355611022222011553444433333333333433811022","2201445544444433333334446477102222014456676534433334567765771022","2201556777795344433797777666102220115564333597344477542236661102","2011555433226733449422223466110220115544333334333342333234551102","2011554474443443344334443455110220175547999983433438999953557102","2017556957773443344378849555710220175543333334443433222232557102","2017444433333443334222222355710220174444332234433342222233447102","2017554333334443234322222355710220186654444464432343333233558102","2018665654544696466333333555110220116657933335999963323974661102","2011165369779992299767972466110220111655569997655779997435571102","2011175555433258863234434561110220111176566433322223344363611102","2001117665554468894445355561100220011117665542499722434556111002","2000111166553326932444557111000220001111166542379523455711110002","0000011111765337952457111110000000000111111754269535611111100000","0000001111116766666711111100000000000011111111111111111111000000"];

let colortest = ["0000000000000000000000000000000000000000000000000000000000000000","1111111111111111111111111111111111111111111111111111111111111111","2222222222222222222222222222222222222222222222222222222222222222","3333333333333333333333333333333333333333333333333333333333333333","4444444444444444444444444444444444444444444444444444444444444444","5555555555555555555555555555555555555555555555555555555555555555","6666666666666666666666666666666666666666666666666666666666666666","7777777777777777777777777777777777777777777777777777777777777777","8888888888888888888888888888888888888888888888888888888888888888","0000000000000000000000000000000000000000000000000000000000000000","1111111111111111111111111111111111111111111111111111111111111111","2222222222222222222222222222222222222222222222222222222222222222","3333333333333333333333333333333333333333333333333333333333333333","4444444444444444444444444444444444444444444444444444444444444444","5555555555555555555555555555555555555555555555555555555555555555","6666666666666666666666666666666666666666666666666666666666666666"];

let colortest2 = ["0000000000000000000000000000000000000000000000000000000000000000","1111111111111111111111111111111111111111111111111111111111111111","9999999999999999999999999999999999999999999999999999999999999999","2222222222222222222222222222222222222222222222222222222222222222","9999999999999999999999999999999999999999999999999999999999999999","3333333333333333333333333333333333333333333333333333333333333333","9999999999999999999999999999999999999999999999999999999999999999","4444444444444444444444444444444444444444444444444444444444444444","9999999999999999999999999999999999999999999999999999999999999999","5555555555555555555555555555555555555555555555555555555555555555","9999999999999999999999999999999999999999999999999999999999999999","6666666666666666666666666666666666666666666666666666666666666666","9999999999999999999999999999999999999999999999999999999999999999","7777777777777777777777777777777777777777777777777777777777777777","9999999999999999999999999999999999999999999999999999999999999999","8888888888888888888888888888888888888888888888888888888888888888"];

let gratio = ["9999933955559777796699999955999911119339555597777966933339559193","1111933955559777796693333955919311119339555597777966933339559193","1111933955559777796693333955919311119339555597777966933339559193","1111933955559777796693333955919311119339555597777966933339559199","1111933955559777796699999955919511119339555597777966922229559195","1111933955559777796692222955919511119339555597777966922229559995","1111933999999777796692222955979511119339999997777966922229559795","1111933966669777796692222955979511119339666697777966922229559795","1111933966669777796692222955979599999339666697777966922229999795","2222933966669777799992222999979922229339666697777944922229449799","2222933966669777794492222944999922229339666697777944922229449692","2222933966669777794492222944969222229339666697777944999999449692","2222933966669777794491111944969222229339666697777944911119449692","9999933966669777794491111944969299449339666697777944911119449692","9944933966669777794491111944969299449339666697777944911119449692","9944933966669777794491111944969999449999666699999944911119999999"];

let skull = ["0000000000000000000000000000000000012210000000000000000064466500","0012885000000333334000064884550011288841004438888884346558853555","1888884244888888888884455888845528888852288888888888884458888845","2883588348888888888888888888885125434888888888888888888888448211","0246668888888888888888888532210000212268888888888888888853221000","0000126888888888888888884321000000000068854334888433348753210000","0000003884999948899999587210000000000028849999588399995872100000","0000003883999488853993884210000000000168885458834885588843100000","0000016888888839388888884310000000001255888885999488888672100000","0000012548888599948888444200000000000125588888544888883221001000","0000001148888888888888221001310000000012288888888888883210037210","0000233258854494944688522237720000333665888545554545888523677100","0345565888888888888888885667700004888888844888888888858888884200","0488888802348888888834238888432002448882002345888843220288224320","0024488000022342443220012221221000243340000000000000000111211000","0002200000000000000000000010000000000000000000000000000000000000"];

let xcopy = ["0000000000000000099999990999999900000999999990000000000099999999","9099999999999999999999999999999990977999990000000009999999966666","9077999000000000000000009999966690999900000777777777077777777706","9099670077700000000070000099990999999000000000000000000000999909","9999990099900000000999999999990909999999979990000099966899698909","0996998997989900098999898968980909789898778789000986986686986809","0989989987898960098698998686698909987899989978900968689998966999","9999899999999660099689000909999999999000009990990999900099999999","9999999000000090990000099999999999999999000009999990000997799999","0999999990009900990000999997779909999999990009909000099999999799","0999999999909999900999999999999906690077799999999999999999099999","0669000667677777779990099909999999999000060666666669009999099999","9777797900000000000000999099099990999999999000000000999990990999","9097777999999999999999770799099990996667777977999999900099900999","9999966999999677777700999900009990099996990099999967779999900099","9990009999999999999999999699009999990099999999999999999966999999"];

let xcopy2 = ["0009000000000000099999990999992100000999999990000000000099999211","9099999999999999999999999999321190933999990000000009999999932222","2033999000000000000000009999322220999900000333333333033333333302","9099230033300000000030000099990399999000000000000000000000999909","9999990099900000000999999999990909999999939990000099922899298909","0992998993989900098999898928980909389898338389000982982282982809","0989989983898920098298998282298909983899989938900928289998922999","9999899999999220099289000909999999999000009990990999900099999999","9999999000000090990000099999999099999999000009999990000993399990","0999999990009900990000999993330990999999990009909000099999999322","9999999999999999900999999999999292290033399999999999999999099990","9229000223233333339990099909999999999000020222222239009999099999","9333393900000000000000999099099990999999999000000000999990990999","9093333999999999999999330399099990992223333933999999900099900999","9999922999999233333300999900009990099992990099999923339999900099","9990009999999999999999999239009999990099999999999999999922999999",];

let xcopy3 = ["1111111119999999999999999911111111111199999999999999999999916111","1611999999999999999999999991111111119999999999999999999999991111","1119999999999999999999999999111111199999999999999888999999991161","1199999999999998889999999999911111999989999998888999999999989111","1999889998888888889999989989911119988888888888888889998998889911","1988888888888888888888888889991119880000008888888880000088998911","1980999990888888880999990888991119800922290888888092229008899991","1988800099908888099900088889999119888888000888888000888888899991","1998888888889988888888888889999119998888888999988888888888999991","1999988888999999888888888999999119999999999999999988888899999911","1999999999999999999999999999911119999999999990099999990099911611","1999990099999000999990009991111119999000900090009900900099991111","1119900090009000900090099999991111199009900090099000999999999999","1111999990009999990099999999999911119999990099999999999999999999","1111999999999999999999999119999911119999999999999999999111999999","1161111111111111111111111999999911111111111111111111111999999999"];

let xcopy4 = ["1111111111111111111111111111661111111119999999999999999999916111","1611999999999999999999999991111111119999999999999999999999991111","1119999999999999999999999999111111199999999999999888999999991161","1199999999999998889999999999911111999989999998888999999999989111","1999889998888888889999989989911119988888888888888889998998889911","1988888888888888888888888889991119880000008888888880000088998911","1980999990888888880999990888991119800922290888888092229008899991","1988800099908888099900088889999119888888000888888000888888899991","1998888888889988888888888889999119998888888999988888888888999991","1999988888999999888888888999999119999999999999999988888899999911","1999999999999999999999999999911119999999900900999900999999911611","1999990090090090090090099991111119999990999999900999900999991111","1119999999999009999999999999991111199990090090090090099999999999","1111999009009999009099999999999911119999999999999999999999999999","1111999999999999999999999119999996119999999999999999999111999999","9961111111111111111111111999999999911111111111111111111999999999"];

let xcopy5 = ["1111111111111111111111111111661111111111999999999999999999916111","1611119999999999999999999999111111119999999999999999989999991111","1119999999999999999889999999911111199999999999999888999999999161","1199999899999998889999999999911111999889999998888999999999989911","1999889998888888889999989989991119988888888888888889998998889911","1988888888888888888888888889991119880000008888888880000088998911","1980999990888888880999990888991119800922290888888092229008899991","1988800099908888099900088889999119888888000888888000888888899991","1998888888889988888888888889999119998888888999988888888888999991","1999988888999999888888888999999119999999999999999988888899999991","1999999999999999999999999999999119999900999999999990900999991611","1999999090099990090090099999111119999999900900900999999999999111","1119999999990099999009999999999111199990099999990090999999999999","1111999009009009009999999999999911119999990090099999999999999999","1111999999999999999999999119999996111999999999999999999111999999","9961111111111111111111111999999999911111111111111111111999999999"];

let xcopy6 = ["1111111111111111111111111111221111111111999999999999999999912111","1211119999999999999999999999111111119999999999999999989999991111","1119999999999999999889999999911111199999999999999888999999999121","1199999899999998889999999999911111999889999998888999999999989911","1999889998888888889999989989991119988888888888888889998998889911","1988888888888888888888888889991119886666668888888886666688998911","1986999996888888886999996888991119866922296888888692229668899991","1988866699968888699966688889999119888888666888888666888888899991","1998888888889988888888888889999119998888888999988888888888999991","1999988888999999888888888999999119999999999999999988888899999991","1999999999999999999999999999999119999966999999999996966999991211","1999999696699996696696699999111119999999966966966999999999999111","1119999999996699999669999999999111199996699999996696999999999999","1111999669669669669999999999999911119999996696699999999999999999","1111999999999999999999999119999992111999999999999999999111999999","9921111111111111111111111999999999911111111111111111111999999999"];

let bmp = ['9999999999333222222223345577999997999889333222222000223344559999','9398863332222200000000223457999931866333222220000000000223599999','1186433322220000000000002359999911664332222002222220000223579999','1166333222222222222222223379999971421133220222000000222233399999','7154220332202226863002222359999944785533332168888888302223599799','4699998533268899999862222359977517699999866469999009982222397556','7699900995444699600136222237259291889109922244666643332222365522','7167778892222333333322422333366161667668721222333332221422233461','6136666832112222332221112223444661333369221122222222111112344466','7134336332111222222211111233446607353361322112222222211112334466','0834536662222222222222122223466100235599629948111222232222246601','0035758999522211112233323234660000053738833221111112233334446000','0005376332222222221122333646000000003769999999999311233346600000','0000569999551111111123344600000000005377955665221111233456000000','0000026776642222211224455600000000000367442111122222345966000000','0000003773222111222335963199000000009917733322112255997333199900'];

let fire = ["1111111111333111111111111111111111111311111388881111111411111111","1111811111118888811111184111111111318811111118888881188881111111","1113888811111888888888881111311111188888881188888888888811118811","3111888888888888888888888111188118111888888888888888888888118881","1888888888888888888888888888881111888888888888888888888888888811","1818888888888888888888888888888111888888888888888888888888888811","1888888888888888888888888888888811888888888888888888000088888881","1188888888888888888099990888881119888888888888888809999990888891","1988888000008888880999999088889119888809999908888809922990888891","1998888888888889988099990888899119999888888888999888000088889991","1999999888899999998888888899999119999999999999999999999999999911","1199999999999999999999999999911111199999999999999999999999999111","1119990999999999999999990999111111119990999099909990999099911111","1111199909090909090909099911111111511199909990999099909991111111","1111111999999999999999991111111111111111199999999999991111111161","1111111111199999999911111111117111111111111111111111111111111711"];

let fire_signed = ["1111111111333111111111111111111111111311111388881111111411111111","1111811111118888811111184111111111318811111118888881188881111111","1113888811111888888888881111311111188888881188888888888811118811","3111888888888888888888888111188118111888888888888888888888118881","1888888888888888888888888888881111888888888888888888888888888811","1818888888888888888888888888888111888888888888888888888888888811","1888888888888888888888888888888811888888888888888888000088888881","1188888888888888888099990888881119888888888888888809999990888891","1988888000008888880999999088889119888809999908888809922990888891","1998888888888889988099990888899119999888888888999888000088889991","1999999888899999998888888899999119999999999999999999999999999911","1199999999999999999999999999911111199999999999999999999999999111","1119990999999999999999990999111111119990999099909990999099911111","1111199909090909090909099911111111511199909990999099909991111111","1111111999999999999999991111111111111111199999999999991111111161","1111111111199999999911111111117115591419156915691539111111111711"];

let vitalik = ["9999999999433222222223345577999997999889433222222111223344559999","9498864432222211111111223457999942866443222221111111111223599999","2286443322221111111111112359999922664432222112222221111223579999","2266443222222222222222223379999972432243221222111111222233399999","7254332432212226863112222359999955886644332168888888312223599799","5799998643268899999862222359977528899999866469999009982222397556","8799900995444699600136222237259292889109922244666643332222365522","8278888892222333333322422333366172778778821222333332221422233461","7247777832112222332221112223444672444479221122222222111112344466","8245447332111222222211111233446607464471322112222222211112334466","0845647772222222222222122223466100346699729958211222232222246601","0046868999633221112233323234660000063838844322111112233334446000","0006387443322222221122333646000000003879999999999311233346600000","0000679999551111111123344600000000006388955665221111233456000000","0000027886642222211224455600000000000378442111122222345966000000","0000003883222111222335963199000000009918833322112255997333199900"]

let threep = ['9989988733221111111122333788899999999973333111111111123337889999','9999997733211111111112337778998999899877322211111111112337799999','9999987331211222222111113778999990000000000000000000000000000009','9009999999999990099999999999900999098888888888900977777777779089','9908888888888880077777777777708998088888888888800777777777777099','9808888888888800007777777777708998088888888888033077777777777089','9800000000000003300000000000009999898333333333311333333333389699','9999937711111431131111127738999999949987311166811821133377989999','9999998733111999899613357898989999999987533118999997113578899899','9999998755331889988113358889899999999888753333888833535589899999','9999999875558999999877578999999999999988779999899899987798999999','9999999887558776677855789899999999999999877759999995777898999999','9999998988887588865778899899999999999998988332111123788999999999','9999999899853211112358999999999999999999899866212535899888899999','9999987989998868888899987718999999998799999999999999998869598999','9998559799998999999898877924989999893999789988999998896799729989'];

let threep2 = ['9989988733221111111122333788899999999973333111111111123337889999','9999997733211111111112337778997999499877322211111111112337799999','9999987331211222222111113778999999000000000000000000000000000099','9900888888888880077777777777009999908888888888800777777777770889','9990888888888880077777777777094999408888888888800777777777770939','9920888888888800007777777777092999808888888888033077777777770989','9980000000000003300000000000098999989333333333311333333333396999','9999937711111431131111127738999999999987311166811821133377989999','9999998733111999899613357898999999999987533118999997113578899999','9999998755331889988113358889999999999888753333888833535589899999','9999999875558999999877578999999999999988779999899899987798999999','9999999887558777373855789899999999999999877759999995777898999999','9999998988887588865778899899999999999998988332111123788999999999','9999999899853211112358999999999999999999899866212535899888899999','9999987989998868888899987718999999998779999999888899998867598999','9998557799998999999898877724989999893777789988888898896777729989'];

let threep3 = ['9989988733221111111122333788899999999973333111111111123337889999','9999997733211111111112337778998999899877322211111111112337799999','9999987331211222222111113778999990000000000000000000000000000009','9008888888888880077777777777700999088888888888800777777777777089','9908888888888880077777777777708998088888888888800777777777777099','9808888888888800007777777777708998088888888888033077777777777089','9800000000000003300000000000009999898333333333311333333333389699','9999937711111431131111127738999999949987311166811821133377989999','9999998733111999899613357898989999999987533118999997113578899899','9999998755331889988113358889899999999888753333888833535589899999','9999999875558999999877578999999999999988779999899899987798999999','9999999887558776677855789899999999999999877759999995777898999999','9999998988887588865778899899999999999998988332111123788999999999','9999999899853211112358999999999999999999899866212535899888899999','9999987989998868888899987718999999998799999999999999998869598999','9998559799998999999898877924989999893999789988999998896799729989'];

let lion = ['5555599966665589644679995555555555559900657444897344609995555555','5555906657267678945555086655555555556666752266689672255606655555','5550666552252679862522556066555599566655722526798625222566666555','9666767229522647872259275666665563666729999666144726999966666675','2666661909966212248699091766666767666661966642112266911166666743','8866667616664211426767767666674256666667667742244267767766667748','2466776666744424222666666676653852677376656252222244676666666652','5765527777423112112447677674545555743434777012212211487367975555','9555464477291777771947735799455555444954742299999994468659997555','5555697564422999994465750997555555547697225421999046641698662555','5557589612242129714542178742255555255460211211272112112777635255','5455767902110099900111087755252555566568820099999990018896454522','5514554898899989899988899645555255555537999941283169999775455555','5555555689541123311239866954555555255526683422383212988569555555','5255514736883368833387675655555153552259138979668787842875795552','7545247933876676676674228558555596428689437667666776674275558555'];

let lion2 = ['5775599969665989944679997775555577779900657444897344609997557755','7777906657267678945555086657777557776666752266689672255606677775','5570666552252679862522556066775599566655722526798625222566666557','9666767229522647872259275666667763666729999666144726999966666677','2666661909966212248699091766666767666661966642112266919166666743','8866667616664211426767767666674256666667667742244267767766667748','2466776666744424222666666676653852677376656252222244676666666652','5765527777423112112447677674545555743434777012212211487367975555','9555464477291777771947735799455555444954742299999994468659997555','5555697564422999994465750997555555547697225421999046641698662555','5597589612242129714542178742299599255460211211272112112777635299','9455767902110099900111087755252955566568820099999990018896454522','5514554898899989899988899645555255555537999941283169999775455555','5555555689541123311239866954555555255526683422383212988569555555','5255514736883368833387675655555153552259138979668787842875795552','7545247933876676676674228558995596428689437667666776674275558995'];

let ape = ['8883333333311112422111133313338888233333311111111111133333332238','8222222233355551155555555553222383225555555577777777776565533323','3325556578788888888888896655333333555889999999999999999999655533','3355889999999999999999999998555335588999999999999999999999888655','5588898990999999999990995888865555888666868886658888888555888665','8588665555655554455455555568886688888555554544334444444456688666','8888855544221123322124456668888888888855422111133111125688888858','8888888852199333379961688855858888888877511999968999915885555888','8888888751179996799911588555558888888877821168655751126885555858','8888888884211111111125568555558888885888444221122222333568585888','8858588822453322333333226855858888858885224555555595554468855888','8888888525566699999999666888888888888885688999999199998888888888','8888888888991911111919898888888888888888999999999999999988888888','8888888889899998999999998888888888888888899999999999999888888888','8888888888899999999999988888888888888888889999988889999888888888','8888888888999899888899998888888888888888889999999999999988888888'];

let punk = ['8888464625666666312556664322123388886666666666666777236777654555','5886466671266662662332777777777738566766666666636664467777788888','3777866666666666666627657778888827397666366666666666373476678889','2378776566666666666666777555678812386776666666666666777264223578','2225877666666666666666475322246732327777336666236666766733211246','2222427765666651666677243421113513423327766688777876488465321124','1154434754443333433567667731111311114881114433458888577777311112','1111111111544688766557355742111111111121111547787876459776632222','1111111148854678968334978766443211111114667534887753349976667631','1111112355753345443235997666653111112236527533334333478997766631','1111125553853333233457899877774211212345328433333345599999766665','1111222222753444444559989988777711122222217864333445699099988888','1121222222765333344489989998888811222222218777784446899899898888','1112222212876656445679979998888811122232228777644555799599989988','1122222221765433564569999998998711222222127654456444589999998887','1122222212877666543446899999998812212222127776654333486899999898'];

let mask = ['0000443444446656665756633552220000004543544456677786774355773300','0000576456556575766975554754410000045575565567688886766658554100','0007556757566766666887737765510000066565777676888987875577554200','0440655457757578888758986635561306506665667776787897667876584058','0756677656788787886878887668574807976667667787757757887867765788','0787577677008879768898006776579703985779700028886588800036764780','0076555394001987776890008641267000685685569998876357799955344670','0077756455577876524674554332368000676666655888665227888443354680','0057755655885676532833982321274000544755488865755448458843224950','0038065468888786766878888645585000040777888880777877978888873500','0000137788888777776878888765250000006565798878788688778985664000','0000577667785799999966756577700000000077787730000000007777870000','0000057877800000000000087887000000000438887000000000000878800000','0000006786800998888890077850000000000004645787689976679677300000','0000000057887889997755775600000000000000467778978867755550000000','0000000006667877776634556000000000000000006667777777745500000000'];

let anim = ['6633366666666666666666666666666663222366666666666666666666666666','3222223666666666666555556666666663222355555555666555555555666666','6633355515555555551111785555666666655555511111555155551155566666','6665555115555515155555555556666666655555555551115555111155556666','6666555555555551551155551555566666555551111115515155555555555666','6655555551555151155511155556666666655555155555115511551115566666','6666665555555551515555555555566666655555511111441511111111155566','6655511115555411415551555551155665551555555555514144551115555566','6555555544444551145545555155556666655554155554554555554445555666','6666661111111145154444111466666666665555544455554515555555666666','6655555545554444455111155555566666555555114433354555544455555566','6655551111333333544445114555666666655111114333543553341111111666','6666611116144454333333661111116666666111661166543544333611166666','2222222222222254345222222222222233333333333335432345333333333333','4444444444454332423455444444444455555555555415423251445555555555','1111111115111511211511151111111111111111111111111111111111111111'];

let putin = ['0000000000000000000000000000000000000000000000000000000000000000','0000000000000000000000000000000000000000000000000000000000000000','0000000000000000000000099999000000009999999900000000999999999000','0009990099999000009999999009990000999999999999000009099999900990','0999009990900900000009009990000000090000000009900000009000000000','0000900000009990000000000000000000000000000900900000000000000000','0000000000000990000000000000000000000000000009900000000000000000','0000000000009900000000000000000000000000000090000000000000000000','0000000000009900000000000000000000000000000999000000000000000000','0000000000099000000000000000000000000000000099000000900000000000','0000000000000999900090000000000000000000090000099000000000000000','0000000090000000000000000000000000000000000000000900000000000000','9000000000000000000000000000000090000099999999999099900099900000','9900099900999900000000000099000099000900000990000000000000000000','9990090000000999009900000000000009990000000000000000000000009009','0999009000000000000000000009009900999099000000000000000009900900'];

let putin2 = ['8888855655300000000000000000000088899778787400011000023533354000','9999999999984225520369999998841099999999999985566249999999999876','9999999999999663302999998544698899999889999995500007999999943764','9999999899999660000367769981221099988975898996600000056365100000','9997444699899770000015850000000099874115899999911000022100000000','8853434579999991100000000000000076533556789998800000000000000000','9865664247999880000000000000000099766542589996600000000000000000','9997643579999440000000000000000099997546899994400000000000000000','9999777899999440000000000000000099998888899994400000001100000000','9998998899999220000000100000000099998998899993300000000001000000','9999999989999998820297000000000099999999999999999921640000000000','9999999999999999994000000000000099999999999998899910000000000000','9999999999999335593000000000000099999999999860011930000111000000','9999999999997330043001278631000099999999999999988798677799960011','9999999999999888887754434898101099999999999998877876531003773020','9999999999999999999994000256520199999999999988877556630111233314'];

// 15591419156915691539 - sig


// getHTML(5321);
// getPreviewHTML(6289, hoodie);
// 7906

// terraform.previewDream(1401, hoodie);

let args = process.argv.slice(2);
let t = args[0] != null ? args[0] : 9056;
let m = args[1] != null ? args[1] : colortest;

// let args = process.argv.slice(2);
// let t = args[0] != null ? args[0] : 9056;
// let m = args[1] != null ? args[1] : xcopy5;

// if (args[0] != null) {        
//     terraform.previewDream(t, m);
// } else {
//   rl.question('Enter token id: ', (token) => {
//     if (token > 0) terraform.previewDream(token, m);
//   });

//   rl.on('close', () => {
//     console.log('\n Closing...');
//     process.exit(0);
//   });
// }

if (args[1] != null) 
terraform.previewDream(t, eval(m));
else
terraform.previewDream(t, m);