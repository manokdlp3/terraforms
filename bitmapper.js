const { strictEqual } = require('assert');
const bmp = require('bmp-js');
const { kStringMaxLength } = require('buffer');
const fs = require('fs');
const terraform = require('./terraforms');

function decodeBitmap(path) {
    console.log(`Is this a valid file? ${fs.lstatSync(path).isFile()}`);
    let buffer = fs.readFileSync(path);
    let data = bmp.decode(buffer);

    let arr = new Array();
    // let rows = new Array();
    let rows = "";
    let pixel = 0;
    for (var x = 0; x < data.data.length;) {
        // pixel = (pixel << 1) + data.data[x];
        pixel+= data.data[x];
        x++;
        if (x % 4 == 0) {
            // rows = rows.concat(pixel % 9);
            // let i = pixel/3; // get the average
            rows = rows.concat(Number.parseInt(((((pixel/3)/255)-0.984) * -10))); // get height index
            pixel = 0;
        }

        if (x % 256 == 0) { // 256 if not editing. 128 to edit in grid.
            arr.push(rows);
            // rows = [];
            rows = "";
        }
    }
    return arr;
}

// terraform.previewDream(3986,decodeBitmap('E:/Art/Artus/lion_1.bmp'));
// terraform.previewDream(2749,decodeBitmap('E:/Art/smols/mask.bmp'));

console.log(decodeBitmap('E:/Art/Artus/putin.bmp'));
// str.replace(/\s*|\t|\r|\n/gm, "")
// console.log(`arr has ${arr.length} entries.`);
// console.log(arr);
