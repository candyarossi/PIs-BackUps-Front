import { useState } from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import InputText from "../InputText/InputText";
import SelectRoute from "../SelectRoute/SelectRoute";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import env from "react-dotenv";

export default function Container() {
  const [valorSelect, setValorSelect] = useState({
    ruta: "",
    input: "",
    description: "",
  });
  const [consulta, setConsulta] = useState("");
  const [datos, setDatos] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const getResultados = async () => {
    if (consulta !== process.env.REACT_APP_BASE_URL) {
      const { data } = await axios.get(consulta);
      setDatos(data);
      setEnabled(false);
      return data;
    }
  };

  const { data, error, isLoading, isFetching } = useQuery(
    ["resultados"],
    getResultados,
    {
      enabled,
      staleTime: 0,
      cacheTime: 0,
    }
  );

  const handlerCopy = (event) => {
    navigator.clipboard.writeText(consulta);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const rutaConsulta = (
      process.env.REACT_APP_BASE_URL +
      valorSelect.ruta +
      valorSelect.input
    ).replaceAll("@", "");
    setConsulta(rutaConsulta);

    if (!valorSelect.input.includes("@")) {
      setEnabled(true);
    }
  };

  return (
    <section>
      <div className="descApp">
        <p className="parrafo">
          En caso de que la API que estés utilizando para tu PI se haya caído,
          puedes usar este backup. Simplemente reemplaza los @ por los datos
          solicitados.
        </p>
      </div>
      <div className="inputs">
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            className="rutaPrincipal inputDisabled"
            value={process.env.REACT_APP_BASE_URL}
            disabled
          />

          <SelectRoute
            setValorSelect={setValorSelect}
            valorSelect={valorSelect}
            setDatos={setDatos}
            setConsulta={setConsulta}
          />

          <InputText
            type="text"
            className="variables"
            setValorSelect={setValorSelect}
            valorSelect={valorSelect}
          />

          <button type="submit" className="enviar">
            Enviar
          </button>
        </form>

        {valorSelect.description.trim() !== "" && (
          <p className="descripcionRuta">
            <b>Descripción: </b>
            {valorSelect.description}
          </p>
        )}
      </div>
      <div className="rta">
        {consulta && (
          <p className="rtaUrlRuta">
            <b>Respuesta a: </b>&#160;&#160; {consulta} &#160;&#160;
            <FontAwesomeIcon
              icon={faCopy}
              onClick={(event) => {
                handlerCopy();
              }}
              className="copy"
            />
          </p>
        )}
        <pre>
          {isFetching && (
            <div className="spinner">
              <Spinner />
            </div>
          )}
          {(!valorSelect.input || !valorSelect.ruta) && !datos && !isFetching
            ? `{
  "message": "Aquí aparecerán los resultados de búsqueda."
}`
            : valorSelect.input.includes("@")
            ? `{
  "message": "Faltan datos para validar la búsqueda."
}`
            : datos && JSON.stringify(datos, null, 2)}
        </pre>
      </div>
    </section>
  );
}
