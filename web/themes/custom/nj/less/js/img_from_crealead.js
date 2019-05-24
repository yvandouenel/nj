jQuery(function ($) {
    console.log("dans img_from crealead");

    $(".field--name-field-image-depuis-crealead .field--item").each(function(){
      console.log("Dans premier each");
        $("<img />",{
            src: $(this).text()
        }).insertAfter($(this));
        $(this).hide();
    });
    $(".path-frontpage .field--name-field-image-depuis-crealead, .field--name-field-image-depuis-crealead").each(function(){
      console.log("Dans second each");
      $("<img />",{
            src: $(this).text()
        }).insertAfter($(this));
        $(this).hide();
    });
});