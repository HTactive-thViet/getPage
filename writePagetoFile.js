var json = require('./links.json')
var getPage = require("./getPage")
var fs = require('fs')
var file = require('./taoThuMuc')

const savePage = async(soPageMuonLuu) => {
    for (let i = 0, j = 1; i < json.length, j < soPageMuonLuu + 1; i++, j++) {
        await file.taoDir;
        var laybody = await getPage(json[i], j)


    }
}
savePage(3);