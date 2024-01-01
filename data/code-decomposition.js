/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020-2024 FISH UP Dictionary of Array
 * Date: 2021-01-10
 */

// Created by FISH UP, this is a big project
// called '行列拆字補齊計劃', which will make 
// the learning of the Array method much easier 
// by providing character decompositions in
// FISH UP Dictionary of Array.

// PS: If you're reading this file, you might be able to
// contribute to this project too. More details coming soon.


// decomposition: radical representitive(s) + [4][r][e]
// 4 for quadruple, r for rare character key, e for error tolerance
// one decomposition -> string
// several decompositions -> array, first item must be without e

// All the decompositions are verified with the standard codes
// by js/decomposition-checker.js to make sure that
// the former are at least consistent with the latter.

// {common TW 4808} -> 4808 characters
const decompositionCommonTW4808={"一":"一","丁":"一亅","七":"七","三":"一一一","下":"一卜","丈":"在㇏","上":"⺊一","丑":"㇕土","丐":"一⺊㇉","不":"不","丙":"一冂人","世":"廿㇗","丕":"不一","且":"且一","丘":"丘一","丞":"㇖水一","丟":"一土厶","並":"䒑業一","丫":"弟丨","中":"口丨","串":"口口丨","丸":"㇒⺄丶","凡":"几丶","丹":"冂亠","主":"亠土","乃":"㇒㇡","久":"久㇏","么":"㇒厶","之":"之","尹":"尹㇒","乍":"生乍","乏":"㇒之","乎":"㇒乎","乒":"丘一㇒","乓":"丘一丶","乖":"㇒十北匕","乘":"㇒木北匕","乙":"乙","九":"㇒⺄","也":"㇖丨乚","乞":"生乙","乩":"⺊口乚","乳":"爫㇖孑乚","乾":"十日十乙","亂":"爫マ冂乚","了":"㇖亅","予":"マ㇖亅","事":"可尹亅","二":"一一","于":"一子","云":"一一厶","井":"奉丨","互":"一彑","五":"一五","亙":"一炙一","些":"止匕一一","亞":"一亞一","亟":"一㇉口一","亡":"亠㇗","交":"亠八乂","亦":"亠亦","亥":"亠亥人","亨":"亠口㇖亅","享":"亠口㇖子","京":"亠口小","亭":"亠口冖亅","亮":"亠口冖儿","人":"人","仁":"亻一一","什":"亻十","仃":"亻一亅","仆":"亻卜","仇":"亻㇒⺄","仍":"亻㇒㇡","今":"合㇖","介":"漆介","仄":"厂人","以":"以人","付":"亻子丶","仔":"亻㇖子","仕":"亻士","他":"亻㇖丨乚","仗":"亻在㇏","代":"亻一弋","令":"合マ","仙":"亻山","仞":"亻刀丶","仿":"亻方","伉":"亻亠几","伙":"亻火","伊":"亻尹㇒","伕":"亻夫","伍":"亻一五","伐":"亻一戈","休":"亻木","伏":"亻大丶","仲":"亻口丨","件":"亻生十","任":"亻一士","仰":"亻氏卩","仳":"亻匕匕","份":"亻八刀","企":"人止","位":"亻立","住":"亻亠土","佇":"亻宀一亅","佗":"亻宀它","佞":"亻一一女","伴":"亻半","佛":"亻巳㇉介","何":"亻可亅","估":"亻十口","佐":"亻在工","佑":"亻在口","伽":"亻力口","伺":"亻㇆可","伸":"亻日丨","佃":"亻田","佔":"亻⺊口","似":"亻以人","但":"亻日一","佣":"亻冂奉","作":"亻生乍","你":"亻⺈小","伯":"亻㇒日","低":"亻氏一一","伶":"亻合マ","余":"合木","佝":"亻勹口","佯":"亻䒑奉","依":"亻亠㇒衣","侍":"亻士子丶","佳":"亻土土","使":"亻可乂","佬":"亻土㇒匕","供":"亻共八","例":"亻一夕刂","來":"木人人","侃":"亻口流","佰":"亻一㇒日","併":"亻䒑廾","侈":"亻夕夕","佩":"亻几一丨","佻":"亻儿求","侖":"合冂卄","佾":"亻八⺼","侏":"亻生木","信":"亻言","侵":"亻尹冖又","侯":"亻夬生大","便":"亻一日乂","俠":"亻大人人","俑":"亻マ冂奉","俏":"亻⺌⺼","保":"亻口木","促":"亻口龰","侶":"亻口㇒口","俘":"亻爫㇖子","俟":"亻厶生大","俊":"亻厶ㄦ夂","俗":"亻八八口","侮":"亻生毋母","俐":"亻㇒木刂","俄":"亻㇒扌戈","係":"亻㇒糸","俚":"亻日土","俎":"人人且一","俞":"合月刂","倌":"亻宀官","倍":"亻立口","倣":"亻方攵","俯":"亻广亻丶","倦":"亻䒑大乚","倥":"亻宀ㄦ工","俸":"亻春奉","倩":"亻青月","倖":"亻土䒑十","倆":"亻一冂入","值":"亻十直一","借":"亻共日","倚":"亻大可亅","倒":"亻一厶刂","們":"亻門","俺":"亻大日㇗","倀":"亻長衣","倔":"亻尸屮凵","倨":"亻尸十口","俱":"亻直一八","倡":"亻日日","個":"亻囗十口","候":"亻丨夬大","倘":"亻⺌冂口","俳":"亻非悲","修":"亻丨攵彡","倭":"亻㇒木女","倪":"亻臼儿","俾":"亻㇒日十","倫":"亻合冂卄","倉":"合彐㇒口","偽":"亻丶㇒灬","停":"亻亠口亅","假":"亻假巳又","偃":"亻匚日女","偌":"亻艹在口","做":"亻十口攵","偉":"亻五口韋","健":"亻尹奉廴","偶":"亻日禸","偎":"亻田一衣","偕":"亻匕匕日","偵":"亻⺊貝","側":"亻貝刂","偷":"亻合月刂","偏":"亻戶冂卄","倏":"亻丨攵丶","傢":"亻宀一豕","傍":"亻亠弟方","傅":"亻甫丶丶","備":"亻共㇒奉","傑":"亻夕韋木","傀":"亻鬼厶","傖":"亻合尹口","傘":"人人人十","傭":"亻广尹奉","債":"亻青貝","傲":"亻青方攵","傳":"亻惠孑丶","僅":"亻革青","傾":"亻匕一貝","催":"亻山亻隹","傷":"亻生日勿","傻":"亻㇒囗夂","兀":"一儿","元":"一一儿","允":"厶儿","充":"ㄊ儿","兄":"口儿","光":"⺌一儿","兇":"乂凵儿","兆":"儿求","先":"告儿","兌":"八口儿","克":"十口儿","免":"⺈口冘","兔":"⺈口冘丶","兒":"臼儿","兕":"凹一儿","兗":"亠八口儿","兜":"㇒日氏儿","入":"入","內":"冂入","全":"合土","兩":"一冂丨入","八":"八","六":"亠八","兮":"八一㇉","公":"八厶","共":"共八","兵":"丘一八","具":"直一八","其":"其一八","典":"冂共八","兼":"䒑尹亦","冀":"北匕田八","冉":"冂土","冊":["冂卄","冂冂一"],"再":"一冂土","冒":"⺜目","冑":"囗十且","冕":"⺜⺈口冘","最":"⺜一耳又","冗":"冖几","冠":"冖一一丶","冤":["冖⺈口丶","冖⺈象丶e"],"冥":"冖日亠八","冢":"冖一豕丶","冬":"夂⺀","冰":"冫水","冶":"冫厶口","冷":"冫合マ","冽":"冫一夕刂","凍":"冫木日","凌":"冫土ㄦ夂","准":"冫亻隹","凋":"冫冂土口","凜":"冫亠囗木","凝":"冫匕生龰","几":"几4","凱":"山可䒑几","凳":"癶可䒑几","凶":"乂凵","凹":"凹一","出":"屮凵","凸":"凸一","函":"㇖氺凵","刀":"刀","刁":"㇆㇀","刃":"刀丶","分":"八刀","切":"七刀","刈":"乂刂","刊":"一十刂","列":"一夕刂","刑":"一廾刂","划":"一戈刂","刎":"勹勿刂","別":"口沒刂","判":"半刂","利":"㇒木刂","刪":"冂卄刂","刨":"勹巳乚刂","刻":"亠亥人刂","券":"䒑大刀","刷":"尸冂丨刂","刺":"木冂刂","到":"一厶土刂","刮":"㇒十口刂","制":"生一冂刂","剁":"殳木刂","剎":"乂述丶刂","剃":"弟巳㇉刂","削":"⺌⺼刂","前":"䒑月刂","剌":"木口刂","剋":"十口儿刂","則":"貝刂","剖":"立口刂","剜":"宀夕㇆刂","剔":"日勹勿刂","剛":"冂䒑山刂","剝":"彑氺刂","剪":"䒑月刂刀","副":"可田刂","割":"宀青口刂","剴":"山可䒑刂","創":"合彐㇒刂","剩":"㇒木北刂","剿":"巛日木刂","剷":"產生土刂","剽":"一西一刂","劃":"尹土田刂","劇":"虍一豕刂","劈":"尸口立刀","劉":"氏丶刀刂","劍":"合口口刂","劑":"亠弟丨刂","力":"力","加":"力口","功":"工力","劣":"小㇒力","劫":"土厶力","助":"且㇀力","努":"女又力","劬":"勹口力","劾":"亠亥人力","勇":"マ冂奉力","勉":"⺈口冘力","勃":"十冖㇖力","勁":"一巛工力","勒":"革十力","務":"マ㇖亅力","勘":"其一ㄦ力","動":"重日力","勞":"火火冖力","勝":"月䒑大力","勛":"口貝力","募":"艹日大力","勦":"巛日木力","勤":"革青力","勢":"土ㄦ土力","勵":"厂艹日力","勸":"夢口口力","勻":"勹一一","勾":"勹厶","勿":"勹勿","包":"勹巳乚","匆":"勹勿丶","匈":"勹乂凵","匍":"勹甫丶","匐":"勹可田","匏":"大一一乚","匕":"匕4","化":"亻匕","北":"北匕","匙":"日一龰匕","匝":"匚冂丨","匡":"匚一土","匠":"匚斤","匣":"匚日丨","匪":"匚非悲","匯":"匚氵亻隹","匱":"匚口丨貝","匹":"匚ㄦ","匿":"匚艹在口","區":"匚口口口","匾":"匚戶冂卄","十":"十","千":"㇒十","午":"生十","升":"㇒廾","卅":["卅4","廾丨e"],"仟":"亻㇒十","半":"半","卉":"十廾","卒":"亠人人十","協":"十力力力","卓":"⺊日十","卑":"㇒日㇒十","南":"十冂䒑十","博":"十甫丶丶","卜":"卜","卞":"亠卜","卡":"⺊一卜","占":"⺊口","卦":"土土卜","卯":"氏丿卩","卮":"⺁一㇆乚","印":"印卩","危":"⺈厂㇆乚","即":"即卩","卵":["氏丿丶丶","氏㇒丶丶","氏丶丿丶","氏丶㇒丶"],"卷":"䒑大㇆乚","卸":"生十一卩","卹":"㇒皿卩","卻":"八八口卩","卿":["氏丿即卩","氏㇒即卩"],"厄":"厂㇆乚","厚":"厂日㇖子","原":"厂㇒日小","厝":"厂共日","厥":"厂䒑艸人","厭":"厂日⺼丶","厲":"厂艹日禸","去":"土厶","參":"厶厶厶彡","又":"又","叉":"又丶","友":"在又","及":"㇒廴","反":"厂又","取":"一耳又","叔":"⺊一小又","受":"爫冖又","叛":"半厂又","叟":"叟丨又","曼":"⺜罒又","叢":"業一䒑又","口":"口","可":"可亅","古":"十口","右":"在口","召":"刀口","叮":"口一亅","叩":"口卩","叨":"口刀","叼":"口㇆㇀","司":"㇆可","叵":"匚口","叫":"口㇗丨","另":"口力","只":"口八","史":"口乂","叱":"口它","台":"厶口","句":"勹口","叭":"口八","吉":"士口","吏":"可乂","同":"冂可","吊":"口冂丨","吐":"口土","吁":"口一子","吋":"口子丶","各":"夂口","向":"㇒冂口","名":"夕口","合":"合口","吃":"口生乙","后":"⺁可","吆":"口ㄠ","吒":"口㇒七","吝":"亠乂口","吭":"口亠几","吞":["一大口","㇒大口"],"吾":"一五口","否":"不口","呎":"口尸㇏","吧":"口巳丨乚","呆":"口木","呃":"口厂㇆乚","吳":"口㇞大","呈":["口㇒土","口一土e"],"呂":"口㇒口","君":"尹㇒口","吩":"口八刀","告":"告口","吹":"口⺈人","吻":"口勹勿","吸":"口㇒廴","吮":"口厶儿","吵":"口小㇒","吶":"口冂入","吠":"口大丶","吼":"口㇖孑乚","呀":"口匚亅㇒","吱":"口十又","含":"合㇖口","吟":"口合㇖","味":"口一木","呵":"口可亅","咖":"口力口","呸":"口不一","咕":"口十口","咀":"口且一","呻":"口日丨","呷":"口日丨","咄":"口屮凵","咒":"口口几","咆":"口勹巳乚","呼":"口㇒乎","咐":"口亻子丶","呱":"口⺁瓜㇏","呶":"口女又","和":"㇒木口","咚":"口夂⺀","呢":"口尸匕","周":"冂土口","咋":"口生乍","命":"合口卩","咎":"夂人口","咬":"口亠八乂","哀":"亠口㇒衣","咨":["一一⺈口","冫⺈人口"],"哎":"口艹乂","哉":"土口戈","咸":"厂可戈","咦":"口大巳㇉","咳":"口亠亥人","哇":"口土土","哂":"口一西","咽":"口囗大","咪":"口米","品":"口口口","哄":"口共八","哈":"口合口","咯":"口夂口","咫":"尸㇏口八","咱":"口㇒目","咻":"口亻木","哨":"口⺌⺼","唐":"广尹丨口","唁":"口言","唷":"口ㄊ⺼","哼":"口亠口亅","哥":"可丨可亅","哲":"扌斤口","唆":"口厶ㄦ夂","哺":"口甫丶","唔":"口一五口","哩":"口日土","哭":"口口大丶","員":"口貝","唉":"口厶生大","哮":"口土㇒子","哪":"口㇆奉阝","哦":"口㇒扌戈","唧":"口即卩","商":"亠弟冂口","啪":"口扌㇒日","啦":"口扌立","啄":"口一豕丶","啞":"口一亞一","啡":"口非悲","啃":"口止⺼","啊":"口阝可亅","唱":"口日日","啖":"口火火","問":"門口","啕":"口勹生山","唯":"口亻隹","啤":"口㇒日十","唸":"口合㇖心","售":"亻隹口","啜":"口又又又","唬":"口虍儿","啣":"口生十卩","唳":"口戶大丶","啻":"亠弟冖口","喀":"口宀夂口","喧":"口宀一一","啼":"口亠弟丨","喊":"口厂可戈","喝":"口日勹㇗","喘":"口山一而","喂":"口田一衣","喜":"土口䒑口","喪":"十口口衣","喔":"口尸一土","喇":"口木口刂","喋":"口廿㇗木","喃":"口十冂十","喳":"口木日一","單":"口口日十","喟":"口田⺼","唾":"口重艹","喲":"口糸勹丶","喚":"口⺈冂大","喻":"口合月刂","喬":"㇒大口口","喱":"口厂日土","啾":"口㇒木火","喉":"口亻夬大","嗟":"口䒑土工","嗨":"口氵生母","嗓":"口又又木","嗦":"口十冖糸","嗎":"口馬灬","嗜":"口土㇒日","嗇":"十人人口","嗑":"口土厶皿","嗣":"口冂卄可","嗤":"口艸一虫","嗯":"口囗大心","嗚":"口鳥灬","嗡":"口八厶羽","嗅":"口㇒目丶","嗆":"口合彐口","嗥":"口㇒日十","嗾":"口方生大","嘀":"口亠弟口","嘛":"口广述述","嘗":"⺌冖口日","嗽":"口木口人","嘔":"口匚口口","嘆":"口革夫","嘉":"士口䒑口","嘍":"口婁口女","嘎":"口一㇒戈","嗷":["口士方攵","口青沒攵e"],"嘖":"口青貝","嘟":"口土㇒阝","嘈":"口曹日","嘮":"口火火力","嘻":"口士口口","嘹":"口大弟小","嘲":"口十日月","嘿":"口黑灬","嘴":"口止匕角","嘩":"口艹一奉","噓":"口虍丱一","噎":"口壺可䒑","噗":"口業一夫","噴":"口十艹貝","嘶":"口其一斤","嘯":"口尹淵丨","嘰":"口ㄠㄠ戈","噙":["口人亠禸","口今一禸"],"噫":"口立日心","噹":"口⺌冖田","噩":"可口十一","噤":"口木木小","噸":"口一凵貝","噪":"口口口木","器":"口口大口","噥":["口囗卄衣","口日而衣e"],"噱":"口虍一豕","噯":"口爫冖夂","噬":"口竹工人","噢":"口㇒冂大","嚎":"口亠口豕","嚀":"口宀心亅","嚐":"口⺌冖日","嚅":"口雨一而","嚇":"口土亦亦","嚏":"口十冖龰","嚕":"口魚灬日","嚮":"㇛亥丶口","嚥":["口廿口灬","口廿北灬"],"嚨":"口立⺼龍","嚷":"口亠口衣","嚶":"口貝貝女","嚴":"口口厂攵","嚼":"口爫罒丶","囁":"口一耳耳","囀":"口車惠丶","囂":"口口一口","囈":"口艹土厶","囊":"可丨冖衣","囉":"口罒糸隹","囌":"口艹魚木","囑":"口尸氺虫","四":"四","囚":"囗人","因":"囗大","回":"囗口","囪":"㇒囗勿丶","困":"囗木","囤":"囗一凵乚","固":"囗十口","圃":"囗甫丶","圈":"囗䒑大乚","國":"囗可㇀戈","圍":"囗五口韋","園":"囗土口衣","圓":"囗口貝","團":"囗惠子丶","圖":"囗口亠口","土":"土","圳":"土介丨","地":"土㇖丨乚","在":"在丨土","圭":"土土","圬":"土一一㇉","圯":"土巳乚","坊":"土方","坑":"土亠几","址":"土止","坍":"土冂亠","均":["土勹一一","土勹冫"],"坎":"土⺈人","圾":"土㇒廴","坐":"人人土","坏":"土不","垃":"土立","坷":"土可亅","坪":"土一平","坩":"土廿一","坡":"土皮又","坦":"土日一","坤":"土日丨","坼":"土斤丶","垂":"重艹","型":"一廾刂土","垠":"土彐衣","垣":"土一日一","垢":"土⺁可","城":"土厂㇆戈","垮":"土大一㇉","埂":"土一日乂","埔":"土甫丶","埋":"土日土","埃":"土厶生大","域":"土可㇀戈","場":"土日一勿","堤":"土日一龰","堰":"土匚日女","報":"土䒑十又","堡":"亻口木土","塞":"宀冓八土","塑":"䒑艸月土","塘":"土广尹口","塗":"氵合木土","塚":"土冖一丶","塔":"土艹合口","填":"土十直八","塌":"土⺜羽羽","塭":"土溫皿","塊":"土鬼厶","塢":"土烏灬","塵":"鹿匕匕土","塾":"亠口㇖土","境":"土立日儿","墓":"艹日大土","墊":"土䒑十土","塹":"車斤土","墅":"日土マ土","壕":"土亠口豕","壓":"厂日⺼土","壑":"⺊冖一土","壙":"土广黃八","壘":"田田田土","壞":"土亠罒衣","壟":"立⺼龍土","壢":"土厂㇒止","壤":"土亠口衣","壩":"土雨革月","士":"士","壬":"一士","壯":"爿士","壹":"壺可䒑","壺":"壺亞一","壽":"士㇖工丶","夏":"一㇒目夂","夔":"䒑㇒目夂","夕":"夕","外":"夕卜","夙":"几一夕","多":"夕夕","夜":["亠亻夕㇏","亠亻夂丶e"],"夠":"夕夕勹口","夥":"日木夕夕","夢":"夢罒冖夕","夤":"夕宀一八","大":"大","天":"一大","夫":"夫","太":"大丶","夭":"㇒大","央":"冂大","失":"生大","夷":"大巳㇉","夸":"大一一㇉","夾":"大人人","奉":"春奉","奇":"大可亅","奈":"大一一小","奄":"大日乚","奔":"大十廾","奕":"亠亦大","契":"丰刀大","奏":"春一大","奎":"大土土","奐":"⺈冂人大","套":"大镸","女":"女","奴":"女又","奶":"女㇒㇡","妄":"亠㇗女","奸":"女一十","妃":"女巳乚","好":"女㇖子","她":"女㇖丨乚","如":"女口","妁":"女勹丶","妝":"爿女","妒":"女戶","妨":"女方","妞":"女㇕土","妣":"女匕匕","妙":"女小㇒","妖":"女㇒大","妍":"女一廾","妤":"女マ㇖亅","妓":"女十又","妊":["女一士","女㇒士"],"妥":"爫女","妾":"立女","妻":"一尹丨女","委":"㇒木女","妹":"女一木","妮":"女尸匕","姑":"女十口","姆":"女毋母","姐":"女且一","姍":"女冂卄","始":"女厶口","姓":"女生土","姊":"女㇒㇉㇒","妯":"女囗十","妳":"女⺈小","姨":"女大巳㇉","娃":"女土土","姥":"女土㇒匕","子":"㇖子","孑":"㇖孑","孓":"㇖亅㇏","孔":"㇖孑乚","孕":"㇒㇡㇖子","字":"宀㇖子","存":"在丨㇖子","孝":"土㇒㇖子","孜":"㇖孑攵","孚":"爫㇖子","孟":"㇖子皿","孤":"㇖孑⺁㇏","季":"㇒木㇖子","孩":"㇖孑亠人","孫":"㇖孑㇒糸","學":"學乂乂子","它":"宀它","宇":"宀一子","守":"宀子丶","宅":"宀㇒七","安":"宀女","完":"宀一一儿","宋":"宀木","宏":"宀在厶","宗":"宀一一小","定":"宀一龰","官":"宀官","宜":"宀且一","宙":"宀囗十","宛":"宀夕㇆乚","宣":"宀一日一","宦":"宀匚丨丨","室":"宀一厶土","客":"宀夂口","宥":"宀在月","宰":"宀立十","害":["宀青口","宀丰口e"],"家":"宀一豕","宴":"宀日女","宮":"宀口㇒口","宵":"宀⺌⺼","容":"宀八八口","宸":"宀厂一衣","寇":"宀一一又","寅":"宀一囗八","寄":"宀大可亅","寂":"宀⺊一又","宿":"宀亻一日","密":"宀心㇒山","寒":"宀冓八⺀","富":"宀可田","寓":"宀日禸","寐":"宀爿一木","寞":"宀艹日大","寧":"宀心皿亅","寡":"宀一㇒刀","寥":"宀羽羽彡","實":"宀囗十貝","寨":"宀冓八木","寢":"宀爿尹又","寤":"宀爿一口","察":"宀祭一小","寮":"宀大弟小","寬":"宀夢目丶","審":"宀㇒米田","寫":"宀臼勹灬","寵":"宀立⺼龍","寶":"宀一土貝","寸":"子丶","寺":"士子丶","封":"土土子丶","射":"身子丶","尉":"尸一一丶","專":"惠子丶","將":"爿炙子丶","尊":"䒑酉子丶","尋":"尹工口丶","對":"業一䒑丶","導":"䒑㇒目丶","小":"小","少":"小㇒","尖":"小大","尚":"⺌冂口","尤":"在乚丶","尬":"在乚人介","就":"亠口小丶","尷":"在乚匚皿","尸":"尸4","尺":"尸㇏","尼":"尸匕","局":"尸㇆口","屁":"尸匕匕","尿":"尸水","尾":"尸㇒毛","屈":"尸屮凵","居":"尸十口","屆":"尸士凵","屎":"尸米","屏":"尸䒑廾","屍":"尸一夕匕","屋":"尸一厶土","屑":"尸⺌⺼","展":"尸共衣","屐":"尸彳十又","屠":"尸土㇒日","屜":"尸彳廿㇗","屢":"尸婁口女","層":"尸弟會日","履":"尸彳生夂","屬":"尸氺罒虫","屯":"一凵乚","山":"山","屹":"山生乙","岐":"山十又","岑":"山合㇖","岔":"八刀山","岌":"山㇒廴","岷":"山巳㇙㇂","岡":"冂䒑山","岸":"山厂一十","岩":"山石","岫":"山囗十","岱":"亻一弋山","岳":"丘一山","峙":"山士子丶","峭":"山⺌⺼","峽":"山大人人","峻":"山厶ㄦ夂","峪":"山八八口","峨":"山㇒扌戈","峰":"山夂丰","島":"鳥山","川":["介丨","丿丨丨e"],"州":["丶丿丶丨","一丿一丨"],"巢":"巛曰木","工":"工","巨":"匚巳","巧":"工一㇉","左":"在工","巫":"工人人","差":["䒑土㇒工","䒑看工e"],"己":"巳乚","已":"巳乚","巳":"巳乚","巴":"巳丨乚","巷":"共八巳乚","巽":"巳㇙巳八","巾":"冂丨","市":"亠冂丨","布":"在冂丨","帆":"冂丨几丶","希":"乂在冂丨","帘":"宀ㄦ冂丨","帚":"尹冖冂丨","帖":"冂丨⺊口","帕":"冂丨㇒日","帛":"㇒日冂丨","帑":"女又冂丨","帝":"亠弟冖丨","帥":"㇒官冂丨","席":"广廿冂丨","師":"㇒官一丨","常":"⺌冖口丨","帶":"帶冖冂丨","帳":"冂丨長衣","帷":"冂丨亻隹","幅":"冂丨可田","帽":"冂丨⺜目","幀":"冂丨⺊貝","幌":"冂丨日儿","幛":"冂丨立十","幣":"敝攵冂丨","幕":"艹日大丨","幗":"冂丨囗戈","幔":"冂丨⺜又","幢":"冂丨立土","幟":"冂丨立戈","幫":"土土子丨","干":"一十","平":"一平","并":"䒑廾","年":"生年","幸":"土䒑十","幹":"十日十十","幻":"ㄠ㇆","幼":"ㄠ力","幽":["丨ㄠㄠ凵","ㄠ丨ㄠ凵e","ㄠㄠ山e"],"幾":["ㄠㄠ厂戈","ㄠㄠ一戈e"],"序":"广マ㇖亅","庇":"广匕匕","床":"广木","庚":"广尹人","店":"广⺊口","府":"广亻子丶","底":"广氏一一","庖":"广勹巳乚","庠":"广䒑奉","度":"广廿又","庫":"广車","庭":"广㇒土廴","座":"广人人土","康":"广尹氺","庸":"广尹冂奉","庶":"广廿灬","庵":"广大日㇗","庾":"广臼人","廊":"广丶即阝","廁":"广貝刂","廂":"广木目","廉":"广䒑尹亦","廈":"广一㇒夂","廓":"广亠口阝","廖":"广羽羽彡","廢":"广癶巳又","廚":"广士口丶","廟":"广十日月","廝":"广其一斤","廣":"广黃田八","廠":"广⺌冂攵","龐":"广立⺼龍","廬":"广虍田皿","廳":"广一耳心","廷":"㇒土廴","延":"㇒止廴","建":"尹奉廴","廿":"廿","弁":"厶廾","弄":"一土廾","弈":"亠亦廾","弊":"敝攵廾","式":"一工弋","弒":"乂述丶弋","弓":"巳㇉","弔":"巳㇉丨","引":"巳㇉丨","弘":"巳㇉厶","弗":"巳㇉介","弛":"巳㇉㇖乚","弟":"弟巳㇉㇒","弦":"巳㇉亠ㄠ","弧":"巳㇉⺁㇏","弩":"女又巳㇉","弭":"巳㇉一耳","弱":"巳㇉冫冫","張":"巳㇉長衣","強":"巳㇉厶虫","弼":"巳㇉一㇉","彆":"敝攵巳㇉","彈":"巳㇉口十","彌":"巳㇉一乂","彎":"言糸糸㇉","彗":"丰丰尹","彙":"彑冖日木","彞":"录米糸廾r","彤":"冂亠彡","形":"一廾彡","彥":"產彡","彬":"木木彡","彩":"爫木彡","彫":"冂土口彡","彭":"土口䒑彡","彰":"立日十彡","影":"日亠口彡","彷":"彳方","役":"彳殳又","往":"彳亠土","征":"彳一止","彿":"彳巳㇉介","彼":"彳皮又","很":"彳彐衣","待":"彳士子丶","徊":"彳囗口","律":"彳尹奉","徇":"彳勹日","後":"彳ㄠ夂","徒":"彳土龰","徑":"彳一巛工","徐":"彳合木","得":"彳日一丶","徙":"彳止龰","從":"彳人人龰","徘":"彳非悲","御":["彳生十卩","彳生一卩e"],"復":"彳生日夂","循":"彳⺁十目","徨":"彳㇒日土","徬":"彳亠弟方","微":["微儿攵","彳山一攵e"],"徹":"彳ㄊ⺼攵","德":"彳十罒心","徵":"微㇒土攵","徽":"微糸攵","心":"心","必":"心㇒","忙":"忄亠㇗","忖":"忄子丶","忘":"亠㇗心","忌":"巳乚心","志":"士心","忍":"刀丶心","忱":"忄冖冘","快":"忄夬人","忝":"一大⺗","忠":"口丨心","忽":"勹勿心","念":"合㇖心","忿":"八刀心","怏":"忄冂大","怔":"忄一止","怯":"忄土厶","怵":"忄述丶","怖":"忄在冂丨","怪":"忄又土","怕":"忄㇒日","怡":"忄厶口","性":"忄生土","怒":"女又心","思":"田心","怠":"厶口心","急":"⺈尹心","怎":"生乍心","恕":"女口心","恭":"共八⺗","恩":"囗大心","息":"㇒目心","悄":"忄⺌⺼","悟":"忄一五口","悚":"忄木口","悍":"忄日一十","悔":"忄生毋母","悌":"忄弟巳㇒","悅":"忄八口儿","悖":"忄十冖子","恿":"マ冂奉心","患":"口口丨心","悉":"㇒米心","悠":"亻丨攵心","您":"亻⺈小心","惋":"忄宀夕乚","悴":"忄亠人十","惦":"忄广⺊口","悽":"忄一尹女","情":"忄青月","悲":"非悲心","悶":"門心","惠":"惠心","意":"立日心","慈":"䒑ㄠㄠ心","感":"厂可心戈","想":"木目心","愛":"爫冖心夂","慢":"忄⺜罒又","慶":"鹿㇖心夂","成":"厂㇆戈","戒":"一廾戈","我":"㇒扌戈","或":"可㇀戈","戶":"戶","房":"戶方","戾":"戶大丶","所":"戶斤","扁":"戶冂卄","扇":"戶羽羽","扈":"戶口巳乚","扉":"戶非悲","手":"手","才":"子㇒","扎":"扌乚","打":"扌一亅","扔":"扌㇒㇡","扒":"扌八","扣":"扌口","扛":"扌工","托":"扌㇒七","抄":"扌小㇒","抗":"扌亠几","抖":"扌⺀十","技":"扌十又","扶":"扌夫","抉":"扌夬人","扭":"扌㇕土","把":"扌巳丨乚","扼":"扌厂㇆乚","找":"扌一戈","批":"扌匕匕","扳":"扌厂又","抒":"扌マ㇖亅","扯":"扌止","折":"扌斤","扮":"扌八刀","投":"扌殳又","抓":"扌⺁丨㇏","抑":"扌氏卩","承":"㇖奉㇖承","拉":"扌立","拌":"扌半","拄":"扌亠土","抿":"扌巳㇙㇂","拂":"扌巳㇉介","抹":"扌木一","拒":"扌匚巳","招":"扌刀口","披":"扌皮又","拓":"扌石","拔":"扌在乂丶","拗":"扌ㄠ力","拆":"扌斤丶","抬":"扌厶口","拎":"扌合マ","拜":"拜一丰","挖":"扌宀ㄦ乙","按":"扌宀女","拼":"扌䒑廾","拭":"扌一工弋","持":"扌士子丶","拮":"扌士口","拽":"扌日戈","拿":"合口手","捷":"扌一尹龰","擊":"車凵殳手","攜":"扌山亻口","支":"十又","收":"㇗丨攵","改":"巳㇙攵","攻":"工攵","放":"方攵","政":"一止攵","故":"十口攵","效":"亠八乂攵","敝":"敝攵","敖":["士方攵","青沒攵e"],"救":"子求丶攵","教":"土㇒㇖攵","敗":"貝攵","啟":"戶口攵","文":"亠乂","斑":"一土亠土","斐":"非悲亠乂","斗":"⺀十","料":"米⺀十","斜":"合木⺀十","斟":"其一ㄦ十","斡":"十日十十","斤":"斤","斥":"斤丶","斧":"八乂斤","斫":"石斤","斬":"車斤","斯":"其一八斤","新":"立木斤","斷":"ㄠㄠ一斤","方":"方","於":"方人⺀","施":"方生㇖乚","旁":"亠弟冖方","旅":"方生氏承","族":"方生生大","旋":"方生㇖龰","旌":"方生生土","旎":"方生尸匕","旗":"方生其八","旖":"方生大亅","既":"即匚冘","日":"日","旦":"日一","早":"日十","旨":"匕日","旬":"勹日","旭":"㇒⺄日","旱":"曰一十","旺":"日一土","昔":"共日","易":"日勹勿","昌":"日日","昆":"日匕匕","昂":"曰氏卩","明":"日月","昀":"日勹一一","昏":"氏一㇂日","春":"春日","昭":"日刀口","映":"日冂大","昧":"日一木","是":"日一龰","星":"日生土","昨":"日生乍","時":"日士子丶","晉":"一厶厶日","晏":"日宀女","晃":"日⺌一儿","晒":"日一西","晌":"日㇒冂口","晝":"尹土日一","晚":"日⺈口冘","晤":"日一五口","晨":"日厂一衣","晦":"日生毋母","普":"䒑業一日","晰":"日木斤","晴":"日青月","晶":"日日日","景":"日亠口小","暑":"日土㇒日","智":"生大口日","暗":"日立日","暉":"日冖車","暇":"日假巳又","暈":"日冖車","暖":"日爫一又","暢":"日丨日勿","暨":"即匚冘一","暮":"艹日大日","暫":"車斤日","暴":"日共八氺","曆":"厂㇒木日","曉":"日土土儿","暹":"日亻隹辶","曙":"日罒土日","曖":"日爫冖夂","曠":"日广黃八","曝":"日日共氺","曦":"日䒑土戈","曰":"曰","曲":"囗卄","曳":"曰曳","更":"一日乂","曷":"日勹人㇗","書":"尹土日","曹":"曹日","勗":"日且㇀力","曾":"弟會日","替":"夫夫日","會":"合會日","月":"月","有":"在月","服":"月卩又","朋":"月月","朔":"䒑艸月","朕":"月䒑大","朗":"丶即月","望":"亠㇗炙土","期":"其一八月","朝":"十日十月","朦":"月艹冖豕","朧":"月立⺼龍","木":"木","朮":"述丶","本":"木一","未":"一木","末":"木一","札":"木乚","朽":"木一㇉","朴":"木卜","朱":"生木","朵":"几木","束":"木口","李":"木㇖子","杏":"木口","材":"木子㇒","村":"木子丶","杜":"木土","杖":"木在㇏","杞":"木巳乚","杉":"木彡","杭":"木亠几","枋":"木方","枕":"木冖冘","東":"木日","果":"日木","杳":"木日","杷":"木巳丨乚","枇":"木匕匕","枝":"木十又","林":"木木","杯":"木不","杰":"木灬","板":"木厂又","枉":"木一土","松":"木八厶","查":"木日一","桌":"⺊日木","桑":"又又又木","梁":"氵刀丶木","業":"業一䒑木","樓":"木婁口女","樊":"木乂乂大","槳":"爿炙子木","樂":"㇒日ㄠ木","歡":"夢口口人","止":"止","正":"一止","此":"止匕","步":"止步","武":"一一止弋","歧":"止十又","歪":"不一止","歲":"止厂一戈","歷":"厂㇒木止","歸":"㇒官止丨","歹":"一夕","死":"一夕匕","歿":"一夕沒又","殃":"一夕冂大","殆":"一夕厶口","殊":"一夕生木","殉":"一夕勹日","殘":"一夕一戈","殖":"一夕十一","殤":"一夕生勿","殮":"一夕合人","殯":"一夕宀貝","殲":"一夕人戈","段":"段殳又","殷":"⺁彐㇆又","殺":"乂述殳又","殼":"壺一几又","毀":"臼土殳又","殿":"尸共八又","毅":"立豕殳又","毆":"匚口口又","毋":"毋十","母":"毋母","每":"生毋母","毒":["青毋十","青毋在"],"毓":"生毋母流","比":"匕匕","毗":"田匕匕","毛":"㇒毛","毫":"亠口冖毛","毯":"㇒毛火火","毽":"㇒毛尹廴","氏":"氏一㇂","民":"巳㇙一㇂","氐":"氏一㇂一","氓":"亠㇗巳㇂","氖":"气㇒㇡","氛":"气八刀","氟":"气巳㇉介","氣":"气米","氧":"气䒑奉","氨":"气宀女","氦":"气亠亥人","氤":"气囗大","氫":"气一巛工","氮":"气火火","氯":"气彑氺","氳":"气溫皿","水":"水","永":"丶永","汁":"氵十","汀":"氵一亅","氾":"氵㇆乚","求":"子求丶","汝":"氵女","汗":"氵一十","汙":"氵一子","江":"氵工","池":"氵㇖丨乚","汐":"氵夕","汕":"氵山","汞":"工水","沙":"氵小㇒","沁":"氵心","沈":"氵冖冘","沉":"氵冖儿","沅":"氵一一儿","沛":["氵一冂丨","氵亠冂丨"],"汪":"氵一土","決":"氵夬人","沐":"氵木","汰":"氵大丶","沌":"氵一凵乚","汨":"氵日","沖":"氵口丨","沒":"氵沒又","泰":"春氺","洋":"氵䒑奉","洲":"氵丶丿丨","洪":"氵共八","流":"氵ㄊ流","津":"氵尹奉","洌":"氵一夕刂","洱":"氵一耳","洞":"氵冂可","洗":"氵告儿","活":"氵㇒十口","洽":"氵合口","派":"氵⺁氏承","洶":"氵勹乂凵","洛":"氵夂口","浪":"氵丶彐衣","涕":"氵弟巳㇒","消":"氵⺌⺼","涇":"氵一巛工","浦":"氵甫丶","浸":"氵尹冖又","海":"氵生毋母","浙":"氵扌斤","涓":"氵口⺼","浬":"氵日土","涉":"氵止步","浮":"氵爫㇖子","浚":"氵厶ㄦ夂","浴":"氵八八口","浩":"氵告口","涎":"氵㇒止廴","涼":"氵亠口小","淳":"氵亠口子","淙":"氵宀一小","液":["氵亠亻㇏","氵亠亻丶e"],"淡":"氵火火","淌":"氵⺌冂口","淤":"氵方人⺀","添":["氵一大⺗","氵㇒大⺗"],"淵":"氵淵","減":"氵厂可戈","溝":"氵冓冂土","溫":"氵溫皿","滿":"氵廿冂入","滯":"氵帶冖丨","漆":"氵木漆氺","潔":"氵丰刀糸","火":"火","炙":"炙火","炫":"火亠ㄠ","為":"丶㇒㇖灬","烏":"烏灬","無":"生無灬","然":"炙大丶灬","煮":"土㇒日灬","熱":"土ㄦ土灬","爪":"⺁丨㇏","父":"八乂","爸":"八乂巳乚","爹":"八乂夕夕","爺":"八乂一阝","爻":"乂乂","爽":"大乂乂乂","爾":"一八冂乂","牆":"爿十人口","片":"片","版":"片厂又","牙":"匚亅㇒","特":"生孑士丶","犧":"生十䒑戈","犬":"大丶","犯":"犭㇆乚","狄":"犭火","狂":"犭一土","狀":"爿大丶","狎":"犭日丨","狙":"犭且一","狗":"犭勹口","獵":"犭巛溫鼠","玄":"亠ㄠ","率":"亠ㄠ求十","王":"一土","玉":"一土丶","玖":"一土久㇏","玩":"一土一儿","玨":"一土一土","玟":"一土亠乂","玫":"一土攵","玷":"一土⺊口","珊":"一土冂卄","玻":"一土皮又","玲":"一土合マ","珍":"一土人彡","珀":"一土㇒日","玳":"一土亻弋","班":"一土丶土","琉":"一土ㄊ流","珮":"一土几丨","珠":"一土生木","琅":"一土丶衣","琊":"一土匚阝","球":"一土子丶","理":"一土日土","現":"一土目儿","琍":"一土㇒刂","琺":"一土氵厶","琪":"一土其八","琳":"一土木木","琢":"一土一丶","琥":"一土虍儿","琵":"一土一匕","琶":"一土一乚","琴":"一土一㇖","瑯":"一土丶阝","瑚":"一土十⺼","瑕":"一土假又","瑟":"一土一㇒","瑞":"一土山而","瑁":"一土⺜目","琿":"一土冖車","瑙":["一土巛丶","一土巛乂"],"瑛":"一土艹大","瑜":"一土合刂","瑤":"一土炙山","瑣":"一土⺌貝","瑪":"一土馬灬","瑰":"一土鬼厶","瑩":"火火冖丶","璋":"一土立十","璃":"一土亠禸","璜":"一土廿八","璣":"一土ㄠ戈","璩":"一土虍豕","環":"一土罒衣","璦":"一土爫夂","璧":"尸口立丶","璽":"一八冂丶","瓊":"一土⺈攵","瓏":"一土立龍","瓜":"⺁瓜㇏","瓠":"大一一㇏","瓢":"一覀一㇏","瓣":"立十⺁十","瓦":"瓦丶","甘":"廿一","甚":["其一ㄦ㇗","其匚ㄦe"],"甜":["一十口一","㇒十口一"],"生":"生土","產":"產生土","甥":"生土日力","甦":"一日乂土","用":"冂奉","甩":"冂毛","甬":"マ冂奉","甫":"甫丶","甭":"不冂奉","田":"田","由":"囗十","甲":"日丨","申":"日丨","男":"田力","甸":"勹田","甽":"田介丨","畏":"田一衣","界":"田漆介","畔":"田半","疆":"巳㇉土一","病":"疒一冂人","發":"癶巳㇉又","皮":"皮又","盥":"叟水皿","盪":"氵日一皿","目":"目","盯":"目一亅","盲":"亠㇗目","直":"十直一","省":"小㇒目","盹":"目一凵乚","相":"木目","眉":"眉目","看":["㇒看目","拜目e"],"盾":"⺁十目","盼":"目八刀","眩":"目亠ㄠ","真":"十直一八","石":"石","矽":"石夕","砂":"石小㇒","研":"石一廾","砌":"石七刀","砍":"石⺈人","砰":"石一平","砧":"石⺊口","砸":"石匚冂丨","砝":"石土厶","破":"石皮又","砷":"石日丨","砥":"石氏一一","砭":"石㇒之","硫":"石ㄊ流","硃":"石生木","硝":"石⺌⺼","硬":"石一日乂","碳":"石山厂火","碩":"石一㇒貝","磋":"石䒑土工","磅":"石亠弟方","確":"石冖亻隹","磊":"石石石","碾":"石尸共衣","磕":"石土厶皿","碼":"石馬灬","磐":"㇒舟殳石","磨":"广述述石","磚":"石惠子丶","磬":"士眉殳石","磷":"石米夕韋","磺":"石黃田八","磴":"石癶可䒑","磯":"石ㄠㄠ戈","礁":"石亻隹灬","礎":"石木木龰","礙":"石匕生龰","礦":"石广黃八","礪":"石厂艹禸","礬":"木乂乂石","礫":"石㇒日木","示":"一一小","社":"神丶土","祀":"神丶巳乚","祁":"神丶阝","祭":"祭一一小","禹":"㇒口禸","萬":"艹日禸","禽":"人亠乂禸","禾":"㇒木","私":"㇒木厶","秀":"㇒木㇒㇡","禿":"㇒木儿","秉":"㇒木尹","科":"㇒木⺀十","秒":"㇒木小㇒","秋":"㇒木火","秤":"㇒木一平","秣":"㇒木一木","秧":"㇒木冂大","租":"㇒木且一","秦":"春㇒木","秩":"㇒木生大","移":"㇒木夕夕","稍":"㇒木⺌⺼","稈":"㇒木日十","程":"㇒木口土","稅":"㇒木八儿","稀":"㇒木乂丨","稜":"㇒木土夂","稚":"㇒木亻隹","稠":"㇒木冂口","窒":"宀ㄦ一土","窕":"宀ㄦ儿求","窘":"宀ㄦ尹口","窗":"宀ㄦ㇒丶","立":"立","站":"立⺊口","童":"立日土","竣":"立厶ㄦ夂","竭":"立日勹㇗","端":"立山一而","競":"立口儿儿","竹":"竹","竺":"竹一一","竿":"竹一十","竽":"竹一子","笆":"竹巳丨乚","笑":"竹㇒大","笠":"竹立","笨":"竹木一","笛":"竹囗十","第":"竹巳㇉㇒","符":"竹亻子丶","笙":"竹生土","笞":"竹厶口","等":"竹士子丶","策":"竹木冂","筆":"竹尹奉","筐":"竹匚一土","筒":"竹冂可","答":"竹合口","簡":"竹門日","米":"米","粉":"米八刀","粒":"米立","素":"青糸","索":"十冖糸","純":"糸一凵乚","紐":"糸㇕土","紕":"糸匕匕","級":"糸㇒廴","紜":"糸一一厶","納":"糸冂入","紙":"糸氏一㇂","紛":"糸八刀","絆":"糸半","絃":"糸亠ㄠ","統":"糸ㄊ儿","紮":"木乚糸","紹":"糸刀口","紼":"糸巳㇉介","絀":"糸屮凵","細":"糸田","紳":"糸日丨","組":"糸且一","累":"田糸","終":"糸夂⺀","絞":"糸亠八乂","結":"糸士口","絨":["糸一在戈","糸一十戈"],"絕":"糸刀巳乚","紫":"止匕糸","絮":"女口糸","絲":"糸糸","絡":"糸夂口","給":"糸合口","絢":"糸勹日","經":"糸一巛工","綠":"糸彑氺","緊":"匚丨巳糸","綴":"糸又又又","網":"糸冂䒑㇗","綱":"糸冂䒑山","綺":"糸大可亅","綢":"糸冂土口","綿":"糸㇒日丨","綵":"糸爫木","綸":"糸合冂卄","維":"糸亻隹","緒":"糸土㇒日","緇":"糸巛田","締":"糸亠弟丨","練":"糸木曾","縣":"直一小糸","織":"糸立日戈","繩":["糸冂一彐","糸冂一一e"],"繼":"糸ㄠㄠ㇗","纏":"糸广曰土","纖":"糸人人戈","缺":"生十凵人","羽":"羽羽","老":"土㇒匕","考":"土㇒一㇉","者":"土㇒日","耆":"土㇒匕日","而":"一㇒冂而","耐":"一㇒冂丶","耍":"一㇒冂女","耒":"丰八","耘":"丰八一厶","耕":"丰八奉丨","耙":"丰八巳乚","耗":"丰八㇒毛","耜":"丰八官","耳":"一耳","耶":"一耳阝","耽":"一耳冖冘","耿":"一耳火","聊":"一耳氏卩","聆":"一耳合マ","聖":"一耳口土","聘":"一耳囗㇉","聞":"門一耳","聚":"一耳又人","聱":["士方攵耳","青沒攵耳e"],"聲":"士眉殳耳","聰":"一耳㇒心","聯":"一耳ㄠ丱","聳":"彳人人耳","職":"一耳立戈","聶":"一耳一耳","聾":"立⺼龍耳","聽":["一耳㇒心","一耳一心e"],"聿":"尹奉","肆":"镸尹奉","肄":"匕生大奉","肅":["尹丨淵","尹淵丨"],"肇":"戶攵尹奉","肉":"冂人人","肋":"⺼力","肌":"⺼几","肖":"⺌⺼","肓":"亠㇗⺼","肝":"⺼一十","肘":"⺼子丶","肛":"⺼工","肚":"⺼土","育":"ㄊ⺼","胖":"⺼半","能":"厶⺼匕匕","脊":"人求⺼","脯":"⺼甫丶","脖":"⺼十冖子","脣":"厂一一⺼","脫":"⺼八口儿","脩":"亻丨攵⺼","腕":"⺼宀夕乚","腔":"⺼宀ㄦ工","腋":"⺼亠亻㇏","腑":"⺼广亻丶","腎":"匚丨巳⺼","脹":"⺼長衣","腆":"⺼冂共八","脾":"⺼㇒日十","腐":"广亻子人","腱":"⺼尹奉廴","腰":"⺼一覀女","腸":"⺼日一勿","腥":"⺼日生土","腮":"⺼田心","腳":"⺼八八卩","腫":"⺼重日","腹":"⺼生日夂","腺":"⺼㇒日水","腦":"⺼巛㇒乂","膝":"⺼木漆氺","臣":"匚丨巳丨","臥":"匚丨巳人","臧":"厂㇗厂戈","臨":"匚丨巳口","自":"㇒目","臭":"㇒目大丶","臬":"㇒目木","至":"一厶土","致":"一厶土夂","臺":"士口冖土","臻":"一厶土木","臼":"臼","臾":"臼人","舀":"爫臼","舂":"春臼","舅":"臼田力","與":"學與一八","興":"學冂可八","舉":"學與一奉","舊":"夢亻隹臼","舌":["一十口","㇒十口"],"舍":"合十口","舐":["一十口㇂","㇒十口㇂"],"舒":"合十口亅","舔":["一十口⺗","㇒十口⺗"],"舛":"夕韋","舜":"爫冖夕韋","舞":"生無夕韋","舟":"㇒舟","舢":"㇒舟山","航":"㇒舟亠几","舫":"㇒舟方","舨":"㇒舟厂又","般":"㇒舟殳又","舵":"㇒舟宀它","舷":"㇒舟亠ㄠ","舶":"㇒舟㇒日","船":["㇒舟ㄦ口","㇒舟儿口"],"艇":"㇒舟㇒廴","艘":"㇒舟叟又","艙":"㇒舟合口","艦":"㇒舟匚皿","艮":"彐衣","良":"丶彐衣","艱":"革夫彐衣","色":"⺈巳丨乚","艾":"艹乂","芒":"艹亠㇗","芋":"艹一子","芍":"艹勹丶","芳":"艹方","芝":"艹之","芙":"艹夫","芭":"艹巳丨乚","芽":"艹匚亅㇒","芟":"艹殳又","芹":"艹斤","花":"艹亻匕","芬":"艹八刀","華":"艹一艹奉","藏":"艹厂㇗戈","薩":"艹阝產土","藍":"艹匚丨皿","藐":"艹豸㇒儿","藉":"艹丰八日","薰":"艹重曾灬","藩":"艹氵㇒田","藝":"艹土ㄦ厶","虎":"虍儿","虐":"虍匚一","虔":"虍亠乂","處":"虍夂几","彪":"虍儿彡","虛":"虍丱一","虞":"虍口㇞大","虜":"虍囗十力","號":"口一㇉儿","虧":"虍亻隹㇉","虫":"虫","虱":"⺄一虫","虹":"虫工","蚊":"虫亠乂","蚪":"虫⺀十","蚓":"虫巳㇉丨","蚤":"又丶丶虫","蚩":"艸一虫","蚌":"虫丰","蚣":"虫八厶","蛇":"虫宀它","蛀":"虫亠土","蚶":"虫廿一","蛄":"虫十口","蚵":"虫可亅","蛆":"虫且一","蛋":"㇖龰虫","蚱":"虫生乍","蚯":"虫丘一","蛟":"虫亠八乂","蛙":"虫土土","蛭":"虫一厶土","蛔":"虫囗口","蛛":"虫生木","蛤":"虫合口","蛹":"虫マ冂奉","蜓":"虫㇒土廴","蜈":"虫口㇞大","蜇":"扌斤虫","蜀":"罒勹虫","蛾":"虫㇒扌戈","蛻":"虫八口儿","蜂":"虫夂丰","蜃":"厂一一虫","蜿":"虫宀夕乚","蜜":"宀心㇒虫","蜻":"虫青月","蜢":"虫㇖子皿","蜥":"虫木斤","蠟":"虫巛溫鼠","蠱":"虫虫虫皿","蠶":"匚冘匚虫","蠹":"可丨冖虫","蠻":"言糸糸虫","血":"㇒皿","行":"彳一一亅","衍":"彳氵一亅","術":"彳述丶亅","街":"彳土土亅","衙":"彳一五亅","衛":"彳五口亅","衝":"彳重日亅","衡":"彳魚大亅","衢":"彳目目亅","衣":"亠㇒衣","初":"神承刀","表":"青㇒衣","衫":"神承彡","衰":"亠婁㇒衣","裡":"神承曰土","褻":"亠土ㄦ衣","西":"一西","要":"一覀女","覃":"一覀日十","覆":"一覀彳夂","見":"目儿","覓":"爫目儿","規":"夫目儿","視":"神丶目儿","親":"立木目儿","覦":"合月刂儿","覬":"山可䒑儿","覲":"革青目儿","覺":"學乂乂儿","覽":"匚丨巳儿","觀":"夢口口儿","角":"角","解":"角刀生十","觴":"角生日勿","觸":"角罒勹虫","言":"言","計":"言十","訂":"言一亅","訃":"言卜","記":"言巳乚","訐":"言一十","討":"言子丶","訌":"言工","訕":"言山","訊":"言⺄十","託":"言㇒七","訓":"言介丨","訖":"言生乙","訪":"言方","訝":"言匚亅㇒","訣":"言夬人","訥":"言冂入","許":"言生十","設":"言殳又","訟":"言八厶","訛":"言亻匕","註":"言亠土","詠":"言丶永","評":"言一平","詞":"言㇆可","証":"言一止","詁":"言十口","詔":"言刀口","詛":"言且一","詐":"言生乍","詆":"言氏一一","訴":"言斤丶","診":"言人彡","詫":"言宀㇒七","該":"言亠亥人","詳":"言䒑奉","試":"言一工戈","詩":"言士子丶","詰":"言士口","誇":"言大一㇉","詼":"言在火","詣":"言匕日","誠":"言厂㇆戈","話":"言㇒十口","誰":"言亻隹","論":"言合冂卄","諍":"言爫尹亅","諦":"言亠弟丨","諺":"言產彡","諫":"言木曾","諱":"言五口韋","謀":"言廿一木","諜":"言廿㇗木","諧":"言匕匕日","諮":"言冫⺈口","諾":"言艹在口","謁":"言日勹㇗","謂":"言田⺼","諷":"言風","譽":"學與一言","讀":"言士罒貝","變":"言糸糸攵","讓":"言亠口衣","讒":"言⺈口丶","讖":"言人人戈","讚":"言告儿貝","谷":"八八口","豁":"宀青口口","谿":"爫ㄠ大口","豆":"可䒑","豈":"山可䒑","豉":"可䒑十又","豌":"可䒑宀乚","豎":"匚丨巳䒑","豐":"丨丰丰䒑","豔":"丨丰丰皿","豕":"一豕","豚":"⺼一豕","象":"⺈象豕","豢":["䒑大一豕","弟夫一豕e"],"豪":"亠口冖豕","豬":"一豕土日","豫":"マ㇖亅豕","豺":"豸子㇒","豹":"豸勹丶","貂":"豸刀口","貊":"豸一㇒日","貉":"豸夂口","貍":"豸日土","貌":"豸㇒日儿","貓":"豸艹田","貝":"貝","貞":"⺊貝","負":"⺈貝","財":"貝子㇒","貢":"工貝","販":"貝厂又","責":"青貝","貫":"囗十貝","貨":"亻匕貝","貪":"合㇖貝","貧":"八刀貝","貯":"貝宀一亅","貼":"貝⺊口","貳":"一一一弋","賊":["貝一在戈","貝一十戈"],"資":["一一⺈貝","冫⺈人貝"],"賈":"一覀貝","賄":"貝在月","貲":"止匕貝","賃":"亻一士貝","賂":"貝夂口","賓":"宀一步貝","貽":"貝厶口","賅":"貝亠亥人","賁":"十卄貝","費":"巳㇉介貝","賀":"力口貝","貴":"口丨一貝","買":"罒貝","貶":"貝㇒之","貿":"氏丶刀貝","貸":"亻一弋貝","賑":"貝厂一衣","賒":"貝合一小","賠":"貝立口","賞":"⺌冖口貝","賦":"貝一一弋","賤":"貝一戈戈","賬":"貝長衣","賭":"貝土㇒日","賢":"匚丨巳貝","賣":"士罒貝","賜":"貝日勹勿","質":"斤斤貝","賴":"木口刀貝","賺":"貝䒑尹亦","賽":"宀冓八貝","購":"貝冓冂土","贅":["士方攵貝","青沒攵貝e"],"贈":"貝弟會日","贊":"告儿告貝","贏":"贏⺼貝丶","赤":"土亦","走":"土龰","赴":"土龰卜","赳":"土龰㇗丨","起":"土龰巳乚","越":"土龰戉戈","超":"土龰刀口","趁":"土龰人彡","趙":"土龰⺌⺼","趕":"土龰日十","趟":"土龰⺌口","趣":"土龰一又","趨":"土龰勹艸","足":"口龰","趴":"足八","趾":"足止","跎":"足宀它","距":"足匚巳","跋":"足在乂丶","跚":"足冂卄","跑":"足勹巳乚","跌":"足生大","跛":"足皮又","跆":"足厶口","跡":"足亠亦","跟":"足彐衣","跨":"足大一㇉","路":"足夂口","跳":"足儿求","身":"身","躬":"身巳㇉","躲":"身殳木","躺":"身⺌冂口","軀":"身匚口口","車":"車","軋":"車乚","軍":"冖車","軌":"車㇒⺄","辛":"立十","辜":"十口立十","辟":"尸口立十","辣":"立十木口","辨":"立十丶十","辦":"立十力十","辭":"爫マ冂十","辯":"立十言十","辰":"厂一一衣","辱":"厂一一丶","農":"囗卄厂衣","迂":"一子辶","迆":"㇖丨乚辶","迅":"⺄十辶","迄":"生乙辶","巡":"巛辶","迎":"氏卩辶","返":"厂又辶","近":"斤辶","述":"述丶辶","迦":"力口辶","迢":"刀口辶","迪":"囗十辶","迥":"冂口辶","迭":"生大辶","迫":"㇒日辶","送":"䒑大辶","逆":"䒑艸辶","迷":"米辶","退":"彐衣辶","迺":"一西辶","迴":"囗口辶","逃":"儿求辶","追":"㇒官辶","逅":"⺁可辶","這":"言辶","逍":"⺌⺼辶","通":"マ冂奉辶","逗":"可䒑辶","連":"車辶","速":"木口辶","逝":"扌斤辶","逐":"一豕辶","逕":"一巛工辶","逞":"口㇒土辶","造":"告口辶","透":"㇒木㇒辶","逢":"夂丰辶","達":"土䒑奉辶","過":"冎口辶","遠":"土口㇒辶","遞":"⺁虍儿辶","遲":"尸氺生辶","遼":"大弟日辶","遺":"口丨一辶","避":"尸口立辶","遽":"虍一豕辶","還":"罒可㇒辶","邁":"艹日禸辶","邂":"角刀生辶","邀":"㇒日方辶","邇":"一八冂辶","邊":"㇒目宀辶","邐":"一冂丶辶","邏":"罒糸亻辶","邑":"口巳丨乚","邕":"巛口巳乚","邢":"一廾阝","邪":"匚亅㇒阝","邦":"丰阝","那":"㇆奉阝","邵":"刀口阝","邸":"氏一㇂阝","邱":"丘㇀阝","郊":"亠八乂阝","郎":"丶即阝","郁":"在月阝","郡":"尹㇒口阝","部":"立口阝","郭":"亠口㇖阝","都":"土㇒日阝","鄂":"口口一阝","郵":"重艹阝","鄉":"㇛亥丶阝","鄒":"勹艸勹阝","鄙":"口亠囗阝","鄰":"米夕韋阝","鄭":"䒑酉大阝","鄧":"癶可䒑阝","鄱":"㇒米田阝","鄹":"一耳又阝","酉":"一酉","酋":"䒑酉","酊":"一酉一亅","酒":"氵一酉","配":"一酉巳乚","酌":"一酉勹丶","酗":"一酉乂凵","酣":"一酉廿一","酥":"一酉㇒木","酬":"一酉丶丨","酪":"一酉夂口","酩":"一酉夕口","酵":"一酉土子","酸":"一酉厶夂","酷":"一酉告口","醇":"一酉亠子","醉":"一酉亠十","醋":"一酉共日","醃":"一酉大㇗","醒":"一酉日土","醣":"一酉广口","醞":"一酉溫皿","醜":"一酉鬼厶","醫":"匚生大酉","醬":"爿炙子酉","醺":"一酉重灬","釀":"一酉亠衣","釁":"學冂一刀","采":"爫木","釉":["爫木囗十","㇒米囗十e"],"釋":"㇒米罒十","里":"日土","重":"重日","野":"日土マ亅","量":"日一日土","釐":"一木攵土","金":"金","釘":"金一亅","針":"金十","釗":"金刂","釜":"八乂一䒑","釵":"金又丶","釦":"金口","鈔":"金小㇒","釣":"金勹丶","釧":"金介丨","鈕":"金㇕土","鈣":"金一⺊㇉","鈉":"金冂入","鈞":["金勹一一","金勹冫"],"鈍":"金一凵乚","鈐":"金合㇖","鈷":"金十口","鉗":"金廿一","鈸":"金在乂丶","鈽":"金在冂丨","鐵":"金土口戈","鐺":"金⺌冖田","鐸":"金罒土十","鐲":"金罒勹虫","鑄":"金士㇖丶","鑑":"金匚丨皿","鑒":"匚丨巳金","鑣":"金鹿匕灬","鑠":["金㇒日木","金ㄠ㇒木"],"鑲":"金亠口衣","鑰":"金合口卄","鑽":"金告儿貝","鑾":["言糸糸金","糸言糸金"],"鑼":"金罒糸隹","鑿":"業一䒑金","長":"長衣","門":"門","閂":"門一","閃":"門人","閉":"門子㇒","閔":"門亠乂","閏":"門一土","開":"門一廾","閑":"門木","間":"門日","閒":"門月","閘":"門日丨","閡":"門亠亥人","閨":"門土土","閩":"門虫","閣":"門夂口","閥":"門亻一戈","閤":"門合口","閭":"門口㇒口","閱":"門八口儿","閻":"門⺈臼","闊":"門氵㇒口","闋":["門癶一大","門癶㇒大"],"闌":"門木曾","闈":"門五口韋","闆":"門口口口","闔":"門土厶皿","闖":"門馬灬","闐":"門十且八","關":"門ㄠㄠ丱","闡":"門口口十","闢":"門尸口十","阜":"㇒官十","阡":"阝㇒十","防":"阝方","阮":"阝一一儿","阱":"阝奉丨","阪":"阝厂又","陀":"阝宀它","阿":"阝可亅","阻":"阝且一","附":"阝亻子丶","限":"阝彐衣","陋":"阝一冂㇗","陌":"阝一㇒日","降":"阝夂韋","院":"阝宀一儿","陣":"阝車","陡":"阝土龰","陛":"阝匕匕土","陝":"阝大入入","除":"阝合木","陪":"阝立口","陵":"阝土ㄦ夂","陳":"阝木日","陸":"阝土ㄦ土","陰":"阝合夬厶","陴":"阝㇒日十","陶":"阝勹生山","陷":"阝⺈臼","隊":"阝䒑豕","階":"阝匕匕日","隋":"阝在工⺼","陽":"阝日一勿","隅":"阝日禸","隆":"阝夂一土","隍":"阝㇒日土","陲":"阝重艹","隘":"阝䒑八皿","隔":"阝可冂丨","隕":"阝口貝","隙":"阝小㇒小","障":"阝立日十","際":"阝祭一小","隧":"阝䒑豕辶","隨":"阝在工辶","險":"阝合口人","隱":"阝爫工心","隴":"阝立⺼龍","隸":"木一一氺","隻":"亻隹又","雀":"小亻隹","雁":"厂亻亻隹","雅":"匚亅㇒隹","雄":"在厶亻隹","集":"亻隹木","雇":"戶亻隹","雍":"亠㇛亥隹","雋":"亻隹凹","雉":"生大亻隹","雌":"止匕亻隹","雕":"冂土口隹","雖":"口虫亻隹","離":"亠乂凵隹","雜":"亠人人隹","雙":"亻隹亻又","雛":"勹艸勹隹","雞":"爫ㄠ大隹","難":"革夫亻隹","雨":"雨","雪":"雨尹","雯":"雨亠乂","雲":"雨一一厶","雷":"雨田","電":"雨曰乚","雹":"雨勹巳乚","零":"雨合マ","需":"雨一㇒而","霄":"雨⺌⺼","霆":"雨㇒土廴","震":"雨厂一衣","霉":"雨生毋母","霎":"雨立女","霑":"雨氵⺊口","霖":"雨木木","霍":"雨亻隹","霓":"雨臼儿","霏":"雨非悲","霜":"雨木目","霞":"雨假巳又","霪":"雨氵爫土","霧":"雨マ㇖力","霸":"雨革十月","霹":"雨尸口十","露":"雨足夂口","霽":"雨亠弟囬","霾":"雨豸日土","靂":"雨厂㇒止","靈":"雨口口人","靄":"雨言日㇗","青":"青月","靖":"立青月","靛":"青月宀龰","靜":"青月爫亅","非":"非悲","靠":"告口非悲","靡":"广述述悲","面":"一㇒囗囬","靦":"一㇒囗儿","靨":"厂日⺼囬","革":"革十","靴":"革十亻匕","靶":"革十巳乚","靼":"革十日一","鞅":"革十冂大","鞍":"革十宀女","鞋":"革十土土","鞏":"工几丶十","鞘":"革十⺌⺼","鞠":"革十勹米","鞣":"革十マ木","鞦":"革十㇒火","鞭":"革十亻乂","韃":"革十土辶","韁":"革十一一","韆":"革十一辶","韋":"五口韋","韌":"五口韋丶","韓":"十日十韋","韜":"五口韋臼","韭":"非悲一","音":"立日","章":"立日十","竟":"立日儿","韶":"立日刀口","韻":"立日口貝","響":"㇛亥丶日","頁":"一㇒貝","頂":"一亅一貝","頃":"匕一㇒貝","項":"工一㇒貝","順":"介丨一貝","須":"彡一㇒貝","預":"マ㇖亅貝","頑":"一一儿貝","頓":"一凵㇙貝","頊":"一土一貝","頒":"八刀一貝","頌":"八厶一貝","頗":"皮又一貝","領":"合マ一貝","頡":"士口一貝","頰":"大人人貝","頸":"一巛工貝","頻":"止步一貝","頷":"合㇖口貝","頭":"可䒑一貝","頹":"㇒木儿貝","頤":"匚丨口貝","顆":"日木一貝","額":"宀夂口貝","顏":"產彡一貝","題":"日一龰貝","顎":"口口一貝","顓":"山一㇒貝","類":"米大丶貝","願":"厂㇒日貝","顛":"十直一貝","顧":"戶亻隹貝","顫":"亠囗口貝","顯":"日糸糸貝","顰":"止步一十","顱":"虍田皿貝","風":"風","颯":"立風","颱":"風厶口","颳":"風㇒十口","颶":"風直一八","颺":"風日一勿","颼":"風叟丨又","飄":"一覀一風","飛":"⺄承㇒丨","食":"合彐衣","飢":"合即几","飧":"夕合彐衣","飪":"合即一士","飯":["合即厂又","合即⺁又"],"飩":"合即一乚","飲":"合即⺈人","飭":"合即生力","飼":"合即㇆可","飴":"合即厶口","飽":"合即勹乚","飾":"合即生丨","餃":"合即亠乂","餅":"合即䒑廾","餌":"合即一耳","餉":"合即㇒口","養":"䒑土八衣","餓":"合即㇒戈","餒":"合即爫女","餘":"合即合木","餐":"⺊夕又衣","館":"合即宀官","餞":"合即一戈","餛":"合即日匕","餡":"合即⺈臼","餵":"合即田衣","餾":"合即氏田","餿":"合即叟又","餽":"合即鬼厶","饅":"合即⺜又","饒":"合即土儿","饑":"合即ㄠ戈","饜":"厂日⺼衣","饞":"合即⺈丶","首":"䒑㇒目","香":"㇒木日","馥":"㇒木日夂","馨":"士眉殳日","馬":"馬灬","馮":"冫馬灬","馭":"馬灬又","馳":"馬灬㇖乚","馱":"馬灬大","馴":"馬灬介丨","駁":"馬灬乂乂","駝":"馬灬宀它","駐":"馬灬亠土","駟":"馬灬四","駛":"馬灬口乂","駑":"女又馬灬","駕":"力口馬灬","駒":"馬灬勹口","駙":"馬灬亻丶","駭":"馬灬亠人","駢":"馬灬䒑廾","駱":"馬灬夂口","騁":"馬灬囗㇉","駿":"馬灬厶夂","騎":"馬灬大亅","騖":"マ㇖亅灬","騙":"馬灬戶卄","騫":"宀冓八灬","騰":["月䒑大灬","月弟夫灬e"],"騷":"馬灬又虫","驅":"馬灬匚口","驃":"馬灬一小","驀":"艹日大灬","騾":"馬灬田糸","驕":"馬灬㇒口","驚":"夢勹口灬","驛":"馬灬罒十","驗":"馬灬合人","驟":["馬灬一人","馬灬一乑"],"驢":"馬灬虍皿","驥":"馬灬北八","驪":"馬灬一匕","骨":"冎⺼","骯":"冎⺼亠几","骰":"冎⺼殳又","骷":"冎⺼十口","骸":"冎⺼亠人","骼":"冎⺼夂口","髏":"冎⺼日女","髒":"冎⺼艹廾","髓":"冎⺼在辶","體":"冎⺼囗䒑","高":"亠口冂口","髦":"镸彡㇒毛","髮":"镸彡在丶","髯":"镸彡冂土","髻":"镸彡士口","髭":"镸彡止匕","鬃":"镸彡宀小","鬆":"镸彡木厶","鬍":"镸彡十⺼","鬚":"镸彡彡貝","鬢":"镸彡宀貝","鬥":"鬥","鬧":"鬥亠冂丨","鬨":"鬥共八","鬱":"木生十彡","鬼":"鬼厶","魁":"鬼厶⺀十","魂":"一一厶厶","魅":"鬼厶一木","魄":"㇒日鬼厶","魏":"㇒木女厶","魔":"广述述厶","魘":"厂日⺼厶","鬲":"可冂䒑丨","魚":"魚灬","魷":"魚灬在丶","魯":"魚灬日","鮑":"魚灬勹乚","鮮":"魚灬䒑奉","鮫":"魚灬亠乂","鮪":"魚灬在月","鯊":"氵小㇒灬","鯉":"魚灬日土","鯽":"魚灬即卩","鯨":"魚灬亠小","鯧":"魚灬日日","鰓":"魚灬田心","鰍":"魚灬㇒火","鰭":"魚灬土日","鰥":"魚灬罒氺","鱉":"敝攵魚灬","鰱":"魚灬車辶","鰾":"魚灬一小","鰻":"魚灬⺜又","鱔":"魚灬䒑口","鱗":"魚灬米韋","鱖":"魚灬厂人","鱷":["魚灬一一","魚灬可一"],"鱸":"魚灬虍皿","鳥":"鳥灬","鳩":"㇒⺄鳥灬","鳴":"口鳥灬","鳶":"一弋鳥灬","鳳":"几一鳥灬","鴆":"冖冘鳥灬","鴉":"匚亅㇒灬","鴕":"鳥灬宀它","鴣":"十口鳥灬","鴦":"冂大鳥灬","鴨":"日丨鳥灬","鴒":"合マ鳥灬","鴛":"夕㇆乚灬","鴻":"氵工鳥灬","鴿":"合口鳥灬","鵑":"口⺼鳥灬","鵝":"㇒扌戈灬","鵠":"告口鳥灬","鶉":"亠口㇖灬","鵡":"一一止灬","鵲":"共日鳥灬","鵪":"大日㇙灬","鵬":"月月鳥灬","鶯":"火火冖灬","鶴":"冖亻隹灬","鷂":"炙生十灬","鷓":"广廿灬灬","鷗":"匚口口灬","鷥":"糸糸鳥灬","鷹":"广亻亻灬","鷺":"足夂口灬","鸚":"貝貝女灬","鸞":"言糸糸灬","鹹":"⺊囗乂戈","鹼":"⺊囗乂人","鹽":"匚丨巳皿","鹿":"鹿匕匕","麂":"鹿匕匕几","麋":"鹿匕匕米","麒":"鹿匕匕八","麗":"一冂丶匕","麓":"木木鹿匕","麝":"鹿匕匕丶","麟":"鹿匕匕韋","麥":["十人人夕", "十人人夂"],"麩":"十人人夫","麴":"十人人米","麵":"十人人囬","麻":"广述述","麼":"广述述ㄠ","麾":"广述述毛","黃":"黃田八","黍":"㇒木漆氺","黎":"㇒木勹氺","黏":"㇒木漆口","黑":"黑灬","墨":"黑灬土","默":"黑灬大丶","黔":"黑灬合㇖","點":"黑灬⺊口","黜":"黑灬屮凵","黝":"黑灬ㄠ力","黛":"亻一戈灬","黠":"黑灬士口","黨":"⺌冖口灬","黯":"黑灬立日","黴":"微黑灬攵","黷":"黑灬士貝","鼇":"青方攵一","鼎":"目鼎","鼓":"士口䒑又","鼕":"士口䒑⺀","鼙":"士口䒑十","鼠":"臼鼠","鼬":"臼鼠囗十","鼴":"臼鼠匚女","鼻":"㇒目田介","鼾":"㇒目田十","齊":"亠弟丨囬","齋":["亠弟丨小","亠弟丨丨e"],"齒":"止齒","齟":"止齒且一","齣":"止齒勹口","齡":"止齒合マ","齜":"止齒止匕","齦":"止齒彐衣","齬":"止齒一口","齪":"止齒口龰","齷":"止齒尸土","齲":"止齒㇒禸","龍":"立⺼龍","龔":"立⺼龍八","龜":"⺈冂一乂"};

// this is in fact {common CN 3500}\{common TW 4808} -> 1238 characters
const decompositionCommonCN3500={"厂":"在4","儿":"儿4","亏":"一一㇉","与":"一㇉一","万":"一沒","亿":"亻乙r","个":"人丨r","勺":"勹丶","广":"广4","门":"丶冂r","义":"乂丶r","卫":"卩一r","飞":"⺄承r","习":"羽4r","马":"马一r","乡":"㇛亥r","丰":"丰4","开":"一廾r","无":"一在乚","专":"一一专","艺":"卄乙r","厅":"厂一亅","区":"匚乂r","历":"厂力r","车":"东十r","贝":"贝4r","冈":"冂乂r","内":"冂人r","见":"冂冘r","气":"气4","长":["㇒长㇏","长承re"],"币":"㇒冂丨","仅":"亻又r","从":"人人r","仑":"人它r","仓":"人㇆乚","风":"几乂r","匀":"勹冫r","乌":"乌一r","东":"东小r","卢":"⺊尸r","业":"業一r","旧":"丨日r","帅":"归冂丨","归":"归彐r","叶":"口十r","乐":"乐小r","册":"冂冂一r","处":["夂卜r","夂人r"],"鸟":"鸟一r","务":"夂力r","饥":"⺈㇙几","冯":"冫马一","闪":"丶冂人r","兰":"䒑一一","汇":"氵匚r","头":"⺀大r","汉":"氵又r","宁":"宀一亅","讨":"讠子丶r","写":"冖一㇉一","让":"讠⺊一","礼":"神丶乚","训":"讠介丨r","议":"讠乂丶","讯":"讠⺄十r","记":"讠巳乚r","辽":"㇖亅辶","边":"力辶r","发":"发又丶r","圣":"又土","对":"又子丶","兴":"兴一八","讲":"讠奉丨","寿":"寿子丶r","弃":["弃廾r","亠厶廾e"],"劲":"ス工力","齿":"止齿r","鱼":"魚一r","录":"录氺r","线":"纟一一戈r","练":"纟东练","织":"纟口八","贺":"力口贝r","钱":"钅一一戈","铲":"钅产r"};

// this is in fact {common JP 2136}\{common CN 3500 U common TW 4808} -> 271 characters
const decompositionCommonJP2136={"亜":["可而一","一口而一e"],"悪":["可而一心","一口而心e"],"圧":"在土r","扱":"扌㇒廴","囲":"囗奉丨","壱":"壺它r","茨":["艹一一人","艹冫⺈人"],"隠":"阝爫彐心","唄":"口貝","栄":"兴冖木","営":"兴冖口口","鋭":"金弟口儿r","駅":"馬灬尸㇏","閲":"門弟口儿r","円":"冂丨一","塩":"土生口皿","縁":"糸录豕","艶":"囗卄可乚","汚":"氵一一㇉r","応":"广心r","桜":"木兴女r"};

// this is in fact {less common TW 6341}\{common CN 3500 U common TW 4808 U common JP 2136} -> 6215 characters
const decompositionLessCommonTW6341={"丌":"一介","丏":"一丨㇗㇆","冇":"在冂","丮":"⺄奉","丱":"丱4","粼":"米夕韋巜","鹵":"⺊囗乂丶","斲":["㇗巳㇞斤","口口亞斤e"]};

// this is in fact {less common CN 3000}\{common CN 3500 U common TW 4808 U common JP 2136 U less common TW 6341} -> 1184 characters
const decompositionLessCommonCN3000={"幺":"ㄠ4r","韦":["一一㇆丨","奉㇆r"],"闩":"丶冂一","讣":"讠卜r","爿":"爿4"};

// when the above five objects are completed, start doing CJK characters
const decompositionOthers={"卐":["㇞一丨一","十丨丨一e"],"乑":"乑4r","眔":"罒眔r"};

// if two objects contain the same character, then the latter overwrites the former (not happening for the moment)
const codeDecomposition = { ...decompositionCommonTW4808, ...decompositionCommonCN3500, ...decompositionCommonJP2136, ...decompositionLessCommonTW6341, ...decompositionLessCommonCN3000, ...decompositionOthers };
