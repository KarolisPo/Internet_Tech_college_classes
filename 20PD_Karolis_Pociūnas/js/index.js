var myDate=new Date();

function btn1(){
    window.alert("Dabar yra "+ myDate.getFullYear()+" metai.");
 }
 function btn2(){
    window.alert("Dabar yra "+ myDate.getMonth()+" mėnuo.");
 }
 function btn3(){
    window.alert("Dabar yra "+ myDate.getDate()+" menesio diena.");
 }
 function btn4(){
    switch (new Date().getDay()) {
        case 0:
          alert('Sekmadienis');
          break;
        case 1:
            alert('Pirmadienis')
          break;
        case 2:
            alert('Atradienis');
          break;
        case 3:
            alert('Trečiadienis');
          break;
        case 4:
            alert('Ketvirtadienis');
          break;
        case 5:
            alert('Penktadienis');
          break;
        case 6:
            alert('Šeštadienis');
      }
 }

 function btn5(){
    window.alert("Dabar yra "+ myDate.getHours()+" valandų " + myDate.getMinutes() + " minučiu.")
 }

 function btn6(){
    var uzdarymas = window.confirm("Ar tikrai norite uždaryti langą?");
    if(uzdarymas==true)
    {
    window.close();
    }
  }

