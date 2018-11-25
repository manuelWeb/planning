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

export function getIdx(tab1, tab2, classpan, ok, cpt=0) {
    // var cpt = 0;
    function addIdx() {
      for (var i = 0; i < tab1.length; i++) {
        if( tab1[i].textContent === tab2[cpt] ) {
          // console.log('job:',cpt,tab1[i],tab1[i].textContent);
          // tab1[i].innerHTML += '<span class="' + classpan + '">' + (cpt + 1) + '</span>';
          //cpt===0 ? vrai:{date la + récente} : faux:{dates ultérieures}
          cpt === 0 ?
            tab1[i].innerHTML += '<span class="' + ok + '">' + (cpt + 1) + '</span>'
            :
            tab1[i].innerHTML += '<span class="' + classpan + '">' + (cpt + 1) + '</span>'
        }
      }
    }

    while(cpt < tab1.length) {
      // tab2.shift();
      addIdx();
      cpt++;
    }
  }
