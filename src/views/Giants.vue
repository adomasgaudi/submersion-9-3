<template lang="pug">
#Giants
  h1 The Giants
  h2 Coming soon
  Rookies
</template>

<script lang="ts">
import Rookies from "@/views/giants/Rookies.vue";
// import {fire, fireAuth} from '@/firebase/config'
// import { useStore } from "vuex";
// import { onMounted, ref, provide } from "vue";

export default {
  components: { Rookies },
  setup() {
    // const ss = useStore().state;
    // const sg = useStore().getters;
    ///////////////////////

    ///////////css////////////
    // css import
    // onMounted(() => {});
    ////////////////////////
    return {
      // ss, sg
    };
  }
};
</script>

<style lang="scss">
@import '../assets/uniTheme.scss';
// #Giants {
// }
</style>
