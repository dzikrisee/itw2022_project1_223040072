// tab open
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}
// end tab open

// side menu
var sidemenu = document.getElementById('sidemenu');
function openmenu() {
  sidemenu.style.right = '0';
}
function closemenu() {
  sidemenu.style.right = '-200px';
}
// end side menu

// Speedsheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzh6cdHj6vdw2J2RKkRMzPp__gmMCxs-ylV_KJI1eq3u8T911YWDoMjVMykaAxa_rAi/exec';
const form = document.forms['Submit-From-to-Google-Sheets'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
// end Speedsheets
