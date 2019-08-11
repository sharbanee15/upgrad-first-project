//To delete a particular Post
$(document).ready(function(){
    $(".postClass").on("click", function(){
    var parentId = $(this).parent().parent().attr("id");
    $(".yesButt").on("click", function(){
       $("#"+parentId).html("This Post has been deleted");
       $("#"+parentId).css("font-weight","bold");
       $("#"+parentId).css("text-align","center");
       $("#"+parentId).css("font-family","Bahnschrift Condensed");
       $('#deleteModal').modal('hide');
    })
    })
});