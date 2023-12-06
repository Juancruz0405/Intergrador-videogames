import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../../redux/actions/actions";
import { Link } from "react-router-dom";

import "../Create/Create.modules.css";

function Create() {
  const dispatch = useDispatch();
  const generos = useSelector((state) => state.genres);
  console.log("generos:", generos);
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const [inputValue, setInputValue] = useState({
    name: "",
    imagen: "",
    description: "",
    lanzamiento: "",
    rating: "",
    plataformas: [],
    genres: [],
  });

  const [errors, setErrors] = useState({});

  console.log(inputValue);
  const validationButton = () => {
    if (Object.keys(errors).length === 0) {
      return (
        <button className="myBoton" type="submit">
          Submit
        </button>
      );
    } else {
      return null;
    }
  };

  const validation = (input) => {
    let newErrors = {};

    if (!input.name.trim()) {
      newErrors.name = "Debe insertar nombre";
    } else if (!/^[a-zA-Z0-9-() .]+$/.test(input.name.trim())) {
      newErrors.name =
        "Solo se aceptan letras, números, guiones medios y paréntesis";
    } else if (input.name.length > 20) {
      newErrors.name = "El nombre debe ser menor a 20 caracteres";
    }

    if (!input.imagen.trim()) {
      newErrors.imagen = "Debe insertar URL de imagen";
    } else if (!/\.(jpeg|jpg|gif|png|bmp)$/.test(input.imagen.trim())) {
      newErrors.imagen = "Formato de la URL no válido";
    }

    if (!input.description.trim()) {
      newErrors.description = "Debe insertar una descripción";
    }

    if (!input.lanzamiento) {
      newErrors.lanzamiento = "Debe insertar fecha de lanzamiento";
    }

    if (!input.rating.trim()) {
      newErrors.rating = "Debe insertar rating";
    } else if (!/^[0-5](\.\d{1,2})?$/.test(input.rating.trim())) {
      newErrors.rating =
        "El rating debe estar en el rango de 0 a 5, por ejemplo, 4.11";
    }

    setErrors(newErrors);
    return newErrors;
  };
  const handleSelect = (e) => {
    if (e.target.name === "plataformas") {
      setInputValue({
        ...inputValue,
        plataformas: [...inputValue.plataformas, e.target.value],
      });
    }
    if (e.target.name === "genres") {
      setInputValue({
        ...inputValue,
        genres: [...inputValue.genres, e.target.value],
      });
    }
  };
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    validation({ ...inputValue, [e.target.name]: e.target.value }); // Validar en tiempo real mientras los valores cambian
  };

  function handleSubmitGame(event) {
    event.preventDefault();

    // Aquí puedes realizar acciones como enviar los datos al servidor.
    fetch("http://localhost:3001/videogames", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Videojuego creada con éxito:", data);
        // Puedes redirigir al usuario a otra página después de la creación si es necesario
        // history.push("/otra-ruta");
      })
      .catch((error) => {
        console.error("Error al crear la Videojuego:", error);
      });
  }

  return (
    <div className="todo">
      <h1 className="miH1">Crea tu videojuego</h1>
      <form onSubmit={handleSubmitGame} className="formulario">
        <div>
          <label className="label">Nombre</label>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleChange}
            className="input"
          />
          <span className="mySpan">{errors.name} </span>
        </div>
        <div>
          <label className="label">Imagen</label>
          <input
            type="text"
            name="imagen"
            value={inputValue.imagen}
            onChange={handleChange}
            className="input"
          />
          <span className="mySpan">{errors.imagen} </span>
        </div>
        <div>
          <label className="label">Descripción</label>
          <input
            type="text"
            name="description"
            value={inputValue.description}
            onChange={handleChange}
            className="input"
          />
          <span className="mySpan">{errors.description} </span>
        </div>
        <div>
          <label className="label">Lanzamiento</label>
          <input
            type="date"
            name="lanzamiento"
            value={inputValue.lanzamiento}
            onChange={handleChange}
            className="input"
          />
          <span className="mySpan">{errors.lanzamiento} </span>
        </div>

        <div>
          <label className="label">Rating</label>
          <input
            type="text"
            name="rating"
            value={inputValue.rating}
            onChange={handleChange}
            className="input"
          />
          <span className="mySpan">{errors.rating} </span>
        </div>
        <div>
          <label className="label">Plataformas</label>
          <select
            name="plataformas"
            value={inputValue.plataformas}
            onChange={handleSelect}
            className="input"
          >
            <option className="options" value="">
              Seleccionar plataforma
            </option>
            <option className="options" value="PC">
              PC
            </option>
            <option className="options" value="PlayStation">
              PlayStation
            </option>
            <option className="options" value="Xbox">
              Xbox
            </option>
            <option className="options" value="Nintendo">
              Nintendo
            </option>
            <option className="options" value="Apple Macintosh">
              Apple Macintosh
            </option>
            <option className="options" value="Linux">
              Linux
            </option>
            <option className="options" value="Android">
              Android
            </option>
          </select>

          <span className="mySpan">{errors.plataformas} </span>
        </div>
        <div>
          <label className="label">Géneros</label>
          <select
            name="genres"
            value={inputValue.genres}
            onChange={handleSelect}
            className="input"
          >
            {" "}
            <option className="options" value="">
              Seleccionar genero
            </option>
            {generos?.map((gen, index) => (
              <option className="options" value={gen.name} key={index}>
                {gen.name}
              </option>
            ))}
          </select>
          <span className="mySpan">{errors.genres}</span>
        </div>

        <div>{validationButton()}</div>
      </form>
    </div>
  );
}

export default Create;
