import axios from "axios";

class Pokicall {
  listgen() {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
  }

  pokemonDetails(url) {
    return axios.get(`${url}`);
  }
}

export default new Pokicall();
