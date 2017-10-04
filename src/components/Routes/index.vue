<template>
  <div>
    <div class="d-flex justify-content-between align-items-center px-2 py-2">
      <h1 class="border-bottom-0 mb-0">Yollarım</h1>
      <button type="button" class="btn btn-success" @click="toggleAddRoute">Ekle</button>
    </div>
    <form class="c-add-route-form p-2 border mb-2" v-if="isAddRouteActive" @submit.prevent="addRoute">
      <div class="form-row align-items-center">
        <div class="col-sm-3">
          <label class="sr-only" for="inlineFormInputName">Name</label>
          <input type="text" class="form-control mb-2 mb-sm-0" v-model="newRouteName" placeholder="Route Name">
        </div>
        <div class="col-auto ml-auto">
          <button type="button" class="btn btn-secondary btn-sm" @click="toggleAddRoute">İptal</button>
          <button type="submit" class="btn btn-primary btn-sm" :disabled="!newRouteName">Kaydet</button>
        </div>
      </div>
    </form>
    <EmptyState v-if="!routes.length"></EmptyState>
    <div class="table-responsive" v-if="routes.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th width="30">#</th>
            <th>Adı</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="route in routes">
            <Route :route="route" v-bind:key="route.id" :onEditPressed="editRoute" :onDeletePressed="deleteRoute"></Route>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.c-add-route-form {
  background-color: var(--color-athens-gray);
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import Route from './Route/';
import EmptyState from '../EmptyState';

export default {
  data() {
    return {
      newRouteName: '',
      isAddRouteActive: false,
    };
  },
  components: {
    Route,
    EmptyState,
  },
  computed: {
    ...mapGetters('routes', ['routes']),
  },
  methods: {
    ...mapActions('routes', {
      addRouteAction: 'addRoute',
      editRouteAction: 'editRoute',
      deleteRouteAction: 'deleteRoute',
    }),

    toggleAddRoute() {
      this.isAddRouteActive = !this.isAddRouteActive;
    },

    addRoute() {
      if (this.newRouteName) {
        this.addRouteAction(this.newRouteName);
        this.newRouteName = '';
      }
    },

    editRoute(route) {
      this.editRouteAction({ route });
    },

    deleteRoute(routeId) {
      this.deleteRouteAction({ routeId });
    },
  },
};

</script>
