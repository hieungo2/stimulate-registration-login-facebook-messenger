fetch('../json/settings.json').then(function(response){
  return response.json();
}).then(function(settings){
  var html_settings = '';
  settings.forEach((setting) => {
    html_settings += `
    <div class="settings__item sub_settings__item" data-setting-id="${setting['id']}"">
      <img class="settings__icon" src="${setting['icon_url']}" alt="icon" />
      <span class="settings__label">${setting['text']}</span>
    </div>
    `;
  });
  $(".settings__items").html(html_settings);

  $(".sub_settings__item").click(function(){
    let setting_id = $(this).data('setting-id');
    switch (setting_id) {
      case 1:
          file = "general";
          break;
      case 2:
          file = "security";
          break;
      default:
          file = "general";
  }
    $("#load-settings").load(`../pages/setting-pages/${file}.html`);
  })
});