#!/bin/bash
# Reshapes an image to 150x150
# usage: resize.sh original.png
# output: original-150.jpg
s=$1
s=${s%%.*}
# Using just {s}-150.jpg was keeping a trailling whitespace on the file name
convert $1 -thumbnail 150x150^ -gravity center -extent 150x150 "$(echo -e "${s}" | tr -d '[:space:]')"-150.jpg