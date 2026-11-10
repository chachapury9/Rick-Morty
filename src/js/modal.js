import * as basicLightbox from "basiclightbox";

export const modalSettings = basicLightbox.create(`<div class="modal">
      <h2 id="modal-title">Pilot</h2>
      <div id="modal-wrapper">
        <label for="modal-id" class="modal-text">Id</label>
        <p id="modal-id"></p>
      </div>
      <div id="modal-wrapper">
        <label for="modal-air-date" class="modal-text">Air date</label>
        <p id="modal-air-date"></p>
      </div>
      <h2 class="modal-title">Characters</h2>
      <p class="modal-text">Major Characters</p>
      <ul id="modal-characters"></ul>
    </div>`);
