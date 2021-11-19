$(function() {
    $('button').on({
      mouseover: function() {
        $(this).css({
          left: (Math.random() * 1800) + "px",
          top: (Math.random() * 800) + "px",
        });
      }
    });
  });


let rotation = 0;
function rotateImg() {
      rotation += 90; //
      if (rotation === 360) { 
        rotation = 0;
      }
      document.querySelector("#suktis").style.transform = `rotate(${rotation}deg)`;
    }

    function nuolaida(){
      var element = document.getElementById("myPara");
      element.innerHTML = "99.99 eur";
  }
function keisti() {
  document.body.contentEditable='true'; 
  document.designMode='on'; 
  void 0
};

