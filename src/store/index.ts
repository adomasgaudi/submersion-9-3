import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        title: "The Rookies", 
        description: 'th e modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blae modern guys that blash ',
        page: 'Rookies'
      },
      {
        title: "The Old guys", 
        description: 'These guysdfs sldfjsldkfj sldjf',
        page: 'OldGuys'
      },
      {
        title: "The wise", 
        description: 'Mostly ted talks and other popular youtubers',
        page: 'Wise'
      }
    ],
    tab: 1
  },
  mutations: {},
  actions: {},
  modules: {}
});
