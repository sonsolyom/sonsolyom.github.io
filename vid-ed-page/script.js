

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}

function setTheme(mode){
    if(mode == 'light'){
      document.getElementById('theme-style').href = '../default.css';
      languageImg.src = '/images/dark-languages.png';
    }else if(mode == 'blue'){
      document.getElementById('theme-style').href = '../blue.css';
      languageImg.src = '/images/light-languages.png';
    }else if(mode == 'green'){
      document.getElementById('theme-style').href = '../green.css';
      languageImg.src = '/images/light-languages.png';
    }else if(mode == 'purple'){
      document.getElementById('theme-style').href = '../purple.css';
      languageImg.src = '/images/light-languages.png';
    }

    localStorage.setItem('theme', mode);
}