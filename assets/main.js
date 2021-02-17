// Select the row template
var row_template = document.querySelector('#date-data-row');


fetch('/samples/60641.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(vax_array) {
    for (var i = 0; i < vax_array.length; i++) {
      var row_clone = row_template.content.cloneNode(true);
      row_clone.querySelector('.f-date').innerText = vax_array[i]['date'];
      row_clone.querySelector('.f-total-doses-daily').innerText = vax_array[i]['total_doses_daily'];
      row_clone.querySelector('.f-_1st_dose_daily').innerText = vax_array[i]['_1st_dose_daily'];

      document.querySelector('#vax-data tbody').appendChild(row_clone);
    }
  });


