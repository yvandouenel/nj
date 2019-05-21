jQuery(function ($) {
    console.log("hello boy");
    
    $(".page-node-type-article .field--name-field-image-depuis-crealead .field--item").each(function(){
        $("<img />",{
            src: $(this).text()
        }).insertAfter($(this));
        $(this).hide();
    });
    $(".path-frontpage .field--name-field-image-depuis-crealead, .path-articles .field--name-field-image-depuis-crealead").each(function(){
        $("<img />",{
            src: $(this).text()
        }).insertAfter($(this));
        $(this).hide();
    });
});