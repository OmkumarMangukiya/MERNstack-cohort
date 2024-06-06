const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
    const rl = readline.createInterface({ input, output });
    
    // Taking integer input for number of iterations
    let x = parseInt(await rl.question(''));

    while (x--) {
        let a, b, c;

        // Taking multiple inputs
        const line = await rl.question('');
        [a, b, c] = line.split(' ').map(Number);

        if (a + b == c) {
            console.log(c);
        } else if (a == b && b == c) {
            if (a % 2 == 0) {
                console.log(c);
            } else {
                console.log(-1);
            }
        } else if (a + b > c) {
            console.log((c) + (a + b-c)/2);
        } else {
            console.log(a+b);
        }
    }

    rl.close();
}

main();
