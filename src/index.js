import "./style.css";
import { getData } from "./apiSetting";
import { postData } from "./apiSetting";
const form=document.getElementById("form")


form.addEventListener('submit', postData);
console.log(getData());
