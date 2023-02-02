import './style.css';
import {
  refreshList, postData,
} from './apiSetting';

window.onload = refreshList();
const form = document.getElementById('form');
const refreshBtn = document.getElementById('refresh-btn');
form.addEventListener('submit', postData);
refreshBtn.addEventListener('click', refreshList);
