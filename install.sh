#/bin/sh

npm update

ng version

ng build --dev

if [ -d '../adminportal-website' ]; then
    rm -rf ../adminportal-website/*
fi

if [ -d 'dist' ]; then
    mv dist/* ../adminportal-website/.
fi
