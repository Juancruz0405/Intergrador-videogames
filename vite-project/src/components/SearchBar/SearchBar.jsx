import { useState } from "react";
import "../SearchBar/SearchBar.modules.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getNameVideos,
  ordenAlfabetico,
  porRating,
  filterByGenres,
  filterByOrigen,
} from "../../../redux/actions/actions";

function SearchBar() {
  //FILTRO DE NOMBRE CON EL BACKEND
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState(""); //es un array vacio, aca se guardan los strings del input

  const handleChange = (event) => {
    //funcion para agarrar el valor del input y enviarlo al array vacio (searchString) para luego usalo en handleSubmit
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getNameVideos(searchString)); //se ejecuta cuando se envia el form
  };

  const handleChangeOrder = (e) => {
    dispatch(ordenAlfabetico(e.target.value)); //envia la accion
  };
  const handleChangeRating = (e) => {
    dispatch(porRating(e.target.value)); //envia la accion
  };

  const handleChangeGenres = (e) => {
    dispatch(filterByGenres(e.target.value)); //envia la accion
  };

  const handleChangeFilters = (e) => {
    dispatch(filterByOrigen(e.target.value)); //envia la accion
  };
  return (
    <div className="SearchBar">
      <Link to="/home" className="videogames-link">
        <h1 className="videogames">VIDEOGAMES</h1>
      </Link>
      <div className="filtros">
        <select onChange={(e) => handleChangeGenres(e)} defaultValue="">
          <option disabled value="">
            Por generos
          </option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Racing">Racing</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Board Games"> Board Games</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </select>
        <select onChange={(e) => handleChangeOrder(e)} defaultValue="">
          <option disabled value="">
            Orden alfabetico
          </option>
          <option value="A">A-Z</option>
          <option value="Z">Z-A</option>
        </select>
        <select onChange={(e) => handleChangeRating(e)} defaultValue="">
          <option disabled value="">
            Por rating
          </option>
          <option value="mayor">Mayor rating</option>
          <option value="menor">Menor rating</option>
        </select>

        <select id="Origen" onChange={handleChangeFilters}>
          <option value="">Por Origen</option>
          <option value="api">API</option>
          <option value="bdd">BDD</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="searchBar"
          placeholder="Find your videogame"
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="eLboton" onClick={handleSubmit}>
          Buscar
        </button>
        <Link to={`/home/create`}>
          <button className="botonCreate">CREATE A VIDEOGAME</button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
