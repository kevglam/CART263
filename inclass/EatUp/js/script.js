let $fly;
let $mouth;

$(document).ready(function () {

  $fly = $('#fly');
  $mouth = $('#mouth');

  $fly.draggable();

  $mouth.droppable({
    drop:function (event, ui){
      console.log("Dropped!");
      ui.draggable.remove();
      setInterval(chew, 50);
      //chew();

    }
  });

});

function chew (){

  if($mouth.attr('src') === 'assets/images/mouth-open.png'){

    $("#mouth").attr("src", "assets/images/mouth-closed.png");
  }
  else  {
    $("#mouth").attr("src", "assets/images/mouth-open.png");
  }


}
