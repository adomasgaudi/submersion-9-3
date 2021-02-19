<template lang="pug">
#Giantsslider
  //- .card-shadow
  .card-window
    i.fas.fa-chevron-left( 
      @click='slide(-1, ss.cards.length, ".card-slider", ".card-item-outer")')
    i.fas.fa-chevron-right( 
      @click='slide(1, ss.cards.length, ".card-slider", ".card-item-outer")')
    .card-slider


      .card-item-outer( v-for="card in ss.cards")
        .card-item( @click="router.push({name: card.page})" )
          .square
          h3 {{card.title}}
          p {{card.description}}
        .card-back
    slot

      

  

</template>

// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // //

<script lang="ts">
// import {fire, fireAuth} from '@/firebase/config'
import { useStore } from "vuex";
import { onMounted, ref, provide } from "vue";
import { a, n } from "@/composables/types";
import useCss from "@/composables/useCss";
import { useRouter, useRoute } from "vue-router";

// import JQuery from 'jquery'
// window.$ = JQuery

export default {
  // components: [],
  setup() {
    const ss = useStore().state;
    const router = useRouter();
    // const sg = useStore().getters;

    ///////////////////////

    ///////////css////////////
    // css import
    const { count, slide, cqueA, cque } = useCss();
    onMounted(() => {
      //elements
      ////////////////////////////////////
      const outer = cqueA(".card-item-outer");
      const slider = cque(".card-slider");
      const back = cqueA(".card-back");
      const item = cqueA(".card-item");

      //action
      //////////////////////////////////////////
      if (outer && slider && back && item) {
        //set all card-outer to 1/x width
        // console.log("mounted");
        outer.forEach(item => {
          item.style.width = `calc(100% / ${ss.cards.length})`;
        });

        //set the card-slider to x width
        slider.style.width = `${ss.cards.length * 100}%`;

        //set card-back height to card-item height
        back.forEach((it, i) => {
          // console.log(it, item[i].offsetHeight);
          it.style.height = `${item[i].offsetHeight}px`;
        });
      }
    });
    ////////////////////////
    return {
      ss,
      slide,
      count,
      router
    };
  }
};
</script>

// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // //

<style lang="scss">
@import '../assets/uniTheme.scss';
#Giantsslider {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  // margin: 0 -16px;

  //

  //
  .fa-chevron-left,
  .fa-chevron-right {
    position: absolute;
    top: calc(300px);
    z-index: 1;

    font-size: 30px;
    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
      color: #fd3838;
    }
  }
  .fa-chevron-left {
    left: 20px;
  }
  .fa-chevron-right {
    right: 20px;
  }
  //
  // .card-shadow {
  //   position: absolute;
  //   width: 300px;
  //   height: 500px;

  // }

  //
  .card-window {
    width: calc(100% + 32px);
    height: 700px;

    position: relative;
    overflow: hidden;
    padding-bottom: 100px;
  }

  //
  .card-slider {
    display: flex;
    flew-flow: row nowrap;
  }

  //
  .card-item-outer {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 2rem;
  }

  .card-back {
    position: absolute;
    z-index: 0;
    top: 60px;
    width: 300px;
    border-radius: 40px;
    background: white;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  .card-item {
    width: 300px;
    // height: 500px;
    z-index: 1;
    cursor: pointer;
    margin-bottom: 60px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    // transform: translateY(-60px);
    padding: 0 1rem;

    .square {
      z-index: 2;
      width: 250px;
      height: 250px;
      background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
      border-radius: 20px;
      margin-bottom: 2rem;
    }
  }
}
</style>
