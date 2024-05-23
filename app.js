var personagens = [
    {
      nome: "Ditto",
      pistas: [
        "É conhecido por sua face amigável e sorridente.",
        "Possui a habilidade 'Impostor' que lhe permite copiar as estatísticas  do oponente.",
        "Um pokémon misterioso capaz de transformar-se em qualquer outro pokémon."
      ]
    },
    {
      nome: "Mew",
      pistas: [
        "Foi o primeiro pokémon adicionado à Pokédex após o lançamento inicial do jogo.",
        "Um pokémon lendário e brincalhão.",
        "Dizem que possui a habilidade de usar qualquer golpe de outros pokémons."
      ]
    },
    {
      nome: "Mewtwo",
      pistas: [
        "Um dos pokémons lendários mais poderosos e psíquicos.",
        "Criado artificialmente a partir do DNA de um pokemon.",
        "Foi o vilão principal do primeiro filme da franquia Pokémon"
      ]
    }
  ];
  
  var personagemEscolhido = personagens[Math.floor(Math.random() * personagens.length)];
  var pistasRestantes = personagemEscolhido.pistas.slice();
  var pistaElement = document.getElementById("pista");
  var palpiteInput = document.getElementById("palpite");
  
  function mostrarPista() {
    if (pistasRestantes.length > 0) {
      pistaElement.textContent =  pistasRestantes[0];
    } else {
      pistaElement.textContent = "Não há mais pistas disponíveis. Tente adivinhar!";
    }
  }
  
  function verificarPalpite() {
    var palpite = palpiteInput.value;
    if (palpite.toLowerCase() === personagemEscolhido.nome.toLowerCase()) {
      pistaElement.textContent = "Parabéns! Você acertou. Eu sou " + personagemEscolhido.nome + "!";
      palpiteInput.disabled = true;
      document.getElementById("pokemon-image").src = "acertou.png";
    } else {
      if (pistasRestantes.length > 0) {
        pistasRestantes.shift();
        mostrarPista();
      } else {
        pistaElement.textContent = "Suas tentativas acabaram. Beba um drink. Eu sou " + personagemEscolhido.nome + "!";
        palpiteInput.disabled = true;
        document.getElementById("pokemon-image").src = "terminou.png";
      }
    }
    palpiteInput.value = "";
  }
  
  mostrarPista();
  