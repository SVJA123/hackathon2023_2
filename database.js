const sql = require("mssql");

const config = {
  user: "qayyum",
  password: "Catsarecute*",
  server: "wakefield2.database.windows.net",
  database: "wakefield",
  options: {
    encrypt: true
  }
};

// Create a connection pool
const pool = new sql.ConnectionPool(config);

// Connect to the database
pool.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Connected to the database");

  // Define a function to generate a unique ID that is not already in the database
  const generateUniqueID = (callback) => {
    const request = new sql.Request(pool);
    const id = Math.floor(Math.random() * 1000000); // generate a random ID between 0 and 999999
    request.query(`SELECT COUNT(*) AS Count FROM Donations WHERE Donation_ID = ${id}`, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }

      const count = result.recordset[0].Count;
      if (count === 0) {
        console.log(`Generated unique ID: ${id}`);
        callback(id); // pass the ID to the callback function
      } else {
        generateUniqueID(callback); // try again if ID is already in the database
      }
    });
  };

  // Define a function to insert a new donation record
  const insertDonation = (donationAmount, donationDate, donorName, donorEmail, donationRequestID) => {
    generateUniqueID((id) => {
      const request = new sql.Request(pool);
      request.query(`INSERT INTO Donations (Donation_ID, Donation_Amount, Donation_Date, Donor_Name, Donor_Email, Donation_Request_ID) VALUES (${id}, ${donationAmount}, '${donationDate}', '${donorName}', '${donorEmail}', ${donationRequestID})`, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log("Donation record inserted successfully");
      });
    });
  };

  
  // Define a function to insert a new request record
const insertRequest = (requestTitle, requestDescription, requestDate, requestLocation, requestRecipient) => {
    generateUniqueID((id) => {
      const request = new sql.Request(pool);
      const requestStatus = 0; // set the initial status to 0 (i.e., not fulfilled)
      request.query(`INSERT INTO Request (Request_ID, Request_Title, Request_Description, Request_Date, Request_Location, Request_Status, Request_Recipient) VALUES (${id}, '${requestTitle}', '${requestDescription}', '${requestDate}', '${requestLocation}', ${requestStatus}, '${requestRecipient}')`, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
  
        console.log("Request record inserted successfully");
      });
    });
  };
  
  
});