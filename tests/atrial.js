//const functions = require('../testSupport/functions')
const data = require('../testSupport/data')
const selectors = require('../testSupport/selectors')

module.exports = {
    beforeEach: browser => {
            browser.url('http://localhost:3000')
           // browser.resizeWindow(1500, 1500)
    },
    after: browser => {
            browser.end()
    },

    'Support Us good data test': browser =>{
        browser
        .waitForElementPresent(selectors.bottomMenu.header, 3000)
        .getLocationInView(selectors.bottomMenu.header)
        .pause(1000)
        .setValue(selectors.bottomMenu.stayConnected.mobileEntry, data.goodData.bottomMenuData.phoneNumber)
        .pause(500)
        .click(selectors.bottomMenu.stayConnected.signUpButton)
        .pause(500)
    }   
}