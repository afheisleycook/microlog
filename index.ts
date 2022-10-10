import {express} from "express";
import { Database } from "sqlite3";
type Log = (title: string,description : string) => String;
let db = new Database("app.db");
let logs = db.all("select * from LOGS",function(err,data) {

});
