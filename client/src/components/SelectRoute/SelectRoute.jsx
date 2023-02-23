import { useState } from "react";
import valores from "../../rutas.js";

export default function SelectRoute({
  setValorSelect,
  valorSelect,
  setDatos,
  setConsulta,
}) {
  const [select, setSelect] = useState("");

  const handlerRoute = (event) => {
    const { value } = event.target;
    setValorSelect({
      ruta: valores()[value].ruta,
      input: valores()[value].input,
      description: valores()[value].description,
    });
    setSelect("ruta");
    setDatos(false);
    setConsulta("");
  };

  return (
    <select className="rutasDisponibles" onChange={handlerRoute} value={select}>
      <option value="ruta">
        {select ? valorSelect.ruta : "Selecciona una opción"}
      </option>
      <optgroup label="Videogames">
        <option value="0">/api/games?key=&#64;</option>
        <option value="1">/api/games?key=&#64;&page=&#64;</option>
        <option value="2">/api/games?key=&#64;&search=&#64;</option>
        <option value="3">/api/games/&#64;?key=&#64;</option>
        <option value="4">/api/genres?key=&#64;</option>
      </optgroup>
      <optgroup label="Food">
        <option value="5">
          /recipes/complexSearch?apiKey=&#64;&number=100&addRecipeInformation=true
        </option>
        <option value="6">
          /recipes/recipes/&#64;/information?apiKey=&#64;
        </option>
      </optgroup>
      <optgroup label="Countries">
        <option value="7">/v3/all</option>
      </optgroup>
      <optgroup label="Dogs">
        <option value="8">/v1/breeds</option>
        <option value="9">/v1/breeds/search?q=&#64;</option>
      </optgroup>
      <optgroup label="Pokemon">
        <option value="10">/api/v2/pokemon</option>
        <option value="11">/api/v2/pokemon/&#64;</option>
        <option value="12">/api/v2/type</option>
      </optgroup>
    </select>
  );
}
