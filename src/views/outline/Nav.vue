<template lang="pug">
nav
  .container
    span.submersion Submersion
    i.fas.fa-bars

</template>

<script lang="ts">
// import {fire, fireAuth} from '@/firebase/config'
// import { useStore } from "vuex";
// import { onMounted, ref, provide } from "vue";

export default {
  // components: [],
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
nav {
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
</style>
