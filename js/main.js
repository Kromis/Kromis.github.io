var myMain = function() 
{
	var clicked = false;

// This section of code is for the project home page

	$('.portfolio-toggle').click(function()
	{
		var currentProject = $(this);			
		$("#portfolio-home").toggleClass("active-project");
		
		var projID = currentProject.attr('id');
		var proj = $(".portfolio-proj#"+projID);
		proj.fadeIn(200).toggleClass("active-project")

		console.log("Clicked should be true. Clicked is: " + clicked);
			console.log("proj display should be none. proj display is: " + proj.css('display'));
		if((proj.css('display') == 'block') && (clicked == true))
		{
			proj.css('display', 'none');
			
		}

		clicked = !clicked;
		
	});

	$('.portfolio-toggle').hover(function()
	{
		if($(this).siblings().css('display') != 'none')
		{
			$(this).siblings().fadeTo(0, 0.5);
		}
		else
		{
			$(this).fadeTo(0, 0.5);
		}
		
	}, 
	function()
	{
		if($(this).siblings().css('display') != 'none')
		{
			$(this).siblings().fadeTo(0, 1);
			if(clicked == false)
			{
				$(this).fadeTo(0, 1);
			}
		}
		else
		{
			$(this).fadeTo(0, 1);
		}
	});	


};

$(document).ready(myMain);