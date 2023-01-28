import Dataa from './data.js';

export default class Remv {
  static #displayRemove = (data1) => {
    data1.remove();
  };

  static #DataRemove = (data1) => {
    let datas = Dataa.dataget();
    const id = data1.getAttribute('data-id');
    datas = datas.filter((task) => task.id !== parseInt(id, 10));

    Dataa.dataadd(datas);
  };

  static #refreshId = () => {
    const dataz = Dataa.dataget();
    let counter = 1;
    dataz.forEach((data) => {
      data.index = counter;
      counter += 1;
    });

    Dataa.dataadd(dataz);
  };

  static data = (data) => {
    Remv.#DataRemove(data);
    Remv.#displayRemove(data);
    Remv.#refreshId();
  };
}