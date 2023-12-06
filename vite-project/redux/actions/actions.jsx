import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_NAMEVIDEOS = "GET_NAMEVIDEOS";
export const ORDEN_ALFABETICO = "ORDEN_ALFABETICO";
export const RATING = "RATING";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTRO_BY_ORIGEN = "FILTRO_BY_ORIGEN";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");

      return dispatch({
        type: "GET_VIDEOGAMES", // le paso al reducer la orden de q debo hacer con la  informacion
        payload: response.data, // la informacion
      });
    } catch (error) {
      return error;
    }
  };
};

export const getNameVideos = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames-name?name=${name}`
      );
      return dispatch({
        type: "GET_NAMEVIDEOS",
        payload: response.data, //es la informacion
      });
    } catch (error) {
      return error;
    }
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames/${id}`
      );
      console.log("response.data:", response.data);
      return dispatch({
        type: GET_DETAILS,
        payload: response.data, //es la informacion
      });
    } catch (error) {
      return error;
    }
  };
};

export const ordenAlfabetico = (orden) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "ORDEN_ALFABETICO",
        payload: orden,
      });
    } catch (error) {
      return error;
    }
  };
};

export const porRating = (rating) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "RATING",
        payload: rating,
      });
    } catch (error) {
      return error;
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: "GET_GENRES",
        payload: response.data, // guarda todos los usuarios
      });
    } catch (error) {
      return error;
    }
  };
};

export const filterByGenres = (payload) => {
  return {
    type: "FILTER_BY_GENRES",
    payload: payload,
  };
};

export const filterByOrigen = (payload) => {
  return {
    type: "FILTRO_BY_ORIGEN",
    payload: payload,
  };
};
