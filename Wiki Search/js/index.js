
$(document).ready(function(){
  $("#topic").keypress(function (e) {
  if (e.which == 13) {
    var input = $("#topic").val();
    
  $.ajax({
    url:"https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + input ,
    dataType: 'jsonp',
    success: function(data){
      var html ="";
    for(var i in data.query.pages){
      html+="<a href=https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid + " target=_blank><li id=result><h1 id=title>"+ data.query.pages[i].title + "</h1><p class=wiki>" + data.query.pages[i].extract + "</p></li></a><br>";
      
    }
    $(".entries").html(html);
    }
  });
        
    return false;    //<---- Add this line
  }
});
});