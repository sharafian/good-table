// taken from https://github.com/chalk/ansi-regex/blob/master/index.js because
// it's not very safe to import 2 modules to get 1 line of code
const ansi = new RegExp('[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))', 'g')

module.exports = function table (arr, padding = 2) {
  const width = []
  arr.forEach((subArr) => {
    subArr.forEach((e, i) => {
      width[i] = Math.max(width[i] || 0, e.replace(ansi, '').length)
    })
  })

  let ret = ''
  arr.forEach((subArr) => {
    subArr.forEach((e, i) => {
      ret += e + ' '.repeat(width[i] - e.replace(ansi, '').length) + 
        ((i === subArr.length - 1) ? '\n' : ' '.repeat(padding))
    })
  })

  return ret
}
