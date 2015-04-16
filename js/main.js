var setHeader = function() {

  var page = $(".container:first");
  var link;
  var header;

  if(page.attr('id') != 'main')
  {
    link = "../../";
  }
  else
  {
    link = "";
  }

  header = '<header>\
        <div class="row" style="padding-top: 10px">\
          <div class="col-xs-12 col-md-10 col-md-push-1">\
            <div class="test" id="site-name">\
              <h1>Khai Nguyen</h1>\
              <p style="font-size: 18px; font-style: italic">Game Developer and Designer</p>\
            </div>\
          </div>\
        </div>\
        <!--Name-->\
        <div class="row">\
          <!--Navigation-->\
          <div class="col-md-6 col-md-offset-3">\
              <div class="row" >\
                <div id="navbar">\
                  <a href="'+link+'index.html"><div class="col-xs-12 col-sm-4 col-md-4">\
                    PROJECTS\
                  </div></a>\
                  <a href="'+link+'about.html"><div class="col-xs-12 col-sm-4 col-md-4">\
                    ABOUT\
                  </div></a>\
                  <a href="'+link+'other.html"><div class="col-xs-12 col-sm-4 col-md-4">\
                    OTHER\
                  </div></a>\
                </div>\
             </div>\
          </div>\
        </div>\
      </header>'
  page.prepend(header);
};

$(document).ready(setHeader);