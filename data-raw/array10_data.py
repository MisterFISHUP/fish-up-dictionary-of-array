#!/usr/bin/python
# -*- coding: utf-8 -*-
# author: Mister FISH UP
# create data/object-array10.js from data-raw/array10.txt

# make sure you are in the root directory

import os
import json
from pathlib import Path

data_raw_folder = Path("data-raw/")
data_folder = Path("data/")
array10 = {}

with open(data_raw_folder / "array10.txt" , encoding='utf-8') as f:
    array10_raw = f.read().splitlines()

for line in array10_raw:
    code, char = line.split()
    if char in array10:
        array10[char] += "; " + code
    else:
        array10[char] = code

with open(data_folder / "object-array10.js", "w", encoding='utf-8') as text_file:
    text_file.write("const objectArray10 = ")
with open(data_folder / "object-array10.js", "a", encoding='utf-8') as text_file:
    text_file.write(json.dumps(array10, ensure_ascii=False).encode('utf8').decode())
    text_file.write(';\n')
