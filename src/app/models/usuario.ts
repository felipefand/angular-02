export default class Usuario {
  id: number = 0;
  nome: string = "";
  email: string = "";
  cpf: string = "";
  senha: string = "";

  constructor(nome?: string, email?: string, senha?: string) {
    this.nome = nome ?? "";
    this.email = email ?? "";
    this.senha  = senha ?? "";
  }
}
