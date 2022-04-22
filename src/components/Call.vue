<template>
 <div class="container-phone d-flex flex-column align-items-center">
   <a href="https://www.facebook.com/messages/t/1739583812761045" target="_blank">
     <div class="container-mess">
       <img src="../assets/mess.png" alt="">
     </div>
   </a>
    <a href="tel:0911154919">
      <div class="container-inner mt-3">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="inner-circle">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
      </div>
  </a>
 </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss" scoped>
.container-phone {
  width: 60px;
  height: 60px;
  bottom: 175px;
  right: 50px;
  position: fixed;
  z-index: 2;
}
.container-inner {
  width: 140px;
  height: 140px;
  position: relative;
}
.container-mess {
 
  border: 1px solid #051922;
  background: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
   
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

}
.circle {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: radial-gradient(
    circle at 50% 50%,
    #f50057,
    rgba(0, 176, 245, 0),
    #f50057
  );
  border-radius: 50%;
  opacity: 0;
  animation-name: anim;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.circle:nth-child(1) {
  animation-delay: 0s;
}
.circle:nth-child(2) {
  animation-delay: 0.5s;
}
.circle:nth-child(3) {
  animation-delay: 1s;
}
.inner-circle {
  width: 50%;
  height: 50%;
  background: #f50057;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
  animation-name: shake;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.inner-circle i {
  font-size: xx-large;
  color: #ffffff;
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 22px;
}
 @media (max-width:576.9px) {
.container-phone {
  right: 30px;
}
.container-inner {
  width: 100px;
  height: 100px;
  
}
.container-phone {
  width: 45px;
  height: 45px;
}
.inner-circle i {
  font-size: 20px !important;
  transform: translate(-25%, -25%);
}
    }
@keyframes anim {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
@keyframes shake {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(-30deg);
  }
  20% {
    transform: rotateZ(15deg);
  }
  30% {
    transform: rotateZ(-10deg);
  }
  40% {
    transform: rotateZ(7.5deg);
  }
  50% {
    transform: rotateZ(-6deg);
  }
  60% {
    transform: rotateZ(5deg);
  }
  70% {
    transform: rotateZ(-4deg);
  }
  80% {
    transform: rotateZ(3.75deg);
  }
  90% {
    transform: rotateZ(3.33deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>