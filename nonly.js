/**
 * nonly (nested only)
 * @param obj {object} the object to filter
 * @param keysToGet {string[]|string} | a space or comma delimited list
 */
module.exports = nonly = (obj, keysToGet) => {
  if (typeof keysToGet === 'string') keysToGet = keysToGet.split(/\s*,\s*|\s+/)

  const objToReturn = keysToGet.reduce((ret, key) => {
    const isNestedIndex = key.indexOf('.')
    if (isNestedIndex > -1) {
      const leftSide = key.slice(0, isNestedIndex)
      const rightSide = key.slice(isNestedIndex + 1)
      ret[leftSide] = Object.assign(ret[leftSide] || {}, nonly(obj[leftSide], rightSide))
    } else if (key in obj) ret[key] = obj[key]
    return ret
  }, {})

  return objToReturn
}