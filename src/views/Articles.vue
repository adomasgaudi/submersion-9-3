<template lang="pug">
#Articles
  section
    .container
      h1 Articles
      ArticlesLine


</template>

<script lang="ts">
import ArticlesLine from "@/components/ArticlesLine.vue";
import Complex from "@/views/articles/learning/Complex.vue";
export default {
  components: { ArticlesLine, Complex },
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../assets/uniTheme.scss';
#Articles {
}
</style>
