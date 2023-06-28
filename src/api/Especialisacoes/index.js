import RestApiModel from "@/api/Model/RestApiModel";

class Especialisacoes extends RestApiModel {
    static getResourceEndpoint() {
        return '/specialisations';
    }
}

export default Especialisacoes;
