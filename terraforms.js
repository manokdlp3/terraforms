const rpcURL = "https://mainnet.infura.io/v3/85f1db6bd8b94ec89764a828489fb394";
const request = require('request');
const Web3 = require('web3');
const web3 = new Web3(rpcURL);
const fs = require('fs');
const visual = require('./visualize');

const address = "0x4E1f41613c9084FdB9E34E11fAE9412427480e56";
const abi = [{"inputs":[{"internalType":"address","name":"_terraformsDataAddress","type":"address"},{"internalType":"address","name":"_terraformsAugmentationsAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Daydreaming","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"terraformer","type":"address"}],"name":"Terraformed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seed","type":"uint256"}],"name":"TokensRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_ALLOTMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_SCALE","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"addTokenURIAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"authorizedDreamer","type":"address"}],"name":"authorizeDreamer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256[16]","name":"dream","type":"uint256[16]"}],"name":"commitDreamToCanvas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dreamers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"earlyMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"earlyMintActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"enterDream","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintingPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"ownerClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeemMintpass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"mintpassHolders","type":"address[]"}],"name":"setMintpassHolders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setSeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"setTokenURIAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"structureData","outputs":[{"components":[{"internalType":"uint256","name":"levelNumber","type":"uint256"},{"internalType":"uint256","name":"tokensOnLevel","type":"uint256"},{"internalType":"int256","name":"structureSpaceX","type":"int256"},{"internalType":"int256","name":"structureSpaceY","type":"int256"},{"internalType":"int256","name":"structureSpaceZ","type":"int256"}],"internalType":"struct Terraforms.StructureLevel[20]","name":"structure","type":"tuple[20]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"terraformsAugmentationsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleEarly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenCharacters","outputs":[{"internalType":"string[32][32]","name":"","type":"string[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenHTML","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenHeightmapIndices","outputs":[{"internalType":"uint256[32][32]","name":"","type":"uint256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSupplementalData","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"xCoordinate","type":"uint256"},{"internalType":"uint256","name":"yCoordinate","type":"uint256"},{"internalType":"int256","name":"elevation","type":"int256"},{"internalType":"int256","name":"structureSpaceX","type":"int256"},{"internalType":"int256","name":"structureSpaceY","type":"int256"},{"internalType":"int256","name":"structureSpaceZ","type":"int256"},{"internalType":"string","name":"zoneName","type":"string"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"string[9]","name":"characterSet","type":"string[9]"}],"internalType":"struct Terraforms.TokenData","name":"result","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenTerrainValues","outputs":[{"internalType":"int256[32][32]","name":"","type":"int256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToAuthorizedDreamer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToCanvasData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToDreamBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToDreamer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToPlacement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToStatus","outputs":[{"internalType":"enum TerraformsDreaming.Status","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenURIAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

var contract = new web3.eth.Contract(abi, address);


async function getHeightIndices(tokenId) {
  return await contract.methods.tokenHeightmapIndices(tokenId).call();
}

async function showHeightIndices(tokenId) {
  // contract.methods.tokenHeightmapIndices(tokenId).call((err, result) => { 
  let arr = [];
  let indices = await getHeightIndices(tokenId);
  indices.forEach(element => {
    // let str = "";
    // str += element.toString().replace(/[^0-9\s]/gi,'');
    arr.push(element.toString().replace(/[^0-9\s]/gi,''));
    // console.log(element.toString().replace(/[^0-9\s]/gi,''));
  })

  console.log(arr); 
}

async function getAvailableCharacters(tokenId) {
  return await contract.methods.tokenCharacters(tokenId).call();
  // contract.methods.tokenCharacters(tokenId).call((err, result) => { 
  //   let arr = [];
  //   result.forEach(element => {
  //     arr.push(element.toString().replace(/["',]/gi,' '));
  //   });

  //   console.log(arr);
  // });    
  // console.log(indices.length);
}

async function showAvailableCharacters(tokenId) {  
    let arr = [];
    let chars = await getCharacterSet(tokenId);
    console.log(chars);
    chars.forEach(element => {
      arr.push(element.toString().replace(/["',]/gi,' '));
    });

    console.log(arr.join(",").length);  
}

// not needed anymore
async function mapCharacters(tokenId) {
  let height = await getHeightIndices(tokenId);
  let chars = await getCharacterSet(tokenId);
  let map = new Map();
  // console.log(height.length + " : " + chars.length);
  for (var i = 0; i < height.length; i++) {
    for (var x = 0; x < height[i].length; x++) {
      map.set(height[i][x], chars[i][x]);
    }
  }
  // console.log(map);
  return map;
}

async function getHTML(tokenId) {
  // contract.methods.tokenHTML(tokenId).call((err, result) => { 
  //   fs.writeFileSync(`./html/${tokenId}.html`, result);
  // });      
  
  return contract.methods.tokenHTML(tokenId).call();
  // return html;
}

async function _getSeed(body) {
  var index = body.toString().search("SEED=");
  console.log(`Seed: ${body.toString().slice(index+5, index+9).replace( /\D/g, '')}`);
  var rindex = body.toString().search("RESOURCE=");
  console.log(`Resource: ${body.toString().slice(rindex+9, rindex+14).replace( /\D/g, '')}`);
}

async function getPreviewHTML(tokenId, newMapping) {
  let map = await getCharacterSet(tokenId);
  return visual.generateMarkup(map, newMapping);
    // fs.writeFileSync(`./terraforms/html/${tokenId}.txt`, visual.generateMarkup(map, newMapping));
    // fs.writeFileSync("./terraforms/html/output.txt", visual.generateMarkup(map, newMapping));
}

async function getCharacterSet(tokenId) {
  // return await contract.methods.tokenSupplementalData(tokenId).call();
  var e = await contract.methods.tokenSupplementalData(tokenId).call();
  return e.characterSet;
  // return z.characterSet;
  // console.log(`${e[0]},${e[5]},${e[0%9]}`);
}

async function getAttributes(tokenId) {
  var attributes = await contract.methods.tokenSupplementalData(tokenId).call();
  console.log(`Level: ${attributes.level}`);
  console.log(`Coordinates: ${attributes.xCoordinate}, ${attributes.yCoordinate}`);
  console.log(`Elevation: ${attributes.elevation}`);
  console.log(`Zone: ${attributes.zoneName}`);
  console.log(`Zone Colors: ${attributes.zoneColors}`);
  console.log(`Character Set: ${attributes.characterSet}`);
  _getSeed(await getHTML(tokenId));
  // return z.characterSet;
  // console.log(`${e[0]},${e[5]},${e[0%9]}`);
  // console.log(attributes);
  // process.exit(0);
}

async function previewDream(tokenId, mapping) {
  getAttributes(tokenId);
  let h = await getPreviewHTML(tokenId, mapping);
  contract.methods.tokenHTML(tokenId).call((err, result) => { 
    // var s = result.toString().search("<div\ class='r'>");
    var s = result.toString().search("<p class");
    var e = result.toString().search("</div>");    
    
    // var index = result.toString().search("SEED=");
    // console.log(`${tokenId}: ${result.toString().slice(index+5, index+9).replace( /\D/g, '')}`);
    // console.log(`SEED = ${result.toString().slice(index+5, index+9).replace( /\D/g, '')}`);
    // var rindex = result.toString().search("RESOURCE=");
    // console.log(`RESOURCE = ${result.toString().slice(rindex+9, rindex+14).replace( /\D/g, '')}`);

    // console.log(`start at ${s} and end at ${e}`);
    // console.log(result.toString().slice(s, s+20));
    // console.log(result.toString().slice(e, e+10));
    let output = result.toString().substring(0, s) + h + result.toString().substring(e, result.toString().length);

     var mindex = result.toString().search("MODE=");
     var mode = Number.parseInt(result.toString().slice(mindex+5, mindex+6)) == 3? 4 : 2;
     console.log(`NEW MODE = ${mode}`);

    // fs.writeFileSync(`./terraforms/html/${tokenId}.html`, output.replace(/MODE=\d/,"MODE=2"));    
    fs.writeFileSync(`./html/test.html`, output.replace(/MODE=\d/,`MODE=${mode}`));
  });  
}

module.exports = {
  previewDream, getHTML, getCharacterSet, getAttributes
}

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let args = process.argv.slice(2);
// let t = args[0] != null ? args[0] : 1349;

// if (args[0] != null) {
//   getAttributes(args[0]);
// } else {
//   rl.question('Enter token id: ', (token) => {
//     if (token > 0) getAttributes(token);
//   });

//   rl.on('close', () => {
//     console.log('\n Closing...');
//     process.exit(0);
//   });
// }

// getCharacterSet(171);
// getHeightIndices(6289);
// getHTML(171);