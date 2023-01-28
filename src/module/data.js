export default class Dataa {
    static dataget = () => {
      let dataa = [];
      if (localStorage.getItem('todo')) {
        dataa = JSON.parse(localStorage.getItem('todo'));
      }

      return dataa;
    };

    static dataadd = (dataa) => {
      localStorage.setItem('todo', JSON.stringify(dataa));
    };
}