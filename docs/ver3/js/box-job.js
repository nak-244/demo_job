$(function() {
$('#srh_jobtype_param').change(function() {
  var val = $(this).val();
  switch (val) {
    case '1':
    $('#box-job1').show();
    $('div[id^="box-job"]:not("#box-job1")').hide();
    break;
    case '2':
    $('#box-job2').show();
    $('div[id^="box-job"]:not("#box-job2")').hide();
    break;
    case '3':
    $('#box-job3').show();
    $('div[id^="box-job"]:not("#box-job3")').hide();
    break;
    case '4':
    $('#box-job4').show();
    $('div[id^="box-job"]:not("#box-job4")').hide();
    break;
    case '5':
    $('#box-job5').show();
    $('div[id^="box-job"]:not("#box-job5")').hide();
    break;
    case '6':
    $('#box-job6').show();
    $('div[id^="box-job"]:not("#box-job6")').hide();
    break;
    case '7':
    $('#box-job7').show();
    $('div[id^="box-job"]:not("#box-job7")').hide();
    break;
    case '8':
    $('#box-job8').show();
    $('div[id^="box-job"]:not("#box-job8")').hide();
    break;
    case '9':
    $('#box-job9').show();
    $('div[id^="box-job"]:not("#box-job9")').hide();
    break;
    case '10':
    $('#box-job10').show();
    $('div[id^="box-job"]:not("#box-job10")').hide();
    break;
    case '11':
    $('#box-job11').show();
    $('div[id^="box-job"]:not("#box-job11")').hide();
    break;
    case '12':
    $('#box-job12').show();
    $('div[id^="box-job"]:not("#box-job12")').hide();
    break;
    case '13':
    $('#box-job13').show();
    $('div[id^="box-job"]:not("#box-job13")').hide();
    break;
    case '14':
    $('#box-job14').show();
    $('div[id^="box-job"]:not("#box-job14")').hide();
    break;
    case '15':
    $('#box-job15').show();
    $('div[id^="box-job"]:not("#box-job15")').hide();
    break;
    case '16':
    $('#box-job16').show();
    $('div[id^="box-job"]:not("#box-job16")').hide();
    break;
    default:
    $('div[id^="box-job"]').hide();
  }
});
});
