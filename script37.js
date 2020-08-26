
$(document).ready(function(){
	$('h2')
	.mouseout(function(){
		console.log("mouseout");
	})
	.click(function(){
		console.log('clicked');
	});

});

// js thuan la document.addEventListener('load', function(){});

$(document).ready(function(){
	$('#hideName').click(function(){
		$('h2')
		.slideUp();
	});

	$('#showName').click(function(){
		$('h2')
		.slideDown();
	});
	

});

$(document).ready(function(){
	$('#hideName').click(function(){
		$('h2')
		.addClass('hide');
	});

	$('#showName').click(function(){
		$('h2')
		.removeClass('hide');
	});
	

});

$(document).ready(function(){
	var a = $('.abc');
	console.log(a);

	a.click(function(event){
		console.log( $(this).html('fffffffffff') );
	})
	
	var name = $('#name').html();
	console.log(name);

});

$(document).ready(function(){

	$('#accordion > li > a').click(function(){
		$('#accordion > li > ul').slideUp();
		$(this).next().slideDown();
	})
});


$(document).ready(function(){

	$('#products').on('click', '.delete', function(){
		$(this).parent().slideUp('slow', function(){
			// this la cai vua xay ra su kien
			$(this).remove();
		});


	
	})


	var products = [
	'iphone',
	'ipad',
	'oppo',
	'samsung'
	];

	products.forEach(function(product){
		var productDiv = $('<div></div>');
		var btn = $('<button class="delete">Xoa</button>');

		productDiv.html(product);
		productDiv.append(btn);

		$('#products').append(productDiv);

	})
});


$(document).ready(function(){

	$('#products2').on('click', '.delete', function(){
		$(this).parent().animate({
			opacity: 0,

		}, 1000)


	
	})


	var products2 = [
	'iphone',
	'ipad',
	'oppo',
	'samsung',
	'Macbook pro',
	'Macbook pro',
	'Macbook pro',
	];

	products2.forEach(function(product){
		var productDiv = $('<div></div>');
		var btn = $('<button class="delete">Xoa</button>');

		productDiv.html(product);
		productDiv.append(btn);

		$('#products2').append(productDiv);

	})
});


$(document).ready(function(){

	$('#products3').on('click', '.delete', function(){
		$(this).parent().animate({
			opacity: 0
		},
		1000,
		function(){
			$(this).slideUp('slow', function(){
				$(this).remove();
			});
		}
		);


	
	})


	var products3 = [
	'iphone',
	'ipad',
	'oppo',
	'samsung',
	'Macbook pro',
	'Macbook pro',
	'Macbook pro',
	];

	products3.forEach(function(product){
		var productDiv = $('<div></div>');
		var btn = $('<button class="delete">Xoa</button>');

		productDiv.html(product);
		productDiv.append(btn);

		$('#products3').append(productDiv);

	})
});
