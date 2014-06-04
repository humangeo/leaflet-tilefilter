# Leaflet.TileLayer.Filter

![Filters Example](http://humangeo.github.io/leaflet-tilefilter/images/filters.gif)

Are you bored with the basic, free tile map services out there, or have you ever wanted to change their base offerings to fit in better with your app?  

Do you want the appearance of custom map tiles without having to setup your own tile server?  Spice up your maps by adding customizable image filters to tile images.  Use one of the existing, free tile providers like MapQuest, OSM, Stamen, and others, then change up their default offerings by adjusting the colors/styling on the client end.

This plugin extends L.TileLayer based classes, adding support for tile image filters.  It provides extensible canvas-based filter approaches as well as CSS3 image filters.  Canvas filters can be chained together and combined with one or more CSS3 image filters, allowing for many variations.
It was originally inspired by [Ilya Zverev](https://github.com/Zverik)'s [Leaflet.TileLayer.Grayscale](https://github.com/Zverik/leaflet-grayscale/) plug-in, but modified to be more extensible, supporting more than just a grayscale tile filter.

## Basic Usage

```javascript
var baseLayer = new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', {
	filter: function () {
		new L.CSSFilter(this, {
			filters: ['saturate(200%)']
		}).render();
	}
});

var baseLayer = new L.StamenTileLayer('toner');

baseLayer.setFilter(function () {
	new L.CanvasFilter(this, {
		channelFilter: function (imageData) {
			return new L.CanvasChannelFilters.Colorize(imageData, {
				values: [100, 100]
			}).render();
		}
	}).render();
});
```

## Demo

http://humangeo.github.io/leaflet-tilefilter/demo.html

## Details

Read the [docs](https://github.com/humangeo/leaflet-tilefilter/wiki).
