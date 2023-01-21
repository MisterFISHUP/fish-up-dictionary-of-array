#!/usr/bin/python
# -*- coding: utf-8 -*-
# Author: Mister FISH UP
# https://array30.misterfishup.com/
# Copyright © 2020-2023 FISH UP Dictionary of Array
# Date: 2021 Jan. 21

# create data/code-XXXX.js and data/array-key.js files from from data-raw/XXX.txt

# make sure you are in the root directory

import os
import ujson
from pathlib import Path

raw_data_folder = Path("data-raw/")
data_folder = Path("data/")

# get dict_sp (dict_sp[char] = code)
with open(raw_data_folder / "special_DIME.txt", encoding="utf-8") as f:
    raw_list_sp = f.read().splitlines()
dict_sp = {line.split("\t")[1]: line.split("\t")[0] for line in raw_list_sp}

# convert dict_sp to js object and write to code-special.js
with open(data_folder / "code-special.js", "w", encoding="utf-8") as f:
    f.write("const codeSpecial=")
with open(data_folder / "code-special.js", "a", encoding="utf-8") as f:
    f.write(ujson.dumps(dict_sp, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")

# get dict_sc1 (dict_sc1[char] = code)
with open(raw_data_folder / "shortcode1_DIME.txt", encoding="utf-8") as f:
    raw_list_sc1 = f.read().splitlines()
# a character has at most ONE short code I
dict_sc1 = {
    line.split("\t")[1]: line.split("\t")[0] + str(line_num % 10)
    for line_num, line in enumerate(raw_list_sc1, start=1)
}
del dict_sc1["⎔"]
del dict_sc1["女"]

# convert dict_sc1 to js object and write to code-short1.js
with open(data_folder / "code-short1.js", "w", encoding="utf-8") as f:
    f.write("const codeShort1=")
with open(data_folder / "code-short1.js", "a", encoding="utf-8") as f:
    f.write(ujson.dumps(dict_sc1, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")

# get dict_sc2 (dict_sc2[char] = code or list of codes)
with open(raw_data_folder / "shortcode2_DIME.txt", encoding="utf-8") as f:
    raw_list_sc2 = f.read().splitlines()

dict_sc2 = dict()
for line_num, line in enumerate(raw_list_sc2, start=1):
    [code, char] = line.split("\t")
    code += str(line_num % 10)
    if char not in dict_sc2:
        dict_sc2[char] = code
    else:
        if type(dict_sc2[char]) == str:
            dict_sc2[char] = [dict_sc2[char], code]
        else:
            dict_sc2[char].append(code)
del dict_sc2["⎔"]

# only three characters have more than one short code II
# dict(filter(lambda elem: type(elem[1]) != str, dict_sc2.items())) gives
# {'卅': ['fd2', 'ff4'], '句': ['l;1', 'lx0'], '彝': ['t,2', 'w,2']}

# convert dict_sc2 to js object and write to code-short2.js
with open(data_folder / "code-short2.js", "w", encoding="utf-8") as f:
    f.write("const codeShort2=")
with open(data_folder / "code-short2.js", "a", encoding="utf-8") as f:
    f.write(ujson.dumps(dict_sc2, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")

# get dict_sg (dict_sg[char] = code)
with open(raw_data_folder / "single_DIME.txt", encoding="utf-8") as f:
    raw_list_sg = f.read().splitlines()
# there are only nine characters
dict_sg = {line.split(" ")[0]: line.split(" ")[1] for line in raw_list_sg}

# convert dict_sg to js object and write to code-single.js
with open(data_folder / "code-single.js", "w", encoding="utf-8") as f:
    f.write("const codeSingle=")
with open(data_folder / "code-single.js", "a", encoding="utf-8") as f:
    f.write(ujson.dumps(dict_sg, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")

# get dict_sym (dict_sym[char] = [sym list nb, coincidence rank])
with open(raw_data_folder / "symbol_DIME.txt", encoding="utf-8") as f:
    raw_list_sym = f.read().splitlines()

dict_sym = dict()
cur_list_nb, counter = 0, 1
counter, saved_keys = 1, "w0"
for line in raw_list_sym:
    [code, symbol] = line.split()
    list_nb = int(code[1])
    if cur_list_nb != list_nb:
        counter = 1
    dict_sym[symbol] = [list_nb, counter]
    counter += 1
    cur_list_nb = list_nb

# convert dict_sym to js object and write to code-symbol.js
with open(data_folder / "code-symbol.js", "w", encoding="utf-8") as f:
    f.write("const codeSymbol=")
with open(data_folder / "code-symbol.js", "a", encoding="utf-8") as f:
    f.write(ujson.dumps(dict_sym, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")

# get dict_std and dict_cc_count
# dict_std[char] = list of (code, coincidence rank)
# dict_cc_count[code] = [#cc in A, #cc in B, #cc in CD, #cc total]
with open(raw_data_folder / "extension_A_DIME.txt", encoding="utf-8") as f:
    raw_list_extA = f.read().splitlines()
with open(raw_data_folder / "extension_B_DIME.txt", encoding="utf-8") as f:
    raw_list_extB = f.read().splitlines()
with open(raw_data_folder / "extension_CD_DIME.txt", encoding="utf-8") as f:
    raw_list_extCD = f.read().splitlines()

dict_std = {}
dict_cc_count = {}

for line in raw_list_extA:
    [code, char] = line.split()
    if code not in dict_cc_count:
        dict_cc_count[code] = [1, 0, 0, 1]
        if char not in dict_std:
            dict_std[char] = [(code, 1)]
        else:
            dict_std[char].append((code, 1))
    else:
        dict_cc_count[code][0] += 1
        dict_cc_count[code][-1] += 1
        if char not in dict_std:
            dict_std[char] = [(code, dict_cc_count[code][-1])]
        else:
            dict_std[char].append((code, dict_cc_count[code][-1]))

for line in raw_list_extB:
    [code, char] = line.split()
    if code not in dict_cc_count:
        dict_cc_count[code] = [0, 1, 0, 1]
        if char not in dict_std:
            dict_std[char] = [(code, 1)]
        else:
            dict_std[char].append((code, 1))
    else:
        dict_cc_count[code][1] += 1
        dict_cc_count[code][-1] += 1
        if char not in dict_std:
            dict_std[char] = [(code, dict_cc_count[code][-1])]
        else:
            dict_std[char].append((code, dict_cc_count[code][-1]))

for line in raw_list_extCD:
    [code, char] = line.split()
    if code not in dict_cc_count:
        dict_cc_count[code] = [0, 0, 1, 1]
        if char not in dict_std:
            dict_std[char] = [(code, 1)]
        else:
            dict_std[char].append((code, 1))
    else:
        dict_cc_count[code][2] += 1
        dict_cc_count[code][-1] += 1
        if char not in dict_std:
            dict_std[char] = [(code, dict_cc_count[code][-1])]
        else:
            dict_std[char].append((code, dict_cc_count[code][-1]))

# remove standard codes already in dict_sp or dict_sg (disjoint)
for char in dict_sp:
    index_item_remove = 100
    list_std_code = dict_std[char]
    for i in range(len(list_std_code)):
        if list_std_code[i][0] == dict_sp[char]:
            index_item_remove = i
    if index_item_remove != 100:
        del list_std_code[index_item_remove]
    if list_std_code == []:
        del dict_std[char]
for char in dict_sg:
    index_item_remove = 100
    list_std_code = dict_std[char]
    for i in range(len(list_std_code)):
        if list_std_code[i][0] == dict_sg[char]:
            index_item_remove = i
    if index_item_remove != 100:
        del list_std_code[index_item_remove]
    if list_std_code == []:
        del dict_std[char]

# convert dict_std and dict_cc_count to js object and write to code-standard.js
with open(data_folder / "code-standard.js", "w", encoding="utf-8") as f:
    comment1 = "codeStandard[char] = list of (code, coincidence rank)"
    comment2 = "ccCount[code] = [#cc in A, #cc in B, #cc in CD, #cc total]"
    f.write("// " + comment1 + ";\n// " + comment2 + ";\n")
with open(data_folder / "code-standard.js", "a", encoding="utf-8") as f:
    f.write("const codeStandard=")
    f.write(ujson.dumps(dict_std, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")
    f.write("const ccCount=")
    f.write(
        ujson.dumps(dict_cc_count, ensure_ascii=False, escape_forward_slashes=False)
    )
    f.write(";\n")

# get letter_to_array30_dict and array30_to_letter_dict
with open(raw_data_folder / "key_mapping.txt", encoding="utf-8") as f:
    raw_list_key_mapping = f.read().splitlines()
letter_to_array30_dict = {
    line.split()[0]: line.split()[1] for line in raw_list_key_mapping
}
array30_to_letter_dict = {
    line.split()[1]: line.split()[0] for line in raw_list_key_mapping
}

# beautify the arrows
letter_to_array30_dict_str = (
    str(letter_to_array30_dict).replace("v", "↓").replace("^", "↑").replace("+", "v")
)
array30_to_letter_dict_str = (
    str(array30_to_letter_dict).replace("v", "↓").replace("^", "↑").replace("+", "v")
)

# write the two mappings to array-key.js
with open(data_folder / "array-key.js", "w", encoding="utf-8") as f:
    f.write("const letterToArray30Dict = ")
with open(data_folder / "array-key.js", "a", encoding="utf-8") as f:
    f.write(letter_to_array30_dict_str + ";\n")
    f.write("const array30ToLetterDict = " + array30_to_letter_dict_str + ";\n")
