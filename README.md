
# BAS Google Gemma 2 Hackathon

A minimalistic file upload and search application built with React and Material-UI. The app allows users to upload a file, makes an API call to process the file, and displays search results with clickable links. If an image file is uploaded, it shows a thumbnail preview.

---

## Features

- Responsive and modern design using **Material-UI**.
- File upload functionality with **image preview** for supported files.
- API integration for processing uploaded files and fetching search results.
- Clean and intuitive interface.

---

## Technologies Used

### Frontend
- **React**: Core library for building user interfaces.
- **Material-UI (MUI)**: For modern, responsive, and customizable UI components.

### Components
1. **FileUploader**: Handles file selection, upload, and preview.
2. **ResultsList**: Displays search results with clickable links.
3. **App**: Parent component that integrates the application.

---

## Project Setup

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bas-google-gemma-2-hackathon.git
   cd bas-google-gemma-2-hackathon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## File Structure

```
src/
├── components/
│   ├── FileUploader.js    # File upload and preview functionality
│   ├── ResultsList.js     # Displays search results
├── App.js                 # Main application component
├── index.js               # Entry point
```

---

## API Integration

- **Endpoint**: Replace `https://your-backend-api.com/upload` in `FileUploader.js` with your backend API endpoint.
- **Request**: Sends a `POST` request with `multipart/form-data`.
- **Response Format**: 
   ```json
   {
     "results": [
       { "title": "Result 1", "url": "https://example.com/1" },
       { "title": "Result 2", "url": "https://example.com/2" }
     ]
   }
   ```

---

## Contributions

We welcome contributions to enhance this project! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

This project was created for the **BAS Google Gemma 2 Hackathon** to showcase how simple file upload and search functionality can be built with modern web technologies.

---

## Contact

For any inquiries or support, please contact [Your Name/Organization] at [Your Email].
