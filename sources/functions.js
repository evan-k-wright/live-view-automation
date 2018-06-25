const data = require('./data')
const selectors = require('./selectors')

const uiTest = (browser) => {
    browser
        .waitForElementVisible(selectors.logo, 5000)
        .waitForElementVisible(selectors.homepage, 5000)
        .waitForElementVisible(selectors.solutions, 5000)
        .waitForElementVisible(selectors.about, 5000)
        .waitForElementVisible(selectors.getAQuote, 5000)
        .waitForElementVisible(selectors.login, 5000)
        .moveToElement(selectors.solutions, undefined, undefined)
        .waitForElementVisible(selectors.securitY, 5000)
        .waitForElementVisible(selectors.streaming, 5000)
        .waitForElementVisible(selectors.software, 5000)
}

const homePage = (browser) => {
    browser
        .waitForElementVisible(selectors.demo, 5000)
}

const solutions = (browser) => {
    let solutions = browser.page.solutions()
    solutions.navigate()
        solutions
            .waitForElementVisible('@secur', 5000)
            .click('@secur')
            .waitForElementVisible('@securTitle', 5000)
            .click('@homePage')
            .waitForElementVisible('@softWare', 5000)
            .click('@softWare')
            .waitForElementVisible('@softWareTitle', 5000)
            .click('@logo')
            .waitForElementVisible('@streaming', 5000)
            .click('@streaming')
            .waitForElementVisible('@streamingTitleOmni', 5000)
            .click('@logo')
            .waitForElementVisible('@actionable', 5000)

}

module.exports = {
    uiTest : uiTest,
    homePage : homePage,
    solutions : solutions,
}