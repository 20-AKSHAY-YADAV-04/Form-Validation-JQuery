let checkHobbiesValue = $('#checkHobbies').val();

$(".chkHobbies").click(function() {
 if ( $("input:checkbox").filter(":checked").length < 1)
 {
   $('#hobbiesError').text("Please Write Your Commen"); 
   return false;
 }
 else
 {
   $('#hobbiesError').text("Please Write Your Commen"); 
   return true;
 }
})