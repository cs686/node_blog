/**
 * Created by shunpingqi on 16/5/1.
 */
var setting = require('../setting');
    Db = require('mongodb').Db;
    Connection = require('mongodb').Server;
    Server = require('mongodb').Server;
module.exports = new Db(setting.db,new Server(setting.host,setting.port),{safe:true});