fetch('../json/headers.json').then(function(response){
    return response.json();
  }).then(function(headers){
    var html_header = '';

    headers.forEach((header)=> {
        html_header += `
            <li class="li-active pointer ${header['text']}" data-active="${header['text']}" data-header-id="${header['id']}">
                <a class="home">
                    <span class="navi-mobi active">${header['text']}</span>
                    <i class="hide-icon ${header['icon']}"></i>
                </a>
            </li>
        `;
    });
    $(".headers").html(html_header);
    
    var current_active = 'Home';
    $(`.${current_active}`).addClass('active');

    $(".li-active").click(function () {
        let header_id = $(this).data('header-id');
        let active = $(this).data('active');
        switch(header_id) {
            case 1: 
                file = "home";
                break;
            case 2: 
                file = "posts";
                break;
            case 3: 
                file = "contacts";
                break;
            case 4: 
                file = "settings";
                break;
            default: file = "home"
        }
        $("#content").load(`../pages/${file}.html`);
    })
  });

  function logout() {
    localStorage.removeItem("userId");
    location.href = "/";
    location.reload();
}