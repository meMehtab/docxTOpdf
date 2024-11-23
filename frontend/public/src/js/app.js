const uploadFileInput = document.getElementById('uploadFile');
const convertBtn = document.getElementById('convertBtn');
const passwordInput = document.getElementById('password');
const encryptBtn = document.getElementById('encryptBtn');
const convertStatus = document.getElementById('convertStatus');
const encryptStatus = document.getElementById('encryptStatus');

// API endpoints
const UPLOAD_API = 'http://localhost:3001/upload';
const CONVERT_API = 'http://localhost:3002/convert';
const ENCRYPT_API = 'http://localhost:3003/secure/encrypt';

// Convert DOCX to PDF
convertBtn.addEventListener('click', async () => {
  const file = uploadFileInput.files[0];
  if (!file) {
    alert('Please select a DOCX file to upload.');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    // Upload file
    const uploadResponse = await fetch(UPLOAD_API, { method: 'POST', body: formData });
    const uploadData = await uploadResponse.json();
    if (!uploadResponse.ok) throw new Error(uploadData.message);

    // Convert file
    const convertResponse = await fetch(CONVERT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName: uploadData.fileName }),
    });
    const convertData = await convertResponse.json();
    if (!convertResponse.ok) throw new Error(convertData.message);

    convertStatus.textContent = `File converted successfully: ${convertData.pdfFilePath}`;
    convertStatus.style.color = 'green';
  } catch (error) {
    convertStatus.textContent = `Error: ${error.message}`;
    convertStatus.style.color = 'red';
  }
});

// Encrypt PDF
encryptBtn.addEventListener('click', async () => {
  const password = passwordInput.value;
  if (!password) {
    alert('Please enter a password to secure the PDF.');
    return;
  }

  try {
    const pdfFilePath = convertStatus.textContent.split(': ')[1]; // Extract PDF path from the previous conversion
    if (!pdfFilePath) throw new Error('No converted PDF found to encrypt.');

    const encryptResponse = await fetch(ENCRYPT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pdfFilePath, password }),
    });
    const encryptData = await encryptResponse.json();
    if (!encryptResponse.ok) throw new Error(encryptData.message);

    encryptStatus.textContent = `PDF encrypted successfully: ${encryptData.encryptedPdfPath}`;
    encryptStatus.style.color = 'green';
  } catch (error) {
    encryptStatus.textContent = `Error: ${error.message}`;
    encryptStatus.style.color = 'red';
  }
});
