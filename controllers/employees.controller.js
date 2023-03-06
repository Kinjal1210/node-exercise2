// import connection from "../db";
import query from "../db/utils.js";

async function getdAll(){
    return new Promise((resolve, reject) => { 
    
      return query(`SELECT * FROM employees`, (err, results) => {
        if (err) reject(err);
        resolve(results);
     });
    });
}

function getOne(id){
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM employees WHERE EmployeeID = ?`, [id], (err,results) => {
      if (err) reject(err);
        resolve(results);
     });
    })};


export default {
    getdAll

}