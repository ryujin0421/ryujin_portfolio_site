/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "svg": {
      "strokepath": [
     {
         "path": "M650.5,125h-639c-4.7,0-8.5-3.8-8.5-8.5v0c0-4.7,3.8-8.5,8.5-8.5h639c4.7,0,8.5,3.8,8.5,8.5v0  C659,121.2,655.2,125,650.5,125z",
         "duration": 1200
     },
     {
         "path": "M650.5,285h-639c-4.7,0-8.5-3.8-8.5-8.5l0,0c0-4.7,3.8-8.5,8.5-8.5h639c4.7,0,8.5,3.8,8.5,8.5l0,0  C659,281.2,655.2,285,650.5,285z",
         "duration": 1200
     }
 ],
 "dimensions": {
     "width": 662,
     "height": 344
 }
}
};


/*
 Setup and Paint your lazyline!
 */

$(document).ready(function(){
    setTimeout(function(){
        $('#svg').lazylinepainter({
            "svgData": pathObj,
            "strokeWidth": 3,
            "strokeColor": "#FFF000"
        }).lazylinepainter('paint');

    setTimeout(function() {
        $('#color').fadeTo(4000, 3);
        $('#svg').fadeOut(1000);
      }, 2000);

    },3000);
});
