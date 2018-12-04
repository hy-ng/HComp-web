#!/bin/bash -u

index=index.html

rm -f $index 2>&1 > /dev/null
touch $index

files=`ls | sort | uniq`

for file in $files; do
  if [ ! -e $file ]; then continue; fi
  if [ $file == $index ]; then continue; fi;
  if [ $file == `basename $0` ]; then continue; fi;

  echo '<br><a href="' >> index.html
  echo $file >> index.html
  echo '">' >> index.html
  echo $file >> index.html
  echo '</a>' >> index.html
done

