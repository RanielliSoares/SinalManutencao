import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: '#003366', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
    <small>&copy; {new Date().getFullYear()} Sinal Manutenção. Todos os direitos reservados.</small>
  </footer>
);

export default Footer;