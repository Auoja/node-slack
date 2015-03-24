# node-slack

##Usage

```javascript

    var slack = require('node-slack');

    slack.setup({
    	url: '*Your Webhook URL*',
    	channel: '#foo', // Optional
    	user: 'bar', // Optional
    	icon_url: 'http://foo.com/bar.jpg', // Optional
    	icon_emoji: ':bowtie:' // Optional
    });

	slack.postToSlack("Hello Slack!");
	
	slack.postToSlack([{
    	'fallback': 'Hello Slack!',
    	'pretext': 'Hello Slack!',
    	'color': '#daa520',
    	'fields': [{
        	'title': 'Notes',
        	'value': 'Node is awesome!'
    	}]
	}]);

```