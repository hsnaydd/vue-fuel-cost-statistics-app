import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import RoutesStore from './modules/routes';
import EntriesStore from './modules/entries';

Vue.use(Vuex);

// types
// export const types = {
//   UPDATE_SPECS: 'UPDATE_SPECS',
// };

// initial state
// const initialState = {
//   specs: {},
//   routes: [],
// };

// const getters = {
//   countSquare: state => state.count * state.count,
// };

// const actions = {
//   updateSpecs({ commit }, payload) {
//     commit(types.UPDATE_SPECS, payload);
//   },
// };

// mutations
// const mutations = {
//   [types.UPDATE_SPECS](state, payload) {
//     // eslint-disable-next-line no-param-reassign
//     state.specs = {
//       ...state.specs,
//       ...payload,
//     };
//   },
// };

export default new Vuex.Store({
  modules: {
    routes: RoutesStore,
    entries: EntriesStore,
  },
  plugins: [createPersistedState()],
  // state: initialState,
  // mutations,
  // actions,
  // getters,
});
