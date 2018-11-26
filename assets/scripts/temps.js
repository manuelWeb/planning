const date_n_td = get_td(table_row,8,"#FF9900")[0];
const date_n_txt = get_td(table_row,8)[1];
const date_n_sort = sortAryArg(date_n_txt);
const date_n_unique = date_n_sort.filter(onlyUnique);



getIdx(deadline_td, dead_unique, "job", "ok");
getIdx(date_n_td, date_n_unique, "daten", "ok");