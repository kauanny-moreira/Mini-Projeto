const abrigos = [
  {
    id: 1,
    nome: "Casa da Mulher Brasileira - SP",
    cidade: "São Paulo",
    telefone: "(11) 3275-8000",
    endereco: "Rua Vieira Ravasco, 26 - Cambuci"
  },
  {
    id: 2,
    nome: "Centro de Referência da Mulher - RJ",
    cidade: "Rio de Janeiro",
    telefone: "(21) 2334-9550",
    endereco: "Av. Presidente Vargas, 1997"
  }
];

const denuncias = [
  {
    canal: "Ligue 180",
    descricao: "Central de Atendimento à Mulher. Atendimento 24h, gratuito e sigiloso."
  },
  {
    canal: "Disque 100",
    descricao: "Violação de direitos humanos. Aceita denúncias anônimas."
  },
  {
    canal: "190",
    descricao: "Emergência - Polícia Militar"
  }
];

const psicologos = [
  {
    id: 1,
    nome: "Centro de Apoio Psicológico à Mulher",
    cidade: "São Paulo",
    contato: "(11) 3344-5566",
    atendimentoSocial: true
  },
  {
    id: 2,
    nome: "Grupo Apoiar Mulher",
    cidade: "Belo Horizonte",
    contato: "(31) 99888-1122",
    atendimentoSocial: true
  }
];

module.exports = { abrigos, denuncias, psicologos };
