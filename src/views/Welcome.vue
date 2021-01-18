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
      h2 The new way to learn is through immersion, not study.
      br
      p #[strong But that's not it]
      .textBox
        p Your habits, your attitude, how to understand the complex and memorise thousands of words efficiently. There is a myriad of new technologies, software, as well as theories that your local school teacher probably has no idea about, nor could he use such advice in a classroom. 
        h5.h5 See what they're missing out on
        button(@click="router.push({name: 'Outdated'})" ) Problems of the Outdated
      
      h2 How do I know? 
      i.fas.fa-arrow-down
      
  section.giants
    .container
      h3.h3 I organise information such that similar stuff is not overhyped and bottlenecks are not overlooked. And I follow the BEST!
      br 
      br 
      h2 Resting on the shoulders of Giants:
      GiantsSlider
  section
    .container
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

  section.dev
    .container
      h3 support me 
      h3 reach out to me!
    
      
</template>

<script lang="ts">
import GiantsSlider from "@/components/GiantsSlider.vue";
import FullPicture from "@/components/FullPicture.vue";
import ArticlesLine from "@/components/ArticlesLine.vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
// import {fire, fireAuth} from '@/firebase/config'
// import { onMounted, ref, provide } from "vue";

export default {
  components: { GiantsSlider, FullPicture, ArticlesLine },
  setup() {
    const ss = useStore().state;
    const router = useRouter();
    // const sg = useStore().getters;
    ///////////////////////

    ///////////css////////////
    // css import
    // onMounted(() => {});
    ////////////////////////
    return {
      ss,
      router
    };
  }
};
</script>

<style lang="scss">
#welcome section {
  min-height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
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

.textBox {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1rem;
  text-align: left;
}
h5.h5 {
  font-family: roboto;
  font-size: 18px;
}
</style>
