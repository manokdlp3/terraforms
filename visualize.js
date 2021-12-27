const map = new Map([["0",'a'],["1",'b'],["2",'c'],["3",'d'],["4",'e'],["5",'f'],["6",'g'],["7",'h'],["8",'i'],["9",'j']]);
// const map = new Map([[0,'a'],[1,'b'],[2,'c'],[3,'d'],[4,'e'],[5,'f'],[6,'g'],[7,'h'],[8,'i'],[9,'j']]);

// function generateMarkup(mapping) {
//     // console.log(mapping);
//     let str = "";
//     mapping.forEach(element => {
//         // console.log(parseFloat(element).toFixed());
//         for (var i = 0; i < element.length; i++) {
//             let e = element[i];
//             str+= `<p class="${map.get(e)}">${e}</p>`;
//         }
//     });

//     return str;
// }

function generateMarkup(charmap, mapping) {
    let str = "";
    mapping.forEach(element => {
        // console.log(parseFloat(element).toFixed());
        for (var i = 0; i < element.length; i++) {
            let e = element[i];
            str+= `<p class="${map.get(e)}">${charmap[e%9]}</p>`;
        }
    });

    return str;
}

module.exports = {
    generateMarkup: generateMarkup
};

// let test = ["1887665555444333445578887543322277887655554433333344556655433222","6677765444443322233444555443333265666544444332223333334444433333","5555543334333223332223333444444454444333333333333222223333444455","5543332222223333222222223344455655443322111122322221111223345556","5443322100001222221000012234555444332210000001222100000012233544","3332210000000012100000000122333433221000000000010000000000122333","3221000000000000000000000001223332210000000000000000000000012233","3221000000000000000000000001223332210000000000000000000000012233","3422100000000000000000000012233434422100000000000000000001223334","3454221000000000000000001223334444554221000000000000000122333445","4555542210000000000000122333445755665542210000000000012233444677","5677554422100000000012223345677756785544322100000001222334567775","5555554333221000001222334578775555555443332221000122233457888754","4444444433322210122233557888874433344444333322212223345788888743","2233444443333222223334578888754322233455544334443333344677765533","2223455775543344444433344555444322234578877555555554443333344444"];

// console.log(generateMarkup(test));