const selectors = require ('../testSupport/selectors')

module.exports = {

    goodData:{
        
        bottomMenuData:{
            phoneNumber: '8012300129'
        },

        calendarData:{
            phoneNumber: '8012300129'
        },

        donateData:{
            email: 'connor.reese13@gmail.com',
            amount: '300',
            creditCard: '1234567812345678',
            cvcNumber: '123',
            expiration: '08132018',
        },

        volunteerSignUpData:{
            name: 'Reginald',
            email: 'connor.reese13@gmail.com',
        }
    },

    badData:{
        
        bottomMenuData:{
            phoneNumber: 'poop'
        },

        calendarData:{
            phoneNumber: 'poop'
        },

        donateData:{
            email: 'poop',
            amount: '300',
            creditCard: 'abcde',
            cvcNumber: '123',
            expiration: '08132018',
        },

        volunteerSignUpData:{
            name: '$#!',
            email: 'poop',
        }
    }

}