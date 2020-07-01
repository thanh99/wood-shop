const components = {};

components.main = `
    <section class="content">
        <div class="container">
            <div id="main-content" class="row">
            
               
            </div>
        </div>
    </section>
`
components.nav = `
<div class="header">
    <nav class="navbar navbar-expand-md sticky-top navbar-light bg-light " style="position: fixed;background-color: rgba(255,255,255,0.4) !important ; width: 100%;z-index: 999; top: 0">
    <a class="navbar-brand col-md-1" href="#"><img class="opacity-1" src="./image/tải xuống.png" alt="" id='ImgLogo' style="height: 50px;width: 50px;"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

        <li class="nav-item active col-md-3">
            <a class="nav-link" href="#">Trang Chủ <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active col-md-3">
            <a class="nav-link" href="#">Về chúng tôi</a>
        </li>
        <li class="nav-item dropdown active col-md-3">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sản Phẩm
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li class="nav-item active col-md-2">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Liên hệ</a>
        </li>
        <li class="nav-item active col-md-2">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="fas fa-phone-square-alt">Hotline:0328883094 </i></a>
        </li>


        </ul>
        <form class="form-inline my-2 my-lg-0  ">
        <input class="form-control mr-sm-2 active " type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0 active" type="submit">Search</button>
        </form>
    </div>
</nav>
</div>`

components.ImageFlex =`
<div>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
            <img src="./image/anh-nen-header.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            </div>
            <div class="carousel-item" data-interval="5000">
            <img src="./image/anh_team_haka.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div class="carousel-item" data-interval="5000">
            <img src="./image/abc.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
</div>
`

components.footer = `
<div class="footer">
<div class="container">
<div class="row">
    <div class="col-md-3">
        <h3>Bảng tin điện tử</h3>
    </div>
    <div class="col-md-4">
        <p>Đăng ký để cập nhật thông tin mới nhất về khuyến mãi, sản phẩm và sự kiện.</p>
    </div>
    <div class="col-md-5">
        <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
            
              <input type="email" class="form-control" id="inputEmail" placeholder="Email">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Gửi</button>
          </form>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-4">
            <img src="./image/tải xuống.png" alt="">
    </div>
    <div class="col-md-4">
        <ul>
            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
            <li>Chương trình khuyến mại</li>
          </ul>
    </div>
    <div class="col-md-4">
        <ul>
            <h4>HƯỚNG DẪN MUA HÀNG</h4>
            <li>Chính sách mua hàng</li>
            <li>Chính sách đổi trả hàng</li>
            <li>Chính sách bảo hành</li>
            <li>Quy định hình thức thanh toán</li>
          </ul>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-4">
        <img src="./image/facebook (1).png" alt="facebook icon" class="contact_icon">
        <img src="./image/youtube (1).png" alt="youtube icon" class="contact_icon">
    </div>
    <div class="col-md-8">
       <ul>
        <p><i class="far fa-copyright"></i> 2020 ABC</p>
        <p>Địa chỉ : nhà  thầy minh</p>
        <p>Hotline : 0123939293</p>
        <p>Email : abc@gmail.com</p>
       </ul>
    </div>
</div>
</div>
</div>`





