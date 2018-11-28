// import { Hello } from "./deadline_dude.js"
import get_td from "./get_td.js"
import { sortAryArg, onlyUnique, getIdx, isIn } from "./filter_fn.js"

// console.log( `marked.prototype:${marked.prototype}` )
// console.log( marked.name.__proto__ )
// marked.setOptions({});
var monmd = '';
var url   = "./dl2018.md"
// transcrit ./dl2018.md -> planmd.html
function reqListener() {
  monmd = this.responseText;
  document.getElementById('content').innerHTML = marked(monmd);
  get_dead()
} // end reqListener

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.addEventListener("load", reqListener);
xobj.open("GET", url);
xobj.send();

// classement deadline

// fn exe après rendu md->html
function get_dead() {
  // set yellow bg color on deadline td
  const table_row = document.querySelectorAll("table tr")
  get_td(table_row, 3, "#FFFF00")[0];

  // add span number on deadline TD
  const deadline_txt = get_td(table_row,3)[1];
  const dead_sort    = sortAryArg(deadline_txt);
  const deadline_td  = get_td(table_row,3)[0];
  const dead_unique  = dead_sort.filter(onlyUnique);

  const test = isIn(dead_unique, deadline_td);
  console.log(test.length);
  console.log(`...test[0]:`, ...test[0]);
  console.log(`...test[1]:`, ...test[1]);
  console.log(`...test[2]:`, ...test[2]);
  console.log(`...test[3]:`, ...test[3],'end test[3');
  console.log(...test[5],test[5][0].textContent);
  getIdx(deadline_td, dead_unique, "job", "ok");
  test[0][0].innerHTML += " -> Yolo!"
  test[1].map(item => item.innerHTML += " -> Yolo2!")
  // getIdx(date_n_td, date_n_unique, "daten", "ok");

}

