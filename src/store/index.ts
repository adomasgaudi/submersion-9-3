import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        title: "The Rookies", 
        description: 'The new generation of language learning leaders. Matt, Lucas and Matt. Also known as Matt vs Japan, Yoga, and Brit vs Japan. All three very closely tied to AJATT (All Japanese All The Time) community, Matt and Lucas created MIA(MassImmersionApproach) and now both have their own brands: Refold and Migaku',
        page: 'Rookies'
      },
      {
        title: "The Old guys", 
        description: 'Stephen Krashen and Steve Kaufman. One the the legend, father of modern applied linguistics, the other a master polyglot, speaking (to some degree) more than 10 languages',
        page: 'OldGuys'
      },
      {
        title: "The wise", 
        description: 'Many wise suggestions form world renouned poliglots that appear on Ted-Talks, as well as my personal selection of the best advice online',
        page: 'Wise'
      }
    ],
    tab: 1
  },
  mutations: {},
  actions: {},
  modules: {}
});
