HTML:
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<button id="registerBtn">Register</button>
<div id="eventCard" style="display:none;">Event Details</div>

JS:
$('#registerBtn').click(function() {
  $('#eventCard').fadeIn(500);
});


setTimeout(() => {
  $('#eventCard').fadeOut(500);
}, 3000);


