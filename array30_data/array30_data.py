#!/usr/bin/python
# -*- coding: utf-8 -*-
# author: Mister FISH UP
"""
Create ext_ABCD_dict.js, ext_A_dict.js and keys.js
steps: Read data from .txt files -> data processing
-> convert data into js object -> write into js files
"""
# make sure you are in the root directory
import os
# create the main dictionary
array30_dict = dict()

# get sp_dict (which is clean)
with open(r"array30_data\special_DIME.txt", encoding='utf-8') as f:
    special_raw_list = f.read().splitlines()
# a character has at most ONE special code
sp_dict = {line.split('\t')[1] : line.split('\t')[0] \
                for line in special_raw_list}
# add sp_dict to the main dictionary
for char in sp_dict:
    array30_dict[char] = {"sp":sp_dict[char]}
	
# get sc1_dict (with number), which is not yet clean
with open(r"array30_data\shortcode1_DIME.txt", encoding='utf-8') as f:
    shortcode1_raw_list = f.read().splitlines() 
# a character has at most ONE shortcode1    
sc1_dict = {line.split('\t')[1] : line.split('\t')[0]+str(line_num %10) \
            for line_num, line in enumerate(shortcode1_raw_list, start=1)}
# purify the sc1_dict 
import copy
sc1_dict_clean = copy.deepcopy(sc1_dict)
del sc1_dict_clean['⎔']
del sc1_dict_clean['女']
# now sc1_dict_clean is clean

# just to see two items are removed
# print(len(sc1_dict_clean),len(sc1_dict))

# add sc1_dict_clean to the main dictionary
# Be careful! Not allowed: dict[key1][key2] = sth
# if dict does not have key1 yet
for char in sc1_dict_clean:
    if char in array30_dict:
        array30_dict[char]['sc1'] = sc1_dict_clean[char]
    else:
        array30_dict[char] = {"sc1": sc1_dict_clean[char]}

# get sc2_dict (with number), which is not yet clean
with open(r"array30_data\shortcode2_DIME.txt", encoding='utf-8') as f:
    shortcode2_raw_list = f.read().splitlines()
sc2_dict = dict()
for line_num, line in enumerate(shortcode2_raw_list, start=1): 
    [keys, char] = line.split('\t')
    keys += str(line_num % 10)
    if char not in sc2_dict:
        sc2_dict[char] = [keys]
    else:
        sc2_dict[char].append(keys)
# purify the sc2_dict 
sc2_dict_clean = copy.deepcopy(sc2_dict)
del sc2_dict_clean['⎔']
# now sc2_dict_clean is clean

# only three characters have more than one shortcode2
# sc2_multi = dict(filter(lambda elem: len(elem[1]) > 1, sc2_dict_clean.items()))
# print(sc2_multi)
# output: {'卅': ['fd2', 'ff4'], '句': ['l;1', 'lx0'], '彝': ['t,2', 'w,2']}

# add sc2_dict_clean to the main dictionary
for char in sc2_dict_clean:
    if char in array30_dict:
        array30_dict[char]['sc2'] = sc2_dict_clean[char]
    else:
        array30_dict[char] = {"sc2": sc2_dict_clean[char]}

# get sg_dict 
with open(r"array30_data\single_DIME.txt", encoding='utf-8') as f:
    single_raw_list = f.read().splitlines()
# there are only nine characters
sg_dict = {line.split(' ')[0] : line.split(' ')[1] \
                for line in single_raw_list}
# add sg_dict to the main dictionary
for char in sg_dict:
    if char in array30_dict:
        array30_dict[char]['sg'] = sg_dict[char]
    else:
        array30_dict[char] = {"sg": sg_dict[char]}

# get sym_dict 
with open(r"array30_data\symbol_DIME.txt", encoding='utf-8') as f:
    symbol_raw_list = f.read().splitlines()    
sym_dict = dict()
counter, saved_keys = 1, 'w0'
for line in symbol_raw_list:    
    [keys, symbol]= line.split()
    if saved_keys != keys:
        counter = 1
    sym_dict[symbol] = [keys, counter]
    counter += 1
    saved_keys = keys
# add sym_dict to the main dictionary
for symbol in sym_dict:
    if symbol in array30_dict:
        array30_dict[symbol]['sym'] = sym_dict[symbol]
    else:
        array30_dict[symbol] = {"sym": sym_dict[symbol]}

# get ext_a_dict
with open(r"array30_data\extension_A_DIME.txt", encoding='utf-8') as f:
    extension_A_raw_list = f.read().splitlines() 
# the file includes special and single codes but no shortcode1 or 2
ext_a_dict = {}
for line in extension_A_raw_list:
    [keys, char] = line.split()
    # exclude special keys and single key 
    if (char not in (sp_dict.keys()|sg_dict.keys())) \
    or (char in sp_dict.keys() and keys != sp_dict[char]) \
    or (char in sg_dict.keys() and keys != sg_dict[char]):
        if char not in ext_a_dict:
            ext_a_dict[char]=[keys]
        else:
            ext_a_dict[char].append(keys)			
# add ext_a_dict to the main dictionary
for char in ext_a_dict:
    if char in array30_dict:
        array30_dict[char]['nl'] = ext_a_dict[char]
    else:
        array30_dict[char] = {"nl": ext_a_dict[char]}

# convert array30_dict to js object and write to ext_a_dict_path
import json
ext_a_dict_path = r"ext_A_dict.js"
with open(ext_a_dict_path, "w", encoding='utf-8') as text_file:
    text_file.write("const extADict = ")
with open(ext_a_dict_path, "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(array30_dict, ensure_ascii=False).encode('utf8').decode())

# get ext_b_dict
with open(r"array30_data\extension_B_DIME.txt", encoding='utf-8') as f:
    extension_b_raw_list = f.read().splitlines() 
# the file includes no characters having sg, sp, sc1, sc2, sym
ext_b_dict = dict()
for line in extension_b_raw_list:
    [keys, char] = line.split()
    if char not in ext_b_dict:
        ext_b_dict[char] = [keys]
    else:
        ext_b_dict[char].append(keys)		
# add ext_b_dict to the main dictionary
for char in ext_b_dict:
    array30_dict[char] = {"nl": ext_b_dict[char]} 

# get ext_cd_dict
with open(r"array30_data\extension_CD_DIME.txt", encoding='utf-8') as f:
    extension_cd_raw_list = f.read().splitlines() 
# the file includes no characters having sg, sp, sc1, sc2, sym
ext_cd_dict = dict()
for line in extension_cd_raw_list:
    [keys, char] = line.split()
    if char not in ext_cd_dict:
        ext_cd_dict[char] = [keys]
    else:
        ext_cd_dict[char].append(keys)		
# add ext_cd_dict to the main dictionary
for char in ext_cd_dict:
    array30_dict[char] = {"nl": ext_cd_dict[char]} 

# convert array30_dict to js object and write to main_dict_path
main_dict_path = r"ext_ABCD_dict.js"
with open(main_dict_path, "w", encoding='utf-8') as text_file:
    text_file.write("const charDict = ")
with open(main_dict_path, "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(array30_dict, ensure_ascii=False).encode('utf8').decode())
	
# for keys.js
# get letter_to_array30_dict and array30_to_letter_dict
with open(r"array30_data\key_mapping.txt", encoding='utf-8') as f:
    key_mapping_raw_list = f.read().splitlines()
letter_to_array30_dict = {line.split()[0]: line.split()[1] for line in key_mapping_raw_list}
array30_to_letter_dict = {line.split()[1]: line.split()[0] for line in key_mapping_raw_list}
# beautify the arrows
letter_to_array30_dict_str = str(letter_to_array30_dict).replace('v','↓').replace('^','↑').replace('+','v')
array30_to_letter_dict_str = str(array30_to_letter_dict).replace('v','↓').replace('^','↑').replace('+','v')
# write different code character arrays to char_type_path
# write the two mappings to char_type_path
char_type_path = r"keys.js"
with open(char_type_path, "w", encoding='utf-8') as text_file:
    text_file.write("const sgAllArray = ")
with open(char_type_path, "a", encoding='utf-8') as text_file:
    text_file.write(str(list(sg_dict.keys())) + ';\n')
    text_file.write("const spAllArray = " + str(list(sp_dict.keys())) + ';\n')
    text_file.write("const symAllArray = " + str(list(sym_dict.keys())) + ';\n')
    text_file.write("const sc1AllArray = " + str(list(sc1_dict_clean.keys())) + ';\n')
    text_file.write("const sc2AllArray = " + str(list(sc2_dict_clean.keys())) + ';\n')
    text_file.write("const letterToArray30Dict = " + letter_to_array30_dict_str + ';\n')
    text_file.write("const array30ToLetterDict = " + array30_to_letter_dict_str + ';\n')
