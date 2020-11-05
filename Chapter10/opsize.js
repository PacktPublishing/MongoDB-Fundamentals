/* connect to your ATLAS cluster using yout ATLAS database account
example: mongo "mongodb+srv://cluster0.u7n6b.mongodb.net/test" --username admindb

*/

use local  
var opl = db.oplog.rs.stats().maxSize/1024/1024
print("Oplog size: " + ~~opl + " MB")
