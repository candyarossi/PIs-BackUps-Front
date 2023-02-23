export default function valores() {
  return [
    {
      ruta: "/api/games",
      input: "?key=@",
      description:
        "Esta ruta trae una fracción de todos los juegos de rawg.io. El @ hace referencia a la API KEY. La cantidad de juegos que devuelve es 40.",
    },
    {
      ruta: "/api/games",
      input: "?key=@&page=@",
      description:
        "Esta ruta trae una fracción de los juegos de rawg.io. El primer @ hace referencia a la API KEY y el segundo a la PÁGINA que se está solicitando. La cantidad de juegos que devuelve por página es 20.",
    },
    {
      ruta: "/api/games",
      input: "?key=@&search=@",
      description:
        "Esta ruta trae una fracción de los juegos de rawg.io. El primer @ hace referencia a la API KEY y el segundo al NOMBRE DEL JUEGO que se está solicitando. No es case sensitive y busca coincidencias por substrings del nombre.",
    },
    {
      ruta: "/api/games",
      input: "/@?key=@",
      description:
        "Esta ruta trae la información de un juego de rawg.io. El primer @ hace referencia al ID DEL JUEGO que se está solicitando y el segundo a la API KEY.",
    },
    {
      ruta: "/api/genres",
      input: "?key=@",
      description:
        "Esta ruta trae todos los géneros de juego de rawg.io. El @ hace referencia a la API KEY.",
    },
    {
      ruta: "/recipes/complexSearch",
      input: "?apiKey=@&number=100&addRecipeInformation=true",
      description:
        "Esta ruta trae todas las recetas de spoonacular. El @ hace referencia a la API KEY. La cantidad de recetas que devuelve es 100 y debe recibir el parámetro addRecipeInformation en TRUE.",
    },
    {
      ruta: "/recipes/recipes",
      input: "/@/information?apiKey=@",
      description:
        "Esta ruta trae una receta de spoonacular. El primer @ hace referencia al ID DE LA RECETA que se está solicitando y el segundo a la API KEY.",
    },
    {
      ruta: "/v3/all",
      input: "",
      description: "Esta ruta trae todos los países de restcountries.",
    },
    {
      ruta: "/v1/breeds",
      input: "",
      description: "Esta ruta trae todos los perros de thedogapi.",
    },
    {
      ruta: "/v1/breeds/search",
      input: "?q=@",
      description:
        "Esta ruta trae la información de un perro de thedogapi. El @ hace referencia al NOMBRE DEL PERRO que se está solicitando. Debe ser el nombre exacto. No es case sensitive.",
    },
    {
      ruta: "/api/v2/pokemon",
      input: "",
      description: "Esta ruta trae una lista con todos los pokemon de pokeapi.",
    },
    {
      ruta: "/api/v2/pokemon",
      input: "/@",
      description:
        "Esta ruta trae la información de un pokemon de pokeapi. El @ hace referencia al ID o NOMBRE DEl POKEMON que se está solicitando",
    },
    {
      ruta: "/api/v2/type",
      input: "",
      description: "Esta ruta trae todos los tipos de pokemon de pokeapi.",
    },
  ];
}
