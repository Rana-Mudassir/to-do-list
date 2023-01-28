import './style.css';
import * as base from './module/base.js';

const inputBttn = document.querySelector('.list-btn');
const inputdata = document.querySelector('.list-input');
const applist = document.querySelector('.main-body-ul');
const clearBttn = document.querySelector('.clear-btn');

base.creatDataByEnter(inputdata, applist, inputdata);
base.creatData(inputdata, applist, inputBttn);
base.removData(applist);
base.modifydata(applist);
base.loaddata(applist);
base.registerclearBtnListener(clearBttn);