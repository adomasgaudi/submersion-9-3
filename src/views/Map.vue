<template lang="pug">
#Map
  section
    .container
      h2 The Big Picture 
      p This covers everything that has infuence on your progress.
      //- p I would like to cover everything that influences language learning. And it my take on this is that even things like your daily routine or the way you eat has enough influence on your learning ability and thus on your language learning ability. So I will cover such fringe topics as well.
      //- | So as to not annoy you, I would like to separate these topics so that you can choose which is most important for you.
      //- | Thus I have divided the material into three main groups. 
      
      FullPicture
      ArticlesLine

</template>

<script lang="ts">
import FullPicture from "@/components/FullPicture.vue";
import ArticlesLine from "@/components/ArticlesLine.vue";
export default {
  components: { FullPicture, ArticlesLine },
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../assets/uniTheme.scss';
#Map {
  p {
    text-align: left;
  }
}
</style>
