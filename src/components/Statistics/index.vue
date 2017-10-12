<template>
  <div>
    <h1>İstatistikler</h1>
    <div class="row">
      <div class="col">
        <Card title="Ortalama Yakıt Maliyeti" :count="`${toFixed(averageCost)} TL`">
          <svg width="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 71" slot="icon">
            <g fill="#868e96" fill-rule="nonzero">
              <path d="M28.5 60.7c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4 4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4zM89.9 60.7c0-5.2-4.2-9.4-9.4-9.4S71 55.5 71 60.7s4.2 9.4 9.4 9.4 9.5-4.2 9.5-9.4zM34.4 20.5c-1.2-2-3.3-3.5-5.8-3.7V10l4.4 1.1c.2 0 .3.1.5.1.9 0 1.7-.6 1.9-1.5.3-1.1-.4-2.2-1.5-2.4L28.5 6V2c0-1.1-.9-2-2-2s-2 .9-2 2v3.5c-2.3.2-4.3 1.4-5.6 3.2-.9 1.3-1.3 2.8-1.3 4.4 0 1.5.4 2.8 1.1 4 1.2 2 3.3 3.5 5.8 3.7v6.8l-4.4-1.1c-.2 0-.3-.1-.5-.1-.9 0-1.7.6-1.9 1.5-.3 1.1.4 2.2 1.5 2.4l5.4 1.3v4c0 1.1.9 2 2 2s2-.9 2-2v-3.5c2.3-.2 4.3-1.4 5.6-3.2.9-1.3 1.3-2.8 1.3-4.4 0-1.4-.4-2.8-1.1-4zM21.7 13c0-.6.1-1.1.4-1.6.1-.2.2-.3.3-.5.5-.8 1.3-1.3 2.3-1.4v7.2c-1.8-.5-3-2-3-3.7zm6.9 15.1v-7.2c1.3.3 2.3 1.2 2.7 2.4.1.4.2.8.2 1.3 0 .8-.2 1.5-.6 2.1-.3.4-.6.7-1 .9-.4.2-.8.4-1.3.5z" />
              <path d="M99.8 46.7c-1.2-6.4-5.1-8.3-13.9-10.4-8.3-2-15-5.5-21.5-9-8.6-4.6-16.8-8.9-27.6-8.9h-.1c.1.2.3.4.4.6 1 1.7 1.6 3.6 1.6 5.6 0 2.2-.6 4.2-1.8 6-1.2 1.8-3 3.2-5.1 3.9v1.2c0 2.8-2.2 5-5 5s-5-2.2-5-5V34l-3.1-.8c-2.7-.7-4.3-3.4-3.6-6.1.6-2.2 2.5-3.8 4.8-3.8.4 0 .8.1 1.2.1l.7.2V23c-2.2-.9-4.1-2.4-5.4-4.5v-.1C7.4 18.8.2 26.2.2 35.3v11c0 4.9 2.7 9.1 6.8 11.3 1.4-5.5 6.4-9.5 12.3-9.5 6.4 0 11.8 4.8 12.6 11.1h36.3c.8-6.2 6.1-11.1 12.6-11.1 6.4 0 11.8 4.8 12.6 11.1h.8c1.1 0 2.3-1 3.1-1.8 2.1-2.8 3.2-6.8 2.5-10.7z" />
            </g>
          </svg>
        </Card>
      </div>
      <div class="col">
        <Card title="Toplam Yakıt Maliyeti" :count="`${toFixed(totalCost)} TL`">
          <svg width="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 71" slot="icon">
            <g fill="#868e96" fill-rule="nonzero">
              <path d="M28.5 60.7c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4 4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4zM89.9 60.7c0-5.2-4.2-9.4-9.4-9.4S71 55.5 71 60.7s4.2 9.4 9.4 9.4 9.5-4.2 9.5-9.4zM34.4 20.5c-1.2-2-3.3-3.5-5.8-3.7V10l4.4 1.1c.2 0 .3.1.5.1.9 0 1.7-.6 1.9-1.5.3-1.1-.4-2.2-1.5-2.4L28.5 6V2c0-1.1-.9-2-2-2s-2 .9-2 2v3.5c-2.3.2-4.3 1.4-5.6 3.2-.9 1.3-1.3 2.8-1.3 4.4 0 1.5.4 2.8 1.1 4 1.2 2 3.3 3.5 5.8 3.7v6.8l-4.4-1.1c-.2 0-.3-.1-.5-.1-.9 0-1.7.6-1.9 1.5-.3 1.1.4 2.2 1.5 2.4l5.4 1.3v4c0 1.1.9 2 2 2s2-.9 2-2v-3.5c2.3-.2 4.3-1.4 5.6-3.2.9-1.3 1.3-2.8 1.3-4.4 0-1.4-.4-2.8-1.1-4zM21.7 13c0-.6.1-1.1.4-1.6.1-.2.2-.3.3-.5.5-.8 1.3-1.3 2.3-1.4v7.2c-1.8-.5-3-2-3-3.7zm6.9 15.1v-7.2c1.3.3 2.3 1.2 2.7 2.4.1.4.2.8.2 1.3 0 .8-.2 1.5-.6 2.1-.3.4-.6.7-1 .9-.4.2-.8.4-1.3.5z" />
              <path d="M99.8 46.7c-1.2-6.4-5.1-8.3-13.9-10.4-8.3-2-15-5.5-21.5-9-8.6-4.6-16.8-8.9-27.6-8.9h-.1c.1.2.3.4.4.6 1 1.7 1.6 3.6 1.6 5.6 0 2.2-.6 4.2-1.8 6-1.2 1.8-3 3.2-5.1 3.9v1.2c0 2.8-2.2 5-5 5s-5-2.2-5-5V34l-3.1-.8c-2.7-.7-4.3-3.4-3.6-6.1.6-2.2 2.5-3.8 4.8-3.8.4 0 .8.1 1.2.1l.7.2V23c-2.2-.9-4.1-2.4-5.4-4.5v-.1C7.4 18.8.2 26.2.2 35.3v11c0 4.9 2.7 9.1 6.8 11.3 1.4-5.5 6.4-9.5 12.3-9.5 6.4 0 11.8 4.8 12.6 11.1h36.3c.8-6.2 6.1-11.1 12.6-11.1 6.4 0 11.8 4.8 12.6 11.1h.8c1.1 0 2.3-1 3.1-1.8 2.1-2.8 3.2-6.8 2.5-10.7z" />
            </g>
          </svg>
        </Card>
      </div>
      <div class="col">
        <Card title="Ortalama yolculuk süresi" count="30 Dk">
          <svg width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" slot="icon">
            <path fill="#868e96" fill-rule="nonzero" d="M28 0C12.56 0 0 12.56 0 28s12.56 28 28 28 28-12.56 28-28S43.44 0 28 0zm0 4c13.28 0 24 10.722 24 24S41.28 52 28 52C14.722 52 4 41.278 4 28S14.722 4 28 4zm0 6c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2s-.895-2-2-2H30V12c0-1.105-.895-2-2-2z" />
          </svg>
        </Card>
      </div>
    </div>
    <EmptyState v-if="!entries.length" text="Yeterli kayıdınız bulunmamaktadır."></EmptyState>
    <div class="table-responsive" v-if="entries.length">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th width="30">#</th>
            <th>Yol Adı</th>
            <th>Mesafe</th>
            <th>Süre</th>
            <th>Tarih</th>
            <th>Ortalama Yakıt</th>
            <th>Yakıt Birim Fiyat</th>
            <th>Maliyet</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="entry in entries">
            <ListItem :entry="entry" v-bind:key="entry.id"></ListItem>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Card from '../ui/Card';
import EmptyState from '../EmptyState';
import ListItem from './ListItem';

export default {
  data() {
    return {};
  },
  components: {
    Card,
    EmptyState,
    ListItem,
  },
  computed: {
    ...mapGetters('entries', ['entries']),
    ...mapGetters('routes', ['routes', 'getRouteById']),

    totalCost() {
      const cost = this.entries.reduce((acc, cur) => {
        acc += this.calculateCost(cur);
        return acc;
      }, 0);
      return cost ? cost : 0;
    },

    averageCost() {
      return this.totalCost ? this.totalCost / this.entries.length : 0;
    }
  },

  methods: {
    calculateCost(entry) {
      return (entry.distance * entry.averageFuel * entry.fuelPrice / 100);
    },

    toFixed(value) {
      if (!value || isNaN(value)) {
        return 0
      }

      return value.toFixed(2);
    }
  }

};
</script>

