# marqueemoji.js
Project to create scrolling gifs for conversion into Slack emoji in-browser.

`index.html` is there to include the scripts and to have a blank DOM slate for the those scripts to work from. All the heavy lifting is in `marqueemoji.js`, most of that below line 300. A majority of the stuff above that (barring consts and parameters) is to programmatically generate DOM objects. 

## Demo
Demo is at [https://wonkodsane.github.io/marqueemoji.js/](https://wonkodsane.github.io/marqueemoji.js/) 

## Requires gif.js (already included)
Props to [jnordberg](https://github.com/jnordberg) for his JS GIF encoder implementation. Included from that project are `gif.js` and `gif.worker.js` as well as their map files from [gif.js'](https://github.com/jnordberg/gif.js) [`dist/`](https://github.com/jnordberg/gif.js/tree/master/dist) folder. *The last commit on this project was 8 years ago.*

## Usage
Throw this into a web server's folder and then access it. It is trivial to test locally using python's native server in the dev directory with `python -m http.server` YMMV. 

The font dropdowns are intended to demonstrate all the font styles available in a Canvas element. There is currently no gradient creator included for text and fill colors.

## Notes
This would be cleaner with CoffeeScript but this was built to reinvigorate atrophied JS and DOM muscles and learn to play with Canvas elements. It could use better adherence to JS conventions and variable scoping, and the OOD is fairly poor, considering my lack of efficient constructors. 

This will probably be improved on eventually, but other projects are in front of it at this time.

All the DOM elements have IDs even though it's unneeded for the most part. ¯\\\_(ツ)_/¯

The underlying GIF encoder libs it uses are not the most efficient, so filesizes are probably a bit larger than if this was done with bash and ImageMagick.

There are some native methods available in browsers that were not explored.

Tested on nothing but recent (April 2024) Chrome on contemporary Windows. Again, YMMV, especially regarding font availability.