const axios = require("axios");
const fs = require('fs');

const data = axios.get("https://raw.githubusercontent.com/caevee/video-data/master/v2/data.json")
    .then(function (response) {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    })

data
    .then((data) => {
        if (data !== undefined) {
            fs.writeFileSync(__dirname + '/data.json', JSON.stringify(data));
        }
    })
    .catch(err => console.log(err)
    );
