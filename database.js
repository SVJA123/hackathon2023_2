
DONATION = false;
const {createPool} = require("mysql") 
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "database",
    connectionLimit: 10
})

function retrieveUser(id){
    pool.query("select * from table where id = ?",[id],(err, result, fields)=> {
        if(err){
            return console.log(err);
        }
        return console.log("Retrieve problem: ${result.problemDesc}");
    })
}

function makeDonation(id, amount)
    if(DONATION == true){
        pool.query("update table set donation = donation + ? where id = ?",[amount, id],(err, result, fields)=> {
            if(err){
                return console.log(err);
            }
            return console.log("Donation made: ${result.donation}");
        })
    }

function addNewUser(username, contact, location, problemDesc)
    newUser = {
        username: username,
        contact: contact,
        location: location,
        problemDesc: problemDesc};

        pool.query("insert into users set ?", newUser, (err, result, fields)=> {
            if(err){
                return console.log(err);
            }
            return console.log("Inserted new user with ID: ${result.insertId}");
        });  

function getInput(){
    let username = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let location = document.getElementById("location").value;
    let problemDesc = document.getElementById("problemDesc").value;
    addNewUser(username, contact, location, problemDesc);
}