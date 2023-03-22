// Gera um número aleatório entre 1 e 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1

// Define o número máximo de tentativas
var numeroTentativas = 10

// Inicia o jogo
for (var i = 1; i <= numeroTentativas; i++) {
  // Pede ao usuário para adivinhar um número
  var palpite = prompt(
    'Tentativa ' +
      i +
      ' de ' +
      numeroTentativas +
      '. Adivinhe o número (entre 1 e 100):'
  )

  // Converte o palpite em um número inteiro
  palpite = parseInt(palpite)

  // Verifica se o palpite é um número válido
  if (isNaN(palpite)) {
    alert('Por favor, insira um número válido!')
    i--
    continue
  }

  // Verifica se o palpite é o número correto
  if (palpite === numeroAleatorio) {
    alert('Parabéns, você acertou o número em ' + i + ' tentativas!')
    break
  } else {
    // Dá uma dica para o usuário
    var dica = palpite < numeroAleatorio ? 'maior' : 'menor'
    alert('Ops, o número é ' + dica + ' do que ' + palpite + '.')
  }

  // Verifica se o usuário perdeu todas as tentativas
  if (i === numeroTentativas) {
    alert(
      'Fim de jogo! Você esgotou suas ' +
        numeroTentativas +
        ' tentativas. O número correto era ' +
        numeroAleatorio +
        '.'
    )
  }
}
