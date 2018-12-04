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

  // getIdx(deadline_td, dead_unique, "job", "ok");

  const compteur = function () {
    let compteurPrive = 0
    function changeValeur() {
      compteurPrive += 111;
    }
    function changeValeur_( colorStart,step ) {
      compteurPrive = compteurPrive - step
      console.log(`compteurPrive:${compteurPrive}`);
    }
    // const inc = function(val) {
    const inc = function(colorStart,step) {
      // changeValeur(val);
      changeValeur_(colorStart,step);
      return "#" + (colorStart-compteurPrive);
    }
    const dec = function(colorStart,step) {
      // fx Oups -- = +
      console.log(`colorStart+compteurPrive:${colorStart+compteurPrive}`);
      changeValeur_(colorStart,step);
      return "#" + (colorStart+compteurPrive);
    }
    return { inc, dec }

  }()

  // console.log(...test);

  test.map(
    (item, idx) => {
      item.map( (item_,idx_) => {
      // console.log(`idx:${idx} - idx:${idx_};`)
      item_.innerHTML +=
        idx == 0 ?
        ` <span class="ok_"><b>${idx+1}</b><sup>/${item.length - (idx_+1) + 1}</sup></span>`
        :
        ` <span class="job_" style="background:${compteur.inc(111111,111111)}"><b>${idx+1}</b><sup>/${item.length - (idx_+1) + 1}</sup></span>`}
    )}
  )
  // getIdx(date_n_td, date_n_unique, "daten", "ok");

}

