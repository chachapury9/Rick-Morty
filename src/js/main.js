import { getData } from "./api/getEpisodes";

const BASE_URL = "https://rickandmortyapi.com/api/episode";

getData(BASE_URL).then((data) => {
  console.log(data);
});
