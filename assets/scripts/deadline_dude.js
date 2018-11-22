/* TODO > gérer le cas deadline --/nn/nn */
// alert('actualisation des date -n en cours…')
setTimeout(() => {

  function rmDaysToDate(old_date) {
    // split date dd / mm / yy
    var split_date = old_date.split("/");
    // Les mois 0 a 11 donc on enleve 1, cast avec *1
    var new_date = new Date(
      split_date[2], // yy
      split_date[1] * 1 - 1, // mm
      split_date[0] * 1 - 14 // days
    );

    var new_day   = new_date.getDate();
    var new_month = new_date.getMonth() + 1;
    var new_year  = new_date.getYear();

    new_day = (new_day < 10 ? "0" : "") + new_day; // ajoute un zéro devant pour la forme
    new_month = (new_month < 10 ? "0" : "") + new_month; // ajoute un zéro devant pour la forme

    var new_date_text = new_day + "/" + new_month + "/" + new_year;
    return new_date_text;
  }

  let lib = (x) => x+6
  let lib_min = 3

  let ary_idbrand = ["tl-id", "al", "ho", "cd", "cv-vf", "mm", ]
  let item = ary_idbrand.map(id => document.querySelectorAll(`#${id} + table tr td`))

  let tdBrand = item.map((tdAry,idx) => {
    // console.warn(ary_idbrand[idx], ' ',tdAry,' tdAry.length ', tdAry.length,' idbrand.length ', ary_idbrand.length)
    return {
      "brand": ary_idbrand[idx],
      "TD": tdAry
    }
  })

  let objBrand = tdBrand.map(item => item)
  const redt = /[0-9]{2}\/[0-9]{2}\/[0-9]{2}/g

  function setDate (brand) {

    let brand_ = objBrand[brand].TD
    // console.log(brand_)

    while (lib_min < brand_.length) {
      var dead = brand_[lib_min].innerHTML.match(redt)
      var dead_n = rmDaysToDate(dead[0])

      brand_[lib_min+2].innerHTML = dead_n
      lib_min = lib(lib_min)
    }
    // re init lib_min
    lib_min = 3
  }


    console.log('hopla?')
    setDate(0);setDate(1);setDate(2);setDate(3);setDate(4);setDate(5);

}, 50);
