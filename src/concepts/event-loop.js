function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function buscarUsuario() {
  console.log('🔍 Buscando usuário...');
  await delay(1000); // Simula I/O
  return { id: 1, nome: 'Maria' };
}

async function buscarPedidosDoUsuario(idUsuario) {
  console.log('📦 Buscando pedidos do usuário...');
  await delay(1000); // Simula I/O
  return [
    { id: 101, valor: 50 },
    { id: 102, valor: 30 },
  ];
}

async function calcularTotal(pedidos) {
  console.log('🧮 Calculando total...');
  await delay(500); // Simula processamento
  return pedidos.reduce((soma, p) => soma + p.valor, 0);
}

async function executar() {
  const usuario = await buscarUsuario();
  const pedidos = await buscarPedidosDoUsuario(usuario.id);
  const total = await calcularTotal(pedidos);

  console.log(`👤 Usuário: ${usuario.nome}`);
  console.log(`💰 Total dos pedidos: R$ ${total}`);

  return total;
}

let r = executar().then((e) => console.log('inside then', e));

console.log(r);
