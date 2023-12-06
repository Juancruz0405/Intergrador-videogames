import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../../redux/actions/actions";

import "../Home/Home.modules.css";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";

function Home() {
  const allVideogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); //estado local para seguimiento de la pagina actual

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]); //obtengo lista completa d elos videojuegos del estadp

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastVideogame = currentPage * 15;
  const indexOfFirstVideogame = indexOfLastVideogame - 15;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  return (
    <div className="Home">
      <br />
      <br />
      <Cards allVideogames={currentVideogames} />
      <Paginado onPageChange={handleChangePage} />
    </div>
  );
}

export default Home;
