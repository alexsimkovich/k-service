/**
 * Created by Alex.Simkovic on 19.02.2015.
 */

function setSearchVerticallyCenter() {
  var h = $(".form-summoner_search").innerHeight();
  $(".form-summoner_search").css("margin-top",-(h/2) + "px");
}

function toggleCat() {
  $(document).on("click",".category-toggle_btn",function(ev){
    ev.preventDefault();
    $(this).addClass("open");
    $(this).closest(".category-block_list").find("i").removeClass("fa-minus").addClass("fa-plus");
    $(this).closest(".category-block_list").find(".subcategory-block").slideUp();
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(this).parent().find(".subcategory-block").slideDown();
  });
}

$(document).ready(function(e){
  $('.search-panel .dropdown-menu').find('a').click(function(e) {
    e.preventDefault();
    var param = $(this).attr("href").replace("#","");
    var concept = $(this).text();
    $('.search-panel span#search_concept').text(concept);
    $('.input-group #search_param').val(param);
  });

  /*Open/hide reg/auth modal forms*/

  $(document).on("click","#auth", function (ev) {
    ev.stopPropagation();
    $(this).parent().addClass("collapsed");
    $(this).next().fadeIn();
    $(this).closest("ul").find(".reg-form").fadeOut();
  });

  $(document).on("click", function (e) {
    var target = $(e.target);
    if (!target.is('.auth-form') && !target.is('input') && !target.is('.form-horizontal')) {
      $("#auth").parent().removeClass("collapsed");
      $("#auth").next().fadeOut();
    }

    //$("#auth").next().fadeOut();
  });

  $(document).on("click","#reg", function (ev) {
    ev.stopPropagation();
    $(this).parent().addClass("collapsed");
    $(this).next().fadeIn();
    $(this).closest("ul").find(".auth-form").fadeOut();
  });

  $(document).on("click", function (e) {
    var target = $(e.target);
    if (!target.is('.reg-form') && !target.is('input') && !target.is('.form-horizontal')) {
      $("#reg").parent().removeClass("collapsed");
      $("#reg").next().fadeOut();
    }
  });

  $("#avatar").change(function() {
    var fileinput = this;
    if (fileinput.files && fileinput.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $(fileinput).parent().parent().find('img').attr('src', e.target.result);
      }

      reader.readAsDataURL(fileinput.files[0]);
    }
  });

  setSearchVerticallyCenter();
  toggleCat();
});



