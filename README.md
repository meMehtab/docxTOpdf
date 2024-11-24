
# docxTOpdf

This project consists of four main services:
1. **Upload Service**: Handles file upload functionality.
2. **Conversion Service**: Processes and converts files after upload.
3. **Encryption Service**: Secures files by encrypting them after conversion.
4. **Frontend**: User interface to interact with the backend services.

The backend services (Upload, Conversion, and Encryption) are written in Node.js and are managed with PM2, while the frontend is served using live-server.

## 1. Upload Service
The Upload Service is responsible for handling file uploads. Users can upload files to the server, which are then processed by the Conversion and Encryption services. This service listens on port **3001**.

### Key Features:
- Allows users to upload files via HTTP requests.
- Files are saved in the server for further processing.

## 2. Conversion Service
The Conversion Service takes the uploaded files and performs necessary conversions on them. The service listens on port **3002**.

### Key Features:
- Converts files to the desired format after upload.
- Can be customized for various file formats.

## 3. Encryption Service
The Encryption Service secures the converted files by encrypting them. It ensures that the files are securely stored or transmitted. This service listens on port **3003**.

### Key Features:
- Encrypts files using advanced encryption algorithms.
- Ensures data privacy and integrity.

## 4. Frontend
The Frontend is the user-facing part of the application, allowing users to upload files and interact with the backend services. The frontend is served using the **live-server** tool and listens on port **3000**.

### Key Features:
- Provides an interface for uploading files.
- Displays the status of uploaded, converted, and encrypted files.

## Steps to Run the Dockerfile

### 1. Clone the Repository
Clone the repository containing the Dockerfile and application code.

```bash
git clone https://github.com/meMehtab/docxTOpdf.git
cd docxTOpdf
```

### 2. Build the Docker Image
Build the Docker image using the following command:

```bash
docker build -t my-app .
```

### 3. Run the Docker Container
Run the Docker container from the built image:

```bash
docker run -p 3000:3000 -p 3001:3001 -p 3002:3002 -p 3003:3003 my-app
```

This will start the frontend and backend services, making them accessible at the following URLs:
- Frontend: `http://localhost:3000`
- Upload Service: `http://localhost:3001`
- Conversion Service: `http://localhost:3002`
- Encryption Service: `http://localhost:3003`

### 4. Access the Application
Once the container is running, you can open your browser and visit `http://localhost:3000` to interact with the frontend and upload files. The backend services will process the uploaded files as described.

### 5. Stopping the Docker Container
To stop the running Docker container, use:

```bash
docker stop <container_id>
```

## Conclusion

This project enables users to upload, convert, and encrypt files in a secure and efficient manner. By using Docker, the entire system is easily deployable and can be run locally or on any cloud provider.

