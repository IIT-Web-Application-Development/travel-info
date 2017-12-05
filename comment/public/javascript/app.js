$(document).ready(function() {
  "use strict";

  //ADD USER
  $("#addUserBtn").on("click", function() {
    var newName = $("#nameInput").val();
    var newComment = $("#commentInput").val();
    var user = {'user' : {
      name: newName,
      comment: newComment
    }};
    console.log(user);
    $.ajax({
      url: "http://localhost:3000/users",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      success: function(res, status) {
        var $result = $("<p>");
        // res = JSON.stringify(res)
        console.log(typeof(res.userId));
        $result.text("UserID: " + res.userId + " Username: " + user.user.name + 
          " Comment: " + user.user.comment);
        $("#userContainer").html($result);           
      }
    });
  });

  //GET USER
  $("#getUserBtn").on("click", function() {
    var userID = $("#userIdInput").val();

    $.ajax({
      url: "http://localhost:3000/users/" + userID,
      type: "GET",
      success: function(getUser, status) {
          var $result = $("<p>");
          $result.text("Username: " + getUser.name + " Comment: " + getUser.comment);
          $("#searchedUser").html($result);
      }
    });
  });

});