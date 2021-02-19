import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        title: "The Rookies", 
        description: 'The new generation of language learning leaders. Matt vs Japan, Refold, Yoga, Migaku and Brit vs Japan',
        page: 'Rookies', 
        imgUrl: 'img/coloso.7642eba.jpg'
      },
      {
        title: "The Old guys", 
        description: 'Stephen Krashen and Steve Kaufman. One the the legend, father of modern applied linguistics, the other a master polyglot, speaking (to some degree) more than 10 languages',
        page: 'OldGuys',
        imgUrl: 'img/davinci.jpg'
      },
      {
        title: "The wise", 
        description: 'Many wise suggestions form world renouned poliglots that appear on Ted-Talks, as well as my personal selection of the best advice online',
        page: 'Wise',
        imgUrl: 'img/phaidon.ce3a35ad.jpg'
      }
    ],
    tab: 1
  },
  mutations: {},
  actions: {},
  modules: {}
});
