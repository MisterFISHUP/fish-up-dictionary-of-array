#!/usr/bin/python
# -*- coding: utf-8 -*-
# Author: Mister FISH UP
# https://array30.misterfishup.com/
# Copyright © 2020-2023 FISH UP Dictionary of Array
# Date: 2021 Jan. 21

# create data/code-array10.js from data-raw/array10.txt

# make sure you are in the root directory

import os
import ujson
from pathlib import Path

raw_data_folder = Path("data-raw/")
data_folder = Path("data/")
array10 = {}

with open(raw_data_folder / "array10.txt", encoding="utf-8") as f:
    array10_raw = f.read().splitlines()

for line in array10_raw:
    code, char = line.split()
    if char in array10:
        array10[char] += "; " + code
    else:
        array10[char] = code

with open(data_folder / "code-array10.js", "w", encoding="utf-8") as f:
    f.write("const codeArray10=")
with open(data_folder / "code-array10.js", "a", encoding="utf-8") as f:
    f.write(ujson.dumps(array10, ensure_ascii=False, escape_forward_slashes=False))
    f.write(";\n")
