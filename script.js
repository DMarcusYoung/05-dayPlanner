const $date = $(".date");

// See https://devhints.io/moment for moment.js cheatsheet
$date.text(moment().format('ddd MMM Do YYYY'));