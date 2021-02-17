<template lang="pug">
#Immersion 
  section
    .container
      h2.title The new way to learn is through #[strong(style="color: #00c090;") immersion], not #[strong(style="color: #00c090;") study]
      .textBox
        p The main difference between #[strong(style='color: #00c090') Immersion] and #[strong(style='color: #00c090') Studying] is consciousness. Immersion is the process of using a language to accomplish some other task, thus the deciphering of the language is mostly #[strong(style='color: #00c090') subconsciously]. Studying is the process of thinking about the language and its use in different situations, and so it forces you to think about the language use #[strong(style='color: #00c090') consciously]. 
        p #[strong(style='color: #00c090') Here's an example]: a common mistake is to write words like consciously with double "l", like this "consciouslly". The "Study" approach here would be to learn the rule that governs this grammar point and try to remember to use it. An "Immersion" approach would be to read a lot of scientific text that might have a lot of "-ly" or "-lly" word endings in it and then when it's time for you to write, you will have seen the word so many times, that an incorrectly written word will simply stand out for you, without you having to analyse it. 
        p of trying to understand the message in your target language, the . It focuses on deciphering many many messages as best as you can in real time, rather than learning single points of information like the meaning of phrases or grammar points. Immersion trains your subconscious mind. Instead of thinking about the language, you're using the language for a purpose, such as entertainment or learning, and your brain has to take appart the language subconsciously as much as possible, which builds a fast and intuitive ability to understand and consequentially use the language.
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
@import '../../../assets/uniTheme.scss';
#Immersion {
section{}
}
</style>
