#!/bin/bash
# Reshapes an image to 150x150
# usage: resize.sh original.png
# output: original-150.jpg
s=$1
#s=${s##*/}
s=${s%.*}
convert $1 -thumbnail 150x150^ -gravity center -extent 150x150 $s-150.jpg
