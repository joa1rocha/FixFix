import RestApiModel from "@/api/Model/RestApiModel";

class Especialistas extends RestApiModel {
    static getResourceEndpoint() {
        return '/craftsmen';
    }
}

export default Especialistas;
