const data = require('./data.json')

console.log(`
This program and its computation instruction were written by Andre Christoga Pramaditya (drepram.com) with the student ID (2006570006).

Program dan instruksi komputasi ini ditulis oleh Andre Christoga Pramaditya (drepram.com) dengan Nomor Pokok Mahasiswa (2006570006).
`)

console.log('As for data cleansing, we have cleaned the data for our fifth assignment. We will now make use of 507 rows of response data to which we were given access. We will log the data here, convert it into CSV, and run the Simple Linear Regression experiment on Python via the help of sklearn.')
console.log('\n')

let studentHeightCounter = 0
let studentWeightCounter = 0

data.forEach(student => {
  if(student['Tinggi badan (dalam cm)']) studentHeightCounter++
  if(student['Berat badan (dalam kg)']) studentWeightCounter++

  console.log(`${student['Tinggi badan (dalam cm)']}, ${student['Berat badan (dalam kg)']}`)
})

console.log(`Student Height Counter: ${studentHeightCounter}`)
console.log(`Student Weight Counter: ${studentWeightCounter}`)
console.log('\n')
console.log('Hence, it is of equal variance, or in other terms: The variance of the residuals is the same for all values of X.')
console.log('Though it should be noted that I later reduced 507 to 504, because of formatting problems in Microsoft Excel.')
console.log('We would later examine the three other assumption in the Python code: Linearity, Independence of errors, Normality of errors')
