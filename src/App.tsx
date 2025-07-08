import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MindMapView from './components/MindMapView';
import { techCategories } from './data/techData';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff9800',
    },
  },
});

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container maxWidth="xl" sx={{ flex: 1, py: 3 }}>
          <CategoryNav 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={techCategories}
          />
          <MindMapView selectedCategory={selectedCategory} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
