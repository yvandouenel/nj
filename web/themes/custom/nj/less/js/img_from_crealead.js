jQuery(function ($) {
    console.log("hello boy");
    
    $(".field--name-field-image-depuis-crealead").each(function(){
        console.log( $(this).text());
        
        $("<img />",{
            src: $(this).text()
        }).insertAfter($(this));
        $(this).hide();
    });
});