<template>
  <div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<h1 class="mb-sm-4 mb-3">V-Home</h1>
                            <p>Chuyên phân phối giấy dán tường <span class="d-block">tranh dán tường Hàn Quốc</span></p>
                            <base-button/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },

}
</script>

<style lang="scss" scoped>
.breadcrumb-section {
    padding: 150px 0;
    background-size: cover;
    background-position: center center;
    position: relative;
    z-index: 1;
    background-attachment: fixed;
    padding-top: 130px;
    height: 450px;
    background-image: url(../assets/ss.png);
    &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: #07212e;
    z-index: -1;
    opacity: 0.8;
}
.breadcrumb-text p {
    color: #F28123;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 7px;
    font-size: 1.5rem;
}
.breadcrumb-text h1 {
    font-size: 50px;
    font-weight: 900;
    color: #fff;
    margin: 0;
    margin-top: 20px;
    letter-spacing: 0.2rem;
}
}
@media (max-width:767.9px) {
    .breadcrumb-section {
         .breadcrumb-text p {
    font-size: 1.2rem;
    letter-spacing: 3px;

}
.breadcrumb-text h1 {
    font-size: 40px;
    font-weight: 700;
}
    }
   
}
@media (max-width: 500px) {
    .breadcrumb-section {
        height: 430px;
         .breadcrumb-text p {
    font-size: 1rem;
    letter-spacing: initial;

}
.breadcrumb-text h1 {
    font-size: 30px;
}
    }
   
}
</style>