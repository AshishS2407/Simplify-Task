# Hyperledger Fabric Asset Management System

## Overview
This project is a **Hyperledger Fabric** blockchain application for managing assets securely. It includes functionalities for creating, reading, updating, and deleting assets, with role-based access control (RBAC) ensuring that only authorized users can perform specific actions.

## Features
- **Admin:** Can create, update, and delete assets.
- **User:** Can read assets they own.
- **Auditor:** Can view all assets.
- **Chaincode:** Implements business logic for asset transactions.
- **Blockchain Network:** Built on **Hyperledger Fabric**.

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm** 
- **Docker & Docker Compose**
- **Hyperledger Fabric** (v2.2 or later)
- **Fabric Samples** & CLI Tools

## Project Structure
```
📂 hyperledger-fabric-app/
├── 📂 chaincode/       # Smart contract logic
├── 📂 client/          # Client-side interaction with the blockchain
├── 📂 network/         # Network configuration and setup
├── 📜 package.json     # Node.js dependencies
├── 📜 .gitignore       # Ignored files (e.g., node_modules)
└── 📜 README.md        # Project documentation
```

## Setup & Installation
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/hyperledger-fabric-app.git
cd hyperledger-fabric-app
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Hyperledger Fabric Network
```sh
cd network/
./startFabric.sh
```

### 4. Deploy the Chaincode
```sh
cd chaincode/
./deployChaincode.sh
```

### 5. Run the Client Application
#### Create an Asset
```sh
node createAsset.js
```

#### Read an Asset
```sh
node readAsset.js
```

#### Update an Asset
```sh
node updateAsset.js
```

#### Delete an Asset
```sh
node deleteAsset.js
```

#### Get All Assets (Auditor Only)
```sh
node getAllAssets.js
```

## Smart Contract Functions
| Function       | Role  | Description |
|---------------|-------|-------------|
| `CreateAsset` | Admin | Creates a new asset |
| `ReadAsset`   | User  | Reads an owned asset |
| `UpdateAsset` | Admin | Updates an asset value |
| `DeleteAsset` | Admin | Deletes an asset |
| `GetAllAssets`| Auditor | Fetches all assets |

## Contributing
Feel free to fork and submit a **Pull Request** if you would like to contribute!

## License
This project is open-source and available under the **MIT License**.

## Contact
For any questions, reach out at **ashishanandhu78@gmail.com** or visit [your GitHub](https://github.com/your-username).
