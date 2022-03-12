$(document).ready(function() {
  var html = '';

  fetch('../json/friend_requests.json').then(function(response){
  return response.json();
  }).then(function(requests){
    $.each(requests, function(key, value){
      console.log(value['avatar']);
      html += `
        <div class="fen-request">
          <div class="avt--requests">
              <img src="${value['avatar']}" alt="${value['full_name']}">
          </div>
          <div class="requests--infor">
              <h class="name__fen--requests">${value['full_name']}</h>
              <div class="time__fen--requests">${moment(value['created_at']).fromNow()}</div>
          </div>
          <div class="requests--btn">
              <button type="submit" class="btn btn--accept">Chấp nhận</button>
              <button type="submit" class="btn btn--delete">Xóa</button>
          </div>
        </div>
      `;
    })
    $(".list-requests").html(html);
  });
})