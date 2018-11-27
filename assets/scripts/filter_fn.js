export function sortAryArg (ary) {
  return ary.sort(function(a, b){
    let aa = a.split('/').reverse().join(),
        bb = b.split('/').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
  });
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function getIdx(tab1, tab2, classpan, ok, cpt=1) {
  console.log(`tab2:`,tab2);
    // tab1:[deadline_TD]
    // tab2:[deadl_txt unique]
  function addIdx() {

    console.log([...tab1][0].textContent.includes(tab2[0]));

    tab2.map( (i, idx) => {
      console.log(i);

      tab1.map( (i_) => {
        console.log(`i_:${i_.textContent}, ${i === i_.textContent}`);
        if(i === i_.textContent){
          //  ? bg{vert} : bg{gris}
          cpt === 1 ?
            i_.innerHTML += '<span class="' + ok + '">' + (cpt) + '</span>'
            :
            i_.innerHTML += '<span class="' + classpan + '">' + (cpt) + '</span>'
        }
      } )

      cpt++

    })
  }
  addIdx();
}
