class Tarefa {
  descricao: string;
  concluida: boolean = false;

  constructor(descricao: string) {
    this.descricao = descricao;
  }

  marcarConcluida() {
    this.concluida = true;
  }

  toString() {
    return `${this.descricao} ${this.concluida ? "(Concluída)" : "(Pendente)"}`;
  }
}
