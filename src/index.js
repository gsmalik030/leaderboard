import "./style.css";
import { getData,order,refreshList } from "./apiSetting";
import { postData } from "./apiSetting";
const form = document.getElementById("form");
const refreshBtn=document.getElementById('refresh-btn');
form.addEventListener("submit", postData);
refreshBtn.addEventListener("click", refreshList);
