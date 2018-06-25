const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    before: browser => {
        browser.url("http://liveviewtech.com/")
    },
    after: browser => {
        browser.end()
    },

    // 'Menu Bar': browser => {
    //     functions.uiTest(browser)
    // },

    // 'Home Page' : browser => {
    //     functions.homePage(browser)
    // },

    'Security' : browser => {
        functions.Security(browser)
    }

}