const data = require('./data')
const selectors = require('./selectors')

const uiTest = (browser) => {
    browser
        .waitForElementVisible(selectors.logo, 5000)     
}

module.exports = {

}