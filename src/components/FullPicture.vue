<template lang="pug">
#FullPicture
  .tabBar
    span.tab(@click='openTab(1)' ) Language
    span.tab(@click='openTab(2)') Learn
    span.tab(@click='openTab(3)' ) Life
  .tabBox(v-if="ss.tab === 1")
    h3 -- coming soon --
    .devspan.dev
      p Language - everything that directly influences your ability to use the language. Which means specific, grammar, vocab, phonological information for learning as well as content sources.
      h3 Phonetics
      h3 Words
      h3 grammar
      h3 context
      h2 Content
      p For beginners the content might be in apps such as duolingo, lingodeer and so on. I recomend you try LingQ (12EUR/m) ultil you get decent at basic text.
      p Reading is harmful for your accent. This might seem absurd as it is one of the best ways to improve your language ability. However, if you're reading without any audio, you will automatically subvocalise most of the words you see. And regardless of how good your pronunciation is, you'll always be guessing as to how a particular word might be pronounced. Now, after a certain point, the harm that comes from that is negligent compared to the gains of reading. But any beginners in a language should be aware, that they need to catch up their listening skills to their reading skills or else they will suffer from crystalised bad pronunciation habits. The best strategy, I think might be to read intensely for a month or two and then catch up with listening. Especially in the beginning where you're making huge progress. 
      h3 Where to read?
      p Create an Amazon account and download the kindle app on your ipad/iphone/android/tablet. It doesn't matter if you don't have a tablet, reading is very similar on a phone. All of the features of the app will still work. 



  .tabBox(v-if="ss.tab === 2")
    ol.mainlist
      li Learning the Complex
      li Memorisation
      li Acquisition
      li Language acquisition science
    ol.maintext
      li Learn about diffuse thinking, chunking, interlieving. What are the different levels of comprehension, what are common biases that leave behind poorly developed schemas. Well thought out studying strategies prevent procrastination and create effortless habits. 
      li Our mind was designed to remember locations and stories not random words. Also out mind does not know which information is important and which is not. Thus we need to aid it by using mnemonic techniques and spaced repetition. 
      li Acquisition is the use of procedural memory in contrast to explicit memory. Explicit memory deals with things that we can conciously describe, imagine. Procedural memory is route of automatic actions that the brain takes once the cue is triggered. 
    



  .tabBox(v-if="ss.tab === 3")
    h3 -- I'm writing --
    .devspan.dev
      p  Life - activities that will not directly make you a better learner, but will improve you productivity such that you can learn better, and for longer and more focused...
      h2 Philosophy
      ul
        li Tolerating ambiguity
        li Having fun / enjoying the process
        li sacrifice
      h2 Motivation
      ul 
        li long term goals
      h2 Habits
      | learning has to be fun. Otherwise, you won't be as focused during it, if its fun that means it means more to you, it will make more connections in your brain. Also a possitive activity will generate dopamine which will create a craving for the next time, thus creating habits will be that much easier. 
</template>

<script lang="ts">
// import {fire, fireAuth} from '@/firebase/config'
import { useStore } from "vuex";
import { onMounted, ref, provide, onUpdated } from "vue";
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
    // css import
    const { cqueA, cLenEqual, devAdd } = useCss();

    const openTab = (x: n) => {
      ss.tab = x;
      addEventListener("click", e => {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(tab => {
          tab.classList.remove("activeTab");
        });
        (e.target as HTMLTextAreaElement).classList.toggle("activeTab");
      });
    };

    onMounted(() => {
      devAdd();
      const tabs = cqueA(".tab");
      // variable shortcuts

      // functions
      cLenEqual(tabs, `${100 / tabs.length}%`, "width");
      // console.log(tabs[0]);
    });
    onUpdated(() => {
      devAdd();
    });
    ////////////////////////
    return {
      ss,
      openTab
    };
  }
};
</script>

<style lang="scss">
#FullPicture {
  //

  .tabBar {
    display: flex;
    justify-content: space-evenly;
    // border: 1px solid black;
  }
  .tab {
    background: #f9f9f9;
    border-radius: 5px 5px 0px 0px;
    border: 1px solid black;
    margin: 0px 0.1rem;
    &:hover {
      background: rgb(202, 202, 202);
      // color: white;
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
  .activeTab {
    // background: yellow;
    border-bottom: none;
    background: rgb(212, 212, 212);
  }
  .tabBox {
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-radius: 0px 0px 10px 10px;
    padding: 0.5rem;
    text-align: left;
  }

  .mainlist {
    font-family: roboto;
    padding-left: 2rem;
    font-size: 1.3em;
    font-weight: 900;
  }
  .maintext {
    // font-family: roboto;
    padding-left: 1rem;
  }
}
</style>
