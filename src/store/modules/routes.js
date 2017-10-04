// types
export const types = {
  ADD_ROUTE: 'ADD_ROUTE',
  EDIT_ROUTE: 'EDIT_ROUTE',
  DELETE_ROUTE: 'DELETE_ROUTE',
};

// initial state
const initialState = {
  lastRouteId: 0,
  routes: [],
};

// Getters
const getters = {
  routes: state => state.routes,
  getRouteById: state => id => state.routes.find(route => route.id === id),
};

// Actions
const actions = {
  addRoute({ commit }, payload) {
    commit(types.ADD_ROUTE, payload);
  },
  editRoute({ commit }, payload) {
    commit(types.EDIT_ROUTE, payload);
  },
  deleteRoute({ commit }, payload) {
    commit(types.DELETE_ROUTE, payload);
  },
};

// mutations
const mutations = {
  /* eslint-disable no-param-reassign */
  [types.ADD_ROUTE](state, payload) {
    state.lastRouteId += 1;
    state.routes.push({ id: state.lastRouteId, name: payload });
  },
  [types.EDIT_ROUTE](state, payload) {
    state.routes = state.routes.map(route => {
      if (route.id === payload.route.id) {
        return payload.route;
      }
      return route;
    });
  },
  [types.DELETE_ROUTE](state, payload) {
    state.routes = state.routes.filter(route => route.id !== payload.routeId);
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
