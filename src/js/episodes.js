import { getData, getDataList } from "./api/getEpisodes";
import Handlebars from "handlebars";
import episode from "bundle-text:../templates/episode.hbs";

const BASE_URL = "https://rickandmortyapi.com/api/episode";
const container = document.getElementById("episodes");

getData(BASE_URL).then((data) => {
  const createEpisode = Handlebars.compile(episode);
  const markUp = createEpisode(data);
  container.insertAdjacentHTML("beforeend", markUp);
});
