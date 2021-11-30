#!/bin/sh
npm run build && git commit -m "Update" && git push origin master && git subtree push --prefix dist origin gh-pages

#https://gist.github.com/cobyism/4730490