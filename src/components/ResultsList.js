import React from "react";
import { List, ListItem, ListItemText, Typography, Link, Box } from "@mui/material";

function ResultsList({ results }) {
  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Search Results:
      </Typography>
      <List>
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemText>
              <Link href={result.url} target="_blank" rel="noopener noreferrer">
                {result.title}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ResultsList;
