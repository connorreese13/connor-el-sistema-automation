module.exports = {
    host: 'http://localhost:3000',

    tabSelectors:{
        home: 'a[href="/home"]',
        calendar: 'a[href="/calendar"]',
        aboutUs: 'a[href="/about"]',
        media: 'a[href="/media"]',
        blog: 'a[href="/blog"]',
        supportUs: 'a[href="/support"]'
    },
    
    homeScreen:{
        homeHeader: 'section[class="upcoming-events"]',
        seeMoreButton:{
            tag: 'input[type="button"]',
            text: 'See More'
        },
        june12:{
            tag: 'img[src="/static/media/placeholder-violin.7febde31.jpg"]',
            text: 'June 12th'
        },
        june24:{
            tag: 'span[class="event-date"]',
            text: 'June 24th'
        },
        july30:{
            tag: 'span[class="event-date"]',
            text: 'July 30th'
        },
        supportUsButton:{
            tag: 'input[value="Support Us"]',
            text: 'Support Us'
        }, 
        readMoreButton:{
            tag: 'input[type="button"]',
            text: 'Read More'
        } 
        
    },

    calendarScreen:{
        calendarHeader: 'img[src="/static/media/hero-image.aea190d9.jpg"]',
        signUp:{
            signUpButton: 'input[value="Sign up"]',
            phoneNumber: 'input[type="tel"]',
            classes: 'div[class="downwards-arrow"]',
            performances: 'label[for="performances"]',
            events: 'label[for="events"]',
            all: 'label[for="all"]',
            signUpButton2: 'input[type="submit"]',
        }
    },

    aboutUsScreen:{
        loadMorePhotosButton: 'img[class="readmore"]',
        volunteerProfile: 'img[class="arrow-button"]', 
        connectButton:  'div[class="connect-volunteer"]'
    },

    mediaScreen:{
        photoVideoToggle:'li[class="media-header-button"]',
        loadMorePhotosButton: 'li[class="load-more-button"]',
        returnToTop: 'li[class="back-to-top"]'
    },

    blogScreen:{ 
        blogPost: 'div[class="box-link"]'
    },

    supportUsScreen:{
        donateBox:{
            email: 'input[type="email"]',
            amount: 'input[type="number"]',
            creditCardNumber: 'input[class="donate-money-card"]',
            cvcNumber: 'input[class="donate-money-cvc"]',
            expiration: 'input[type="date"]',
            submitButton: 'button[class="donate-btn"]',
            submitError: 'div[class="donate-error-message"]'
        },
        donateAnInstrument:{
            tag: 'div[class="donate-instrument-container"]',
            text: '6 Loop St, # 4 Pittsburgh, Pennsylvania, PA 15215 (801) 224 - 8970'
        },
        volunteerSignUp:{
            name: 'input[class="volunteer-email-field"]',
            email: 'input[name="email"]',
        }   
    },

    bottomMenu:{
        header: 'div[class="footer-container"]',
        stayConnected:{
            mobileEntry: 'input[type="tel"]',
            signUpButton: 'input[type="submit"]'
        },
        navBar:{
            home:{
                tag: 'a[href="/home"]',
                text:'Home',
            },
            aboutUs:{ 
                tag:'a[href="/about"]',
                text: 'About Us',
            },
            ourTeam:{ 
                tag:'a[href="/about"]',
                text:'Our Team',
            },
            calendar:{ 
                tag: 'a[href="/calendar"]',
                text: 'Calendar',
            },
            volunteer:{
                tag:'a[href="/about"]',
                text: 'Volunteer',
            },
            donate:{
                tag: 'a[href="/suppor"]',
                text: 'Donate',
            },
            contactUsButton: 'input[class="contact-us"]',
        }
    }
}