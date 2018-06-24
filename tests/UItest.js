const data = require('../sources/data')
const functions = require('../sources/functions')
const selectors = require('../sources/selectors')

module.exports = {
    before: browser => {
        browser.url("http://liveviewtech.com/")
    },
    after: browser => {
        browser
    },


}