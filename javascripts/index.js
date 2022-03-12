// Su khien click
  // Cach 1 : Dung getElementById
  // document.getElementById("btn-create").addEventListener("click", showModal);
  // Cach 2 : Dung getElementsByClassName
  var buttons = document.getElementsByClassName('creater-acc');
  // Cach 1 : Tong quat voi nhieu the co cung class="creater-acc"
  // for (var i = 0; i < buttons.length; i++) {
  //     buttons[i].addEventListener('click', showModal);
  // }
  // Cach 2 : Chi co 1 the co class="creater-acc"
  buttons[0].addEventListener('click', showModal);

  function auth () {
    $.ajax({
      url: 'http://localhost:3000/users/auth_user', 
      method: 'GET',
      success: function(response) {
        console.log(response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    })
  }
  document.getElementById("close").addEventListener("click", hideModal);

  // Khai bao bien 
  var formModal = document.getElementById("form");
  var day = document.getElementById("day");
  var month = document.getElementById("month");
  var year = document.getElementById("year");

  // Khai bao bien 
  var formModal = document.getElementById("form");
  var day = document.getElementById("day");
  var month = document.getElementById("month");
  var year = document.getElementById("year");

  var currentYear = new Date().getFullYear();

  const ipnElement = document.querySelector('#ipnPassword')
  const btnElement = document.querySelector('#btnPassword')

  btnElement.addEventListener('click', function() {
    const currentType = ipnElement.getAttribute('type')
      ipnElement.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
      )
  })

  for (let i = 1; i <= 31; i++) {
        day.innerHTML += `<option value="${i}">${i}</option>`;
    }
    for (let i = 1; i <= 12; i++) {
        month.innerHTML += `<option value="${i}">${i}</option>`;
    }
    for (let i = 1997; i <= currentYear; i++) {
        year.innerHTML += `<option value="${i}">${i}</option>`;
    }
    // <!--Cac function xu ly -->
    function showModal() {
        formModal.classList.add("isShowModal");
    }

    function hideModal() {
        formModal.classList.remove("isShowModal");
    }
  // https://viblo.asia/p/vanilla-js-toggle-password-visibility-maGK73oOKj2

  // sự kiện click
  let email = document.getElementsByClassName('email-input');
  let pass = document.getElementsByClassName('pass-input');

  function errorr() {
    if (email[0].value == '' && pass[0].value== '') {
      document.getElementById('email-error').innerHTML = 'Nhập email hoặc số điện thoại đi má!!';
      document.getElementById('pass-error').innerHTML = 'Nhập mật khẩu đi má!!';
      return;
    } 
    else if (pass[0].value== '') {
      document.getElementById('pass-error').innerHTML = 'Nhập mật khẩu đi má!!';
      return;
    }
    else if (email[0].value == '') {
      document.getElementById('email-error').innerHTML = 'Nhập email hoặc số điện thoại đi má!!';
      return;
    }
    document.getElementById('login-register').classList.add('loader');
    $.ajax({
      url: 'https://be-sub-facebook-team.herokuapp.com/users/login', 
      method: 'POST',
      data: {
        "email": email[0].value,
        "password": pass[0].value
      },
      success: function(response) {
        if (response['login']) {
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("userId", response['user']['id']);
            location.reload();
          } 
        } else {
          document.getElementById("error-login").innerHTML = response['message'];
        }  
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    })
}

let first_name = document.getElementById('surname-input');
let last_name = document.getElementById('name-input');
let phone = document.getElementById('phone-input');
let password = document.getElementById('newpass-input');
function signUp() {

  if(phone.value == '' && newpass.value == '') {
    document.getElementById('phone-error').innerHTML = 'Nhap so dien thoai may vao'
    document.getElementById('newpass-error') .innerHTML = 'Nhap pass may vao'
    return;
  }
  else if(phone.value == '') {
    document.getElementById('phone-error').innerHTML = 'Nhap so dien thoai may vao'
    return;
  }
  else if(password.value == '') {
    document.getElementById('newpass-error') .innerHTML = 'Nhap pass may vao'
    return;
  }
  
  $.ajax({
    url: 'https://be-sub-facebook-team.herokuapp.com/users/register',
    method: 'POST',
    data: {
      "first_name": first_name.value,
      "last_name": last_name.value,
      "password": password.value,
      "email": phone.value,
      "birth": "04-27-2002"
    },
    success: function(response) {
      location.reload();
    }
  })
}