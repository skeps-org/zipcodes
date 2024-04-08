const fs = require('fs');

// let obj = {
//     table: []
// };
const zipcodeList = require('./zipCode-08042024.json')
// const zipcodeList = [
//     {
//         "zipcode": "00501",
//         "type": "UNIQUE",
//         "decommissioned": 0,
//         "city": "Holtsville",
//         "state_code": "NY",
//         "county": "Suffolk County",
//         "world_region": "",
//         "country": "US",
//         "latitude": 40.81,
//         "longitude": -73.04
//     },
//     {
//         "zipcode": "00544",
//         "type": "UNIQUE",
//         "decommissioned": 0,
//         "city": "Holtsville",
//         "state_code": "NY",
//         "county": "Suffolk County",
//         "world_region": "",
//         "country": "US",
//         "latitude": 40.81,
//         "longitude": -73.04
//     }];

function convert(){
    const codes = {};
    zipcodeList.forEach((z)=>{
        codes[z.zipcode] = {};
        codes[z.zipcode] = {
            "zip": z.zipcode,
            "decommissioned": 0,
            "city": z.city,
            "state_code": z.state_code,
            "state": z.state_code,
            "country": z.country,
        }
    });

    console.log(Reflect.ownKeys(codes).length)
    if(codes){
        fs.writeFile(`${__dirname}/input.json`, JSON.stringify(codes), function (err) {
            if (err) throw err;
            console.log('complete');
        });
    }
    console.log(Reflect.ownKeys(codes).length)
}

convert();