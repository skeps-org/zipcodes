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
    const stateMap = {};
    zipcodeList.forEach((z)=>{
        codes[z.zipcode] = {};
        stateMap[z.state_code] = stateMap[z.state_code] ?? []; 
        codes[z.zipcode] = {
            "zip": z.zipcode,
            "city": z.city,
            "state_code": z.state_code,
            "state": z.state_code,
            "country": z.country,
        }
        stateMap[z.state_code].push(z.zipcode)
    });



    console.log(Reflect.ownKeys(codes).length)
    if(codes){
        fs.writeFile(`${__dirname}/input.json`, JSON.stringify(codes), function (err) {
            if (err) throw err;
            console.log('complete');
        });
        fs.writeFile(`${__dirname}/stateMap.json`, JSON.stringify(stateMap), function (err) {
            if (err) throw err;
            console.log('complete');
        });
    }
    console.log(Reflect.ownKeys(codes).length)
}

convert();