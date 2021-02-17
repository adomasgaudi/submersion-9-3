<template lang="pug">
#ArticlesLine 
  .artc-window
    i.fas.fa-chevron-right(
      @click='slide(1, 3, ".artc-slider", ".artc-item-outside")')
    i.fas.fa-chevron-left(
      @click='slide(-1, 3, ".artc-slider", ".artc-item-outside" )')
    .artc-slider
      .artc-item-outside
        router-link.artc-item(:to="{name: 'Complex'}")
          h3 Learning Complex
          p some text would go nicely
      .artc-item-outside
        .artc-item
          h3 learning how to learn
          p some text would go nicely
      .artc-item-outside
        .artc-item
          h3 philosophy
          p some text would go nicely
</template>

<script lang="ts">
// import {fire, fireAuth} from '@/firebase/config'
import { useStore } from "vuex";
import { onMounted, ref, provide } from "vue";
import { a, n } from "@/composables/types";
import useCss from "@/composables/useCss";
// import { useRouter, useRoute } from "vue-router";

export default {
  // components: [],
  setup() {
    const ss = useStore().state;
    // const sg = useStore().getters;
    ///////////////////////

    ///////////css////////////
    const { slide, cqueA, cLenEqual } = useCss();
    //......................................
    // const slide = x => {};
    //
    let cards = ref();
    onMounted(() => {
      cards = ref(cqueA(".artc-item-outside"));
      // console.log(cards.value.length);
      // return { cards };
    });
    ////////////////////////
    return {
      ss,
      slide
    };
  }
};
</script>

<style lang="scss">
@import '../assets/uniTheme.scss';
#ArticlesLine {
  .artc-window {
    // display: flex;
    // justify-content: center;
    width: 100%;
    // border: 1px solid #000;
    overflow: hidden;
    position: relative;
  }
  .fa-chevron-right,
  .fa-chevron-left {
    position: absolute;
    font-size: 30px;
    top: calc(50% - 15px);
    z-index: 2;
  }
  .fa-chevron-right {
    right: 0;
  }
  .fa-chevron-left {
    left: 0;
  }
  .artc-slider {
    width: 300%;
    display: flex;
    flex-flow: row nowrap;
  }
  .artc-item-outside {
    width: calc(100% / 3);
    padding: 0.5rem 4%;
    display: flex;
    align-items: center;
  }
  .artc-item {
    width: 100%;
    display: block;
    // flex-flow: column nowrap;
    background: white;
    border: 1px solid #000;
    border-radius: 10px;

    padding: 0.3rem 1rem;
    text-align: left;
    p {
      margin-bottom: 0;
    }
    h3,
    h4 {
      margin-bottom: 0.1rem;
      font-weight: 900;
      font-size: 1.3em;
    }
  }
}
</style>
