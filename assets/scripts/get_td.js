// fn recupération tr>td grace à l'idx
const get_td = (tab_tr, td_idx, bgcolor) => {
  const cel = [], txt = [];
  for (let tr of tab_tr) {
    const data_date = tr.querySelectorAll('td')[td_idx]
    const reg       = /[0-9]{2}\/[0-9]{2}\/(17|18|19)/ig

    if (data_date && data_date.textContent.match(reg) ){
      var idx = 0;
      cel.push(data_date);
      txt.push(data_date.textContent);

      data_date.style.backgroundColor = bgcolor
      idx++
    }
  }
  // ret array[tdHtmlCol,tdHtmlCol.txt] //
  // console.log(cel, txt)
  return [cel, txt];
}

export default get_td;