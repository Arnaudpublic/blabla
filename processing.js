function afficheraide(x) {
  document.getElementById(x +"_aide").style.display = "inline";
}

function cacheraide(x) {
  document.getElementById(x +"_aide").style.display = "none";
}

function resetjs() {
  var codeprocessing = document.getElementById('processing_code');
  console.log(codeprocessing)
  codeprocessing.reset()
}