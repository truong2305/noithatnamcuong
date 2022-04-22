<template>
    <div class="footer-area px-3">
        <h2 class="text-center mb-5">Công Ty TNHH Nội Thất Nam Cường</h2>
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="footer-box about-widget">
						<h2 class="widget-title">About us</h2>
						<p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
					</div>
				</div>
                <div class="col-lg-3 offset-lg-1 col-md-6">
					<div class="footer-box pages">
						<h2 class="widget-title">Pages</h2>
						<ul>
							<li><router-link to="/">Trang chủ</router-link></li>
							<li><router-link to="/gioi-thieu">Giới thiệu</router-link></li>
							<li><router-link to="/san-pham">Sản phẩm</router-link></li>
							<li><router-link to="/cong-trinh">Công trình</router-link></li>
							<li><router-link to="/lien-he">Liên hệ</router-link></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 d-flex flex-column justify-content-between mb-2">
					<div class="footer-box get-in-touch">
						<h2 class="widget-title">Get in Touch</h2>
						<ul>
							<li>+ 37E Triệu Việt Vương, Đà Lạt</li>
							<li><a href="mailto:namtran1008@gmail.com">+ namtran1008@gmail.com</a></li>
							<li><a href="tel:0911154919">+ 0911 154 919</a></li>
						</ul>
					</div>
                    <div class="footer__widget__social">
                            <a href="https://www.facebook.com/Namtran1008" target="_blank"><i class="fa fa-facebook"></i></a>
                            <a href="mailto:namtran1008@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
                            <a href="tel:0911154919" ><i class="fa fa-phone"></i></a>
                        </div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer-area {
    background-color: #051922;
    color: #fff;
    padding: 120px 0;
    @media (max-width:767.9px) {
        padding: 50px 0;
    }
    h2.widget-title {
    font-size: 24px;
    font-weight: 500;
    position: relative;
    padding-bottom: 20px;
    color: #fff;
    margin-bottom: 2rem;
     @media (max-width:576.9px) {
           font-size: 20px;

    }
    &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 2px;
    background-color: #F28123;
    content: "";
}
}
.footer-box p {
    color: #fff;
    opacity: 0.7;
    line-height: 1.8;
     @media (max-width:576.9px) {
           font-size: 13px;

    }
}
.footer-box ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
    opacity: 0.7;
    margin-bottom: 10px;
    line-height: 1.8;
    a {
        color: inherit;
        text-decoration: none;
    }
     @media (max-width:576.9px) {
           font-size: 13px;

    }
}
}
.footer-box.pages ul li {
    position: relative;
    padding-left: 20px;
    a {
        color: #fff;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
            transform: translateX(6px);
            color: #F28123;
            display: block;
        }
    }
    &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #F28123;
}
}
.footer__widget__social a {
    display: inline-block;
    height: 41px;
    width: 41px;
    font-size: 16px;
    color: #ffffff;
    border-radius: 50%;
    line-height: 38px;
    text-align: center;
    transition: all, 0.3s;
    margin-right: 10px;
}
.footer__widget__social a:hover {
    background: #7fad39;
    color: #ffffff;
    border-color: #ffffff;
}
}
</style>