const men = [
    'Sausis',
    'Vasaris',
    'Kovas',
    'Balandis',
    'Gegužė',
    'Birželis',
    'Liepa',
    'Rugpjūtis',
    'Rugsėjis',
    'Spalis',
    'Lapkritis',
    'Gruodis',
]

var menuo = window.prompt('Įveskite gimimo mėnesį');

if(!menuo){
    alert('Duomenys nesuvesti, grįžtama.');
    window.open('index.html');
};

if(menuo < 0 || menuo > 12 ){
    alert('Metai turi dvylika mėnesių!')
    window.location.reload();
}else{
    if(menuo){
        open('http://google.com/search?q='+"Horoskopai 2021 " + men[menuo-1] );
    }
}












