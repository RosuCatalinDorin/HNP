<?php

require_once("php/rest_call.php")

?>

<!DOCTYPE html>
<!--
**********************************************************************************************************
    Copyright (c) 2017 .
**********************************************************************************************************  -->
<!-- 
Template Name: Industrial - Industry HTML Template
Version: 1.0.0
Author: udayraj
-->
<!--[if IE 8]>
<html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]>
<html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]> -->
<html lang="en">
<!-- <![endif]-->
<!-- head -->
<head>
    <title>HNP Romania</title>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta name="description" content="Industrial"/>
    <meta name="keywords" content="HNP">
    <meta name="author" content="udayraj"/>
    <meta name="MobileOptimized" content="320"/>
    <link rel="icon" type="image/icon" href="HNP_IMG/HNP_logoXS.png"> <!-- favicon-icon -->
    <!-- theme style -->


    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/> <!-- bootstrap css -->
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/> <!-- fontawesome css -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,500i,700,900" rel="stylesheet"> <!-- google font -->
    <link rel="stylesheet" type="text/css" href="css/menumaker.css">
    <link href="css/themify-icons.css" rel="stylesheet" type="text/css"/> <!-- themify icons css -->
   <!-- owl carousel css -->
    <link href="css/magnific-popup.css" rel="stylesheet" type="text/css"/> <!-- magnify popup css -->
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link href="css/videothem.css" rel="stylesheet" type="text/css"/>
    <link href="css/myCss.css" rel="stylesheet" type="text/css"/>
    <!-- custom css -->
    <!-- end theme style -->
</head>
<!-- end head -->
<!--body start-->
<body>
<!--  top bar -->

<!--  end top bar -->
<!--  navigation -->
<!--<section class="navbar custom-navbar" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>

            &lt;!&ndash; lOGO TEXT HERE &ndash;&gt;
            <img src="HNP_IMG/HNP_logoXS.png" alt="logo"/>

        </div>

        &lt;!&ndash; MENU LINKS &ndash;&gt;
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-nav-first">
                <li><a href="#home" class="smoothScroll">ACASA</a></li>
                <li><a href="#about" class="smoothScroll">DESPRE</a></li>
                <li><a href="#menuPizza" class="smoothScroll">PIZZA</a></li>
                <li><a href="#menuPasta" class="smoothScroll">Paste</a></li>
                <li><a href="#menuSalads" class="smoothScroll">Salate</a></li>
                <li><a href="#contact" class="smoothScroll">Contact</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Comandă la:  <i class="fa fa-phone"></i> 0752 794 607</a></li>
            </ul>
        </div>

    </div>
</section>-->
<div class="nav-bar custom-navbar navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 logoContainer" >
          <div class="logo">
            <a href="index.php"><img src="HNP_IMG/HNP_logoXS.png" alt="logo"/></a>
          </div>
        </div>
        <div class="col-sm-10 pad-0">
          <div class="navigation">
            <div class = "contentNavigation" style="display: flex">
               <div class="logoNavigation">
                   <img src="HNP_IMG/HNP_logoXS.png"  class="logoNavBar"  alt="logo">
               </div>
                <div id="cssmenu" >
                    <ul>
                        <li><a href="index.php">ACASA</a></li>
                        <li><a href="produse.html">PRODUSE</a></li>
                        <li><a href="servicii.html">SERVICII</a></li>
                        <li><a href="noutati.html">NOUTATI</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- search -->
      <div class="search">
        <div class="container">
          <input type="search" class="search-box" placeholder="Search" />
          <a href="#" class="fa fa-times search-close"></a>
        </div>
      </div>
      <!-- end search -->
      <!-- request btn -->

      <div class="modal fade request-model" id="request-model" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 class="modal-title text-center">Request A Quote</h5>
            </div>
            <div class="modal-body request-model-body text-center">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Enter Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-default">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- end request btn -->
    </div>
  </div>
<!--<div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="index.html"><img src="HNP_IMG/HNP_logoXS.png" alt="logo"/></a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Profile</a>
                <a href="#" class="nav-item nav-link">Messages</a>
                <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </nav>
</div>-->
<!--  end navigation -->

    <div class="container">
        <video class ="video row video-container"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="multe"
          loop="loop"
        >
          <source
            src="videos/video1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
<!--  end slider -->
<!-- solutions  -->
<section id="features" class="features-main-block">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="features-block text-center">
                    <div class="features-icon">
                        <span class="ti-medall"></span>
                    </div>
                    <h6 class="features-heading">Valorii</h6>
                    <p>Valorile rezultate din activitatea companiei și cultura organizației noastre sunt călăuzite de o
                        serie de principii care definesc modul în care echipa HNP lucrează zi de zi în beneficiul
                        clienților săi.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="features-block text-center">
                    <div class="features-icon">
                        <span class="ti-truck"></span>
                    </div>
                    <h6 class="features-heading">Misiune</h6>
                    <p>Misiunea pe care ne-am asumat-o, încă de la începuturi, este de a oferi nu doar scule de înaltă
                        performanță pentru industria mecanică prelucrătoare, ci și servicii de cea mai înaltă
                        calitate.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="features-block text-center">
                    <div class="features-icon">
                        <span class="ti-world"></span>
                    </div>
                    <h6 class="features-heading">Viziune</h6>
                    <p>Vrem să devenim un lider de piață pe obiectul nostru de activitate și un model în ceea ce
                        privește bunele practici ale domeniului în România, în relația cu furnizorii, clienții și
                        angajatii nostri.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end solutions  -->
<!-- featured product  -->
<!-- end featured product  -->
<!-- quote -->
<!-- end quote  -->
<!-- about -->
<section id="about" class="about-main-block">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="about-block">
                    <h3 class="about-heading">Despre <a style="color: #ECC53F">HNP</a></h3>
                    <p>Suntem unici distribuitori pe piața din România ai reputaților producători BASS, EBERLE, SCM,
                        SMICUT, SPECIALINSERT, TECNOSPIRO si parteneri WALTER pentru zona de Vest și Sud Vest a
                        României.</p> <br>
                    <p>In cadrul grupului HNP activează cele două companii: HNP Techdevices și HNP Tools.</p>
                    <br>
                    <p>Compania noastră a întreprins în anul 2011 demersul voluntar de certificare pentru implementarea
                        cu success a Sistemul de Management al Calității conform standardului internațional ISO
                        9001:2008.</p>
                    <a href="about-us.html" class="plain-btn">Mai multe</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="about-features-block">
                    <div class="row">
                        <div class="col-xs-3">
                            <div class="about-features-icon">
                                <span class="ti-ruler-pencil"></span>
                            </div>
                        </div>
                        <div class="col-xs-9">
                            <div class="about-features-dtl">
                                <h6 class="about-features-heading">Soluții tehnice</h6>
                                <p>Oferim soluții tehnice optime și ”scule la tema”, acolo unde situația o impune, prin
                                    relația directă cu producatori specializați.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-features-block">
                    <div class="row">
                        <div class="col-xs-3">
                            <div class="about-features-icon">
                                <span class="ti-user"></span>
                            </div>
                        </div>
                        <div class="col-xs-9">
                            <div class="about-features-dtl">
                                <h6 class="about-features-heading">Consulțanta</h6>
                                <p>Oferim consultanță tehnică permanentă, pentru optimizarea procesului de producție</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-features-block">
                    <div class="row">
                        <div class="col-xs-3">
                            <div class="about-features-icon">
                                <span class="ti-medall"></span>
                            </div>
                        </div>
                        <div class="col-xs-9">
                            <div class="about-features-dtl">
                                <h6 class="about-features-heading">Experiența</h6>
                                <p>Colaborăm cu ingineri cu un înalt grad de pregătire în domeniu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 hidden-sm">
                <div class="about-img">
                    <img src="HNP_IMG/hnp-ofiice/caruso2-1024x683.jpg" class="img-responsive" alt="about">
                </div>
            </div>
        </div>
    </div>
</section>
<section id="featured" class="featured-main-block">
    <div class="section">
    </div>
    <div class="container">
        <div id="featured-slider" class="featured-slider">
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l1.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                <!-- <div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l2.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l3.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l4.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l5.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l6.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l7.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l8.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
            <div class="item featured-block">
                <div class="featured-img">
                    <img src="HNP_IMG/parteners/l9.png" style="height: 60px" class="img-responsive" alt="featured">
                    <div class="overlay-bg"></div>
                </div>
                 <!--<div class="featured-dtl">
                    <h5 class="featured-heading">Research of Aviation Materials</h5>
                    <a href="projects-details.html" class="btn btn-default">View Project</a>
                </div>-->
            </div>
        </div>
    </div>
</section>
<!-- end about  -->
<!-- testimonials  -->
<!-- end testimonials  -->
<!-- counter  -->
<!-- end counter  -->
<!-- team  -->

<!-- end team  -->
<!--  clients -->

<!--  end clients -->
<!--  call out -->
<!--  end call out -->
<!--  footer -->
<footer id="footer" class="footer-main-block" style="background-image: url('images/bg/footer-bg.jpg')">

</footer>
<!--  end footer -->
<!-- component-->
<!-- <script src="commun/NavBar.js"></script> -->

<script src="commun/Footer.js"></script>
<script src="actions/home/Slide.js"></script>
<!-- end component-->
<!-- jquery -->
<script type="text/javascript" src="js/jquery.min.js"></script> <!-- jquery library js -->
<script type="text/javascript" src="js/bootstrap.min.js"></script> <!-- bootstrap js -->
<script type="text/javascript" src="js/menumaker.js"></script> <!-- menumaker js -->
<!-- owl carousel js -->
<script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script> <!-- magnify popup js -->
<script type="text/javascript" src="js/jquery.elevatezoom.js"></script> <!-- product zoom js -->
<script type="text/javascript" src="js/jquery.ajaxchimp.js"></script> <!-- mail chimp js -->
<script type="text/javascript" src="js/smooth-scroll.js"></script> <!-- smooth scroll js -->
<script type="text/javascript" src="js/waypoints.min.js"></script>
<!-- facts count js required for jquery.counterup.js file -->
<script type="text/javascript" src="js/jquery.counterup.js"></script> <!-- facts count js-->
<script type="text/javascript" src="js/price-slider.js"></script> <!-- price slider / filter js-->
<script src="../node_modules/chart.js/dist/Chart.js"></script>
 <!-- custom js -->
<!-- My JavaScript -->

<script type="text/javascript" src="ajaxCall/makeRekuest.js"></script> <!-- bootstrap js -->
<script type="text/javascript" src="ajaxCall/createBodyRequest.js"></script>

<!-- END My JavaScript -->
<!-- end jquery -->
<script type="text/javascript" src="js/functions.js"></script>
<script>
    Preloader.showPreloader()
</script>
</body>
<!--body end -->
</html>