import Dataa from './data.js';

export default class ModiFy {
  static #storage(data1, texts) {
    const datas = Dataa.dataget();
    datas.forEach((task1) => {
      const info = parseInt(data1.getAttribute('data-id'), 10);
      if (task1.id === info) {
        task1.text = texts.value;
      }
    });

    Dataa.dataadd(datas);
  }

  static modiFy(data, texts) {
    ModiFy.#storage(data, texts);
  }

  static doneCheck = (data) => {
    const datas = Dataa.dataget();
    datas.forEach((task1) => {
      const info = parseInt(data.getAttribute('data-id'), 10);
      if (task1.id === info) {
        task1.done = !task1.done;
      }
    });

    Dataa.dataadd(datas);
  }
}