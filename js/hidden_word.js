$(document).ready(function(){
$('#my_dtp').datetimepicker({
  format: 'yyyy-mm-dd hh:ii'
})
$('#my_dtp').datetimepicker('update', new Date())
});
