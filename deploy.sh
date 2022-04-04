#!/bin/sh
npm run build && git add . && git commit -m "Update & build" && git push origin main && git subtree push --prefix dist origin gh-pages

#https://gist.github.com/cobyism/4730490