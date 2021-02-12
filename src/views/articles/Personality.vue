<template lang="pug">
#personality 
  sectionnpnpm
    .container
      h2 personality
      h3 empathy
      ul
        li do you care about what other people think?
        li 
      h3 consciensciousness
      ul
        li do you care about what other people think?
        li 


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
    // const router = useRouter();
    // const sg = useStore().getters;
    ///////////////////////

    ///////////css////////////
    // const { cqueA, cLenEqual } = useCss();
    //......................................
    //

    // onMounted(() => {
    // elements
    // action
    // });
    ////////////////////////
    return {
      ss
    };
  }
};
</script>

<style lang="scss">
// #personality {
//section{}
// }
</style>
