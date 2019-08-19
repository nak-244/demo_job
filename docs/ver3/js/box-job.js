$(function() {
$('#srh_jobtype_param').change(function() {
  var val = $(this).val();
  switch (val) {
    case '1':
    $('#box1').show();
    $('div[id^="box"]:not("#box1")').hide();
    break;
    case '2':
    $('#box2').show();
    $('div[id^="box"]:not("#box2")').hide();
    break;
    case '3':
    $('#box3').show();
    $('div[id^="box"]:not("#box3")').hide();
    break;
    case '4':
    $('#box4').show();
    $('div[id^="box"]:not("#box4")').hide();
    break;
    case '5':
    $('#box5').show();
    $('div[id^="box"]:not("#box5")').hide();
    break;
    case '6':
    $('#box6').show();
    $('div[id^="box"]:not("#box6")').hide();
    break;
    case '7':
    $('#box7').show();
    $('div[id^="box"]:not("#box7")').hide();
    break;
    case '8':
    $('#box8').show();
    $('div[id^="box"]:not("#box8")').hide();
    break;
    case '9':
    $('#box9').show();
    $('div[id^="box"]:not("#box9")').hide();
    break;
    case '10':
    $('#box10').show();
    $('div[id^="box"]:not("#box10")').hide();
    break;
    case '11':
    $('#box11').show();
    $('div[id^="box"]:not("#box11")').hide();
    break;
    case '12':
    $('#box12').show();
    $('div[id^="box"]:not("#box12")').hide();
    break;
    case '13':
    $('#box13').show();
    $('div[id^="box"]:not("#box13")').hide();
    break;
    case '14':
    $('#box14').show();
    $('div[id^="box"]:not("#box14")').hide();
    break;
    case '15':
    $('#box15').show();
    $('div[id^="box"]:not("#box15")').hide();
    break;
    case '16':
    $('#box16').show();
    $('div[id^="box"]:not("#box16")').hide();
    break;
    default:
    $('div[id^="box"]').hide();
  }
});
});
