<template lang="pug">
#welcome
  section.changes
    .container
      h1 Welcome
      h4 view on smartphone pls
      h2.mid There have been changes in the Language Learning Comunity!
      span check it out
      br
      br
      br
      i.fas.fa-arrow-down
  section.system
    .container
      h4 The new way to learn is through immersion, not study.
      p Usually the education system is 
      h4 here's what they're missing and what they are not missing
      button System
      
      h2 How do I know? 
      i.fas.fa-arrow-down
      
  section.giants
    .container
      h4 I organise information such that similar stuff is not overhyped and no bottlenecks are overlooked. 
      h4 And I follow the BEST!
      h4 Resting on the shoulders of Giants:
      GiantsSlider
        h3 Honestly, they're great
        h3 buuut...
        
  section.giants
    .container
      h4 They excell in different areas and specialise within their respective niches, thus sometimes missing certain important components. 
      h4 what are they missing?
      ArticlesLine
  section
    .container
      h4 After as much as I've studied I felt for a long time as though I still don't get the full picture. Well, that why I made this blog. To get the full picture. 
      h4 here it is.
      FullPicture

  section 
    .container
      h3 support m 
      h3 reach out to me!
    
      
</template>

<script lang="ts">
import GiantsSlider from "@/components/GiantsSlider.vue";
import FullPicture from "@/components/FullPicture.vue";
import ArticlesLine from "@/components/ArticlesLine.vue";
// import {fire, fireAuth} from '@/firebase/config'
// import { useStore } from "vuex";
// import { onMounted, ref, provide } from "vue";

export default {
  components: { GiantsSlider, FullPicture, ArticlesLine },
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
#welcome section {
  min-height: calc(100vh - 48px);
  .mid {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
}

section.changes {
  color: #005c45;
  text-shadow: -1px 2px 9px rgba(150, 150, 150, 0.5);
  h1,
  h2 {
    font-weight: bold;
  }

  font-weight: bold;
  background: #eeeeee;
  span.btn {
    display: inline-block;
    color: white;
    background: #00c090;
    padding: 0.2rem 2rem;
    border-radius: 20px;
  }
  .fa-arrow-down {
    font-size: 30px;
  }
}

section.giants {
  background: #eee;
}
</style>
