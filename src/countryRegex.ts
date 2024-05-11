import { Country } from "./country";

export const countryRegexMap: Map<Country, string> = new Map([
    [Country.Afghanistan, String.raw`^(((1001-1016)|(1051-1064)|(1101-1103)|(1151-1159)|(1201-1203)|(1251-1256)|(1301-1303)|(1351-1358)|(1401-1403)|(1451-1456)|(1501-1502)|(1551-1557)|(1601-1606)|(1651-1657)|(1701-1704)|(1741-1742)|(1751-1764)|(1801-1803)|(1851-1863)|(1901-1905)|(1951-1960)|(2001-2004)|(2051-2056)|(2101-2103)|(2151-2156)|(2201-2203)|(2251-2264)|(2301-2303)|(2351-2368)|(2401-2403)|(2451-2468)|(2501-2504)|(2551-2562)|(2601-2603)|(2641-2642)|(2651-2672)|(2701-2703)|(2751-2755)|(2801-2803)|(2851-2866)|(2901-2903)|(2951-2957)|(3001-3005)|(3041-3042)|(3051-3069)|(3101-3103)|(3151-3160)|(3201-3203)|(3251-3260)|(3301-3303)|(3351-3356)|(3401-3403)|(3451-3477)|(3501-3503)|(3541)|(3551-3559)|(3601-3603)|(3651-3664)|(3701-3703)|(3751-3766)|(3801-3803)|(3851-3867)|(3901-3903)|(3951-3964)|(4001-4003)|(4051-4060)|(4101-4103)|(4151-4155)|(4201-4203)|(4251-4259)|(4301-4303)|(4351-4355)))$`],
    [Country.AlandIslands, String.raw`^((22[0-9][0-9][0-9]))$`],
    [Country.Albania, String.raw`^([1-9]\d{3,3})$`],
    [Country.Algeria, String.raw`^(([0-3]\d{4,4}|r(4)[0-8]\d{3,3}))$`],
    [Country.AmericanSamoa, String.raw`^(96799|96799[-][0-9][0-9][0-9][0-9])$`],
    [Country.Andorra, String.raw`^((AD[1-7][0-9][0-9]))$`],
    [Country.Anguilla, String.raw`^((AI-2640))$`],
    [Country.Argentina, String.raw`^([A-H|J-N|P-U|W-Z][0-9][0-9][0-9][0-9][A-Z][A-Z][A-Z])$`],
    [Country.Armenia, String.raw`^((0[0-9][0-9][1-9]|1[0-9][0-9][0-9]|2[0-9][0-9][0-9]|3[0-9][0-9][0-9]|4[0-1][0-9][0-9]|4[2][0-1][0-6]))$`],
    [Country.AscensionIsland, String.raw`^((ASCN 1ZZ))$`],
    [Country.Australia, String.raw`^(\d{4,4})$`],
    [Country.Austria, String.raw`^([1-9]\d{3,3})$`],
    [Country.Azerbaijan, String.raw`^(((AZ )[0-6][0-9][0-9][0-9]|(AZ )[7][0-4][0-9][0-9]|(AZ )[80][0-9][0-9]|(AZ)[0-6][0-9][0-9][0-9]|(AZ)[7][0-4][0-9][0-9]|(AZ)[80][0-9][0-9]))$`],
    [Country.Bahrain, String.raw`^([1-9][0-9][0-9]\d{3,3}|[0-1][0-2][0-9][0-9]\d{4,4})$`],
    [Country.Bangladesh, String.raw`^(([1,3,5,7]\d{3,3}|[2,9][0-4]\d{2,2}|[4,8][0-7]\d{2,2}|[6][2-7]\d{2,2}))$`],
    [Country.Barbados, String.raw`^((BB)\d{5,5})$`],
    [Country.Belarus, String.raw`^(((2)[0-3][0-9]\d{3,3}|(24)[0-7]\d{3,3}))$`],
    [Country.Belgium, String.raw`^((1[0-9][0-9][0-9]|2[0-9][0-9][0-9]|3[0-9][0-9][0-9]|4[0-9][0-9][0-9]|5[0-6][0-9][0-9]|6[0-9][0-9][0-9]|7[0-9][0-9][0-9]|8[0-9][0-9][0-9]|9[0-9][0-9][0-9]))$`],
    [Country.Bermuda, String.raw`^(((CR )[A-Z][A-Z]\Z|\A(CR )[0-9][0-9]|(DD )[A-Z][A-Z]\Z|\A(DD )[0-9][0-9]|(DV )[A-Z][A-Z]\Z|\A(DV )[0-9][0-9]|(FL )[A-Z][A-Z]\Z|\A(FL )[0-9][0-9]|(GE )[A-Z][A-Z]\Z|\A(GE )[0-9][0-9]|(HM )[A-Z][A-Z]\Z|\A(HM )[0-9][0-9]|(HS )[A-Z][A-Z]\Z|\A(HS )[0-9][0-9]|(MA )[A-Z][A-Z]\Z|\A(MA )[0-9][0-9]|(PG )[A-Z][A-Z]\Z|\A(PG )[0-9][0-9]|(SB )[A-Z][A-Z]\Z|\A(SB )[0-9][0-9]|(SN )[A-Z][A-Z]\Z|\A(SN )[0-9][0-9]|(WK )[A-Z][A-Z]\Z|\A(WK )[0-9][0-9]|))$`],
    [Country.Bhutan, String.raw`^((1[1-6][0-9][0-9][0-9]|2[1-2][0-9][0-9][0-9]|3[1-6][0-9][0-9][0-9]|4[1-6][0-9][0-9][0-9]|))$`],
    [Country.BosniaHerzegovina, String.raw`^((7[0-9][0-9][0-9][0-9]|80[0-9][0-9][0-9]|88[0-9][0-9][0-9]|89[0-9][0-9][0-9]))$`],
    [Country.Brazil, String.raw`^(\d{5,5}[-]\d{3,3})$`],
    [Country.BritishAntarcticTerritory, String.raw`^((BIQQ 1ZZ))$`],
    [Country.BritishIndianOceanTerritory, String.raw`^((BBND 1ZZ))$`],
    [Country.BritishVirginIslands, String.raw`^((VG11[1-6]0))$`],
    [Country.BruneiDarussalam, String.raw`^(((B)[A-H|J-N|P|R-U]\d{4,4}|(K)[A-H]\d{4,4}|(P)[A-E]\d{4,4}|(T)[A-H]\d{4,4}))$`],
    [Country.Bulgaria, String.raw`^([1-9]\d{3,3})$`],
    [Country.BurkinaFaso, String.raw`^([1-9]\d{4,4})$`],
    [Country.Cambodia, String.raw`^(((0-1)\d{5,5}|(2)[0-4]\d{4,4}|(25)[0-9][0-7][0-9][0-9]))$`],
    [Country.Canada, String.raw`^((A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y)[0-9](A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z)( )[0-9](A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z)[0-9])$`],
    [Country.CapeVerde, String.raw`^(((11|12|13|21|31|41|51|61|71|72|73|74|75|76|81|82|91)\d{2,2}))$`],
    [Country.CaymanIslands, String.raw`^(((KY)[1-3](-)\d{4,4}))$`],
    [Country.Chile, String.raw`^((\d{7,7}))$`],
    [Country.China, String.raw`^(\d{6,6})$`],
    [Country.ChristmasIsland, String.raw`^((6798))$`],
    [Country.CocosKeelingIslands, String.raw`^((6799))$`],
    [Country.Colombia, String.raw`^(((05|08|11|13|15|17|18|19|20|23|25|27|41|44|47|50|52|54|63|66|68|70|73|76|81|85|86|88|91|94|95|97|99)\d{4,4}))$`],
    [Country.CongoDemocraticRepublicOfKinshasa, String.raw`^((\d{7,7}))$`],
    [Country.CostaRica, String.raw`^((\d{5,5}|\d{5,5}(-)\d{4,4}))$`],
    [Country.Croatia, String.raw`^(([1-5][0-9][0-9][0-9][0-9]|[1-5][0-9]( )[0-9][0-9][0-9]))$`],
    [Country.Cuba, String.raw`^(([1-3,5-9]\d{4,4}|[40-44]\d{3,3}))$`],
    [Country.Cyprus, String.raw`^(([1-9][0-9][0-9][0-9]))$`],
    [Country.CzechRepublic, String.raw`^(([1,3,6,7][0-9][0-9]( )[0-9][0-9]|[2][2,5-9][0-9]( )[0-9][0-9]|[4][0-1,3-4,6-7][0-9]( )[0-9][0-9]|[5][0-1,3-9][0-9]( )[0-9][0-9]))$`],
    [Country.Denmark, String.raw`^(\d{4,4})$`],
    [Country.DominicanRepublic, String.raw`^((10|11|21|22|23|24|25|31|32|33|34|41|42|43|51|56|57|61|62|63|64|71|72|73|81|82|83|84|91|92|93|94)\d{3})$`],
    [Country.Ecuador, String.raw`^(([01-24]\d{4,4}))$`],
    [Country.Egypt, String.raw`^(\d{5,5}\Z (5-digit postal codes) \A\d{7,7})$`],
    [Country.ElSalvador, String.raw`^(([11-17|21-23|31-34]\d{2,2}))$`],
    [Country.Estonia, String.raw`^(([1-9][0-9][0-9][0-9][0-9]))$`],
    [Country.Ethiopia, String.raw`^(\d{4,4})$`],
    [Country.FaroeIslands, String.raw`^(([1-9][0-9][0-9]))$`],
    [Country.FalklandIslands, String.raw`^(( (FIQQ 1ZZ)|(SIQQ 1ZZ) ))$`],
    [Country.Finland, String.raw`^(\d{5,5})$`],
    [Country.France, String.raw`^(([0-8][0-9]\d{3,3}|[9][0-6]\d{3,3}|(99)\d{3,3}))$`],
    [Country.FrenchGuiana, String.raw`^(((973)[0-9][0-9]))$`],
    [Country.FrenchPolynesia, String.raw`^(((987)[0-9][0-9]))$`],
    [Country.Georgia, String.raw`^(\d{4,4})$`],
    [Country.Germany, String.raw`^(((0)[1-4|6-9]\d{3,3}|(4)[0-2|4-9]\d{3,3}|(6)[0-1|3-9]\d{3,3}|[1-3|5|7-9]\d{4,4}))$`],
    [Country.Gibraltar, String.raw`^((GX11 1AA))$`],
    [Country.Greece, String.raw`^((([1-7][0-9][0-9]( )[0-9][0-9]|(8)[0-5][0-9]( )[0-9][0-9])))$`],
    [Country.Greenland, String.raw`^(((39)[0-9][0-9]))$`],
    [Country.Guadeloupe, String.raw`^(((970)[0-9][0-9]|(971)[0-9][0-9]))$`],
    [Country.Guam, String.raw`^(((969)[0-9][0-9]|(969)[0-9][0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Guatemala, String.raw`^(((010)[0-6][0-9]|(010)[7][0-3]|(0200)[0-9]|(0201)[0-5]|(0300)[0-9]|(0301)[0-7]|(0400)[0-9]|(0401)[0-6]|(050)[0-1][0-9]|(0502)[0-1]|(060)[0-1][0-9]|(0602)[0-7]|(070)[0-1][0-9]|(0702)[0-4]|(0800)[0-8]|(090)[0-2][0-9]|(0903)[0-4]|(100)[0-2][0-9]|(10030)|(1100)[0-9]|(1101)[0-4]|(120)[0-4][0-9]|(12050)|(130)[0-3][0-9]|(1304)[0-1]|(140)[0-1][0-9]|(1402)[0-5]|(1500)[0-9]|(1501)[0-2]|(160)[0-1][0-9]|(1602)[0-6]|(170)[0-2][0-9]|(180)[0-1][0-9]|(1802)[0-3]|(1900)[0-9]|(1901)[0-8]|(200)[0-1][0-9]|(20020)|(2100)[0-8]|(220)[0-1][0-9]|(2202)[0-7]|))$`],
    [Country.Guernsey, String.raw`^(((GY)[0-9]( )[0-9][A-Z][A-Z]|(GY)[0-9][0-9]( )[0-9][A-Z][A-Z]))$`],
    [Country.Guinea, String.raw`^(((0-4)\d{3,3}))$`],
    [Country.GuineaBissau, String.raw`^(\d{4,4})$`],
    [Country.Haiti, String.raw`^(((HT)(11-17|21-24|31-33|41-45|51-54|61-65|71-75|81-85|91-93)\d{2,2})|((HT )(11-17|21-24|31-33|41-45|51-54|61-65|71-75|81-85|91-93)\d{2,2}))$`],
    [Country.HeardAndMcDonaldIslands, String.raw`^((7151))$`],
    [Country.HolySee, String.raw`^((00120))$`],
    [Country.Honduras, String.raw`^(((10101)|(12101)|(12111)|(13101)|(13201)|(14101)|(14201)|(15101)|(15201)|(16101)|(16201)|(21)[101-104]|(21112)|(21301)|(22101)|(22114)|(23101)|(23201)|(31101)|(31301)|(32101)|(32301)|(33101)|(34101)|(41202)|(42101)|(42201)|(43101)|(43201)|(51101)|(52)[101-102]))$`],
    [Country.Hungary, String.raw`^([1-9]\d{3,3})$`],
    [Country.Iceland, String.raw`^([1-9]\d{2,2})$`],
    [Country.India, String.raw`^([1-9]\d{5,5})$`],
    [Country.Indonesia, String.raw`^(([1-9]\d{4,4}))$`],
    [Country.Iran, String.raw`^(([1|3-9][1-9][1-9][1-9][1|6-9][1-9][1-9][1-9][1-9][1-9])|([1|3-9][1-9][1-9][1-9][5][-]\d{1-3}))$`],
    [Country.Iraq, String.raw`^(((10|31|32|34|36|41|42|44|46|51|53|54|56|58|61|62|64|66)\d{3,3}))$`],
    [Country.Ireland, String.raw`^(([AC-FHKNPRT-Z][0-9][0-9]|D6W)( )[AC-FHKNPRT-Z][AC-FHKNPRT-Z0-9][AC-FHKNPRT-Z0-9][AC-FHKNPRT-Z0-9])$`],
    [Country.IsleOfMan, String.raw`^(((IM)[0-9]( )[0-9][A-Z][A-Z]|(IM)[0-9][0-9]( )[0-9][A-Z][A-Z]))$`],
    [Country.Israel, String.raw`^(\d{7,7})$`],
    [Country.Italy, String.raw`^(([0-3|5|8][0-9][0-9][0-9][0-9]|4[0-8][0-9][0-9][0-9]|6[0-7][0-9][0-9][0-9]|7[0-5][0-9][0-9][0-9]|9[0-8][0-9][0-9][0-9]))$`],
    [Country.Jamaica, String.raw`^(((JM)[A-Z]{3,3}\d{2,2}))$`],
    [Country.Japan, String.raw`^((\d{3,3}(-)\d{4,4}))$`],
    [Country.Jersey, String.raw`^(((JE)[0-9]( )[0-9][A-Z][A-Z]|(JE)[0-9][0-9]( )[0-9][A-Z][A-Z]))$`],
    [Country.Jordan, String.raw`^(([1-6]\d{4,4}|(7)[0-8]\d{3,3}|(99)\d{3,3}))$`],
    [Country.KazakhstanNewCode, String.raw`^(([A-Z]\d{2,2}[A-Z][0-9][A-Z][0-9]))$`],
    [Country.KazakhstanOldCode, String.raw`^(((0)[1-9]\d{4,4}|(1)[0-6]\d{4,4}))$`],
    [Country.Kenya, String.raw`^(\d{5,5})$`],
    [Country.Kiribati, String.raw`^KI0[1-3][0-9]{2}$|^KI02[0-8]{2}$|^KI03[0-8]{2}$`],
    [Country.Kosovo, String.raw`^((1[0-6]( )[0-9][0-9][0-9]|2[0-4]( )[0-9][0-9][0-9]|3[0-2]( )[0-9][0-9][0-9]|4[0-3]( )[0-9][0-9][0-9]|5[0-1]( )[0-9][0-9][0-9]|6[0-2]( )[0-9][0-9][0-9]|7[0-3]( )[0-9][0-9][0-9]))$`],
    [Country.Kuwait, String.raw`^(\d{5,5})$`],
    [Country.Kyrgyzstan, String.raw`^((7)[1-2]\d{4,4})$`],
    [Country.Laos, String.raw`^(([0-1][1-8][0-9][0-9][0-9]))$`],
    [Country.Latvia, String.raw`^(((1)[0-9][0-9][0-9]|(2)[0-1][0-9][0-9]|(3)[0-4][0-9][0-9]|(3)[6-9][0-9][0-9]|(4)[0-8][0-9][0-9]|(5)[0-4][0-9][0-9]|(5)[6-7][0-9][0-9]|(LV-1)[0-9][0-9][0-9]|(LV-2)[0-1][0-9][0-9]|(LV-3)[0-4][0-9][0-9]|(LV-3)[6-9][0-9][0-9]|(LV-4)[0-8][0-9][0-9]|(LV-5)[0-4][0-9][0-9]|(LV-5)[6-7][0-9][0-9]))$`],
    [Country.Lebanon, String.raw`^((\d{4,4}|\d{4,4}( )\d{4,4}))$`],
    [Country.Lesotho, String.raw`^(\d{3,3})$`],
    [Country.Liberia, String.raw`^(\d{4,4})$`],
    [Country.Libya, String.raw`^(([1-9][1-9](.)[1-9][1-9](.)[1-9][1-9][1-9]))$`],
    [Country.Liechtenstein, String.raw`^(((948)[5-8]|(949)[0-8]))$`],
    [Country.Lithuania, String.raw`^(\d{5,5})$`],
    [Country.Luxembourg, String.raw`^(((1|2|4|9)[0-9][0-9][0-9]|(3)[2-9][0-9][0-9]|(5)[2-9][0-9][0-9]|(6)[1-9][0-9][0-9]|(7)[2-7][0-9][0-9]|(8)[0-8][0-9][0-9]|(L-)(1|2|4|9)[0-9][0-9][0-9]|(L-)(3)[2-9][0-9][0-9]|(L-)(5)[2-9][0-9][0-9]|(L-)(6)[1-9][0-9][0-9]|(L-)(7)[2-7][0-9][0-9]|(L-)(8)[0-8][0-9][0-9]))$`],
    [Country.Madagascar, String.raw`^(((1)[0-1][0-9]|(20)[0-9]|(23)[0-9]|(3)[0-2][0-9]|(4)[0-2][0-9]|(5)[0-1][0-9]|(6)[0-2][0-9]))$`],
    [Country.Malawi, String.raw`^(((101)[100-109]|(102)[100-106]|(103)[100-112]|(104)[100-114]|(105)[200-216]|(106)[100-113]|(107)[100-101]|(201)[100-126|300-311]|(202)[100-109]|(203)[100-107]|(204)[100-109]|(205)[100-113]|(206)[101-118]|(207)[201-258]|(208)[100-111]|(209)[100-108]|(210)[100-110]|(301)[100-114|400-410]|(302)[100-110]|(303)[100-118]|(304)[101-112]|(305)[200-219]|(306)[100-109]|(307)[100-107]|(308)[100-109]|(309300)|(310)[100-115]|(311)[101-111]|(312)[200-238]|(313)[100-105]|(314)[100-103]|(315)[100-115]|(316)[100-111]))$`],
    [Country.Malaysia, String.raw`^(\d{5,5})$`],
    [Country.Maldives, String.raw`^(([0-1]\d{4,4}|[2][0-1]\d{3,3}))$`],
    [Country.Malta, String.raw`^(([A-Z]{2,2}( )\d{2,2}|[A-Z]{3,3}( )\d{4,4}))$`],
    [Country.MarshallIslands, String.raw`^(((969)[0-9][0-9]|(969)[0-9][0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Martinique, String.raw`^(((972)\d{2,2}))$`],
    [Country.Mauritius, String.raw`^(([1-9]|A|R)\d{4,4})$`],
    [Country.Mayotte, String.raw`^(((976)\d{2,2}|(985)\d{2,2}))$`],
    [Country.Mexico, String.raw`^(\d{5,5})$`],
    [Country.Micronesia, String.raw`^(((9694)[0-9]|(9694)[0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Moldova, String.raw`^(([2-6]\d{3,3}|(7)[0-7]\d{2,2}|(MD-)[2-6]\d{3,3}|(MD-)(7)[0-7]\d{2,2}))$`],
    [Country.Monaco, String.raw`^(((980)\d{2,2}))$`],
    [Country.Mongolia, String.raw`^(([11-18,21-23,41-46,48,61-65,67,81-85][0-9][0-9][0-9][0-9]|[11-18,21-23,41-46,48,61-65,67,81-85][0-9][0-9][0-9][0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Montenegro, String.raw`^(((8)(1|4|5)\d{3,3}))$`],
    [Country.Montserrat, String.raw`^(((MSR)[1][1-3][1-3,5][0]))$`],
    [Country.Morocco, String.raw`^([1-9]\d{4,4})$`],
    [Country.Mozambique, String.raw`^(([1-3][1-4][0-1][0-9]|[1-3][1-4][2][0-5]))$`],
    [Country.Myanmar, String.raw`^(010|011|016|017|020|021|022|023|026|027|030|036|037|040|041|042|046|050|051|052|056|060|061|062|066|067|070|071|076|077|080|081|086|087|090|091|092|093|094|095|096|100|101|102|103|104|105|106|107|110|111|112|113|114|116|120|121|126|130|136|137|140|141|146|150|160|161|162|166|167|170|171|176|180|181|186)\d{2}$`],
    [Country.Namibia, String.raw`^(([10-23][0][0-3][0-9]))$`],
    [Country.Nauru, String.raw`^((NRU68))$`],
    [Country.Nepal, String.raw`^((00|10|12|21|22|32|33|34|35|44|45|56|57)\d{3,3})$`],
    [Country.Netherlands, String.raw`^(([1-9]\d{3,3}( )([A-R|T-Z][A-Z]|[S][B|C|E-R|T-Z])))$`],
    [Country.NewCaledonia, String.raw`^(((988)\d{2,2}))$`],
    [Country.NewZealand, String.raw`^(\d{4,4})$`],
    [Country.Nicaragua, String.raw`^(((10|11|12|13|14|15|16|21|22|25|26|27|31|32|34|35|37|38|41|42|43|44|45|46|47|48|51|52|55|56|61|62|65|66|71|72|81|82|91|92)\d{3,3}))$`],
    [Country.Niger, String.raw`^((10|20|30|40|50|60|70|80)(0|1)[0-9])$`],
    [Country.Nigeria, String.raw`^(([1-9]\d{5,5}))$`],
    [Country.Niue, String.raw`^((9974))$`],
    [Country.NorfolkIsland, String.raw`^(( (2899) ))$`],
    [Country.NorthMacedonia, String.raw`^(((1|2|6|7)\d{3,3}))$`],
    [Country.NorthernCyprus, String.raw`^(((99)[0-9][0-9][0-9]))$`],
    [Country.NorthernMarianaIslands, String.raw`^(((9695)[0-9]|(9695)[0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Norway, String.raw`^(\d{4,4})$`],
    [Country.Oman, String.raw`^(([1-8]\d{2,2}))$`],
    [Country.Pakistan, String.raw`^(([1-9]\d{4,4}))$`],
    [Country.Palau, String.raw`^(((96939)|(96939-)[0-9][0-9][0-9][0-9]|(96940)|(96940-)[0-9][0-9][0-9][0-9]))$`],
    [Country.PalestinianAuthority, String.raw`^(([P][1-9]\d{6,6}))$`],
    [Country.Panama, String.raw`^(\d{4,4})$`],
    [Country.PapuaNewGuinea, String.raw`^(([1][1-9][0-9]|[2-5][0-9][0-9]|(6)[0-3][0-9]|(640)|(641)))$`],
    [Country.Paraguay, String.raw`^(([00-17]\d{4,4}))$`],
    [Country.Peru, String.raw`^(([01-25]\d{3,3}))$`],
    [Country.Philippines, String.raw`^(\d{4,4})$`],
    [Country.PitcairnIslands, String.raw`^(((PCRN 1ZZ)))$`],
    [Country.Poland, String.raw`^((\d{2,2}(-)\d{3,3}))$`],
    [Country.Portugal, String.raw`^(([1-9]\d{3,3}(-)\d{3,3}))$`],
    [Country.PuertoRico, String.raw`^(((00)[6-7|9][0-9][0-9]|(00)[6-7|9][0-9][0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Reunion, String.raw`^(((97)[4|7|8][0-9][0-9]))$`],
    [Country.Romania, String.raw`^(([0-9][0-8]\d{4,4}))$`],
    [Country.Russia, String.raw`^(([1|6]\d{5,5}|[2][0|1|3|4|9]\d{4,4}|[3][0|4|5|6|8|9]\d{4,4}|[4][0-6]\d{4,4}))$`],
    [Country.SaintBarthelemy, String.raw`^(((97133)|(9709)\d{1,1}))$`],
    [Country.SaintHelena, String.raw`^(( (STHL 1ZZ)|(ASCN 1ZZ)|(TSCU 1ZZ) ))$`],
    [Country.SaintKittsAndNevis, String.raw`^(((KN)(0101-0111|0201-0202|0301-0302|0401-0403|0501|0601-0602|0700|0801+0802|0901-0902|1001-1002|1101-1102|1201-1202)))$`],
    [Country.SaintLucia, String.raw`^(((LC)[0-9][0-9]( )[0-9][0-9][0-9]))$`],
    [Country.SaintMartin, String.raw`^(((970)[5-8][0-9]|(97150)))$`],
    [Country.SaintPierreAndMiquelon, String.raw`^(((975)\d{2,2}))$`],
    [Country.SaintVincentAndTheGrenadines, String.raw`^(((VC0)[1-3]\d{2,2}|(VC04)[0-7]\d{1,1}))$`],
    [Country.Samoa, String.raw`^((WS[1-2][0-9][0-9][0-9]))$`],
    [Country.SanMarino, String.raw`^(((4789)[0-9]))$`],
    [Country.SaudiArabia, String.raw`^(([1-8][1-9][1-9][1-9][1-9]))$`],
    [Country.Senegal, String.raw`^([1-8]\d{4,4})$`],
    [Country.SerbiaOldSystem, String.raw`^(([1-3]\d{4,4}|\d{6,6}))$`],
    [Country.Serbia, String.raw`^(\d{6,6})$`],
    [Country.Singapore, String.raw`^(\d{6,6})$`],
    [Country.Slovakia, String.raw`^(((0|8|9)\d{2,2}( )\d{2,2}))$`],
    [Country.Slovenia, String.raw`^([1-6,8-9]\d{3,3})$`],
    [Country.Somalia, String.raw`^(((AD|BK|BN|BR|BY|GG|GD|HR|JD|JH|MD|NG|SG|SD|SH|SOL|TG|WG)( )\d{5,5}))$`],
    [Country.SouthAfrica, String.raw`^(([0-8]\d{3,3}|9[3-9][0-9][0-9]|))$`],
    [Country.SouthGeorgiaAndTheSouthSandwichIslands, String.raw`^((SIQQ 1ZZ))$`],
    [Country.SouthKorea, String.raw`^(((0)[1-8]\d{3,3}|[1][0-8]\d{3,3}|[2][1-9]\d{3,3}|[3-5]\d{4,4}|[6][1-3]\d{3,3}))$`],
    [Country.SouthSudan, String.raw`^(\d{5,5})$`],
    [Country.Spain, String.raw`^(((0)[1-9]\d{3,3}|[1-4]\d{4,4}|(5)[0-2]\d{3,3}))$`],
    [Country.SriLanka, String.raw`^(\d{5,5})$`],
    [Country.Sudan, String.raw`^(\d{5,5})$`],
    [Country.SvalbardAndJanMayenIslands, String.raw`^(( (8099)|(9170)|(9171) ))$`],
    [Country.Swaziland, String.raw`^(((H|L|M|S)\d{3,3}))$`],
    [Country.Sweden, String.raw`^(([1-2|5-8]\d{2,2}( )\d{2,2}|(3)[0-1|3-9][0-9]( )\d{2,2}|(4)[0-7][0-9]( )\d{2,2}|(9)[0-8][0-9]( )\d{2,2}))$`],
    [Country.Switzerland, String.raw`^(([1-9]\d{3,3}))$`],
    [Country.Taiwan, String.raw`^((\d{3,3}|\d{6,6}|\d{3,3}(-)\d{3,3}))$`],
    [Country.Tajikistan, String.raw`^(((7)\d{5,5}))$`],
    [Country.Tanzania, String.raw`^(((11-12|14-17|21|23|25|27|30-31|33|35|37|39|41|43|45|47|50-51|53-55|57|59|61|63|65|67|71-75)\d{3,3}))$`],
    [Country.Thailand, String.raw`^(([1][0-8]\d{3,3}|[2][0-7]\d{3,3}|[3][0-7,9]\d{3,3}|[4][0-9]\d{3,3}|[5][0-8]\d{3,3}|[6][0-7]\d{3,3}|[7][0-9]\d{3,3}|[8][0-6]\d{3,3}|[9][0-6]\d{3,3}|))$`],
    [Country.TrinidadAndTobago, String.raw`^((\d{6,6}))$`],
    [Country.Tunisia, String.raw`^(([1-9]\d{3,3}))$`],
    [Country.Turkey, String.raw`^(([01-81]\d{3,3}))$`],
    [Country.Turkmenistan, String.raw`^(((7)\d{5,5}))$`],
    [Country.TurksAndCaicosIslands, String.raw`^((TKCA 1ZZ))$`],
    [Country.Tuvalu, String.raw`^(((TUV)\d{3,3}))$`],
    [Country.Ukraine, String.raw`^((0[1-9][0-9][0-9][0-9]|1[0-9][0-9][0-9][0-9]|2[0-9][0-9][0-9][0-9]|3[0-9][0-9][0-9][0-9]|4[0-9][0-9][0-9][0-9]|5[0-9][0-9][0-9][0-9]|6[0-9][0-9][0-9][0-9]|7[0-9][0-9][0-9][0-9]|8[0-9][0-9][0-9][0-9]|9[0-9][0-9][0-9][0-9]|))$`],
    [Country.UnitedKingdom, String.raw`^(((GIR 0AA)|(XM4 5HQ)|(B|E|G|S|L|M|E|N|W)[0-9]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(B|E|G|S|L|M|E|N|W)[0-9][0-9]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(AB|AL|BA|BB|BD|BF|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|EH|EN|EX|FK|FY|GL|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IP|IV|KA|KT|KW|KY|LA|LD|LE|LL|LN|LS|LU|ME|MK|ML|NE|NG|NN|NP|NR|OL|OX|PA|PE|PH|PL|PO|PR|QC|RG|RH|RM|SA|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|WA|WD|WF|WN|WR|WS|WV|XX|YO|ZE)[0-9]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(AB|AL|BA|BB|BD|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|EH|EN|EX|FK|FY|GL|GU|HA|HD|HG|HP|HR|HU|HX|IG|IP|IV|KA|KT|KW|KY|LA|LD|LE|LL|LN|LS|LU|ME|MK|ML|NE|NG|NN|NP|NR|OL|OX|PA|PE|PH|PL|PO|PR|QC|RG|RH|RM|SA|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|WA|WD|WF|WN|WR|WS|WV|XX|YO|ZE)[0-9][0-9]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(E|N|W)[0-9][A-H|J-K|M-N|P|R-Y]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(EC|NW|SE|SW|WC)[0-9]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(EC|NW|SE|SW|WC)[0-9][0-9]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]|(EC|NW|SE|SW|WC)[0-9][A-H|J-K|M-N|P|R-Y]( )[0-9][A-B|D-H|J|L|N|P-U|W-Z][A-B|D-H|J|L|N|P-U|W-Z]))$`],
    [Country.UnitedStatesOfAmerica, String.raw`^(([0-8]\d{4,4}|[0-8]\d{4,4}(-)\d{4,4}|(90|91|92|93|94|95|97|98|99)\d{3,3}|(90|91|92|93|94|95|97|98|99)\d{3,3}(-)\d{4,4}|(960|961|962|963|964|965|966|967|968)\d{2,2}|(960|961|962|963|964|965|966|967|968)\d{2,2}(-)\d{4,4}|(9690|9691|9692|9693|9695|9698|9699)\d{1,1}|(9690|9691|9692|9693|9695|9698|9699)\d{1,1}(-)\d{4,4}|(96945|96946|96947|96948|96949)|(96945|96946|96947|96948|96949)(-)\d{4,4}))$`],
    [Country.UnitedStatesVirginIslands, String.raw`^(((008)[0-9][0-9]|(008)[0-9][0-9](-)[0-9][0-9][0-9][0-9]))$`],
    [Country.Uruguay, String.raw`^(([1-9]\d{4,4}))$`],
    [Country.Uzbekistan, String.raw`^(((100)[0-2]\d{2,2}|(11)[0-2][0-1]\d{2,2}|(12)[0-1][0-1]\d{2,2}|(13)[0-1][1-3]\d{2,2}|(14)[0-1][1-6]\d{2,2}|(15)[0-1][1-9]\d{2,2}|(16)[0-1][1-2]\d{2,2}|(17)[0-1][1-6]\d{2,2}|(18)[0-1][1-4]\d{2,2}|(19)[0-1][1-5]\d{2,2}|(20)[0-1][1-2]\d{2,2}|(21)[0-1][0-1]\d{2,2}|(22)[0-1][1-2]\d{2,2}|(23)[0-1][1-6]\d{2,2}))$`],
    [Country.Venezuela, String.raw`^(([1-8]\d{3,3}|[1-8]\d{3,3}(-)[A-Z]))$`],
    [Country.Vietnam, String.raw`^(((0-1,7)[0-8]\d{3,3}|(2-3)[0-6]\d{3,3}|(4)\d{4,4}|(5)[0-7,9]\d{3,3}|(6,8)[0-7]\d{3,3}|(9)[0-2,4-8]\d{3,3}|))$`],
    [Country.WallisAndFutuna, String.raw`^(((986)\d{2,2}))$`],
    [Country.WesternSahara, String.raw`^(((7)\d{4,4}))$`],
    [Country.Zambia, String.raw`^(\d{5,5})$`],
]);