const load = () => {
  $(window).on("load", function () {
    $(".cssload-preloader").fadeOut("slow");
  });
};

export default load;
