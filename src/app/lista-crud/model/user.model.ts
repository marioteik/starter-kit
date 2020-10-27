export class User {
  id: number;
  nome: string;
  sobrenome: string;

  constructor(id: number, nome: string, sobrenome: string) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
