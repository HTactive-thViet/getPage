const rp = require('request-promise');
const json = require('./links.json');

const getPage = async(link, page) => {
    rp(link + `?page=${page}`, function(error, response, body) {
        if (error) {
            console.error('error:', error);
        } else {
            console.log("Status Code: ", response.statusCode)
            return body;
        }
    });
}
module.exports = getPage;