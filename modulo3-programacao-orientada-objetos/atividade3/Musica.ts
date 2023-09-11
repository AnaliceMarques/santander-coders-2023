class Musica {
  titulo: string;
  artista: string;
  duracaoEmSegundos: number;

  constructor(titulo: string, artista: string, duracaoEmSegundos: number) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracaoEmSegundos = duracaoEmSegundos;
  }
}

class BibliotecaMusical {
  musicas: Musica[] = [];

  adicionarMusica(
    titulo: string,
    artista: string,
    duracaoEmSegundos: number
  ): void {
    const novaMusica = new Musica(titulo, artista, duracaoEmSegundos);
    this.musicas.push(novaMusica);
  }

  listarMusicas(): void {
    for (const [i, musica] of this.musicas.entries()) {
      console.log(`
      Música ${i + 1}
      Título: ${musica.titulo},
      Artista: ${musica.artista},
      Duração: ${(musica.duracaoEmSegundos / 60).toFixed(2)} min;
      `);
    }
  }

  reproduzirMusica(numeroMusica: number): void {
    const musicaEscolhida = this.musicas[Number(numeroMusica) - 1];

    console.log(
      `A música ${musicaEscolhida.titulo} do artista ${musicaEscolhida.artista} está sendo reproduzida.`
    );
  }

  calcularDuracaoTotal(): void {
    let duracao = (
      this.musicas.reduce(
        (anterior, proximo) => anterior + proximo.duracaoEmSegundos,
        0
      ) / 60
    ).toFixed(2);
    console.log(`Duração total: ${duracao} min`);
  }
}

class Usuario extends BibliotecaMusical {
  nome: string;
  biblioteca: BibliotecaMusical;

  constructor(nome: string, biblioteca: BibliotecaMusical) {
    super();

    this.nome = nome;
    this.biblioteca = biblioteca;
  }

  adicionarMusica(
    titulo: string,
    artista: string,
    duracaoEmSegundos: number
  ): void {
    this.biblioteca.adicionarMusica(titulo, artista, duracaoEmSegundos);
  }

  listarMusicas(): void {
    this.biblioteca.listarMusicas();
  }

  reproduzirMusica(NumeroMusica: number): void {
    this.biblioteca.reproduzirMusica(NumeroMusica);
  }
}

const biblioteca = new BibliotecaMusical();
biblioteca.adicionarMusica("musica1", "artista1", 300);
biblioteca.adicionarMusica("musica2", "artista2", 155);
biblioteca.adicionarMusica("musica3", "artista1", 500);
biblioteca.listarMusicas();
biblioteca.calcularDuracaoTotal();
biblioteca.reproduzirMusica(2);

const usuario = new Usuario("usuario1", biblioteca);
usuario.adicionarMusica("musica4", "artista4", 150);
usuario.listarMusicas();
usuario.reproduzirMusica(3);
