// Configuração da loja — isso é o único arquivo que muda de um painel pro outro.
// Pra criar o painel de um novo estabelecimento: copiar site/, trocar os valores
// abaixo, trocar assets/logo.jpg, e adicionar um bloco de regra novo no
// firestore.rules (mesmo padrão do isFratelloAdmin).
export const CONFIG = {
  lojaId: 'fratello',           // prefixo das coleções no Firestore: {lojaId}_orders, {lojaId}_customers
  nomeLoja: 'Fratello',
  adminEmail: 'caixa@fratelloburguer.app', // usuário criado manualmente no Firebase Auth
  whatsappNumero: '5545998276680',
  alertaCozinhaMinutos: 20,
  logo: 'assets/logo.jpg',
  cores: {
    bg: '#161616',
    bgAlt: '#2D2D2D',
    orange: '#C1501A',
    gold: '#F2691D',
    white: '#FFFFFF',
    brown: '#5B3A1A',
    beige: '#F3E4CC',
    vermelho: '#C0392B'
  }
};
