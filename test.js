const sql = require("mssql") 
const config = {
    user: "qayyum",
    password: "Catsarecute*",
    server:"wakefield2.database.windows.net",
    database: "wakefield",
    options: {
        encrypt: true
    }
};




// sql.connect(config, function(err){
//     if(err) console.log(err);

//     sql.query("INSERT INTO Request VALUES (1, 'stuff', 'need help', 1/1/2023, 'UK', 0, 'Uras')", function(err, result) {
//         if(err) console.log(err);
//         console.log(result); 

//         sql.close();
//     });
// });



function makeDonation(id, amount, date, name, email, req_id){
  sql.connect(config, function(err){
      if(err) console.log(err);

      const query = "INSERT INTO Donations(Donation_ID, Donation_Amount, Donation_Date, Donor_Name, Donor_Email, Donation_Request_ID) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [id, amount, date, name, email, req_id];
      
      sql.query(query, values, function(err, result) {
          if(err) console.log(err);
          console.log(result);

          sql.close();
      });
  });
}

makeDonation(1, 100, '1/1/2021', 'Uras', 'gmail.com', 1);

// function makeRequest(id, item, description, date, location, status, requester) {
//   sql.connect(config, function(err) {
//     if (err) console.log(err);

//     const query = "INSERT INTO Request (Request_ID, Item, Description, Request_Date, Location, Status, Requester) VALUES (?,?,?,?,?,?,?)";
//     const values = [id, item, description, date, location, status, requester];

//     sql.query(query, values, function(err, result) {
//       if (err) console.log(err);
//       console.log(result);

//       sql.close();
//     });
//   });
// }

// makeRequest(1, 'stuff', 'need help', '2023-01-01', 'UK', 0, 'Uras');


// function getInputDonation(){
//   let amount = document.getElementById("amount").value;
//   let date = document.getElementById("date").value;
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;

// }

// function submitForm(event) {
//   event.preventDefault();
//   const amount = document.getElementById("amount").value;
//   const date = document.getElementById("date").value;
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
  
//   makeDonation(amount, date, name, email);

// }