<template lang="pug">
#FullPicture 
  .tabBar
    span.tab(@click='openTab(1)' ) Learn
    span.tab(@click='openTab(2)') Lang
    span.tab(@click='openTab(3)' ) Life
  .tabBox(v-if="ss.tab === 1")
    p  This is about learning anything in general as well as learning about the science behind language learning specifically.
  .tabBox(v-if="ss.tab === 2")
    p  Specific study of the language. Only time spent doing these activities will actually make you better at the language. 
  .tabBox(v-if="ss.tab === 3")
    p  This one is about all the choices that are more general 
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
    // css import
    const { cqueA, cLenEqual } = useCss();

    const openTab = (x: n) => {
      ss.tab = x;
    };

    onMounted(() => {
      const tabs = cqueA(".tab");
      // variable shortcuts

      // functions
      cLenEqual(tabs, `${100 / tabs.length}%`, "width");
      console.log(tabs[0]);
    });
    ////////////////////////
    return {
      ss,
      openTab
    };
  }
};
</script>

<style lang="scss">
#FullPicture {
  //

  .tabBar {
    display: flex;
    justify-content: space-evenly;
    border: 1px solid black;
  }
  .tab {
    background: red;
  }
  .tabBox {
    border: 1px solid black;
  }
}
</style>
