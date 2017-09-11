#!/bin/bash
if [ $1 ]; then
    if [ $1 = 'prod' ];then
        echo "default local mode prod"
        yog2 release -cud ./nicemoods-base --fis3

    elif [ $1 = "debug" ]; then
        echo "default local mode debug"
        yog2 release ../nicemoods-base -wL --fis3
    fi
else
    echo "default local mode prod"
    yog2 release -cud ../nicemoods-base --fis3
fi