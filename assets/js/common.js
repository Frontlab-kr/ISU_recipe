$(document).ready(function () {
  $('#header').load('./components/header.html');
});

//snb
var statusSnb = 'unfold';
function snbToggle() {
  if (statusSnb === 'unfold') {
    $('.isu').addClass('snb-fold');
    statusSnb = 'fold';
    $('.isu-snb .collapse').removeClass('show');
  } else {
    $('.isu').removeClass('snb-fold');
    statusSnb = 'unfold';
  }
}

$(document).on('click', '.isu-snb-item .btn', function (e) {
  if (statusSnb === 'fold') {
    $('.isu').removeClass('snb-fold');
    statusSnb = 'unfold';
  }
});

$(document).ready(function () {
  // //flatpickr
  // $('.flatpickr-input').flatpickr({
  //   dateFormat: 'Y-m-d',
  //   locale: 'ko',
  //   allowInput: true,
  // });
  // $('.flatpickr-inline').flatpickr({
  //   dateFormat: 'Y-m-d',
  //   locale: 'ko',
  //   inline: true,
  // });
});
