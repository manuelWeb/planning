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
  var incrementColor = function(color, step){
    var colorToInt = parseInt(color.substr(1), 16),                     // Convert HEX color to integer
        nstep = parseInt(step);                                         // Convert step to integer
    if(!isNaN(colorToInt) && !isNaN(nstep)){                            // Make sure that color has been converted to integer
            colorToInt += nstep;                                            // Increment integer with step
            var ncolor = colorToInt.toString(16);                           // Convert back integer to HEX
            ncolor = '#' + (new Array(7-ncolor.length).join(0)) + ncolor;   // Left pad "0" to make HEX look like a color
            if(/^#[0-9a-f]{6}$/i.test(ncolor)){                             // Make sure that HEX is a valid color
                return ncolor;
            }
        }
        return color;
  };
  console.log(incrementColor('#CCCCCC', 10));
  console.log(...test);

  test.map(
    (item, idx) => item.map(
        (item_,idx_) => item_.innerHTML +=
        idx == 0 ?
        ` <span class="ok_"><b>${idx+1}</b><sup>/${item.length - (idx_+1) + 1}</sup></span>`
        :
        ` <span class="job_" style="background:${incrementColor('#CCCCCC', idx*idx)}"><b>${idx+1}</b><sup>/${item.length - (idx_+1) + 1}</sup></span>`
      )
  )
  // getIdx(date_n_td, date_n_unique, "daten", "ok");

}

