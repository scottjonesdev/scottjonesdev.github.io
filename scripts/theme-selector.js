//Try to read from local storage, otherwise set to purple theme as default
let currentTheme = localStorage.getItem("mytheme") || "purple";

const themeSelector = document.getElementById("theme-selector");

//set the theme
setTheme("purple", currentTheme);
themeSelector.value = currentTheme;

//add listenter to capture user selecting new theme
themeSelector.addEventListener("change", function(e) {
  const newTheme = e.currentTarget.value;
  //set new theme
  setTheme(currentTheme, newTheme);
});

function setTheme(oldTheme, newTheme) {
  const html = document.getElementsByTagName("html")[0];
  var themeColor;

  //determine new meta color value
  if(newTheme == 'monokai'){
    themeColor = '#272822';
  }
  else if (newTheme == 'grayscale'){
    themeColor = '#DEDEDE';
  }
  else if (newTheme == 'purple'){
    themeColor = '#43379e';
  }

  //update theme meta tag to match background of selected theme
  document.querySelector("meta[name='theme-color']").content = themeColor;

  //Remove old theme from html's class list
  html.classList.remove(oldTheme);

  //Add new theme to html's class list
  html.classList.add(newTheme);

  //set new theme as the current theme
  currentTheme = newTheme;

  //store new theme in local storage so browser remembers user's
  localStorage.setItem("mytheme", newTheme);
}