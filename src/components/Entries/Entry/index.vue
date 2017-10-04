<template>
  <tr>
    <td>{{entry.id}}</td>
    <td>{{getRouteById(entry.route).name}}</td>
    <td>{{entry.distance}} km</td>
    <td>{{entry.cruisingTime ? `${entry.cruisingTime} dk` : '-'}}</td>
    <td>{{entry.date}}</td>
    <td>{{entry.averageFuel}} lt/100km</td>
    <td>{{entry.fuelPrice}} TL</td>
    <td>{{cost}} TL</td>
    <td align="right">
      <router-link class="btn btn-primary btn-sm" :to="{ name: 'EditEntry', params: { id: entry.id }}">Düzenle</router-link>
      <button type="button" class="btn btn-danger btn-sm" @click="deleteEntry">Sil</button>
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['entry'],
  computed: {
    ...mapGetters('routes', ['getRouteById']),

    cost() {
      return (this.entry.distance * this.entry.averageFuel * this.entry.fuelPrice / 100).toFixed(2);
    },
  },
  methods: {
    ...mapActions('entries', {
      deleteEntryAction: 'deleteEntry',
    }),

    deleteEntry() {
      // eslint-disable-next-line no-alert
      if (window.confirm('Kayıt silinecek, emin misiniz?')) {
        this.deleteEntryAction({ entryId: this.entry.id });
      }
    },
  },
};
</script>
