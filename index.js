/**
 * ronly (recursive only)
 * @param obj {object} the object to filter
 * @param keysToGet {string[]|string} | a space or comma delimited list, or an array of strings
 */
module.exports = ronly = (obj, keysToGet) => {
  if (typeof keysToGet === 'string') keysToGet = keysToGet.split(/\s*,\s*|\s+/)

  var objToReturn = keysToGet.reduce(function(ret, key) {
    var isNestedIndex = key.indexOf('.')
    if (isNestedIndex > -1) {
      var leftSide = key.slice(0, isNestedIndex)
      var rightSide = key.slice(isNestedIndex + 1)
      ret[leftSide] = Object.assign(ret[leftSide] || {}, ronly(obj[leftSide], rightSide))
    } else if (key in obj) ret[key] = obj[key]
    return ret
  }, {})

  return objToReturn
}
