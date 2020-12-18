const anova = require('ml-anova')


console.log(`
This program and its computation instruction were written by Andre Christoga Pramaditya (drepram.com) with the student ID (2006570006).

Program dan instruksi komputasi ini ditulis oleh Andre Christoga Pramaditya (drepram.com) dengan Nomor Pokok Mahasiswa (2006570006).
`)

let math = [80,80,83,84,84,84,85,85,89,89.5,90,90,90,90,90,90,90,90,90.5,91,91,91,92,92,92,92,92,93,93,93,94,94,94,94,95,95,95,95,95]
let stat = [88,89,89,90,90,90,90,90,90,90,91,91,91,91,92,92,92,92,92,93,93,93,95,95,95,95,95,96,96.5,97,97,97,97,97,99,99,99,99,100]
let actu = [89,89,89,90,90,91.5,92,92.5,93,93.5,94,94,94,94,95,95,95,95,96,96,96,96.4,96.5,97,97,97,97,97,98,98,98,99,99,99,99,99,99,100,100]

// Combine all into one array
const combinedDept = [math, stat, actu]

console.log('Table columns (Mathematics, Statistics, Actuary) in the forms of an array:')
console.log(`The mathematics study program has ${math.length} items, which are:`, math)
console.log(`The statistics study program has ${stat.length} items, which are:`, stat)
console.log(`The actuary study program has ${actu.length} items, which are:`, actu)
console.log(`Total items: ${math.length + stat.length + actu.length}`)

const options = {
  alpha: 0.05
}

const result = anova.oneWay(math,stat,actu,options)

console.log(result)