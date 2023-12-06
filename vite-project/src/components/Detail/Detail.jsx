import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "../Detail/Detail.module.css";
import { Link } from "react-router-dom";
import { getDetail } from "../../../redux/actions/actions";

function Detail() {
  const { id } = useParams(); //extraemos el ID de la URL
  const dispatch = useDispatch();
  const videoGameId = useSelector((state) => state.detail);
  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);
  console.log("videoGameId:", videoGameId);

  useEffect(() => {
    if (videoGameId && videoGameId.description) {
      // Crear un elemento HTML temporal para extraer el texto sin formato
      const tempElement = document.createElement("div");
      tempElement.innerHTML = videoGameId.description;
      setDescriptionText(tempElement.innerText);
    }
  }, [videoGameId]);

  return (
    <div className={style.div}>
      {videoGameId && (
        <>
          <img src={videoGameId.imagen} className={style.fotoImg} />

          <div className={style.texto}>
            <p id={style.name}> {videoGameId.name}</p>

            <p className={style.descripcion}>{descriptionText}</p>
            <br />
            <p className="genero">
              Generos:{" "}
              {videoGameId.Genres?.map((gen, index) => {
                return <span key={index}>{gen} </span>;
              })}
            </p>
            <br />

            <p className="plataforma">
              {videoGameId.plataformas?.map((plat, index) => {
                return <span key={index}>{plat} </span>;
              })}
            </p>
            <br />
            <p className="rating">Rating: {videoGameId.rating}</p>
            <br />
            <p className="id">ID: {videoGameId.id}</p>
            <br />
            <p className="lanzamiento">
              Lanzamiento: {videoGameId.lanzamiento}
            </p>
          </div>
        </>
      )}
      <Link to="/home">
        <button className={style.botonBack}>BACK</button>
      </Link>
    </div>
  );
}

export default Detail;
