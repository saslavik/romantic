<template>
    <div class="home">
      <carousel  :perPage='1'>
      <slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/22/19/39/panoramic-3251636_960_720.jpg" alt="">
        <div class="container">
          <div class="tourDescr white">
            <div class="title white">ТУРЦИЯ ГОРЯТ ПУТЕВКИ</div>
            <div class="descr">Вылет 27.02</div>
            <div class="price"><h2>300$</h2></div>
            <div class="btn btnDefault">Приобрести</div>
          </div>
        </div>
      </slide>
      <slide>
        <img src="https://cdn.pixabay.com/photo/2016/03/16/16/31/ayasofia-1261148_960_720.jpg" alt="">
        <div class="container white">Slide 2 Content</div>
      </slide>
      <slide>
        <img src="https://cdn.pixabay.com/photo/2021/01/11/21/39/temple-5909803_960_720.jpg" alt="">
        <div class="container">Slide 3 Content</div>
      </slide>
    </carousel>
    <div class="container">
      <div class="why">
        <div class="whyItem">
          <div class="whyImg">
            <span class="material-icons">airplanemode_active</span>
          </div>
          <div class="whyText">
            <div class="title">Мы заботимся о Вашем отдыхе</div>
            <p>Мы не стараемся только продать путевки. Для нас важен каждый момент Вашего отдыха. Начинаю от приобретения билета и до возвращения после отдыха.</p>
          </div>
        </div>
        <div class="whyItem">
          <div class="whyImg">
            <span class="material-icons">bed</span>
          </div>
          <div class="whyText">
            <div class="title">Мы заботимся о Вашем отдыхе</div>
            <p>Мы не стараемся только продать путевки. Для нас важен каждый момент Вашего отдыха. Начинаю от приобретения билета и до возвращения после отдыха.</p>
          </div>
        </div>
        <div class="whyItem">
          <div class="whyImg">
            <span class="material-icons">ring_volume</span>
          </div>
          <div class="whyText">
            <div class="title">Мы заботимся о Вашем отдыхе</div>
            <p>Мы не стараемся только продать путевки. Для нас важен каждый момент Вашего отдыха. Начинаю от приобретения билета и до возвращения после отдыха.</p>
          </div>
        </div>
      </div>
      <p class="title center">
          Наши лучшие направления
        </p>
      <div class="bestDest">
        <div class="bd bd1">
          <img src="https://cdn.pixabay.com/photo/2017/03/20/14/33/pyramids-2159286_960_720.jpg" alt="">
          <div class="bdBack">
            <p class="white">Египет</p>
          </div>
        </div>
        <div class="bd bd2">
          <img src="https://cdn.pixabay.com/photo/2017/03/20/14/33/pyramids-2159286_960_720.jpg" alt="">
          <div class="bdBack">
            <p class="white">Турция</p>
          </div>
        </div>
        <div class="bd bd3">
          <img src="https://cdn.pixabay.com/photo/2017/03/20/14/33/pyramids-2159286_960_720.jpg" alt="">
          <div class="bdBack">
            <p class="white">ОАЭ</p>
          </div>
        </div>
        <div class="bd bd4">
          <img src="https://cdn.pixabay.com/photo/2017/03/20/14/33/pyramids-2159286_960_720.jpg" alt="">
          <div class="bdBack">
            <p class="white">Мальдивы</p>
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

<style lang="scss">

.VueCarousel-wrapper {
  position: relative;
  height: 30em;
  background-color: rgba($color: #000000, $alpha: 1.0);
  img {
  opacity: 0.75;
  overflow: hidden;
  position: absolute;
  z-index: -99;
  object-fit: cover;
  min-width: 100%;
  height: 30em;
}
}
.VueCarousel-dot-container {
  position: absolute;
  bottom: 0;
  padding: 20px;
  margin-top: -20px !important;
}
.descr {
  font-size: 1.5em;
  padding: 20px;
}
.why {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .whyItem {
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
    &:last-child {
      margin-right: 0;
    }
  }
}
.material-icons {
  font-size: 48px;
}
.bestDest {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  .bd {
    position: relative;
    width: 24%;
    display: flex;
    justify-content: center;
    transition: transform 0.3s;
    overflow: hidden;
    .bdBack {
      position: absolute;
      display: flex;
      justify-content: center;
      background-color:rgba($color: #000000, $alpha: 0.4);
      z-index: 1;
      width: 100%;
      height: 100%;
      bottom: -100%;
      transition: all 0.3s ease;
    }
    img {
      z-index: 1;
    }
    p {
      position: absolute;
      bottom: 0;
      font-size: 24px;
    }
    &:hover {
      .bdBack {
        bottom: 0;
      }
    }
  }
}
</style>