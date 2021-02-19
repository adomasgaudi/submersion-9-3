<template lang="pug">
#welcome
  section.welcome1
    .container
      h3 Welcome to
      h1.title Submersion
      h4.text-center.mb-5 The language learning community is changing quickly. Keep up.
      .techBox
        .row 
          .col
            .inside 
              h4.text-center.fas.fa-flask
              h4.text-center #[strong New Sources]
            .insideList
              li.block-list New science
              li.block-list New theories
              li.block-list New methods
          .col 
            .inside
              h4.text-center.fas.fa-microchip
              h4.text-center #[strong New Tools]
            .insideList
              li.block-list New Software
              li.block-list New Hardware
      //- h4.text-center Time to disrupt tranditional ways of learning.
      h2 Upgrade your learning
      h2 
        span.fas.fa-chevron-down  
      //- h2 Update your learning style
      //- i.fas.fa-arrow-down
  hr(style="border-top: dashed 2px grey;")

  //- 
  //- 
  //- 
  //- 
  //- 
  //- 

  section.system
    .container
        
      .modernCard.shadowAG(@click="router.push({name: 'Immersion'})")
        h2.title The new way to learn is through #[strong(style="color: #00c090;") immersion], not #[strong(style="color: #00c090;") study]
        .textBox
          p The main difference between #[strong(style='color: #00c090') Immersion] and #[strong(style='color: #00c090') Studying] is consciousness. Immersion is the process of using a language to accomplish some other task, thus the deciphering of the language is mostly #[strong(style='color: #00c090') subconsciously]. Studying is the process of thinking about the language and its use in different situations, and so it forces you to think about the language use #[strong(style='color: #00c090') consciously]. 
          p #[strong(style='color: #00c090; text-decoration: underline;') read more...]
          
          //- p Your habits, your attitude, how to understand the complex and how to memorise thousands of words efficiently. There is a myriad of new tech, software, theories, methods that, generally, #[strong you will not find] in a traditional classroom. 
        .bottomSide
          h2.text-left See Traditional 
        
      h2 hmmm
      h2 
        span.fas.fa-chevron-down  

  hr(style="border-top: dashed 2px grey;")

  //-
  //-
  //-
  //-
  //-
  //-
  //-
  //-
  //-

  section.giants
    .container
      h2.text-left Resting on the shoulders of Giants:
      p.p-long.text-left.mb-5 I organise information such that similar stuff is not overhyped and bottlenecks are not overlooked. 
      GiantsSlider 
  hr(style="border-top: dashed 2px grey;")

  section
    .container
      h2.text-left Honestly, they're all great
      p.p-long Buuut... When taking a broader look often one single source will miss something important. Here are a few ideas that might be more often overlooked.
      ArticlesLine
  hr(style="border-top: dashed 2px grey;")

  section.fullpicture
    .container
      h2.text-left Getting the full picture
      p.p-long After as much as I've studied I felt for a long time as though I still don't understand how everything works together. Well, that why I made this blog. To get the full picture. Here it is so far.
      FullPicture
  hr(style="border-top: dashed 2px grey;")

  section.dev
    .container
      h2 More content is to come 
      h5 Got ideas? Suggestions? Corrections? Reach out!
    
      
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

//
//
//
//
//
//
//
//

<style lang="scss">

@import '../assets/uniTheme.scss';

#welcome {
  section {
    min-height: calc(100vh - 48px);
    display: flex;
    // justify-content: center;
    // align-items: center;
    .mid {
      margin-top: 4rem;
      margin-bottom: 8rem;
    }
  }

//
//
//
//
//
//
//
//
//
//
//
//
//

  section.welcome1 {
    padding-top: 3rem;

    h1 {
      span {
        display: block;
      }
    }
    .title {
      margin-bottom: 3rem;
    }
    h4 {
      text-align: left;
    }
    h3 {
      text-align: center;
    }
    // color: #005c45;
    // text-shadow: -1px 2px 9px rgba(150, 150, 150, 0.5);
    // h1,
    // h2 {
    //   font-weight: bold;
    // }

    // font-weight: bold;
    // background: #eeeeee;
    span.btn {
      display: inline-block;
      color: white;
      // background: $caribean;
      padding: 0.2rem 2rem;
      border-radius: 20px;
    }
    .fa-arrow-down {
      font-size: 30px;
    }
    .techBox {
      margin: 0.5rem 0 2rem 0;
      .col {
        padding: 0.3rem;
      }
      .inside {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        border-bottom: 1px solid #7a7a7a;
        // border-radius: 4px;
        padding: 0.3rem;
        .fas {
          color: #4b4a4a;
        }
      }
      .insideList{
        margin-top: 1rem;
      }
      .block-list{
        text-align: center;
        font-weight: 300;
      }
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  section.system{
    // background: rgb(237, 237, 250);

    .container{
      padding: 1rem;
      
      .modernCard{
        h2.title{font-size: 28px; margin-bottom: 2rem;}
        // border: 1px solid black;
        
        // box-shadow: $shadowDark;
        padding: 1rem;
        margin-bottom: 2rem;
        
        .bottomSide{
          background: rgb(252, 107, 82);

          margin: 5rem -1rem -1rem -1rem;
          padding: 1rem;
        }
      }
    }

  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  section.giants {
    // background: #eee;
    // h2{ margin-bottom: 3rem;}

  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  .textBox {
    // border: 1px solid #000;
    // border-radius: 10px;
    // padding: 1rem;
    // text-align: left;
  }
  h5.h5 {
    // font-family: roboto;
    font-size: 18px;
  }
}
</style>
