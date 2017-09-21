module.exports = function table (arr, padding = 2) {
  const width = []
  arr.forEach((subArr) => {
    subArr.forEach((e, i) => {
      width[i] = Math.max(width[i] || 0, e.length)
    })
  })

  let ret = ''
  arr.forEach((subArr) => {
    subArr.forEach((e, i) => {
      ret += e + ' '.repeat(width[i] - e.length) + 
        ((i === subArr.length - 1) ? '\n' : ' '.repeat(padding))
    })
  })

  return ret
}
