const ClientApplication = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "org1admin",   
    "mychannel",           
    "Assets",                 
    "UpdateAsset",          
    "Asset-200",            
    "user2",                
    "7000"                  
).then(result => {
    console.log(new TextDecoder().decode(result));
    console.log("Asset successfully updated");
}).catch(error => {
    console.error("Failed to update asset:", error);
});
