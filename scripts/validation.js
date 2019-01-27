  var $form = $('form#gform'),
  url = 'https://script.google.com/macros/s/AKfycbzRZbckRnMQgzPB9G3yTP6UWABzQY4CCYJBShwvepja9Sw2nxcw/exec'
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
  $('#submitbtn').on('click', function(e) {
    e.preventDefault();
    if($('.telefon ,#nume, .varsta').val() == ''){
     $('#overlay, #form-alert').fadeIn();
    } 
    else {
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      }).success(
      $('#thankyou_message, #overlay').fadeIn()
      );
    }

  })
