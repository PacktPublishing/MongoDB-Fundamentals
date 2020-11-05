/* connect to your ATLAS cluster using yout ATLAS database account
example: mongo "mongodb+srv://cluster0.u7n6b.mongodb.net/test" --username admindb

*/

var rs_srv = rs.status().members
for (i=0; i<rs_srv.length; i++) {
   print (rs_srv[i].name, '  -  ', rs_srv[i].stateStr)
}
