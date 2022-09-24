const { resolve } = require('dns');
const http = require('https');
const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getSeeds(tokenId) {
    // return new Promise((resolve, reject) => {
      let url = `https://tokens.mathcastles.xyz/terraforms/token-html/${tokenId}`;
      let options = {html: true};
    //   let attrs = new Map();
  
      request(url, options, (error, res, body) => {
        if (error) {
            console.log(error);
            // reject(error);
        }
  
        if (!error && res.statusCode == 200) {              
            // var index = body.toString().search(/\bSEED\b/);
            var index = body.toString().search("SEED=");
            // console.log(`${tokenId}: ${body.toString().slice(index+5, index+9)}`);
            var seed = body.toString().slice(index+5, index+9);
            if (9950 < seed && seed < 9970) {
                console.log(`Token ID ${tokenId} : ${seed}`);
            }
  
        //   resolve(attrs);
        // return attrs;
        }    
      }); 
  
    // });
  }

  async function getSeed(tokenId) {
    // return new Promise((resolve, reject) => {
      let url = `https://tokens.mathcastles.xyz/terraforms/token-html/${tokenId}`;
      let options = {html: true};
    //   let attrs = new Map();
  
      request(url, options, (error, res, body) => {
        if (error) {
            console.log(error);
            // reject(error);
        }
  
        if (!error && res.statusCode == 200) {              
            var index = body.toString().search("SEED=");
            console.log(`SEED = ${body.toString().slice(index+5, index+9).replace( /\D/g, '')}`);
            var rindex = body.toString().search("RESOURCE=");
            console.log(`RESOURCE = ${body.toString().slice(rindex+9, rindex+14).replace( /\D/g, '')}`);
            process.exit(0);

            // var seed = body.toString().slice(index+5, index+9).replace( /\D/g, '');
            // if (9950 < seed || seed < 100) {
            //     console.log(`Token ID ${tokenId} : ${seed}`);
            // }
  
        //   resolve(attrs);
        // return attrs;
        }    
      }); 
  
    // });
  }

async function findHighSeeds() {
    var start = 9001;
    var end = 9999;
    for (var i = start; i < end; i++) {
      getSeed(i);
        // var seed = await getSeed(i);
        // // console.log(seed);
        // if (seed > 9950) {
        //     console.log(`ID ${i} has ${seed}!`);
        // } else {
        //     console.log(`Nope. ID ${i} only has ${seed}!`);
        // }
    }
    // process.exit(0);
}

async function getSeeds(tokens) {
  tokens.forEach ((token) => {
    getSeed(token);
  });
}

// findHighSeeds()
// console.log(arr);
// let t = [2912,1349,10,8088,6937];
// getSeeds(t);
// getSeed(3649);

let args = process.argv.slice(2);
let t = args[0] != null ? args[0] : 1349;

if (args[0] != null) {
  getSeed(args[0]);
} else {
  rl.question('Enter token id: ', (token) => {
    if (token > 0) getSeed(token);
  });

  rl.on('close', () => {
    console.log('\n Closing...');
    process.exit(0);
  });
}

// getSeed(t);

