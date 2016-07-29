(function($){
	function clickHandler(e){
		const $mess = $('#messageDiv');
		$mess.text(`${e.target.innerText} is clicked`).show();
		setTimeout(function(){
			$mess.fadeOut('slow');
		}, 1000);
	}
	
	function startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		document.getElementById('time').innerHTML =
		h + ":" + m + ":" + s;
		var t = setTimeout(startTime, 500);
	}
	function checkTime(i) {
		if (i < 10) {i = "0" + i};  
		return i;
	}

	$(document).ready(function(){
		const $addBtn = $('#addBtn'),
			$testBtn = $('#testBtn'),
			$container = $('#containerBtns');

		let btnIndex = 1;

		$addBtn.click(() => {
			const $newBtn = $(`<button class="btn">button number ${btnIndex}</button>`);
			$('<div class="col-md-2"></div>').append($newBtn).appendTo($container);
			btnIndex++;
		});

		$testBtn.click(clickHandler);
		$('#containerBtns').on('click', '.btn', clickHandler);
		
		
		var span = document.getElementById("close");
		span.onclick = function(){ 
			var modal = document.getElementById('myModal');
				modal.style.display = "none";
		};
		
		
			
		$showBtn = $('#timeBtn');
		$showBtn.click(function(){
			var modal = document.getElementById('myModal');
			modal.style.display = "block";
			startTime();


		});
		
	})
}(jQuery));