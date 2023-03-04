import ModiFy from './modify.js';
import Dataa from './data.js';
import Remv from './remove.js';
import todoDom from './toDoDom.js';

const formClearing = (data) => {
  data.value = '';
};

const creatData = (data, container, form) => {
  form.addEventListener('click', (element) => {
    element.preventDefault();
    todoDom.data(data.value, container);
    formClearing(data);
  });
};

const creatDataByEnter = (data, container, form) => {
  form.addEventListener('keypress', (element) => {
    if (element.key === 'Enter') {
      element.preventDefault();
      todoDom.data(data.value, container);
      formClearing(data);
    }
  });
};

const removData = (container) => {
  container.addEventListener('click', (element) => {
    if (element.target.classList.contains('remove-btn')) {
      const removeBtn = element.target;
      const dataId = removeBtn.parentElement.getAttribute('data-id');
      const data = container.querySelector(
        `li[data-id= "${dataId}"]`,
      );
      Remv.data(data);
    }
  });
};

const modifydata = (container) => {
  container.addEventListener('click', (element) => {
    if (element.target.classList.contains('data-text')) {
      const texts = element.target;
      const data = texts.parentElement.parentElement.parentElement;
      data.classList.add('green-bg');
    }
  });

  container.addEventListener('focusout', (element) => {
    if (element.target.classList.contains('data-text')) {
      const texts = element.target;
      const data = texts.parentElement.parentElement.parentElement;
      ModiFy.modify(data, texts);
      data.classList.remove('green-bg');
    }
  });
};

const checkBox = (container) => {
  container.addEventListener('click', (element) => {
    if (element.target.classList.contains('list-check')) {
      const checkBoxAction = element.target;
      const dataLi = checkBoxAction.parentElement.parentElement.parentElement;
      const data = dataLi.querySelector('.data-text');
      data.classList.toggle('text-dec');
      ModiFy.doneCheck(dataLi);
    }
  });
};

const loaddata = (container) => {
  document.addEventListener('DOMContentLoaded', () => {
    todoDom.datas(container);
    checkBox(container);
  });
};

const clearAllComplatedTasks = () => {
  const completedTasks = Dataa.dataget().filter((data) => data.done === true);
  completedTasks.forEach((data) => {
    const task = document.getElementById(data.id);
    Remv.data(task);
  });
};

const registerclearBtnListener = (btn) => {
  btn.addEventListener('click', clearAllComplatedTasks);
};

export {
  creatData, removData, modifydata, loaddata, creatDataByEnter, registerclearBtnListener,
};