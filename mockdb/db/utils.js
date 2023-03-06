import connection from "../db";

function query(queryStr, vals){
    return new Promise((resolve, reject) => {
        connection.query(queryStr, vals);
    })};