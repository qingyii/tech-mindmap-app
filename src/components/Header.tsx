import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Brain, Briefcase, Code } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Brain size={32} style={{ marginRight: '12px' }} />
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Tech Mindmap for PM & BA
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" startIcon={<Briefcase size={20} />}>
            PM Path
          </Button>
          <Button color="inherit" startIcon={<Code size={20} />}>
            BA Path
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;