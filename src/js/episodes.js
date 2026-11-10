import { getData } from "./api/getEpisodes";
import Handlebars from "handlebars";
import episode from "bundle-text:../templates/episode.hbs";
import { modalSettings } from "./modal";
import "basicLightbox/dist/basicLightbox.min.css";
import * as basicLightbox from "basiclightbox";

const BASE_URL = "https://rickandmortyapi.com/api/episode";
const container = document.getElementById("episode-wrapper");
const form = document.getElementById("episode-filter");
const loadMoreBtn = document.getElementById("load-more-episodes");

getData(BASE_URL).then((data) => {
  const createEpisode = Handlebars.compile(episode);

  const markUp = createEpisode(data);
  container.insertAdjacentHTML("beforeend", markUp);
});

form.addEventListener("input", (e) => {
  if (e.target.dataset.filter === "name") {
    e.preventDefault();
    container.innerHTML = "";
    getData(`${BASE_URL}?name=${form.episodeName.value}`)
      .then((data) => {
        const createEpisode = Handlebars.compile(episode);
        const markUp = createEpisode(data);
        container.innerHTML = markUp;
        if (data.error) {
          container.innerHTML = `<div class="error">
        <img
          class="error-img"
          src="/rick-and-morty.8486bf54.png"
          alt="rick and morty" 
          />
          
        <h2 class="error-title">Oops! Try looking for something else...</h2>
      </div>`;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (e.target.dataset.filter === "season") {
    e.preventDefault();
    container.innerHTML = "";
    getData(
      `${BASE_URL}?episode=s0${form.season.value}&${form.episodeName.value}`,
    )
      .then((data) => {
        const createEpisode = Handlebars.compile(episode);
        const markUp = createEpisode(data);
        container.innerHTML = markUp;
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

let currentPage = 1;
const maxPage = 3;

function loadMore(event) {
  event.preventDefault();
  currentPage++;
  if (currentPage === maxPage) {
    loadMoreBtn.disabled = true;
  }

  getData(`${BASE_URL}?page=${currentPage}`)
    .then((data) => {
      const createEpisode = Handlebars.compile(episode);
      const markUp = createEpisode(data);
      container.insertAdjacentHTML("beforeend", markUp);
    })
    .catch((error) => {
      const errorMarkUp = `<div class="error">
        <img
          class="error-img"
          src="../images/kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5 2.png"
          alt="" />
        <h2 class="error-title">Oops! Try looking for something else...</h2>
      </div>`;

      container.innerHTML = errorMarkUp;
    });
}

loadMoreBtn.addEventListener("click", (e) => {
  loadMore(e);
});

const modal = modalSettings.element();

function handleShowSettings(e) {
  const targetId = e.target.closest("[data-id]").dataset.id;
  modalSettings.show();
  console.log(targetId);
  getData(`${BASE_URL}/${targetId}`)
    .then((data) => {
      modal.querySelector("#modal-id").textContent = data.id;
      modal.querySelector("#modal-air-date").textContent = data.air_date;
      const charList = modal.querySelector("#modal-characters");
      charList.innerHTML = "";
      data.characters.forEach((item) => {
        getData(item).then((data) => {
          const markUp = `<li class="modal-character">
        <p class="modal-char-name">${data.name}</p>
      </li>`;
          charList.insertAdjacentHTML("beforeend", markUp);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

container.addEventListener("click", handleShowSettings);
