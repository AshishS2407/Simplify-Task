const ClientApplication = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "org1admin",   
    "mychannel",           
    "Assets",                
    "DeleteAsset",          
    "Asset-100"           
).then(result => {
    console.log(new TextDecoder().decode(result));
    console.log(" Asset successfully deleted");
}).catch(error => {
    console.error(" Failed to delete asset:", error);
});
