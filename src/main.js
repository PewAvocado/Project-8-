import { createForm } from "./form.js";
import { showTask } from "./interfaceTask.js";
import { createCategoryButton } from "./navigation.js";
import "./style.css";

const content = document.querySelector('#content');
const startButton =  document.createElement('button');
const categories = document.querySelector('#categories');


showTask();



createForm();
createCategoryButton();
showTask();

