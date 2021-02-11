<template lang="pug">
.wrapper
  Nav
  .mainview
    //- make space for floating footer
    footer.side 
    .router
      router-view
Footer
</template>

<script>
import Nav from "@/views/outline/Nav.vue";
import Footer from "@/views/outline/Footer.vue";
import { onMounted, onUpdated } from "vue";
import useCss from "@/composables/useCss";
export default {
  components: { Nav, Footer },
  setup() {
    onMounted(() => {
      const putDev = (() => {
        const devs = document.querySelectorAll(".dev");
        devs.forEach(item => {
          item.classList.add("devNone");
          console.log(item);
        });
      })();
    });
    const { devAdd } = useCss();
    onUpdated(() => {
      devAdd();
    });

    //
    return {
      //
    };
  }
};
</script>
<style lang="scss">
.wrapper {
  min-height: 100vh;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media screen and (min-width: 765px) {
  .mainview {
    display: flex;
    flex-flow: row nowrap;
  }
  footer.side {
    min-width: 62px;
    height: 100vh;
  }
  .router {
    margin: 0 auto;
  }
  // router-view {
  //   display: flex;
  //   flex-flow: column nowrap;
  // }
}

.devNone {
  display: none;
}
</style>
