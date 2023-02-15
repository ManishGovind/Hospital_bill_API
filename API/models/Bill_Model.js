
const filename = './data/bills.json';
const fs = require('fs');


const getId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } 
    return 1
}

function readData() {


    try {
       var data =  fs.readFileSync(filename, 'utf-8')
       return data 
    }
    catch {
        console.log(err)

    }
}

function writeData(Data) {


    try {
        fs.writeFileSync(filename, JSON.stringify(Data))
    }
    catch {
        console.log(err)

    }
}

function getBills() {

    return new Promise((resolve, reject) => {
        
        var jsonData =readData();
        if (jsonData.length === 0) {
            reject({
                message: 'no bills found',
                status: 202
            })
        }
        
            resolve(JSON.parse(jsonData))
    })

}

function createBill(bill) {
    return new Promise((resolve, reject) => {
        var jsonData = readData();
        let id = 0;
        var billsData = '[]';
        if (jsonData.length === 0) {
            billsData = JSON.parse(billsData)
            id = getId(billsData)
        }
        else {
            billsData = JSON.parse(jsonData)
            id = getId(billsData)
        }
        bill["id"] = id
        billsData.push(bill)
        
       
        writeData(billsData)
        resolve(bill)
    })

}


module.exports = {
    createBill,
    getBills,
    
}