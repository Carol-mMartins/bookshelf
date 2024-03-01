document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const resultsList = document.getElementById('resultsList');

  const booksSearch = [
      ['Corte de Espinhos e Rosas', 'Sarah J. Maas', 'Fantasia', 'Romance', 'Acotar'],
      // ...
  ];

 // Função para verificar e atualizar o tipo de tela
  function verificarTipoTela() {
    // Obter a largura da janela
    const larguraJanela = window.innerWidth;

    // Definir o maxWidth com base no tipo de tela
    const maxWidth = larguraJanela <= 1000 ? '300px' : '500px';

    // Selecionar todas as imagens com a classe especificada
    var imagensElements = document.querySelectorAll('.livro__anterior-img, .proximo__livro-img');

    // Iterar sobre cada imagem e definir o tamanho desejado
    imagensElements.forEach(function(img) {
        img.style.maxWidth = maxWidth;
        img.classList.add('test-class'); // Adicionar uma classe de teste
    });
  }

  // Adicionar um ouvinte de evento de redimensionamento para verificar quando a tela for redimensionada
  window.addEventListener('resize', verificarTipoTela);

  // Chamar a função inicialmente para definir o maxWidth ao carregar a página
  verificarTipoTela();

  const swiper = new Swiper('.swiper', {
    spaceBetween: 20, // Ajuste a margem conforme necessário
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
});