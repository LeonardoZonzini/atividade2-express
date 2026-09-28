// Busca a cotação do dólar (USD/BRL) na AwesomeAPI
async function buscarCotacaoDolar() {
  try {
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const dados = await resposta.json();
    const usd = dados.USDBRL;

    const valorAtual = parseFloat(usd.bid).toFixed(2);
    const valorMax = parseFloat(usd.high).toFixed(2);
    const valorMin = parseFloat(usd.low).toFixed(2);

    document.getElementById('valorAtual').textContent = `R$ ${valorAtual}`;
    document.getElementById('valorMax').textContent = `R$ ${valorMax}`;
    document.getElementById('valorMin').textContent = `R$ ${valorMin}`;

    const agora = new Date();
    document.getElementById('atualizadoEm').textContent =
      `Última atualização: ${agora.toLocaleTimeString('pt-BR')}`;

    document.getElementById('loading').style.display = 'none';
    document.getElementById('cards').style.display = 'flex';
  } catch (erro) {
    document.getElementById('loading').textContent = 'Erro ao carregar a cotação. Tente novamente.';
    console.error('Erro ao buscar cotação:', erro);
  }
}

buscarCotacaoDolar();
