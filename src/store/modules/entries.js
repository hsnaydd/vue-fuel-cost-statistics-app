// types
export const types = {
  ADD_ENTRY: 'ADD_ENTRY',
  EDIT_ENTRY: 'EDIT_ENTRY',
  DELETE_ENTRY: 'DELETE_ENTRY',
};

// initial state
const initialState = {
  lastEntryId: 0,
  entries: [],
};

// Getters
const getters = {
  entries: state => state.entries,
  getEntryById: state => id => state.entries.find(entry => entry.id === id),
};

// Actions
const actions = {
  addEntry({ commit }, payload) {
    commit(types.ADD_ENTRY, payload);
  },
  editEntry({ commit }, payload) {
    commit(types.EDIT_ENTRY, payload);
  },
  deleteEntry({ commit }, payload) {
    commit(types.DELETE_ENTRY, payload);
  },
};

// mutations
const mutations = {
  /* eslint-disable no-param-reassign */
  [types.ADD_ENTRY](state, payload) {
    state.lastEntryId += 1;
    state.entries.push({
      id: state.lastEntryId,
      ...payload,
    });
  },
  [types.EDIT_ENTRY](state, payload) {
    state.entries = state.entries.map(entry => {
      if (entry.id === payload.entry.id) {
        return payload.entry;
      }
      return entry;
    });
  },
  [types.DELETE_ENTRY](state, payload) {
    state.entries = state.entries.filter(entry => entry.id !== payload.entryId);
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
