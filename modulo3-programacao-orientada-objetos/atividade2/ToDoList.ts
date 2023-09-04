class Tarefa {
  descricao: string;
  concluida: boolean = false;
  prioridade?: string;

  constructor(descricao: string, prioridade?: string) {
    this.descricao = descricao;
    this.prioridade = prioridade;
  }

  marcarConcluida(): void {
    this.concluida = true;
  }

  toString(): string {
    return `${this.descricao} ${this.concluida ? "(Concluída)" : "(Pendente)"}`;
  }
}

const tarefa = new Tarefa("Estudar");
console.log(tarefa.toString());
tarefa.marcarConcluida();
console.log(tarefa.toString());

class ListaDeTarefas {
  tarefas: Tarefa[] = [];

  adicionarTarefa(descricao: string): void {
    const novaTarefa = new Tarefa(descricao);
    this.tarefas.push(novaTarefa);
  }

  listarTarefas(): void {
    for (let tarefa of this.tarefas) {
      console.log(
        `${tarefa.descricao} ${tarefa.concluida ? "(Concluída)" : "(Pendente)"}`
      );
    }
  }
}

const listaDeTarefas = new ListaDeTarefas();
console.log("Lista de tarefas");
listaDeTarefas.adicionarTarefa("Estudar");
listaDeTarefas.adicionarTarefa("Descansar");
listaDeTarefas.listarTarefas();
listaDeTarefas.tarefas[0].marcarConcluida();
listaDeTarefas.listarTarefas();

class ListaPrioritaria extends ListaDeTarefas {
  prioridade: string = "";
  listaPrioritaria: Tarefa[] = [];

  adicionarTarefaPrioritaria(descricao: string, prioridade: string) {
    const novaTarefa = new Tarefa(descricao, prioridade);
    this.listaPrioritaria.push(novaTarefa);
  }

  listarTarefas(): void {
    for (let tarefa of this.listaPrioritaria) {
      console.log(
        `${tarefa.descricao} - Prioridade: ${tarefa.prioridade} ${
          tarefa.concluida ? "(Concluída)" : "(Pendente)"
        }`
      );
    }
  }
}

const listaDeTarefasPrioritaria = new ListaPrioritaria();
console.log("Lista de tarefas prioritaria");
listaDeTarefasPrioritaria.adicionarTarefaPrioritaria("Estudar", "Alta");
listaDeTarefasPrioritaria.adicionarTarefaPrioritaria("Descansar", "Baixa");
listaDeTarefasPrioritaria.listarTarefas();
listaDeTarefasPrioritaria.listaPrioritaria[0].marcarConcluida();
listaDeTarefasPrioritaria.listarTarefas();
