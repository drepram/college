// const ttest = require('ttest')
const anova = require('ml-anova')
// import { oneWay } from 'ml-anova';


console.log(`
This program and its computation instruction were written by Andre Christoga Pramaditya (drepram.com) with the student ID (2006570006).

Program dan instruksi komputasi ini ditulis oleh Andre Christoga Pramaditya (drepram.com) dengan Nomor Pokok Mahasiswa (2006570006).
`)

let math = [80,80,83,84,84,84,85,85,89,89.5,90,90,90,90,90,90,90,90,90.5,91,91,91,92,92,92,92,92,93,93,93,94,94,94,94,95,95,95,95,95]
let stat = [88,89,89,90,90,90,90,90,90,90,91,91,91,91,92,92,92,92,92,93,93,93,95,95,95,95,95,96,96.5,97,97,97,97,97,99,99,99,99,100]
let actu = [89,89,89,90,90,91.5,92,92.5,93,93.5,94,94,94,94,95,95,95,95,96,96,96,96.4,96.5,97,97,97,97,97,98,98,98,99,99,99,99,99,99,100,100]

// console.log('As for data cleansing, we have cleaned the data for our fifth assignment. We will now make use of 507 rows of response data to which we were given access.')

// data.forEach(student => {
//   if (student['Program Studi'] === "S1 Matematika") {math.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])}
//   else if (student['Program Studi'] === "S1 Statistika") {stat.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])}
//   else if (student['Program Studi'] === "S1 Aktuaria") {actu.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])}
//   // if (student['Apakah SIMAK UI?'] === '1') simak.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])
//   // else if (student['Apakah SIMAK UI?'] === '0') nonsimak.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])
//   // else console.log('Neither simak or nonsimak') && neither.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])
// })

// Combine all into one array
const combinedDept = [math, stat, actu]

// math.sort((a, b) => a - b);
// stat.sort((a, b) => a - b);
// actu.sort((a, b) => a - b);

// console.log('\n')

// console.log('math')
// math.forEach(value => {
//   console.log(value)
// })

// console.log('stat')
// stat.forEach(value => {
//   console.log(value)
// })

// console.log('actu')
// actu.forEach(value => {
//   console.log(value)
// })

console.log('Table columns (Mathematics, Statistics, Actuary) in the forms of an array:')
console.log(`The mathematics study program has ${math.length} items, which are:`, math)
console.log(`The statistics study program has ${stat.length} items, which are:`, stat)
console.log(`The actuary study program has ${actu.length} items, which are:`, actu)
console.log(`Total items: ${math.length + stat.length + actu.length}`)

// console.log('\n')

// console.log('Notice that the column NEITHER has no values, ergo we will not use that column. We will do a two-tailed distribution between two samples of an unequal variance (heteroscedastic), the columns we would be using are: SIMAK and NON SIMAK.')

// console.log(`
// Our hypotheses are:
//     Hipotesa null: Mahasiswa SIMAK UI tidak mempunyai nilai matematika yang lebih tinggi dibandingkan Mahasiswa Non SIMAK UI

//     Hipotesa alternatif: Mahasiswa SIMAK UI mempunyai nilai matematika yang lebih tinggi dibandingkan Mahasiswa Non SIMAK UI

// Question: Is there a significant difference between the last semester's math grade of SIMAK UI students and NON SIMAK UI students?
// `)

const options = {
  alpha: 0.05
}

// console.log(math.length)
// console.log(stat.length)
// console.log(actu.length)

const result = anova.oneWay(math,stat,actu,options)

console.log(result)

// const ss = anova.SS(combinedDept)
// const df = anova.DF(combinedDept)
// const ms = anova.MS(combinedDept)

// console.log(`
//   F-test: ${anova.test(combinedDept)}
// `)
// console.log(`Sum of Squares`, ss)
// console.log(`Degrees of Freedom`, df)
// console.log(`Mean Squared`, ms)
// `)
// Running the Student's t-Test
// const options = {
//   varEqual: false,
//   alpha: 0.05
// }

// const TTest = ttest(simak, nonsimak, options)
// const pValueOfTTest = TTest.pValue()
// const lessThanAlpha = TTest.pValue() < options.alpha

// console.log('What is the P-value of the t-Test we ran?', pValueOfTTest)
// console.log('Is the P-value less than 0.05 (alpha)?', lessThanAlpha)
// console.log('Because the P-value is less than 0.05, we reject the null hypothesis.')

// console.log('\n')

// console.log(`With that being said, there is a ${(1 - pValueOfTTest)} or a ${Math.floor((1 - pValueOfTTest) * 100)}% chance that the significance is not random.`)
// console.log('Henceforth, we reject the null hypothesis and state that there is a significant difference between the last semester\'s math grade of SIMAK UI students and NON SIMAK UI students.')

// console.log('\n')

// console.log('Further information from our t-Test:', {
//   'Test value': TTest.testValue(),
//   'P value': TTest.pValue(),
//   Confidence: TTest.confidence(),
//   'Is the null hypothesis valid?': TTest.valid(),
//   'Degree of freedom': TTest.freedom()
// })

// Output of object above:
// 'Test value': -1.9993187874116962,
// 'P value': 0.04611784274340544,
// Confidence: [ -2.2431432800051274, -0.019562049148348803 ],
// 'Is the null hypothesis valid?': false,
// 'Degree of freedom': 496.973820855078
