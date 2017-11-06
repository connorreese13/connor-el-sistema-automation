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

    //This test verifies that each tab takes the user to the respective pages
    'Click Home page buttons': browser => {
        browser
        .pause(1000)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 3000)
        .click(selectors.homeScreen.seeMoreButton.tag)
        .waitForElementPresent(selectors.calendarScreen.calendarHeader, 3000)
        // 'See More' button to calendar screen
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 3000)
        .click(selectors.homeScreen.june12.tag)
        .waitForElementPresent(selectors.calendarScreen.calendarHeader, 3000)
        // 'June 12' button to calendar screen      
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 3000)
        .click(selectors.homeScreen.supportUsButton.tag)
        .waitForElementPresent(selectors.supportUsScreen.donateBox.submitButton, 3000)
        // 'Support Us' button to donate screen     
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 3900)
        .click(selectors.homeScreen.readMoreButton.tag)        
        .assert.containsText(selectors.aboutUsScreen.streetAddress.tag, selectors.aboutUsScreen.streetAddress.text)
        // 'Read More' button to about us screen     
        .click(selectors.tabSelectors.home)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 3000)
     },

     //This test ensures that a user can sign up for the calendar notifications
     //I couldn't test for bad data because a bug prevents putting in any wrong info
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

    //This tests that certain elements are available on the About page
    //Since there is nothing functional on this page, that is all I can test
    'About Us screen test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.aboutUs)
        .waitForElementPresent(selectors.aboutUsScreen.loadMorePhotosButton, 500)
        .waitForElementPresent(selectors.aboutUsScreen.volunteerProfile, 500)
        .waitForElementPresent(selectors.aboutUsScreen.connectButton, 500)
    },

    //Since there are no functioning buttons on the Media page, 
    //I made this test to assure that they elements are at least present until the devs can get those working again
     'Media screen test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.media)
        .waitForElementPresent(selectors.mediaScreen.photoVideoToggle, 500)
        .waitForElementPresent(selectors.mediaScreen.loadMorePhotosButton, 500)
        .waitForElementPresent(selectors.mediaScreen.returnToTop, 500)
    },

    //Since there are no functioning buttons on the Media page, 
    //Since there is nothing functional on this page, that is all I can test
    'Blog test': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.blog)
        .waitForElementPresent(selectors.blogScreen.blogPost, 500)
    },
    
    //For this test, I test the functionality of inputting volunteer information and
    //credit card information to checkout. 
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
        .assert.containsText(selectors.supportUsScreen.donateAnInstrument.tag, selectors.supportUsScreen.donateAnInstrument.text)
        .click(selectors.supportUsScreen.donateBox.submitButton)
        //Below, I am making sure no error messages are presetn after I input good data
        .waitForElementNotPresent(selectors.errorMessages.email.text, 200)
        .setValue(selectors.supportUsScreen.volunteerSignUp.name, data.goodData.volunteerSignUpData.name)
        .pause(3000)
    },

    //This test is the same as the one above, just with bad data (the only error message that picks up with bad data is the email, this is a bug)
    'Support Us bad data test (incorrect email entry)': browser =>{
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
        //below I am asserting that the correct email error message dispalys after a bad entry
        .assert.containsText(selectors.errorMessages.email.tag, selectors.errorMessages.email.text)
        .waitForElementPresent(selectors.supportUsScreen.donateAnInstrument.tag, 2000)
        .setValue(selectors.supportUsScreen.volunteerSignUp.name, data.badData.volunteerSignUpData.name)
        .pause(3000)
    },

    'Support Us bad data test (no values entered: checking for all error messages after clicking Submit)': browser =>{
        browser
        .pause(100)
        .click(selectors.tabSelectors.supportUs)
        .waitForElementPresent(selectors.supportUsScreen.donateAnInstrument.tag, 2000)
        .pause(3000)
        .click(selectors.supportUsScreen.donateBox.submitButton)
        .getLocationInView(selectors.supportUsScreen.donateBox.submitButton)
        .pause(500)
        //below I am using the clickByText command to verify that all of the correct error messages will display if I hit 'Submit' leaving the fields blank
        .clickByText(selectors.errorMessages.email.tag, selectors.errorMessages.email.text)
        .clickByText(selectors.errorMessages.amount.tag, selectors.errorMessages.amount.text)
        .clickByText(selectors.errorMessages.creditCardNumber.tag, selectors.errorMessages.creditCardNumber.text)
        .clickByText(selectors.errorMessages.cvcNumber.tag, selectors.errorMessages.cvcNumber.text)
        .clickByText(selectors.errorMessages.expiration.tag, selectors.errorMessages.expiration.text)
        .waitForElementPresent(selectors.supportUsScreen.donateAnInstrument.tag, 2000)
        .setValue(selectors.supportUsScreen.volunteerSignUp.name, data.badData.volunteerSignUpData.name)
        .pause(3000)
    },

    //In this test, I test the nav bar on the bottom of the screen
    //After each click, I assure that the proper page has been displayed by using either assert or waitForElementPresent actions
    'Bottom menu nav bar test': browser =>{
        browser
        .waitForElementPresent(selectors.bottomMenu.header, 3000)
        .getLocationInView(selectors.bottomMenu.header)
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.home.tag, selectors.bottomMenu.navBar.home.text)
        .waitForElementPresent(selectors.homeScreen.homeHeader, 200)
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.aboutUs.tag, selectors.bottomMenu.navBar.aboutUs.text)
        .assert.containsText(selectors.aboutUsScreen.streetAddress.tag, selectors.aboutUsScreen.streetAddress.text)
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.ourTeam.tag, selectors.bottomMenu.navBar.ourTeam.text)
        .assert.containsText(selectors.aboutUsScreen.streetAddress.tag, selectors.aboutUsScreen.streetAddress.text)        
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.calendar.tag, selectors.bottomMenu.navBar.calendar.text)
        .waitForElementPresent(selectors.calendarScreen.calendarHeader, 200)
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .clickByText(selectors.bottomMenu.navBar.volunteer.tag, selectors.bottomMenu.navBar.volunteer.text)
        .assert.containsText(selectors.aboutUsScreen.streetAddress.tag, selectors.aboutUsScreen.streetAddress.text)        
        .getLocationInView(selectors.bottomMenu.header)        
        .pause(1000)
        .getLocationInView(selectors.bottomMenu.header)        
        .clickByText(selectors.bottomMenu.navBar.donate.tag, selectors.bottomMenu.navBar.donate.text)
        .waitForElementPresent(selectors.supportUsScreen.donateBox.submitButton, 200)
        .pause(500)
        .click(selectors.bottomMenu.navBar.contactUsButton)
        .pause(1000)
    },  

    //Here I make sure a user can enter a phone number and click submit
    'Bottom menu mobile entry test': browser =>{
        browser
        .waitForElementPresent(selectors.bottomMenu.header, 3000)
        .getLocationInView(selectors.bottomMenu.header)
        .pause(1000)
        .setValue(selectors.bottomMenu.stayConnected.mobileEntry, data.goodData.bottomMenuData.phoneNumber)
        .pause(500)
        .click(selectors.bottomMenu.stayConnected.signUpButton)
        .pause(500)
    },
    
    //With limited functionality on several pages, I feel this test comprehensively 
    //tests what is at least available to be tested. With some bug fixes, it would
    //be easier to test it more thoroughly. 
    


}