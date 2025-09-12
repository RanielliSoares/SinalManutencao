import React from 'react';
import { contactSection } from './styles';

const Contact: React.FC = () => (
  <section style={contactSection}>
    <h2>Contato</h2>
    <p>Email: contato@sinalmanutencao.com.br</p>
    <p>Telefone: (15) 999768-4547</p>
    {/* Adicione formulário ou outros dados de contato */}
  </section>
);

export default Contact;