import Auth from "@/api/Auth";
import Especialisacoes from "@/api/Especialisacoes";
import Especialistas from "@/api/Especialistas";

class Manager {
  constructor() {
    this.auth = Auth;
    this.especialistas = Especialistas;
    this.especialisacoes = Especialisacoes;
  }
}

export default Manager;
