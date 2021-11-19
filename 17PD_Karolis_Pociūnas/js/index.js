vardas = window.prompt("Įveskite savo vardą");

if (!vardas) {
    alert('Vardas neįvestas busite nukreipti į Google.');
    window.location.href = "http://www.google.com";
}
else {
    amzius = window.prompt("Įveskite savo amžių");
    if(!amzius){
        alert("Labai gaila, kad nenorite susipažinti");
        window.location.reload();
    }
    else{
        uzsiemimas = window.prompt("Įveskite savo užsiėmimą")
        if(!uzsiemimas){
            alert("Labai gaila, kad nenorite susipažinti");
            window.location.reload();
        } 
        else {
            alert("Sveiki, " + vardas + "!");
        };
    };

};

document.getElementById('pageName').innerHTML = vardas + " Page";
document.getElementById('amzius').innerHTML = amzius;
document.getElementById('uzsiemimas').innerHTML = uzsiemimas;

function gglsearch(){
    open('http://google.com/search?q='+uzsiemimas);
};

function gglage(){
    open('http://google.com/search?q='+"actors who are " + amzius + " years old");
};

