document.addEventListener('DOMContentLoaded', function () {
    let location = window.location.href.split('/');
    let home = '<li><a href="index.html">ACASA</a>n"';
    let produse = '<li><a href="produse.html">PRODUSE</a>"';
    let produse_detail = '<li><a href="#">ACASA</a>"';
    switch (location[location.length - 1]) {
        case "index.html" :
            home = '<li class="active"><a href="index.html">ACASA</a>"';
            break;
        case "produse.html" :
            produse = '<li class="active"><a href="produse.html">PRODUSE</a>"';
            break;
        case "produse-details.html" :
            produse_detail = '<li class="active"><a href="#">Detalii</a>"';
            break;

    }
    let navBar =
        "<div class=\"container\">" +
        "        <div class=\"row\">" +
        "            <div class=\"col-sm-4\">" +
        "                <div class=\"logo\">" +
        "                    <a href=\"index.html\"><img src=\"HNP_IMG/HNP_logoXS.png\" alt=\"logo\"></a>" +
        "                </div>" +
        "            </div>" +
        "            <div class=\"col-sm-8\">" +
        "                <div class=\"row\">" +
        "                    <div class=\"col-sm-3\">" +
        "                        <div class=\"info-nav\">" +
        "                            <div class=\"info-nav-heading\">Phone Number</div>" +
        "                            <div class=\"info-nav-dtl\"><a href=\"tel:+40 744 774 500\">+40 744 774 500</a></div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class=\"col-sm-3\">" +
        "                        <div class=\"info-nav\">" +
        "                            <div class=\"info-nav-heading\">Email Address:</div>" +
        "                            <div class=\"info-nav-dtl\"><a href=\"mailto:office@hnp.ro\">office@hnp.ro</a></div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class=\"col-sm-3\">" +
        "                        <div class=\"info-nav\">" +
        "                            <div class=\"info-nav-heading\">Address:</div>" +
        "                            <div class=\"info-nav-dtl\">300714 Timișoara,<br> Bd. Industriilor, nr. 5</div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "            <div class=\"col-sm-10 pad-0\">" +
        "                <div class=\"navigation\">" +
        "                    <div id=\"cssmenu\">" +
        "                        <ul>" +
                                     home + "</li>" +
                                     produse + " </li>" +
        "                            <li><a href=\"#\">SERVICII</a>" +
        "                            </li>" +
        "                            <li><a href=\"#\">NOUTATI</a>" +
        "                            </li>" +
        "                            <li><a href=\"#\">CONTACT</a>" +
        "                            </li>" +
        "                        </ul>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "        <!-- search -->" +
        "        <div class=\"search\">" +
        "            <div class=\"container\">" +
        "                <input type=\"search\" class=\"search-box\" placeholder=\"Search\"/>" +
        "                <a href=\"#\" class=\"fa fa-times search-close\"></a>" +
        "            </div>" +
        "        </div>" +
        "        <!-- end search -->" +
        "        <!-- request btn -->" +
        "        <div class=\"modal fade request-model\" id=\"request-model\" role=\"dialog\">" +
        "            <div class=\"modal-dialog\" role=\"document\">" +
        "                <div class=\"modal-content\">" +
        "                    <div class=\"modal-header\">" +
        "                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span" +
        "                                aria-hidden=\"true\">&times;</span></button>" +
        "                        <h5 class=\"modal-title text-center\">Request A Quote</h5>" +
        "                    </div>" +
        "                    <div class=\"modal-body request-model-body text-center\">" +
        "                        <form>" +
        "                            <div class=\"form-group\">" +
        "                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Your Name\">" +
        "                            </div>" +
        "                            <div class=\"form-group\">" +
        "                                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Your Email\">" +
        "                            </div>" +
        "                            <div class=\"form-group\">" +
        "                                <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Enter Subject\">" +
        "                            </div>" +
        "                            <div class=\"form-group\">" +
        "                                <textarea id=\"message\" name=\"message\" rows=\"6\" placeholder=\"Message\"></textarea>" +
        "                            </div>" +
        "                            <button type=\"submit\" class=\"btn btn-default\">Submit Request</button>" +
        "                        </form>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "        <!-- end request btn -->" +
        "    </div>";
    var containerId = document.getElementById("nav-bar");
    containerId.innerHTML = navBar;
});