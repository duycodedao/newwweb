$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var username = $('#username').val();
		var password = $('#password').val();
		if (username === 'admin' && password === '1') {
			alert('Login Thành Công');
			window.location.href = 'home.html'; // Chuyển hướng sang trang chủ
		} else {
			$('#error-message').text('Tên Hoặc Mật Khẩu Sai.'); // Thông báo lỗi
		}
	});
});

