$(document).ready(function(){
	$('.ui.vertical.menu').toggle();  //default close
	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.vertical.menu').slideToggle();
	});
    
	$('.ui.dropdown').dropdown();

	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$('a.abgne_gotoheader').click(function(){
		got_to(0);
	});

	//簡歷
	$('#cv_item').click(function(){
		var hight_val =  0;
		got_to(hight_val);
	})

	//成果作品
	$('#achievement_item').click(function(){
		var hight_val =  $("#achievement_div").offset().top - 70;
		got_to(hight_val);
	})

	//專案計畫
	$('#project_item').click(function(){
		var hight_val =  $("#project_div").offset().top - 70;
		got_to(hight_val);
	})

	//學術發表
	$('#publication_item').click(function(){
		var hight_val =  $("#publication_div").offset().top - 70;
		got_to(hight_val);
	})

	//聯絡我
	$('#contact_item').click(function(){
		var hight_val =  $("#contact_div").offset().top -70;
		got_to(hight_val);
	})


	//mobile:簡歷
	$('#cv_item_m').click(function(){
		var hight_val =  0;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:成果作品
	$('#achievement_item_m').click(function(){
		var hight_val =  $("#achievement_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:專案計畫
	$('#project_item_m').click(function(){
		var hight_val =  $("#project_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:學術發表
	$('#publication_item_m').click(function(){
		var hight_val =  $("#publication_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:聯絡我
	$('#contact_item_m').click(function(){
		var hight_val =  $("#contact_div").offset().top -70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})


	//return to top
	$('#top_btn').click(function(){
		var hight_val =  0;
		got_to(hight_val);
	})


	//go to the section
	function got_to(hight_from_top){
		$body.animate({
					scrollTop: hight_from_top
				}, 600);

		return false;
	}

	//mobile menu 收合效果
	$('#mobile_icon').click(function(){
		// var p = $('main').css("background-color", "yellow");
	 //    	p.hide(1500).show(1500);
	 //    	p.queue(function() {
		//       	p.css("background-color", "red");
		// 	});

		//$('#mask_modal').modal('show');

	})


	//=====create cv list=====
	var results = cv;
	$('#cv_image').append('<img src="'+ results[0].image +'">');
	$('#cv_introduction').append('<h2>'+results[0].name+'</h2>', '<p>'+results[0].introduction+'</p>');
	$('#birthday').append('<p>'+ results[0].birthday +'</p>');
	var edu_background = results[0].edu_background;
	for(k=0; k<edu_background.length; k++){
		$('#edu_background').append('<p>'+ edu_background[k] +'</p>');
	}
	var work = results[0].work;
	for(k=0; k<work.length; k++){
		$('#work').append('<p>'+ work[k] +'</p>');
	}
	var intern = results[0].intern;
	for(k=0; k<intern.length; k++){
		$('#intern').append('<p>'+ intern[k] +'</p>');
	}
	var dev_skill = results[0].dev_skill;
	for(k=0; k<dev_skill.length; k++){
		$('#dev_skill').append('<p>'+ dev_skill[k] +'</p>');
	}
	var tool = results[0].tool;
	for(k=0; k<tool.length; k++){
		$('#tool').append('<p>'+ tool[k] +'</p>');
	}
	$('#phone').append('<i class="large phone icon"></i>'+ results[0].phone);
	$('#email').append('<i class="large mail icon"></i>'+ results[0].email);
	$('#facebook').append('<i class="large facebook square icon"></i><a href="'+results[0].facebook+'">'+results[0].facebook+'</a>');
	$('#website').append('<i class="large browser icon"></i><a href="'+results[0].website+'">'+results[0].website+'</a>');
	$('#address').append('<i class="large marker icon"></i>'+ results[0].address);



	//=====create achievement list=====
	var results = achievement;
	var card_htm = '';
	Object.keys(results).map(function (k) {
		var title = results[k].title;
		var introduction = results[k].introduction;
		var description = results[k].description;
		var link_public = results[k].link_public;
		var link = results[k].link;
		var image = results[k].image;

		var header_div = '<div class="content"><h3>'+title+'</h3>';

		var masterimg_div ='<div class="image" style="height:50xp"><div class="img_slder">';
		for (i=0; i<image.length; i++){
			masterimg_div += '<img class="ui rounded image" src="'+ image[i] +'" onClick="showdetail(\''+ title +'\',\'achievement\')">';
		}
		masterimg_div += '</div></div></div>';
            
		var des_div = '<div class="content">'+ introduction +'</div>';

		var control_div ='<div class="extra content"><div class="ui blue two buttons"><button class="ui Info button" onClick="showdetail(\''+ title +'\',\'achievement\')"><i class="info circle icon"></i>詳細</button>';
		if (link_public == 1){
			control_div +='<a class="ui linkify button" target="_blank" href="'+ link +'"><i class="linkify icon"></i>連結</a>';
		}else{
			control_div +='<a class="ui linkify button" onClick="alert(\'屬於內部系統，請見詳細資訊\')"><i class="linkify icon"></i>連結</a>';
		}
		control_div += '</div></div>'

		var card_item = '<div class="ui  card">'+header_div+masterimg_div+des_div+control_div+'</div>';
		card_htm += card_item;
	});
	$('#achievement_list').append(card_htm);
		

		//=====create project list=====
		var results = project;
		var card_htm = '';
		Object.keys(results).map(function (k) {
            var title = results[k].title;
            var introduction = results[k].introduction;
            var description = results[k].description;
            var link_public = results[k].link_public;
            var link = results[k].link;
            var image = results[k].image;

            var header_div = '<div class="content"><h3>'+title+'</h3>';

            var masterimg_div ='<div class="image" style="height:50xp"><div class="img_slder">';
            for (i=0; i<image.length; i++){
				masterimg_div += '<img class="ui rounded image" src="'+ image[i] +'" onClick="showdetail(\''+ title +'\',\'project\')">';
			}
            masterimg_div += '</div></div></div>';
            
            var des_div = '<div class="content">'+ introduction +'</div>';

            var control_div ='<div class="extra content"><div class="ui blue two buttons"><button class="ui Info button" onClick="showdetail(\''+ title +'\',\'project\')"><i class="info circle icon"></i>詳細</button>';
            // if (link_public == 1){
           	// 	control_div +='<a class="ui linkify button" target="_blank" href="'+ link +'"><i class="linkify icon"></i>連結</a>';
            // }else{
            // 	control_div +='<a class="ui linkify button" onClick="alert(\'屬於內部系統，請見詳細資訊\')"><i class="linkify icon"></i>連結</a>';
            // }
            control_div += '</div></div>';

            var card_item = '<div class="ui  card">'+header_div+masterimg_div+des_div+control_div+'</div>';
            card_htm += card_item;
        });
		$('#project_list').append(card_htm);

		$('.img_slder').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2500,
			arrows: false
		});

	//=====create publication list=====
		var results = publication;
		var message_htm = '';
		Object.keys(results).map(function (k) {
            var author = results[k].author;
            var description = results[k].description;
            var type = results[k].type;

            var author_div = '<div class="header">' + author + '</div>';
            var description_p = '<p>' + description + '</p>';

            message_htm += '<div class="ui medium icon message" style="background-color: #FFFFFF"><i class="blue file text icon"></i><div class="content">';
            message_htm += author_div + description_p + '</div></div>';
        });

		$('#publication_col').append(message_htm);
});


function showdetail(title_str, type_str){
	var results_json;
	switch(type_str) {
	    case 'achievement':
	        results_json = achievement;
	        break;
	    case 'project':
	        results_json = project;
	        break;
	}

	var desc_str, image_list;
	Object.keys(results_json).map(function (k) {
		if (title_str == results_json[k].title){
			desc_str = results_json[k].description;
			image_list = results_json[k].image;
		}
     });

	$('#achievement_modal .header').html(title_str);
	$('#achievement_modal .content').html(desc_str);

	$('#achievement_modal .image').html('');  //default
	for (i=0; i<image_list.length; i++){
		$('#achievement_modal .image').append('<div class="column"><a class="modal-image-link" href="'+image_list[i]+'" data-lightbox="roadtrip"><img class="modal-image" src="'+ image_list[i] +'"></a></div>');
	}

	$('#achievement_modal').modal('show');
}
