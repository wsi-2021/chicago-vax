// Select the row template
var row_template = document.querySelector('#date-data-row');


fetch('/samples/60641.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(vax_array) {
    vax_array.sort(sortByField('date')).reverse();

    for (var i = 0; i < vax_array.length; i++) {
      var row_clone = row_template.content.cloneNode(true);
      row_clone.querySelector('.f-date').innerText = prettyTableDate(vax_array[i]['date']);
      row_clone.querySelector('.f-total-doses-daily').innerText = vax_array[i]['total_doses_daily'];
      row_clone.querySelector('.f-_1st_dose_daily').innerText = vax_array[i]['_1st_dose_daily'];

      document.querySelector('#vax-data tbody').appendChild(row_clone);
    }
  });


/*
  Utility Functions
*/

function prettyTableDate(iso_date) {
  var named_days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  var date = new Date(iso_date);
  var pretty_date = `${named_days[date.getDay()]} ${date.getMonth() + 1}/${date.getDate()}`;
  // day: named_days[my_date.getDay()];
  // month: my_date.getMonth() + 1;
  // date: my_date.getDate();
  // Do awesome things to print a date like
  // Monday 1/4
  return pretty_date;
}

function sortByField(field) {
  return function(a,b) {
    if (a[field] > b[field]) return 1;
    if (b[field] > a[field]) return -1;
    return 0;
  }
}
