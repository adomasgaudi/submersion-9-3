<template lang="pug">
//- #Footer
footer.real
  .container
    p cool 
footer.menu
  .container
    router-link.wid(:to='{name: "Map"}')
      i.fas.fa-sitemap 
    //- span |
    router-link.wid(:to='{name: "Giants"}')
      i.fas.fa-fist-raised 
    //- span |
    router-link.wid(:to='{name: "Welcome"}')
      i.fas.fa-door-open 
    //- span |
    router-link.wid(:to='{name: "Outdated"}')
      i.fas.fa-chalkboard-teacher 
    //- span |
    router-link.wid(:to='{name: "Articles"}')
      i.fas.fa-newspaper 

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
footer.real {
  margin-top: 100px;
  margin-bottom: 48px;
}

footer.menu {
  z-index: 10;
  box-shadow: 0 -2.5px 3.1px rgba(0, 0, 0, 0.07),
    0 -5.3px 7.4px rgba(0, 0, 0, 0.05), 0 -8.8px 14px rgba(0, 0, 0, 0.042),
    0 -12.9px 25px rgba(0, 0, 0, 0.035), 0 -17.5px 46.8px rgba(0, 0, 0, 0.028),
    0 -22px 112px rgba(0, 0, 0, 0.02);

  padding: 0.1rem 1rem;
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  // background: #00c090;

  //in
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // router-link
  .fas {
    font-size: 32px;
  }
  .wid {
    width: 56px;
    padding: 0.5rem;
    border-radius: 5px;
  }
  .router-link-active {
    background: #2c3e50;
    color: #00c090;
    transition: 0.5s;
    transform: scale(1.1);
  }
  .router-link-exact-active {
    color: crimson;
  }
}

@media screen and (min-width: 765px) {
  footer.menu {
    z-index: 10;
    box-shadow: 0 -2.5px 3.1px rgba(0, 0, 0, 0.07),
      0 -5.3px 7.4px rgba(0, 0, 0, 0.05), 0 -8.8px 14px rgba(0, 0, 0, 0.042),
      0 -12.9px 25px rgba(0, 0, 0, 0.035), 0 -17.5px 46.8px rgba(0, 0, 0, 0.028),
      0 -22px 112px rgba(0, 0, 0, 0.02);

    padding: 1rem 0.2rem;
    position: fixed;
    left: 0;
    top: 49px;
    width: fit-content;
    height: 100%;
    display: flex;
    background: #00c090;

    //in
    .container {
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
