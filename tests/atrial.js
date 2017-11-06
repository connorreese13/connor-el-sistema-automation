//const functions = require('../testSupport/functions')
const data = require('../testSupport/data')
const selectors = require('../testSupport/selectors')

module.exports = {
    beforeEach: browser => {
            browser.url('http://localhost:3000')
            browser.resizeWindow(1500, 1500)
    },
    after: browser => {
            browser.end()
    },

   

}