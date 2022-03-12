$(document).ready(function() {
    var userId = localStorage.getItem('userId');
    var html_list_friend = '';
    fetch('../json/friends.json').then(function(response) {
        return response.json();
    }).then(function(friends) {
        friends.forEach(user => {
            html_list_friend += `
             <div class="friend-chat" data-user_id="${user['id']}">
                 <div class="friend-avatar">
                     <img src="${user['avatar']}" alt="" style="width: 56px; height: 56px; border-radius: 50%;">
     
                 </div>
                 <div class="friend-exchange">
                     <p class="friend-name">${user['name']}</p>
                     <p class="friend-content-chat">${user['message'][0]['content']}</p>
                 </div>
             </div>
            `;
        });
        document.getElementById('list-friends').innerHTML = html_list_friend;
        $('.friend-chat').click(function() {
            var user_id = $(this).data('user_id');
            friends.filter(e => {
                var html_message = '';
                if (e['id'] === user_id) {
                    $('.friend-top-left').html(`
                         <div class="friend-top-avatar">
                             <img src="${e['avatar']}" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
                         </div>
                         <p class="friend-top-name">${e['name']}</p>
                     `);
                    e['message'].forEach(mes => {
                        html_message += `
                            <p class="${mes['user_id'] == userId ? 'owner text-right': 'other text-left'}">
                                <img src="${e['avatar']}" class="${mes['user_id'] == userId ? 'hidden': ''}" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
                                <span  class="${mes['user_id'] == userId ? 'owner-span': 'other-span text-left'}">${mes['content']}</span>
                            </p>
                         `;
                    })
                    $('.friend-mid').html(html_message);
                }
            })
        })

    });
})