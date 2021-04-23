const codeSymbol={"ㄅ":[0,1],"ㄆ":[0,2],"ㄇ":[0,3],"ㄈ":[0,4],"ㄉ":[0,5],"ㄊ":[0,6],"ㄋ":[0,7],"ㄌ":[0,8],"ㄍ":[0,9],"ㄎ":[0,10],"ㄏ":[0,11],"ㄐ":[0,12],"ㄑ":[0,13],"ㄒ":[0,14],"ㄓ":[0,15],"ㄔ":[0,16],"ㄕ":[0,17],"ㄖ":[0,18],"ㄗ":[0,19],"ㄘ":[0,20],"ㄙ":[0,21],"ㄚ":[0,22],"ㄛ":[0,23],"ㄜ":[0,24],"ㄝ":[0,25],"ㄞ":[0,26],"ㄟ":[0,27],"ㄠ":[0,28],"ㄡ":[0,29],"ㄢ":[0,30],"ㄣ":[0,31],"ㄤ":[0,32],"ㄥ":[0,33],"ㄦ":[0,34],"ㄧ":[0,35],"ㄨ":[0,36],"ㄩ":[0,37],"˙":[0,38],"ˉ":[0,39],"ˊ":[0,40],"ˇ":[0,41],"ˋ":[0,42],"，":[1,1],"、":[1,2],"。":[1,3],"．":[1,4],"‧":[1,5],"；":[1,6],"：":[1,7],"？":[1,8],"！":[1,9],"︰":[1,10],"…":[1,11],"‥":[1,12],"﹐":[1,13],"﹑":[1,14],"﹒":[1,15],"·":[1,16],"﹔":[1,17],"﹕":[1,18],"﹖":[1,19],"﹗":[1,20],"｜":[1,21],"–":[1,22],"︱":[1,23],"—":[1,24],"︳":[1,25],"╴":[1,26],"︴":[1,27],"﹏":[1,28],"（":[2,1],"）":[2,2],"︵":[2,3],"︶":[2,4],"｛":[2,5],"｝":[2,6],"︷":[2,7],"︸":[2,8],"〔":[2,9],"〕":[2,10],"︹":[2,11],"︺":[2,12],"【":[2,13],"】":[2,14],"︻":[2,15],"︼":[2,16],"《":[2,17],"》":[2,18],"︽":[2,19],"︾":[2,20],"〈":[2,21],"〉":[2,22],"︿":[2,23],"﹀":[2,24],"「":[2,25],"」":[2,26],"﹁":[2,27],"﹂":[2,28],"『":[2,29],"』":[2,30],"﹃":[2,31],"﹄":[2,32],"﹙":[2,33],"﹚":[2,34],"﹛":[2,35],"﹜":[2,36],"﹝":[2,37],"﹞":[2,38],"‘":[2,39],"’":[2,40],"“":[2,41],"”":[2,42],"〝":[2,43],"〞":[2,44],"‵":[2,45],"′":[2,46],"＃":[3,1],"＆":[3,2],"＊":[3,3],"※":[3,4],"§":[3,5],"〃":[3,6],"○":[3,7],"●":[3,8],"△":[3,9],"▲":[3,10],"◎":[3,11],"☆":[3,12],"★":[3,13],"◇":[3,14],"◆":[3,15],"□":[3,16],"■":[3,17],"▽":[3,18],"▼":[3,19],"㊣":[3,20],"℅":[3,21],"¯":[3,22],"￣":[3,23],"＿":[3,24],"ˍ":[3,25],"﹉":[3,26],"﹊":[3,27],"﹍":[3,28],"﹎":[3,29],"﹋":[3,30],"﹌":[3,31],"﹟":[3,32],"﹠":[3,33],"﹡":[3,34],"＋":[4,1],"－":[4,2],"×":[4,3],"÷":[4,4],"±":[4,5],"√":[4,6],"＜":[4,7],"＞":[4,8],"＝":[4,9],"≦":[4,10],"≧":[4,11],"≠":[4,12],"∞":[4,13],"≒":[4,14],"≡":[4,15],"﹢":[4,16],"﹣":[4,17],"﹤":[4,18],"﹥":[4,19],"﹦":[4,20],"～":[4,21],"∩":[4,22],"∪":[4,23],"⊥":[4,24],"∠":[4,25],"∟":[4,26],"⊿":[4,27],"㏒":[4,28],"㏑":[4,29],"∫":[4,30],"∮":[4,31],"∵":[4,32],"∴":[4,33],"♀":[5,1],"♂":[5,2],"⊕":[5,3],"⊙":[5,4],"↑":[5,5],"↓":[5,6],"←":[5,7],"→":[5,8],"↖":[5,9],"↗":[5,10],"↙":[5,11],"↘":[5,12],"∥":[5,13],"∣":[5,14],"／":[5,15],"＼":[5,16],"∕":[5,17],"﹨":[5,18],"＄":[6,1],"￥":[6,2],"〒":[6,3],"￠":[6,4],"￡":[6,5],"％":[6,6],"＠":[6,7],"℃":[6,8],"℉":[6,9],"﹩":[6,10],"﹪":[6,11],"﹫":[6,12],"㏕":[6,13],"㎜":[6,14],"㎝":[6,15],"㎞":[6,16],"㏎":[6,17],"㎡":[6,18],"㎎":[6,19],"㎏":[6,20],"㏄":[6,21],"°":[6,22],"兙":[6,23],"兛":[6,24],"兞":[6,25],"兝":[6,26],"兡":[6,27],"兣":[6,28],"嗧":[6,29],"瓩":[6,30],"糎":[6,31],"▁":[7,1],"▂":[7,2],"▃":[7,3],"▄":[7,4],"▅":[7,5],"▆":[7,6],"▇":[7,7],"█":[7,8],"▏":[7,9],"▎":[7,10],"▍":[7,11],"▌":[7,12],"▋":[7,13],"▊":[7,14],"▉":[7,15],"┼":[7,16],"┴":[7,17],"┬":[7,18],"┤":[7,19],"├":[7,20],"▔":[7,21],"─":[7,22],"│":[7,23],"▕":[7,24],"┌":[7,25],"┐":[7,26],"└":[7,27],"┘":[7,28],"╭":[7,73],"╮":[7,74],"╰":[7,75],"╯":[7,76],"═":[7,72],"╞":[7,56],"╪":[7,57],"╡":[7,58],"◢":[7,37],"◣":[7,38],"◥":[7,39],"◤":[7,40],"╱":[7,41],"╲":[7,42],"╳":[7,43],"╔":[7,44],"╦":[7,45],"╗":[7,46],"╠":[7,47],"╬":[7,48],"╣":[7,49],"╚":[7,50],"╩":[7,51],"╝":[7,52],"╒":[7,53],"╤":[7,54],"╕":[7,55],"╘":[7,59],"╧":[7,60],"╛":[7,61],"╓":[7,62],"╥":[7,63],"╖":[7,64],"╟":[7,65],"╫":[7,66],"╢":[7,67],"╙":[7,68],"╨":[7,69],"╜":[7,70],"║":[7,71],"▓":[7,77],"①":[8,1],"②":[8,2],"③":[8,3],"④":[8,4],"⑤":[8,5],"⑥":[8,6],"⑦":[8,7],"⑧":[8,8],"⑨":[8,9],"⑩":[8,10],"⑴":[8,11],"⑵":[8,12],"⑶":[8,13],"⑷":[8,14],"⑸":[8,15],"⑹":[8,16],"⑺":[8,17],"⑻":[8,18],"⑼":[8,19],"⑽":[8,20],"ⅰ":[8,21],"ⅱ":[8,22],"ⅲ":[8,23],"ⅳ":[8,24],"ⅴ":[8,25],"ⅵ":[8,26],"ⅶ":[8,27],"ⅷ":[8,28],"ⅸ":[8,29],"ⅹ":[8,30],"Ⅰ":[8,31],"Ⅱ":[8,32],"Ⅲ":[8,33],"Ⅳ":[8,34],"Ⅴ":[8,35],"Ⅵ":[8,36],"Ⅶ":[8,37],"Ⅷ":[8,38],"Ⅸ":[8,39],"Ⅹ":[8,40],"〡":[8,41],"〢":[8,42],"〣":[8,43],"〤":[8,44],"〥":[8,45],"〦":[8,46],"〧":[8,47],"〨":[8,48],"〩":[8,49],"〸":[8,50],"〹":[8,51],"〺":[8,52],"Α":[9,1],"Β":[9,2],"Γ":[9,3],"Δ":[9,4],"Ε":[9,5],"Ζ":[9,6],"Η":[9,7],"Θ":[9,8],"Ι":[9,9],"Κ":[9,10],"Λ":[9,11],"Μ":[9,12],"Ν":[9,13],"Ξ":[9,14],"Ο":[9,15],"Π":[9,16],"Ρ":[9,17],"Σ":[9,18],"Τ":[9,19],"Υ":[9,20],"Φ":[9,21],"Χ":[9,22],"Ψ":[9,23],"Ω":[9,24],"α":[9,25],"β":[9,26],"γ":[9,27],"δ":[9,28],"ε":[9,29],"ζ":[9,30],"η":[9,31],"θ":[9,32],"ι":[9,33],"κ":[9,34],"λ":[9,35],"μ":[9,36],"ν":[9,37],"ξ":[9,38],"ο":[9,39],"π":[9,40],"ρ":[9,41],"σ":[9,42],"τ":[9,43],"υ":[9,44],"φ":[9,45],"χ":[9,46],"ψ":[9,47],"ω":[9,48]};