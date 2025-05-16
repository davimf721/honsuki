import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Honsuki
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seu refúgio literário pessoal, onde cada página é uma nova aventura.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <GitHub />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links Úteis
            </Typography>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Sobre Nós
            </Link>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Blog
            </Link>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Recomendações
            </Link>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Eventos Literários
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Recursos
            </Typography>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Tutoriais
            </Link>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              FAQ
            </Link>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Suporte
            </Link>
            <Link href="#" variant="body2" display="block" color="text.secondary">
              Termos de Uso
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Honsuki | Todos os direitos reservados
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;