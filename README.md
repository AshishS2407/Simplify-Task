
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
📂 Simplify-Task/
├── 📂 Chaincode/       # Smart contract logic
├── 📂 Client/          # Client-side interaction with the blockchain
├── 📂 Network/         # Network configuration and setup
├── 📜 package.json     # Node.js dependencies
├── 📜 .gitignore       # Ignored files (e.g., node_modules)
└── 📜 README.md        # Project documentation
```

## Setup & Installation
### 1. Clone the Repository
```sh
git clone https://git@github.com:AshishS2407/Simplify-Task.git
cd Simplify-Task
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Hyperledger Fabric Network
```sh
cd Network/
./startNetwork.sh
```

### 4. Run the Client Application
```sh
cd Client/
node index.js
```

#### Create an Asset
```sh
node CreateAsset.js
```

#### Read an Asset
```sh
node ReadAsset.js
```

#### Update an Asset
```sh
node UpdateAsset.js
```

#### Delete an Asset
```sh
node DeleteAsset.js
```

#### Get All Assets (Auditor Only)
```sh
node GetAllAssets.js
```



## Server-Side API (Express.js)
The project includes a **REST API** built with Express.js to interact with the Hyperledger Fabric network.

### API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/assets/create` | Creates a new asset |
| GET | `/api/assets/:id` | Fetches asset details |
| PUT | `/api/assets/update/:id` | Updates an asset value |
| DELETE | `/api/assets/delete/:id` | Deletes an asset |
| GET | `/api/assets` | Fetches all assets (Auditor only) |

## Testing with Postman
1. **Start the server**: Ensure the server is running on **http://localhost:3000**
2. **Open Postman** and create requests for the following:
   - **Create an Asset:**
     - Method: `POST`
     - URL: `http://localhost:3000/assets/`
     - Body (JSON):
       ```json
       {
         "assetId": "Asset-100",
         "owner": "user1",
         "value": "5000"
       }
       ```
   - **Read an Asset:**
     - Method: `GET`
     - URL: `http://localhost:3000/assets/Asset-100`
   - **Update an Asset:**
     - Method: `PUT`
     - URL: `http://localhost:3000/assets/update/Asset-100`
     - Body (JSON):
       ```json
       {
          "assetId": "Asset-100",
          "newOwner": "user1",
          "newValue": "6000"
       }
       ```
   - **Delete an Asset:**
     - Method: `DELETE`
     - URL: `http://localhost:3000/assets/Asset-100`
   - **Get All Assets (Auditor Only):**
     - Method: `GET`
     - URL: `http://localhost:3000/allassets`

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



