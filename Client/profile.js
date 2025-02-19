let profile = {
   
    org1admin: { 
        "cryptoPath": "../Network/organizations/peerOrganizations/org1.example.com",
        "keyDirectoryPath": "../Network/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/keystore/",
        "certPath": "../Network/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../Network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt",
        "peerEndpoint": "localhost:7051",
        "peerHostAlias": "peer0.org1.example.com",
        "mspId": "org1-example-com"
    },
    org1auditor: { 
        "cryptoPath": "../Network/organizations/peerOrganizations/org1.example.com",
        "keyDirectoryPath": "../Network/organizations/peerOrganizations/org1.example.com/users/Auditor@org1.example.com/msp/keystore/",
        "certPath": "../Network/organizations/peerOrganizations/org1.example.com/users/Auditor@org1.example.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../Network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt",
        "peerEndpoint": "localhost:7051",
        "peerHostAlias": "peer0.org1.example.com",
        "mspId": "org1-example-com"
    },
    org1user: { 
        "cryptoPath": "../Network/organizations/peerOrganizations/org1.example.com",
        "keyDirectoryPath": "../Network/organizations/peerOrganizations/org1.example.com/User/User@org1.example.com/msp/keystore/",
        "certPath": "../Network/organizations/peerOrganizations/org1.example.com/users/User@org1.example.com/msp/signcerts/cert.pem",
        "tlsCertPath": "../Network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt",
        "peerEndpoint": "localhost:7051",
        "peerHostAlias": "peer0.org1.example.com",
        "mspId": "org1-example-com"
    }
};

module.exports = { profile };
