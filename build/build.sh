cd ..

# Build TileLayer.Filter.min.js
uglifyjs src/copyright.js src/TileLayer.Filter.js -o dist/TileLayer.Filter.min.js -c -m --comments

# Build TileLayer.Filter.js
uglifyjs src/copyright.js src/TileLayer.Filter.js -o dist/TileLayer.Filter.js -b --comments