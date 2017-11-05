//const functions = require('../testSupport/functions')
const data = require('../testSupport/data')
const selectors = require('../testSupport/selectors')

module.exports = {
    beforeEach: browser => {
            browser.url('http://localhost:3000')
            browser.resizeWindow(2000, 2000)
    },
    after: browser => {
            browser.end()
    },

    'Click Home page buttons': browser => {
        browser
        .pause(1000)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 500)
        .click(selectors.homeScreen.seeMoreButton.tag)
        .pause(1000)
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 500)
        .click(selectors.homeScreen.june12.tag)
        .pause(500)
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 500)
        .click(selectors.homeScreen.supportUsButton.tag)
        .pause(1000)
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 500)
        .click(selectors.homeScreen.readMoreButton.tag)        
        .pause(200)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 500)
     },

     'Calendar Screen test': browser =>{
        browser
        .pause(1000)
        .click(selectors.tabSelectors.calendar)
        .waitForElementPresent(selectors.calendarScreen.calendarHeader, 500)
        .click(selectors.calendarScreen.signUp.signUpButton)
        .waitForElementPresent(selectors.calendarScreen.signUp.all, 1000)
        .setValue(selectors.calendarScreen.signUp.phoneNumber, data.goodData.calendarData.phoneNumber)
        .click(selectors.calendarScreen.signUp.classes)
        .click(selectors.calendarScreen.signUp.performances)
        .click(selectors.calendarScreen.signUp.all)
        .pause(500)
        .click(selectors.calendarScreen.signUp.signUpButton2)
        .pause(3000)   
    },

    //I wrote a bad data sheet for the Calendar Screen test, but any input can be expected. Thus, due to the bug, I cannot run a bad data test for this field

    'About Us screen test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.aboutUs)
        .waitForElementPresent(selectors.aboutUsScreen.loadMorePhotosButton, 500)
        .waitForElementPresent(selectors.aboutUsScreen.volunteerProfile, 500)
        .waitForElementPresent(selectors.aboutUsScreen.connectButton, 500)
    },

    //Since there are no functioning buttons on the About Us page, I made this test to assure that they elements are at least present until the devs can get those working again

    'Media screen test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.media)
        .waitForElementPresent(selectors.mediaScreen.photoVideoToggle, 500)
        .waitForElementPresent(selectors.mediaScreen.loadMorePhotosButton, 500)
        .waitForElementPresent(selectors.mediaScreen.returnToTop, 500)
    },

    //For Media screen test, there are no fucntion buttons, I made this test to asssure that the elements are at least present until the devs can get those working agian 

    'Blog test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.blog)
        .waitForElementPresent(selectors.blogScreen.blogPost, 500)
    },

    'Support Us good data test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.supportUs)
        .waitForElementPresent(selectors.supportUsScreen.donateAnInstrument.tag, 2000)
        .setValue(selectors.supportUsScreen.donateBox.email, data.goodData.donateData.email)
        .setValue(selectors.supportUsScreen.donateBox.amount, data.goodData.donateData.amount)
        .setValue(selectors.supportUsScreen.donateBox.creditCardNumber, data.goodData.donateData.creditCard)
        .setValue(selectors.supportUsScreen.donateBox.cvcNumber, data.goodData.donateData.cvcNumber)
        .setValue(selectors.supportUsScreen.donateBox.expiration, data.goodData.donateData.expiration)
        .pause(3000)
        .click(selectors.supportUsScreen.donateBox.submitButton)
        .waitForElementPresent(selectors.supportUsScreen.donateBox.submitError, 2000)
        .setValue(selectors.supportUsScreen.volunteerSignUp.email, data.goodData.volunteerSignUpData.email)
        .setValue(selectors.supportUsScreen.volunteerSignUp.name, data.goodData.volunteerSignUpData.name)
        .pause(3000)
    },

    'Support Us bad test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.supportUs)
        .waitForElementPresent(selectors.supportUsScreen.donateAnInstrument.tag, 2000)
        .setValue(selectors.supportUsScreen.donateBox.email, data.badData.donateData.email)
        .setValue(selectors.supportUsScreen.donateBox.amount, data.badData.donateData.amount)
        .setValue(selectors.supportUsScreen.donateBox.creditCardNumber, data.badData.donateData.creditCard)
        .setValue(selectors.supportUsScreen.donateBox.cvcNumber, data.badData.donateData.cvcNumber)
        .setValue(selectors.supportUsScreen.donateBox.expiration, data.badData.donateData.expiration)
        .pause(3000)
        .click(selectors.supportUsScreen.donateBox.submitButton)
        .waitForElementPresent(selectors.supportUsScreen.donateAnInstrument.tag, 2000)
        .setValue(selectors.supportUsScreen.volunteerSignUp.email, data.badData.volunteerSignUpData.email)
        .setValue(selectors.supportUsScreen.volunteerSignUp.name, data.badData.volunteerSignUpData.name)
        .pause(3000)
    },

    'Nav bar test': browser =>{
        browser
        .waitForElementPresent(selectors.bottomMenu.header, 3000)
        .getLocationInView(selectors.bottomMenu.header)
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.home.tag, selectors.bottomMenu.navBar.home.text)
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.aboutUs.tag, selectors.bottomMenu.navBar.aboutUs.text)
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.ourTeam.tag, selectors.bottomMenu.navBar.ourTeam.text)
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.calendar.tag, selectors.bottomMenu.navBar.calendar.text)
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.volunteer.tag, selectors.bottomMenu.navBar.volunteer.text)
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .getLocationInView(selectors.bottomMenu.header)        
        .clickByText(selectors.bottomMenu.navBar.donate.tag, selectors.bottomMenu.navBar.donate.text)
        .pause(500)
        .click(selectors.bottomMenu.navBar.contactUsButton)
        .pause(1000)
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
    },
    
    


}