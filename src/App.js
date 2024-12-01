import React, { useState } from "react";
import { Container, Typography, Box, CssBaseline } from "@mui/material";
import FileUploader from "./components/FileUploader";
import ResultsList from "./components/ResultsList";

function App() {
  const [results, setResults] = useState([]);

  const handleResults = (data) => {
    setResults(data);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          BAS Google Gemma 2 Hackathon
        </Typography>
        <FileUploader onResults={handleResults} />
        {results.length > 0 && <ResultsList results={results} />}
      </Box>
    </Container>
  );
}

export default App;
