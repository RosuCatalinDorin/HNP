var newsComponent = (function () {
    let component ="";

    return {
        creatNewsDetails: (response) => {
            response.forEach(function (news) {
                component +='<div style="padding-top: 60px" class="news-list-block">';
                component +=news.content;
                component +='</div>';
            });
            return component;
        },
        cardNews:(data)=>{
            component ="";
            data.forEach(function (news) {
                debugger;
            component +='<div>'
            component +='    <div class="panel panel-default">'
            component +='        <div class="panel-body">'
            component +='            <div class="media">'
            component +='                <div class="media-left imgCard">'
            component +='                    <a href="#">'
            component +='                        <img id="imgCardNews" class="media-object" src="'+news.img_path+'" alt="Kurt">'
            component +='                    </a>'
            component +='                </div>'
            component +='                <div class="media-body textCard">'
            component +='                <h4 class="media-heading">'+news.title+'</h4>'
            component +=                 news.description
            component +='                <div class="clearfix"></div>'
            component +='                <div class="btn-group" role="group" id="BegeniButonlari">'
            component +='                    <a href="noutatiDetalii.html?id='+news.id+'" ><span class="glyphicon glyphicon-circle-arrow-right"></span> Vezi detalii</a>'
            component +='                </div>'
            component +='               </div>'
            component +='            </div>'
            component +='            <div style="padding-left: 95%;">'
            component +='               <span style="padding-top: 10px" class="glyphicon glyphicon-eye-open"></span>'
            component +='               <span style="padding-top: 10px" class="text-justif"> '+news.views+'</span>'
            component +='           </div>'
            component +='        </div>'
            component +='    </div>'
            component +='</div>'
            });
            return component;
        },
        cardNewsNew:(data)=>{
            component ="";
            data.forEach(function (news) {
                debugger;
            component +='<div class="blog-card">'
            component +='    <div class="meta">'
            component +='      <div class="photo" style="background-image: url('+news.img_path+')"></div>'
            component +='      <ul class="details">'
            component +='        <li class="author"><a href="#">'+news.views+'</a></li>'
            component +='        <li class="date">'+news.date_add+'</li>'
            component +='        <li class="tags">'
            component +='          <ul>'
            component +='            <li><a href="#">Learn</a></li>'
            component +='            <li><a href="#">Code</a></li>'
            component +='            <li><a href="#">HTML</a></li>'
            component +='            <li><a href="#">CSS</a></li>'
            component +='          </ul>'
            component +='        </li>'
            component +='      </ul>'
            component +='    </div>'
            component +='    <div class="description">'
            component +='      <h1>'+news.title+'</h1>'
            component +='      <h2>Opening a door to the future</h2>'
            component +='      <p>  '+news.description+'</p>'
            component +='      <p class="read-more">'
            component +='        <a href="noutatiDetalii.html?id='+news.id+'">Read More</a>'
            component +='      </p>'
            component +='    </div>'
            component +='  </div>'
            });
            return component;
        },
        createTopNews:(data)=>{
            component ='';
            component +='<h6 class="widget-heading">Cele mai vizionate articole</h6>'
            component +='<ul>'
            data.forEach(function (news) {
                component += '<li>'
                component += '    <a href="noutatiDetalii.html?id='+news.id+'"><h6 class="rct-news-title">'+news.title+'</h6></a>'
                component += '    <div class="date">'+news.date_add+'</div>'
                component += ' </li>'
            })
            component +='</ul>'
            return component;
        }
    }
})($);