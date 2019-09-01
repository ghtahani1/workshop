jQuery(document).ready(function(){


	if(jQuery(window).width() <= 1000){
		  var timer = setInterval( showDiv, 5000);

		  var counter =0;
		  function showDiv() {
					jQuery('.sellParts'+(counter+1)).css('display','none');
					jQuery('.sellParts'+(counter+2)).css('display','block');
					counter++;

		 //   jQuery('#sellParts'+counter-1).css('display','none');
			//	jQuery('#sellParts'+counter).css('display','block');

		   /*   .filter( function() { return this.id.match('sellParts' + counter);console.log(this.id.match('sellParts' + counter)); })
			  .slideDown();1*/
			if(counter == 3){
					counter = 0;
					jQuery('.sellParts1').css('display','block');
				}
		  }
	}

	// var scroll_start = jQuery(this).scrollTop();


	// if(scroll_start >= 100) {

	//   jQuery(".main-nav").addClass(' scrolled');

	// }

	// jQuery(window).scroll(function(){

	// 	var scroll_start = jQuery(this).scrollTop();

	// 	//console.log(scroll_start);

	// 	if(scroll_start >= 100) {
	// 		 jQuery(".main-nav").addClass(' scrolled');

	// 	}else{

	// 		jQuery(".main-nav").removeClass(' scrolled');

	// 	}

	// });

	jQuery("#sellParts").on('click',function(){
		jQuery.fn.fullpage.moveSlideLeft();
		//jQuery(".fp-controlArrow.fp-prev").trigger('click');
	});

	jQuery("#reqParts").on('click',function(){
			jQuery.fn.fullpage.moveSlideRight();
	//	jQuery(".fp-controlArrow.fp-next").trigger('click');
	});
	jQuery("#sellPartsBack").on('click',function(){
			jQuery.fn.fullpage.moveSlideRight();
	//	jQuery(".fp-controlArrow.fp-next").trigger('click');
	});
	jQuery("#reqPartsBack").on('click',function(){
			jQuery.fn.fullpage.moveSlideLeft();
	//	jQuery(".fp-controlArrow.fp-next").trigger('click');
	});
	if(jQuery(window).width() > 1000){
		jQuery(".arrows-notice").fadeIn().animate({ right: 0 }, 1000);

		setTimeout(hideNotification, 8000);


		function hideNotification() {
		  jQuery(".arrows-notice").animate({ right: '-200px' }, 1000);
			jQuery(".arrows-notice").fadeOut("slow");
		}
	}
	
	jQuery(".uploadIco .fa-camera").on("click touch", function(){
		jQuery("#vinUpload").trigger('click');
	});
	
       jQuery("#vinUpload").on('change', function() {
          //Get count of selected files
          var countFiles = jQuery(this)[0].files.length;
          var imgPath = $(this)[0].value;
          var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
          var image_holder = jQuery("#image-holder");
          image_holder.empty();
          if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
              //loop for each file selected for uploaded.
              for (var i = 0; i < countFiles; i++) 
              {
                var reader = new FileReader();
                reader.onload = function(e) {
                  jQuery("<img />", {
                    "src": e.target.result,
                    "class": "img-responsive thumbnail"
                  }).appendTo(image_holder);
                }
                image_holder.show();
                reader.readAsDataURL($(this)[0].files[i]);
              }
            } else {
              alert("This browser does not support FileReader.");
            }
          } else {
            alert("Pls select only images");
          }
        });
		

	triggerCam();
	//deleteItems();
		
	jQuery('#addMore').on('click touch',function(e){
		
		e.preventDefault();
		
		jQuery('.partItemCont').append('<div class="row items"><div class="form-group col-md-6"><div class="inlineLabel"><label for="">Details <font style="color:red;">*</font></label></div><input name="pdname[]"type="text" class="form-control" required/></div><div class="form-group col-md-2"><div class="inlineLabel"><label for="">Qty <font style="color:red;">*</font></label></div><select name="pdqty[]" class="form-control"><option value="1" selected>1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><div class="form-group col-md-1"><div class="spacer-20 hidden-xs hidden-sm"></div><div class="uploadPartsIco" ><i class="fas fa-camera fa-2x"></i></div><input type="file" name="partUpload[]" class="partUpload" style="display:none;"></div><div class="form-group col-md-1"><div class="spacer-20 hidden-xs hidden-sm"></div><div class="deletePartIco" ><i class="fas fa-trash-alt fa-2x"></i></div></div><div class="form-group col-md-2"><div class="partPreview"></div></div></div>');
		
		triggerCam();
		deleteItems();
	});
	
	

		
	jQuery("#mobileEntry").on('submit', function(e){
		
		e.preventDefault();
		jQuery(this).html('<div class="form-group"><label class="">Authentication</label><div class="input-group"><div class="input-group-addon">Code</div><input type="text" class="form-control" id="code" placeholder="XXXX" required/></div></div><div class="form-group"><a href="new-user.html" class="btn btn-primary">Submit</a></div><div class="spacer-20"></div>');
		
		
	});
	



	$(window).scroll(function(){

		console.log($(this).scrollTop); 
		if(  >=90 )
		{
			
				$(".main-nav").css("background-color","black");
			}
			
			else {
				$(".main-nav").css("background-color","transparent");
		
			}
		
			});






	
});

function triggerCam(){
	
	jQuery(".uploadPartsIco .fa-camera").each(function(){
			
		jQuery(this).unbind('click touch');
		
		jQuery(this).on('click touch',function(){
			
			var indexParent = jQuery(this).parents('.items').index();
			
			jQuery(".items:eq("+indexParent+") .partUpload").trigger("click");
					
			jQuery(".items:eq("+indexParent+") .partUpload").on('change', function(){
			
				var countFiles = jQuery(this)[0].files.length;
				var imgPath = jQuery(this)[0].value;
				var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
				var image_holder = jQuery(".items:eq("+indexParent+") .partPreview");
				
				image_holder.empty();
				
				if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
					if (typeof(FileReader) != "undefined") {

						for (var i = 0; i < countFiles; i++){
						var reader = new FileReader();
						reader.onload = function(e) {
						jQuery("<img />", {
						"src": e.target.result,
						"class": "img-responsive thumbnail"
						}).appendTo(image_holder);
						}
						image_holder.show();
						reader.readAsDataURL($(this)[0].files[i]);
						}
						
					}else{
						
						alert("This browser does not support FileReader.");
					}
					
				  } else {
					  
					alert("Pls select only images");
				  }
				  
			});		
			
		});
		
	});
	
}

function deleteItems(){
	
	jQuery('.deletePartIco .fa-trash-alt').each(function(){
		
		jQuery(this).unbind('click touch');
		
		jQuery(this).on('click touch',function(){
			
			var indexParent = jQuery(this).parents('.items').index();
			
			jQuery('.items:eq('+indexParent+')').remove();
			
		});
		
	});
}


