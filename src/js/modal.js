import * as basicLightbox from "basiclightbox";

export const modalSettings = basicLightbox.create(`<div class="modal">
    <div class="centered-modal">
      <h2 id="modal-title">Pilot</h2>
        <div class="modal-info"> 
          <div id="modal-wrapper">
           <label for="modal-id" class="modal-text">Id</label>
           <p id="modal-id"></p>
          </div>
          <div id="modal-wrapper">
          <label for="modal-air-date" class="modal-text">Air date</label>
          <p id="modal-air-date"></p>
          </div>
        </div>
     
        <h2 id="modal-title">Characters</h2>
        <p class="modal-text">Major Characters</p>
        <ul id="modal-characters"></ul>
      </div>
      
    </div>`);
