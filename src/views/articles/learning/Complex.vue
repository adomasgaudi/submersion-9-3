<template lang="pug">
#Learning 
  section
    .container

      h1 Learning complex things
      p In the context of language learning this means studying grammar or some sort of expressions, bacause those are the only #[span.exBtn complex] things to understand. 
      p.exText Don't missunderstand the meaning of complex. A language may be difficult to learn, but for the most part it is not complex, rather it is comprised of thousands of simple things. On the other hand, something like the foundations of quantum mechanics may be quite easy to learn as there might not be that many things to understand (probably not), but those few things might be very complex. 

      span #[span.h5.exHeading Studying grammar is not as usefull as you might think.] 
      span.exPara This is because  when we use correct grammar in real life and not in a test, we do not have the luxury of time. And its that precious time, those few milisecconds that allow you inner 
        span #[span.exBtn Monitor] catch mistakes and correct them.
        p.exText You "Monitor" is a term that describes the conscious process that occurs in your mind that enables you to stop and think and apply rules that you've learned.
      span  Instead we use our procedural memory that was created by seeing hundreds of similar examples in which case we do not need to know the rules of the grammar we use it just as a child does. Children do not understand the difference between tenses until you explain it to them, nevertheless they can use the tenses perfectly, simply because they know from experience that, say, a particular tense fits well in a certain situation and another one does not.

      h2 Focused and Diffused thinking
      h5.h5 Learning is a complicated game. Learn to play it.
      p The process of learning, might seem fairly straigtforward. Sort of like downloading data to a computer as is famously portrayed in #[a.a(href="https://www.youtube.com/watch?v=OBxMsUxXcXU&ab_channel=MichaelD" target="_blank") The Matrix for example]. However that might not be the best way to imagine learning as it ignores complexity and reduces all learning to simply quantity of data. 
      p In the real world, however, the process of learning is much more complicated. We absorb hundreds of times more data unconsciously than consciously, and we have to create mechanisms that parse this data into meaningful units. We analyse the data through conscious focus and unconscious diffuse thinking. We inteligently errase unwanted data, in multiple different ways and, of course, our brain has to use a small enough amount of energy, as well have a propper system that replenishes neurons with energy and nutrients. We improve our thinking pathways through myelination. We inhibit and encourage pathways with different chemicals. So on and so on. I'm not a neurologist. But I do think that I need to know some neurology, and frankly most people don't know nearly enough.
      p If you simply imagine that you're either talented or not and the process of learning is done by spending time staring at the material, then you're missing out. If you learn faster you can spend less time in school and if you learn really fast you can skip school altogether.

      h5.h5 The focused and diffuse modes. 
      span Practical message for all the smart people:
      span.quote Staring at a wall is probably the most efficient thing you can do appart from sleep. That's diffuse thinking. 
      span Meditation, thinking, sleeping, being bored. All of those things don't seem like the cool way to spend your time in our hyper-active world, but! It might be the most beneficial. Meditation,
      p Do you remember those times when you studied for some deadline for so long that when you finally take a break, or maybe even an involuntary break, you would find yourself just being completely blank. No thoughts. Just staring into whatever's in front of you. Your brain buzzing. Well that's your subconscious brain taking over, saying #[strong "that's it dude, no more focus mode, we need to clean this shit up, no more thoughts for a bit."]. Thats diffuse mode. It's running in the background almost all the time, but only sometimes it takes over.
      p The point I wan't to make about diffuse thinking is not that its more useful than the focused more. That's debatable. However, I argue that it gives you more control. Just like if were running up a mountain and no one told you that it is possible to rest. You would just run and run until you were exhausted and had to stop. Now, if its a tall mountain, getting exhausted might not be the best strategy. If you're aware that you can rest, then including inteligently placed rest periods might be the smart choice here. The same with your brain. Take a break. At the same time having pre-defined smaller chunks of work is les intimidating, more quickly rewarding which prevents procrastination and supports habit building. 
      p.quote Ok easy, I'll just work for a bit and then I'll chill with some youtube for a bit. 
      p.quote Wrong
      p Youtube, exhausts your brain. 
      p Reading?
      P no
      P music?
      p Probably not. Best just do nothing. If you listen to Barbra Oakley, she says that just doing a different activity might focus your brain on another area and allow the previous area to go under diffuse mode. That might be the case. But what I've found from my personal experience is that certain activities help you rest and others do not. Music is on the line. Youtube definitely does not. Reading does not. Audiobooks do not.
      h5.h5 Interlieving
      p Also a less diffuse but still similar strategy might be interlieving. Interlieving simply means mixing one task with another. Don't know much about it, but it sounds to me much like diffuse mode with focused in a different area.
      



      p
      p The growth - mindset.
      
      
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
    const { cqueA, cque, cLenEqual, cexNone } = useCss();
    //......................................

    onMounted(() => {
      cexNone("exBtn", "exOn", "exStyleSpan");
      cexNone("exHeading", "exOn", "exStylePara");
    });
    ////////////////////////
    return {
      ss
    };
  }
};
</script>

<style lang="scss">
#Learning {
  text-align: left;
}
</style>
