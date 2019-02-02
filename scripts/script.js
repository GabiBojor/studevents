	$(document).ready(function() {
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.photo-effect').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

		$('.nume, .varsta, .telefon').val('');
		$("#transport").val("0");
		$('#overlay, .close_popup').click(function(e){
			e.preventDefault();
			$('.nume, .varsta, .telefon').val('');
			$("#transport").val("0");
			$('#overlay, .custom-popup').fadeOut();
		})
		$('#locuri').prop("disabled", true);
		$('#transport').change(function() {
			if ($(this).val() == 'Vin cu masina personala') {
				$('#locuri').prop("disabled", false);
			} else {
				$('#locuri').prop("disabled", true);
			}
		});
		if ($(window).width() < 767) {
			$('.register-btn').attr('href', '#mobile_register')
		}
	})
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();

		if ($(this).scrollTop() > 200) {
			$('.toTop').fadeIn();
		} else {
			$('.toTop').fadeOut();
		}

	});
