#!/bin/sh
npm run build && git subtree push --prefix dist origin gh-pages

#https://gist.github.com/cobyism/4730490