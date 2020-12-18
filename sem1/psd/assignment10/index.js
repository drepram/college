const ttest = require('ttest')

const data = require('./data.json')

console.log(`
This program and its computation instruction were written by Andre Christoga Pramaditya (drepram.com) with the student ID (2006570006).

Program dan instruksi komputasi ini ditulis oleh Andre Christoga Pramaditya (drepram.com) dengan Nomor Pokok Mahasiswa (2006570006).
`)

const simak = []
const nonsimak = []
const neither = []

console.log('As for data cleansing, we have cleaned the data for our fifth assignment. We will now make use of 507 rows of response data to which we were given access.')

data.forEach(student => {
  if (student['Apakah SIMAK UI?'] === '1') simak.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])
  else if (student['Apakah SIMAK UI?'] === '0') nonsimak.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])
  else console.log('Neither simak or nonsimak') && neither.push(student['Nilai Matematika pada raport semester terakhir (semester 6)'])
})

console.log('\n')

console.log('Table columns (SIMAK, NON SIMAK, NEITHER) in the forms of an array:')
console.log(`SIMAK has ${simak.length} items, which are:`, simak)
console.log(`NON SIMAK has ${nonsimak.length} items, which are:`, nonsimak)
console.log(`NEITHER has ${neither.length} items, which are:`, neither)

console.log('\n')

console.log('Notice that the column NEITHER has no values, ergo we will not use that column. We will do a two-tailed distribution between two samples of an unequal variance (heteroscedastic), the columns we would be using are: SIMAK and NON SIMAK.')

console.log(`
Our hypotheses are:
    Hipotesa null: Mahasiswa SIMAK UI tidak mempunyai nilai matematika yang lebih tinggi dibandingkan Mahasiswa Non SIMAK UI

    Hipotesa alternatif: Mahasiswa SIMAK UI mempunyai nilai matematika yang lebih tinggi dibandingkan Mahasiswa Non SIMAK UI

Question: Is there a significant difference between the last semester's math grade of SIMAK UI students and NON SIMAK UI students?
`)

// Running the Student's t-Test
const options = {
  varEqual: false,
  alpha: 0.05
}

const TTest = ttest(simak, nonsimak, options)
const pValueOfTTest = TTest.pValue()
const lessThanAlpha = TTest.pValue() < options.alpha

console.log('What is the P-value of the t-Test we ran?', pValueOfTTest)
console.log('Is the P-value less than 0.05 (alpha)?', lessThanAlpha)
console.log('Because the P-value is less than 0.05, we reject the null hypothesis.')

console.log('\n')

console.log(`With that being said, there is a ${(1 - pValueOfTTest)} or a ${Math.floor((1 - pValueOfTTest) * 100)}% chance that the significance is not random.`)
console.log('Henceforth, we reject the null hypothesis and state that there is a significant difference between the last semester\'s math grade of SIMAK UI students and NON SIMAK UI students.')

console.log('\n')

console.log('Further information from our t-Test:', {
  'Test value': TTest.testValue(),
  'P value': TTest.pValue(),
  Confidence: TTest.confidence(),
  'Is the null hypothesis valid?': TTest.valid(),
  'Degree of freedom': TTest.freedom()
})

// Output of object above:
// 'Test value': -1.9993187874116962,
// 'P value': 0.04611784274340544,
// Confidence: [ -2.2431432800051274, -0.019562049148348803 ],
// 'Is the null hypothesis valid?': false,
// 'Degree of freedom': 496.973820855078
