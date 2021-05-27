const togglemode = document.querySelector('#togglemode')
togglemode.addEventListener('click', function() {
  document.body.classList.toggle('darkmode');
  sessionStorage.setItem('darkmode', togglemode.checked);
});

var darkmode = sessionStorage.getItem('darkmode');
console.log(darkmode);

if(darkmode === null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkmode = 'true';
  }
}

if(darkmode === "true") {
  togglemode.checked = true;
  document.body.classList.toggle('darkmode');
}

