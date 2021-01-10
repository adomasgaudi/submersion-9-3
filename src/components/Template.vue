<template lang="pug">
#template 
  h1 template
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
    // const { cqueA, cLenEqual } = useCss();
    //......................................

    //

    // onMounted(() => {});
    ////////////////////////
    return {
      ss
    };
  }
};
</script>

<style lang="scss">
// #template {
// }
</style>
