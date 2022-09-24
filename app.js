const ts = require('./terraforms');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
    let args = process.argv.slice(2);
    // let t = args[0] != null ? args[0] : 1349;

    if (args[0] != null) {
        await ts.getAttributes(args[0]);
        process.exit(0);
    } else {
    rl.question('Enter token id: ', async (token) => {
        if (token > 0) { 
            await ts.getAttributes(token);
            process.exit(0);
        }
    });

    rl.on('close', () => {
        console.log('\n Closing...');
        process.exit(0);
    });
    }
}

main();