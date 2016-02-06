var request = require('request');

var MODULE_NAME = 'node-slack';

var options = {};
var basePost = {};

function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

var setup = function(param) {

    options = {};
    basePost = {};

    options.url = param.url;

    basePost.username = param.user || MODULE_NAME;

    if (param.channel) {
        basePost.channel = param.channel;
    }

    if (param.icon_url) {
        basePost.icon_url = param.icon_url;
    } else {
        basePost.icon_emoji = param.icon_emoji || ':neckbeard:';
    }

};

var postToSlack = function(input) {

    var post = basePost;
    var inputType = toType(input);

    if (inputType === 'string') {
        post.text = input;
    } else if (inputType === 'array') {
        post.attachments = input;
    } else {
        console.log(MODULE_NAME + ': Input should be a text string or an attachments array.');
        return;
    }

    options.body = JSON.stringify(post);
    options.method = 'PUT';

    request(options, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(MODULE_NAME + ': Posted update to ' + post.channel);
        } else if (!error) {
            console.log(MODULE_NAME + ': ' + response.statusCode + ' - Something went wrong');
        } else if (error) {
            console.log(MODULE_NAME + ': Something went really wrong');
            console.log(error);
        }
    });

};

module.exports = {
    setup: setup,
    postToSlack: postToSlack
};
