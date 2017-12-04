module.exports = {

    'facebookAuth' : {
        'clientID'        : '243006172900022', 
        'clientSecret'    : 'b1681e8e190cdb1582259de450acd6ac', 
        'callbackURL'     : 'http://127.0.0.1:3000/auth/facebook/callback',
        'profileURL'	  : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] 

    },

    'twitterAuth' : {
        'consumerKey'        : 'OjPW3HJ5QHgAQQ3xnNSz7tdIB',
        'consumerSecret'     : 'NPpEBNqBqPNiniNuHBxmrqYWhcepLMUZGqeU8jwqXnAEOfxzSI',
        'callbackURL'        : 'http://127.0.0.1:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '492890462594-es5faba2bcp76i76sf56bvsdhu68ug2o.apps.googleusercontent.com',
        'clientSecret'     : 'ViNCYEByVbQJRLoa47CQ-yPT',
        'callbackURL'      : 'http://127.0.0.1:3000/auth/google/callback'
    }

};
