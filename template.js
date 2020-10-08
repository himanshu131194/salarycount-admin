export default () => {
    return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Detail | Basik - Bootstrap 4 Web Application</title>
                    <meta name="description" content="Responsive, Bootstrap, BS4">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <title>Course - Courses Listing Page | Front - Responsive Website Template</title>
                    <!-- Font -->
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap" rel="stylesheet">
                    <!-- CSS Implementing Plugins -->
                    <link rel="stylesheet" href="/css/all.css">
                    <link rel="stylesheet" href="https://gostreamlabs.com/front/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css">
                    <link rel="stylesheet" href="https://gostreamlabs.com/front/assets/vendor/fancybox/dist/jquery.fancybox.min.css">
                    <link rel="stylesheet" href="https://gostreamlabs.com/front/assets/vendor/quill/dist/quill.snow.css">
                    <!-- CSS Front Template -->
                    <link rel="stylesheet" href="/css/theme.css">
                    </head>
                <body class="layout-column">
                        <div id="root"></div>
                        <script type="text/javascript" src="/dist/bundle.js"></script>


  <!-- JS Global Compulsory -->
  <script src="https://gostreamlabs.com/front/assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

  <!-- JS Implementing Plugins -->
  <script src="https://gostreamlabs.com/front/assets/vendor/hs-header/dist/hs-header.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/hs-go-to/dist/hs-go-to.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/hs-unfold/dist/hs-unfold.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/hs-sticky-block/dist/hs-sticky-block.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/fancybox/dist/jquery.fancybox.min.js"></script>
  <script src="https://gostreamlabs.com/front/assets/vendor/clipboard/dist/clipboard.min.js"></script>

  <!-- JS Front -->
  <script src="https://gostreamlabs.com/front/assets/js/hs.core.js"></script>
  <script src="https://gostreamlabs.com/front/assets/js/hs.fancybox.js"></script>
  <script src="https://gostreamlabs.com/front/assets/js/hs.clipboard.js"></script>
  <!-- JS Plugins Init. -->
  <script>
    $(document).on('ready', function () {
      // initialization of header
      var header = new HSHeader($('#header')).init();

      // initialization of mega menu
      var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();

      // initialization of unfold
      var unfold = new HSUnfold('.js-hs-unfold-invoker').init();

      // initialization of fancybox
      $('.js-fancybox').each(function () {
        var fancybox = $.HSCore.components.HSFancyBox.init($(this));
      });

      // initialization of sticky blocks
      $('.js-sticky-block').each(function () {
        var stickyBlock = new HSStickyBlock($(this)).init();
      });

      // initialization of clipboard
      $('.js-clipboard').each(function() {
        var clipboard = $.HSCore.components.HSClipboard.init(this);
      });

      // initialization of go to
      $('.js-go-to').each(function () {
        var goTo = new HSGoTo($(this)).init();
      });

    });
  </script>
                </body> 
            </html>`  
}


