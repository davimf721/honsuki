import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
      <Navbar />
      <Container component="main" sx={{ 
        flexGrow: 1, 
        py: 4,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;