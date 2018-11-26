// import { Hello } from "./deadline_dude.js"
import get_td from "./get_td.js"
import { sortAryArg, onlyUnique, getIdx } from "./filter_fn.js"

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
  // console.log(`deadline_txt:${deadline_txt}`);
  // console.log(dead_sort);
  // console.log(dead_unique);

  // const date_n_td = get_td(table_row,8,"#FF9900")[0];
  // const date_n_txt = get_td(table_row,8)[1];
  // const date_n_sort = sortAryArg(date_n_txt);
  // const date_n_unique = date_n_sort.filter(onlyUnique);

  getIdx(deadline_td, dead_unique, "job", "ok");
  // getIdx(date_n_td, date_n_unique, "daten", "ok");

}

