<template lang="pug">
h1 The Giants
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
// #template {
// }
</style>
