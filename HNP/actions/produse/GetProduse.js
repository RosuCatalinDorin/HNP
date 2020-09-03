document.addEventListener("DOMContentLoaded", function () {
  let data = [
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img:
        "https://s34561.pcdn.co/wp-content/uploads/2020/05/pda-card-image-370x180-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img:
        "https://s34561.pcdn.co/wp-content/uploads/2019/08/NYU-image-370x180-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "https://www.hnp.ro/wp-content/uploads/2016/04/Dueci_prod.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
    {
      title: "Title",
      description:
        "HNP_IMG/solutions/sol-1.jpgti-hand-point-upti-hand-point-upHNP_IMG/solutions/sol-1.jpgti-hand-",
      img: "HNP_IMG/solutions/sol-1.jpg",
    },
  ];
  let startProduse = '<div class="row">';

  data.forEach(function (produs) {
    startProduse += '<div style="margin-top: 10px" class="col-md-4 col-sm-6">';
    startProduse += '   <div class="solution-block">';
    startProduse += '        <div class="solution-img">';
    startProduse +=
      '        <img width="370" height="189" src="' +
      produs.img +
      '" alt="solutions">';
    startProduse +=
      '        <div class="overlay-bg"><a href="produse-details.html"><i class="ti-hand-point-up"></i></a></div>';
    startProduse += "        </div>";
    startProduse += '        <div class="solution-dtl">';
    startProduse +=
      '           <a href="produse-details.html"><h5 class="solution-heading">' +
      produs.title +
      "</h5></a>";
    startProduse += "           <p>" + produs.description + "</p>";
    startProduse +=
      '           <a href="produse-details.html" class="plain-btn">View More</a>';
    startProduse += "        </div>";
    startProduse += "   </div>";
    startProduse += "</div>";
  });
  startProduse += "</div>";
  let containerId = document.getElementById("containerProduse");
  containerId.innerHTML = startProduse;
});
