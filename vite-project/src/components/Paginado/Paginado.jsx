import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../Paginado/Paginado.modules.css";

function Paginado({ onPageChange }) {
  const juegosPorPagina = 15;
  const allVideogames = useSelector((state) => state.videogames);
  const cantVideogames = allVideogames.length;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cantVideogames / juegosPorPagina);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <br />
      <br />

      <button className="botonPaginado" onClick={goToPreviousPage}>
        {"<"}
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <span className="spanPaginado" key={index + 1}>
          <button
            className={`botonPaginado1 ${
              index + 1 === currentPage ? "active" : ""
            }`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        </span>
      ))}

      <button className="botonPaginado" onClick={goToNextPage}>
        {">"}
      </button>
    </div>
  );
}

export default Paginado;
