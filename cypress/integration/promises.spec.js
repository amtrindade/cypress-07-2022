/// <reference types="cypress" />

it('Tests with promises', () => {});

// const getValue = () => {
//     setTimeout(() => {
//         console.log("respondendo...")
//         return 10
//     }, 1000)
// }

const getValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000)
    })
}

const system = () => {
    console.log('Start')
    const prom = getValue();
    prom.then(value => {
        console.log(`O valor é: ${value}`)
    })
    console.log('Finished')

}

system();




