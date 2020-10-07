#!/usr/bin/python
# -*- coding: utf-8 -*-
# author: Mister FISH UP
# create data/object-XXXX.js and data/keys.js files

# Steps: Read data from .txt files -> data processing
# -> convert data into js object -> write into js files

# make sure you are in the root directory

import os, json
from pathlib import Path
data_folder = Path("data-raw/")
js_folder = Path("data/")

# get special_dict 
# structure: char: encoding
with open(data_folder / "special_DIME.txt" , encoding='utf-8') as f:
    special_raw_list = f.read().splitlines()
special_dict = {line.split('\t')[1] : line.split('\t')[0] \
                for line in special_raw_list}
# convert special_dict to js object and write to js/object_special.js
with open(js_folder / "object_special.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectSpecial = ")
with open(js_folder / "object_special.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(special_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# get shortcode1_dict_unclean (with number), which is not yet clean
# structure: char: encoding
with open(data_folder / "shortcode1_DIME.txt", encoding='utf-8') as f:
    shortcode1_raw_list = f.read().splitlines()
# a character has at most ONE shortcode1
shortcode1_dict_unclean = {line.split('\t')[1] : line.split('\t')[0]+str(line_num %10) \
            for line_num, line in enumerate(shortcode1_raw_list, start=1)}
# purify the shortcode1_dict_unclean
import copy
shortcode1_dict = copy.deepcopy(shortcode1_dict_unclean)
del shortcode1_dict['⎔']
del shortcode1_dict['女']
# now shortcode1_dict is clean
# convert shortcode1_dict to js object and write to js/object_shortcode1.js
with open(js_folder / "object_shortcode1.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectShortcode1 = ")
with open(js_folder / "object_shortcode1.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(shortcode1_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# get shortcode2_dict_unclean (with number), which is not yet clean
# structure: char: list of encodings
with open(data_folder / "shortcode2_DIME.txt", encoding='utf-8') as f:
    shortcode2_raw_list = f.read().splitlines()
shortcode2_dict_unclean = dict()
for line_num, line in enumerate(shortcode2_raw_list, start=1):
    [keys, char] = line.split('\t')
    keys += str(line_num % 10)
    if char not in shortcode2_dict_unclean:
        shortcode2_dict_unclean[char] = [keys]
    else:
        shortcode2_dict_unclean[char].append(keys)
# purify the shortcode2_dict_unclean
shortcode2_dict = copy.deepcopy(shortcode2_dict_unclean)
del shortcode2_dict['⎔']
# now shortcode2_dict is clean

# only three characters have more than one shortcode2
# sc2_multi = dict(filter(lambda elem: len(elem[1]) > 1, shortcode2_dict.items()))
# print(sc2_multi)
# output: {'卅': ['fd2', 'ff4'], '句': ['l;1', 'lx0'], '彝': ['t,2', 'w,2']}

# convert shortcode2_dict to js object and write to js/object_shortcode2.js
with open(js_folder / "object_shortcode2.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectShortcode2 = ")
with open(js_folder / "object_shortcode2.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(shortcode2_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# get single_dict
# structure: char: encoding
with open(data_folder / "single_DIME.txt", encoding='utf-8') as f:
    single_raw_list = f.read().splitlines()
# there are only nine characters
single_dict = {line.split(' ')[0] : line.split(' ')[1] \
                for line in single_raw_list}
# convert single_dict to js object and write to js/object_single.js
with open(js_folder / "object_single.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectSingle = ")
with open(js_folder / "object_single.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(single_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# get symbol_dict
# structure: char: [encoding, number]
with open(data_folder / "symbol_DIME.txt", encoding='utf-8') as f:
    symbol_raw_list = f.read().splitlines()
symbol_dict = dict()
counter, saved_keys = 1, 'w0'
for line in symbol_raw_list:
    [keys, symbol]= line.split()
    if saved_keys != keys:
        counter = 1
    symbol_dict[symbol] = [keys, counter]
    counter += 1
    saved_keys = keys
# convert symbol_dict to js object and write to js/object_symbol.js
with open(js_folder / "object_symbol.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectSymbol = ")
with open(js_folder / "object_symbol.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(symbol_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# get normal_dict and enconding_dict
with open(data_folder / "extension_A_DIME.txt" , encoding='utf-8') as f:
    extension_A_raw_list = f.read().splitlines()
with open(data_folder / "extension_B_DIME.txt", encoding='utf-8') as f:
    extension_B_raw_list = f.read().splitlines()
with open(data_folder / "extension_CD_DIME.txt", encoding='utf-8') as f:
    extension_CD_raw_list = f.read().splitlines()
normal_dict = {}
encoding_dict = {}
# structure
# normal_dict[char] = list of (enc, coincident code position)
# encoding_dict[enc] = [#cc in A, #cc in B, #cc in CD, #cc total]
for line in extension_A_raw_list:
    [enc, char] = line.split()
    if enc not in encoding_dict:
        encoding_dict[enc] = [1,0,0,1]
        if char not in normal_dict:
            normal_dict[char] = [(enc, 1)]
        else:
            normal_dict[char].append((enc, 1))
    else:
        encoding_dict[enc][0] += 1
        encoding_dict[enc][-1] += 1
        if char not in normal_dict:
            normal_dict[char] = [(enc, encoding_dict[enc][-1])]
        else:
            normal_dict[char].append((enc, encoding_dict[enc][-1]))
for line in extension_B_raw_list:
    [enc, char] = line.split()
    if enc not in encoding_dict:
        encoding_dict[enc] = [0,1,0,1]
        if char not in normal_dict:
            normal_dict[char] = [(enc, 1)]
        else:
            normal_dict[char].append((enc, 1))
    else:
        encoding_dict[enc][1] += 1
        encoding_dict[enc][-1] += 1
        if char not in normal_dict:
            normal_dict[char] = [(enc, encoding_dict[enc][-1])]
        else:
            normal_dict[char].append((enc, encoding_dict[enc][-1]))
for line in extension_CD_raw_list:
    [enc, char] = line.split()
    if enc not in encoding_dict:
        encoding_dict[enc] = [0,0,1,1]
        if char not in normal_dict:
            normal_dict[char] = [(enc, 1)]
        else:
            normal_dict[char].append((enc, 1))
    else:
        encoding_dict[enc][2] += 1
        encoding_dict[enc][-1] += 1
        if char not in normal_dict:
            normal_dict[char] = [(enc, encoding_dict[enc][-1])]
        else:
            normal_dict[char].append((enc, encoding_dict[enc][-1]))            
# remove normal encoding already in special or single dict (disjoint)
for char in special_dict:
    index_item_remove = 100
    encoding_list = normal_dict[char]
    for i in range(len(encoding_list)):
        if encoding_list[i][0] == special_dict[char]:
            index_item_remove = i
    if index_item_remove != 100:
        del encoding_list[index_item_remove]
    if encoding_list == []:
        del normal_dict[char]
for char in single_dict:
    index_item_remove = 100
    encoding_list = normal_dict[char]
    for i in range(len(encoding_list)):
        if encoding_list[i][0] == single_dict[char]:
            index_item_remove = i
    if index_item_remove != 100:
        del encoding_list[index_item_remove]
    if encoding_list == []:
        del normal_dict[char]
# convert normal_dict to js object and write to js/object_normal.js
with open(js_folder / "object_normal.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectNormal = ")
with open(js_folder / "object_normal.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(normal_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')
    text_file.write("const objectEncoding = ")
    text_file.write(json.dumps(encoding_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# create char_dict (value = 0)
# structure: char: 0
char_set = symbol_dict.keys() | special_dict.keys() \
    | shortcode1_dict.keys() | shortcode2_dict.keys() \
    | single_dict.keys() | normal_dict.keys()
char_dict = dict.fromkeys(char_set, 0)
# convert char_set to js object and write to js/object_char_set.js
with open(js_folder / "object_char_set.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectCharSet = ")
with open(js_folder / "object_char_set.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(char_dict, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')

# get letter_to_array30_dict and array30_to_letter_dict
with open(data_folder / "key_mapping.txt", encoding='utf-8') as f:
    key_mapping_raw_list = f.read().splitlines()
letter_to_array30_dict = {line.split()[0]: line.split()[1] for line in key_mapping_raw_list}
array30_to_letter_dict = {line.split()[1]: line.split()[0] for line in key_mapping_raw_list}
# beautify the arrows
letter_to_array30_dict_str = str(letter_to_array30_dict).replace('v','↓').replace('^','↑').replace('+','v')
array30_to_letter_dict_str = str(array30_to_letter_dict).replace('v','↓').replace('^','↑').replace('+','v')
# write character arrays of different encodings to js/keys.js
# and write the two mappings to js/keys.js
with open(js_folder / "keys.js", "w", encoding='utf-8') as text_file:
    text_file.write("const sgAllArray = ")
with open(js_folder / "keys.js", "a", encoding='utf-8') as text_file:
    text_file.write(str(list(single_dict.keys())) + ';\n')
    text_file.write("const spAllArray = " + str(list(special_dict.keys())) + ';\n')
    text_file.write("const symAllArray = " + str(list(symbol_dict.keys())) + ';\n')
    text_file.write("const sc1AllArray = " + str(list(shortcode1_dict.keys())) + ';\n')
    text_file.write("const sc2AllArray = " + str(list(shortcode2_dict.keys())) + ';\n')
    text_file.write("const letterToArray30Dict = " + letter_to_array30_dict_str + ';\n')
    text_file.write("const array30ToLetterDict = " + array30_to_letter_dict_str + ';\n')
