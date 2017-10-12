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
};
</script>
