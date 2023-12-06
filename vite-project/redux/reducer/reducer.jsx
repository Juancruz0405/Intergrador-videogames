import {
  GET_VIDEOGAMES,
  GET_DETAILS,
  GET_NAMEVIDEOS,
  ORDEN_ALFABETICO,
  RATING,
  GET_GENRES,
  FILTER_BY_GENRES,
  FILTRO_BY_ORIGEN,
} from "../actions/actions";

const inicialState = {
  videogames: [],
  copyVideogames: [],
  genres: [],
  detail: [],
};

function rootReducer(state = inicialState, { type, payload }) {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state, // es el estado +...
        videogames: payload, //todos los videogames
        copyVideogames: payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: payload,
      };
    case GET_NAMEVIDEOS: //EN CASO DE Q HAGA UNA PETICION GET BY NAME
      return {
        ...state,
        videogames: payload,
      };
    case ORDEN_ALFABETICO:
      let copiaVideogames = [...state.videogames];
      copiaVideogames = copiaVideogames.sort((a, b) => {
        //ordena el arreglo
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (payload === "A") {
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        } else {
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        }
      });
      return { ...state, videogames: copiaVideogames };
    case RATING:
      let copiedVideogames = [...state.videogames];
      copiedVideogames = copiedVideogames.sort((a, b) => {
        if (payload === "mayor") {
          //orden en forma decendente, mayor a menor
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      });

      return { ...state, videogames: copiedVideogames };
    case GET_GENRES:
      return {
        ...state, // es el estado +...
        genres: payload, //todos los videogames
      };
    case FILTER_BY_GENRES:
      let copiaVG = [...state.copyVideogames];
      if (payload === "todos los generos") {
        return { ...state, videogames: copiaVG };
      } else if (payload !== "todos los generos") {
        let filtrado = copiaVG.filter((vg) => {
          return vg.Genres.includes(payload);
        });
        return { ...state, videogames: filtrado };
      }
    case FILTRO_BY_ORIGEN:
      let copiaArray = [...state.copyVideogames];

      if (payload === "api") {
        let arrayFiltradoA = copiaArray.filter((vg) => {
          return vg.created === false;
        });

        return { ...state, videogames: arrayFiltradoA };
      } else if (payload === "bdd") {
        let arrayFiltradoB = copiaArray.filter((vg) => {
          return vg.created === true;
        });
        return { ...state, videogames: arrayFiltradoB };
      } else {
        return { ...state, videogames: state.copyVideogames };
      }

    default:
      return state;
  }
}

export default rootReducer;
