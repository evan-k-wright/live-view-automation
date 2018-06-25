module.exports = {
    url: 'http://liveviewtech.com/',
    elements: { 
        actionable: {
            selector: '//h1[.="Actionable Visibility. Anytime, Anywhere."]',
            locateStrategy: 'xpath'
        },

        homePage: 'li[id="menu-item-106"]',
        logo: 'img[class="header-logo"]', 
        secur: 'img[src="http://s3-us-west-2.amazonaws.com/dotcom-media/wp-content/uploads/2017/09/securityCircleTriangle.png"]',
        securTitle: {
            selector: '//h1[.="Security"]',
            locateStrategy: 'xpath'
        },

        softWare: 'img[src="http://s3-us-west-2.amazonaws.com/dotcom-media/2017/11/software_cropped2-1.png"]',
        softWareTitle:{
            selector: '//h1[.="Software Platform"]',
            locateStrategy: 'xpath'
        },
        
        streaming: 'img[src="http://s3-us-west-2.amazonaws.com/dotcom-media/wp-content/uploads/2017/09/streaming_cropped2.png"]',
        streamingTitleOmni: {
            selector: '//h1[.="Omni"]',
            locateStrategy: 'xpath'
        },
    }
}