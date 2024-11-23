
# docxTOpdf

This project provides a simple service to encrypt PDF files using the `muhammara` library. You can use this service to protect your PDFs by adding password encryption that restricts access to the file.

## Features
- Encrypt PDF files with user and owner passwords.
- User protection flag allows viewing and printing only.
- Easy-to-use Node.js service for PDF encryption.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [API](#api)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/pdf-encryption-service.git
cd pdf-encryption-service
```

### 2. Install Dependencies

Next, install the necessary dependencies using npm:

```bash
npm install
```

This will install the required libraries, including `muhammara` for PDF encryption.

## Usage

### 1. Encrypt a PDF File

To encrypt a PDF file, you need to call the `encryptPdf` function, providing the path to the PDF file and the desired password. Here’s an example usage:

```javascript
const { encryptPdf } = require('./path/to/your/encryption-service');

const pdfFilePath = './path/to/sample.pdf';  // Path to the PDF file
const password = 'your-strong-password';    // Password for encryption

encryptPdf(pdfFilePath, password)
  .then(encryptedFilePath => {
    console.log(`Encrypted PDF saved at: ${encryptedFilePath}`);
  })
  .catch(error => {
    console.error('Encryption failed:', error);
  });
```

This will take the input PDF file, apply the encryption, and save it as a new file with the suffix `-encrypted.pdf`.

### 2. Options for Encryption

- **User Password**: The password required to open the PDF.
- **Owner Password**: The password for the owner of the PDF. It provides full access to modify the PDF.
- **User Protection Flag**: A flag that controls the permissions of the user (e.g., printing, copying, etc.). Default flag is `4`, which restricts the PDF to only viewing and printing.

## API

### `encryptPdf(pdfFilePath, password)`

Encrypts the given PDF file with the specified password.

#### Parameters:
- `pdfFilePath` (string): The path to the PDF file to be encrypted.
- `password` (string): The password to be applied to the PDF file for encryption.

#### Returns:
- A promise that resolves with the path of the newly encrypted PDF file.

#### Example:

```javascript
encryptPdf('path/to/document.pdf', 'password123')
  .then(encryptedPath => console.log('Encrypted PDF created at:', encryptedPath))
  .catch(error => console.error('Error:', error));
```

## Contributing

We welcome contributions to this project. If you'd like to improve the service, please fork the repository and create a pull request with your proposed changes. To contribute:

1. Fork this repository.
2. Clone your fork to your local machine.
3. Create a new branch for your feature or fix.
4. Make your changes and commit them with a meaningful message.
5. Push your changes to your fork.
6. Create a pull request.

We will review your contribution and merge it after a successful review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you encounter any issues or have suggestions, feel free to open an issue in the repository. Happy coding! 😊
