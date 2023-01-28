import Dataa from './data.js';

export default class todoDom {
  static #datacheck = (done) => {
    if (done) {
      return 'checked';
    }
    return '';
  }

  static #dataDone = (done) => {
    if (done) {
      return 'text-dec';
    }
    return '';
  }

  static #addData = (data, container) => {
    const listHtml = `
    <li class="main-body-li" id="${data.id}" data-id="${data.id}">
      <div class="width">
        <span id="tds1"><input type="checkbox" name="list-check" class="list-check" ${todoDom.#datacheck(data.done)}></span>
        <span id="tds2" class="main-body-text"><input type="text" value="${data.text}" class="data-text ${todoDom.#dataDone(data.done)}" contenteditable="true"></span>
      </div>
      <i class="fa-solid fa-square-minus remove-btn"></i>
    </li>
    `;

    container.innerHTML += listHtml;
  };

  static #dataDownload = (data1) => {
    const datas = Dataa.dataget();
    datas.push(data1);
    Dataa.dataadd(datas);
  }

  static data = (text, container) => {
    const task = {
      text: text,
      done: false,
      index: Dataa.dataget().length + 1,
      id: Date.now(),
    };

    if (text !== '') {
      todoDom.#addData(task, container);
      todoDom.#dataDownload(task);
    }
  }

  static datas = (container) => {
    const dataz = Dataa.dataget();
    dataz.forEach((data) => {
      todoDom.#addData(data, container);
    });
  }
}