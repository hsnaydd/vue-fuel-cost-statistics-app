<template>
  <div>
    <div class="d-flex justify-content-between align-items-center px-2 py-2">
      <h1 class="border-bottom-0 mb-0">Kayıtlarım</h1>
      <router-link class="btn btn-success" to="/add-entry">Ekle</router-link>
    </div>
    <EmptyState v-if="!entries.length" text="Henüz hiç kayıdınız bulunmamaktadır."></EmptyState>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="entry in entries">
            <Entry :entry="entry" v-bind:key="entry.id"></Entry>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EmptyState from '../EmptyState';
import Entry from './Entry';

export default {
  data() {
    return {};
  },
  components: {
    EmptyState,
    Entry,
  },
  computed: {
    ...mapGetters('entries', ['entries']),
  },
  methods: {
    ...mapActions('entries', {
      deleteEntryAction: 'deleteEntry',
    }),
  },
};
</script>

<style>
.table-bordered td,
.table-bordered th {
  white-space: nowrap;
}
</style>

