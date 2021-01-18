<template lang="pug">
#Nav
  nav
    .container
      span.submersion(@click='router.push({name: "Map"})') Submersion
      .devBtn(@click="devToggle")
      i.fas.fa-bars(@click='barsDropToggle')
  .barsDrop.maxh0
    .container
      h2 coming soon
      br
      br
      br
      br
      br
      br
  
</template>

<script lang="ts">
// import {fire, fireAuth} from '@/firebase/config'
import { useStore } from "vuex";
import { onMounted, ref, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
import useCss from "@/composables/useCss";

export default {
  // components: [],
  setup() {
    const router = useRouter();
    // const ss = useStore().state;
    // const sg = useStore().getters;
    ///////////////////////

    ///////////css////////////
    const { count, slide, cqueA, cque, devToggle } = useCss();
    // css import

    // const barsDrop = cque(".barsDrop");
    const barsDropToggle = () => {
      //action
      console.log(cque(".barsDrop"));
      const elem = cque(".barsDrop");
      if (elem) {
        //max-width
        elem.classList.toggle("maxh0");
        elem.classList.toggle("maxh400");
      }
    };

    // const devToggle = () => {
    //   const devs = cqueA(".dev");
    //   devs.forEach(item => {
    //     item.classList.toggle("devNone");
    //   });
    // };

    onMounted(() => {
      //elements
      ////////////////////////////////////
      // const barsDrop = ref(cque(".barsDrop"));
      // console.log(barsDrop.value);
    });
    ////////////////////////
    return {
      // ss, sg
      router,
      barsDropToggle,
      devToggle
    };
  }
};
</script>

<style lang="scss">
#Nav {
  .barsDrop {
    background: #00c090;
  }
  .maxh0 {
    max-height: 0px !important;
    transition: 0.5s;
    overflow: hidden;
  }
  .maxh400 {
    max-height: 400px !important;
    transition: 1s;
    overflow: hidden;
    border-bottom: 1px solid rgb(44, 44, 44);
  }

  nav {
    // padding: auto;
    display: flex;
    justify-content: center;
    background: #00c090;
    border-bottom: 1px solid rgb(44, 44, 44);
    // margin-bottom: 10rem;

    position: relative;
    z-index: 2;

    // box-shadow: 0 1.8px 3.1px rgba(0, 0, 0, 0.07),
    //   0 3.9px 7.4px rgba(0, 0, 0, 0.05), 0 6.4px 14px rgba(0, 0, 0, 0.042),
    //   0 9.4px 25px rgba(0, 0, 0, 0.035), 0 12.7px 46.8px rgba(0, 0, 0, 0.028),
    //   0 16px 112px rgba(0, 0, 0, 0.02);

    & * {
      padding: 0;
      margin: 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 1rem;
    }
    .fas {
      font-size: 24px;
    }
    .submersion {
      font-size: 26px;
      font-weight: bold;
      line-height: 1;
    }
  }

  .devBtn {
    width: 20px;
    height: 20px;
    position: fixed;
    bottom: 50px;
    right: 0;
    z-index: 100;
  }
}
</style>
