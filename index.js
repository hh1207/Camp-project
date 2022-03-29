const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Happy1207?",
    database: "crud_contact"
});


app.get("/", (req,res) =>{
 
    res.send("Hello World");
  
});
 
app.get("/contacts", (req,res) =>{
    db.query("SELECT * FROM contact_db", (err,result) => {
        if (err) {
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
  
});


app.post("/create", (req, res) => {
    console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const grade = req.body.grade;
  const email = req.body.email;
  const paid = req.body.paid;
  

  db.query(
    "INSERT INTO contact_db (firstName, lastName, grade, email, paid) VALUES (?,?,?,?,?)",
    [firstName,lastName,grade,email,paid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.put('/update', (req,res) => {
  const id = req.body.id;
  const paid = req.body.paid;
  
  db.query("UPDATE contact_db SET paid = ? WHERE id = ?",
  [paid,id],
  (err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send(result);
    }
  } )

})


app.delete('/delete/:id', (req,res) => {
  const id = req.params.id

  db.query("DELETE FROM contact_db WHERE id = ?",
   id,
   (err,result) => {
     if (err) {
       console.log(err);
     }
     else {
       res.send(result);
     }
   }
   )
})


app.listen(3001, () => {
    console.log("Listening on port 3001. Hello World");
})