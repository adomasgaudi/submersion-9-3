<template lang="pug">
#ArticlesLine 
  .artc-window
    .right-block(
      @click='slide(1, 3, ".artc-slider", ".artc-item-outside")')
    .left-block(
      @click='slide(-1, 3, ".artc-slider", ".artc-item-outside" )')
    .artc-slider
      .artc-item-outside
        .artc-item
          h3 title
          p some text would go nicely
      .artc-item-outside
        .artc-item
          h3 title
          p some text would go nicely
      .artc-item-outside
        .artc-item
          h3 title
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
      console.log(cards.value.length);
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
#ArticlesLine {
  .artc-window {
    width: 100%;
    border: 1px solid #000;
    overflow: hidden;
    position: relative;
  }
  .right-block,
  .left-block {
    position: absolute;
    height: 100%;
    width: 40px;
    background: rgba(0, 255, 255, 0.8);
    z-index: 2;
  }
  .right-block {
    right: 0;
  }
  .artc-slider {
    width: 300%;
    display: flex;
    flex-flow: row nowrap;
  }
  .artc-item-outside {
    width: calc(100% / 3);
    padding: 0.1rem 4%;
  }
  .artc-item {
    width: 100%;

    background: white;
    border: 1px solid #000;
    border-radius: 10px;

    padding: 0.3rem 1rem;
    text-align: left;
    p,
    h3,
    h4 {
      margin-bottom: 0.1rem;
    }
  }
}
</style>
