/**
 * get url param by name
 * @param {string} paramName
 * @param {string} url
 */
module.exports = function (paramName, url) {
    const search = url.split('?')[1]
    if (!search) {
        return null
    }
    let val = null
    search.split('&').forEach(item => {
        const arr = item.split('=')
        if (arr[0] == paramName) {
            val = arr[1]
        }
    })
    return val
}
