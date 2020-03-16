const taoDir = async() => {
    const d = new Date();
    for (let i = 0; i < json.length; i++) {
        // console.log(json[i])
        const jsoncuted = json[i].slice(8);
        const jsoncuted2 = json[i].slice(json[i].lastIndexOf("/"));
        const jsoncuted3 = jsoncuted2.replace("/", "_")
        const jsoncuted4 = json[i].slice(8, json[i].lastIndexOf("/"))
            // console.log(jsoncuted4)
        const duongDan = (d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "_" + jsoncuted4 + jsoncuted3).toString();
        // console.log(duongDan)
        if (!fs.existsSync(duongDan)) fs.mkdirSync(duongDan);

    }
}

module.exports = taoDir;