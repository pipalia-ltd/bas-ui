import React, { useState } from "react";
import { Button, CircularProgress, Box, Grid, Typography } from "@mui/material";

function FileUploader({ onResults }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Generate a preview for image files
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null); // Clear preview if it's not an image
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://your-backend-api.com/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      onResults(data.results); // Assuming the API returns { results: [{ title, url }] }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Button variant="contained" component="label" fullWidth>
            Choose File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Upload and Search"}
          </Button>
        </Grid>
      </Grid>

      {file && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="subtitle1">{file.name}</Typography>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{
                marginTop: "10px",
                maxWidth: "150px",
                maxHeight: "150px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );
}

export default FileUploader;
