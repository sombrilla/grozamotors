$(document).ready(function(){

    if(document.body.clientWidth >= 755) {
		$('video').attr('autoplay', true);
	}
	else
	{
		$('video').css('display', 'none');
	}

    $(window).resize(function() {
        if(document.body.clientWidth >= 755) {
            $('video').attr('autoplay', true);
			$('video').css('display', 'initial');
        }
		else
		{
			$('video').css('display', 'none');
		}
    });
	
	var state = 0;
	
	$("#dropbuy").click(function(){
		if(!$("#comprar").is(':animated') && !$("#modelos").is(':animated') && !$("#tecnologia").is(':animated') && !$("#testdrive").is(':animated'))
		{
			switch(state)
			{
				case 0:
					$("#comprar").slideDown('normal', function(){});
					state = 1;
				break;
				
				case 1:
					$("#comprar").slideUp('normal', function(){});
					state = 0;
				break;
				
				case 2:
					$("#modelos").slideUp('normal', function(){ $("#comprar").slideDown('normal', function(){})});
					state = 1;
				break;
				
				case 3:
					$("#tecnologia").slideUp('normal', function(){$("#comprar").slideDown('normal', function(){})});
					state = 1;
				break;
				
				case 4:
					$("#testdrive").slideUp('normal', function(){$("#comprar").slideDown('normal', function(){})});
					state = 1;
				break;
			}
		}	
	});
	
	$("#dropmodel").click(function(){
		if(!$("#modelos").is(':animated') && !$("#comprar").is(':animated') && !$("#tecnologia").is(':animated') && !$("#testdrive").is(':animated'))
		{
			switch(state)
			{
				case 0:
					$("#modelos").slideDown('normal', function(){});
					state = 2
				break;
				
				case 1:
					$("#comprar").slideUp('normal', function(){ $("#modelos").slideDown('normal', function(){})});
					state = 2;
				break;
				
				case 2:
					$("#modelos").slideUp('normal', function(){});
					state = 0;
				break;
				
				case 3:
					$("#tecnologia").slideUp('normal', function(){$("#modelos").slideDown('normal', function(){})});
					state = 2;
				break;
				
				case 4:
					$("#testdrive").slideUp('normal', function(){ $("#modelos").slideDown('normal', function(){})});
					state = 2;
				break;
			}
		}	
	});
	
	$("#droptec").click(function(){
		if(!$("#tecnologia").is(':animated') && !$("#comprar").is(':animated') && !$("#modelos").is(':animated') && !$("#testdrive").is(':animated'))
		{
			switch(state)
			{
				case 0:
					$("#tecnologia").slideDown('normal', function(){});
					state = 3;
				break;
				
				case 1:
					$("#comprar").slideUp('normal', function(){ $("#tecnologia").slideDown('normal', function(){})});
					state = 3;
				break;
				
				case 2:
					$("#modelos").slideUp('normal', function(){ $("#tecnologia").slideDown('normal', function(){})});
					state = 3;
				break;
				
				case 3:
					$("#tecnologia").slideUp('normal', function(){});
					state = 0;
				break;
				
				case 4:
					$("#testdrive").slideUp('normal', function(){ $("#tecnologia").slideDown('normal', function(){})});
					state = 3;
				break;
			}
		}	
	});
	
	$("#droptest").click(function(){
		if(!$("#testdrive").is(':animated') && !$("#comprar").is(':animated') && !$("#modelos").is(':animated') && !$("#tecnologia").is(':animated'))
		{
			switch(state)
			{
				case 0:
					$("#testdrive").slideDown('normal', function(){});
					state = 4;
				break;
				
				case 1:
					$("#comprar").slideUp('normal', function(){$("#testdrive").slideDown('normal', function(){})});
					state = 4;
				break;
				
				case 2:
					$("#modelos").slideUp('normal', function(){$("#testdrive").slideDown('normal', function(){})});
					state = 4;
				break;
				
				case 3:
					$("#tecnologia").slideUp('normal', function(){ $("#testdrive").slideDown('normal', function(){})});
					state = 4;
				break;
				
				case 4:
					$("#testdrive").slideUp('normal', function(){});
					state = 0;
				break;
			}
		}	
	});

});