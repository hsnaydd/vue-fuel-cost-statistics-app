<template>
  <div v-if="!routes.length" class="alert alert-danger">
    Kayıt ekleyebilmek için lütfen önce
    <router-link class="alert-link" to="/routes">yol</router-link> ekleyiniz!
  </div>
  <div v-else>
    <div class="d-flex justify-content-between align-items-center px-2 py-2">
      <h1 class="border-bottom-0 mb-0">Kayıt Ekle</h1>
    </div>
    <hr>
    <form @submit.prevent="save">
      <div class="form-row">
        <div class="col">
          <div class="form-group">
            <label for="route">Yol*</label>
            <select class="form-control" id="route" v-model="model.route" v-validate="'required'">
              <option :value="null" selected>Seçiniz</option>
              <option v-for="route in routes" :key="route.id" :value="route.id">{{route.name}}</option>
            </select>
            <div class="invalid-feedback">
              Bu alan zorunludur.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="date">Tarih*</label>
            <input id="date" type="date" class="form-control" v-model="model.date" v-validate="'required'">
            <div class="invalid-feedback">
              Bu alan zorunludur.
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group">
            <label for="fuel-price">Yakıt Litre Fiyatı*</label>
            <div class="input-group">
              <input class="form-control" type="text" name="fuel-price" id="fuel-price" v-model.number="model.fuelPrice" v-validate="'required'">
              <span class="input-group-addon"> TL</span>
            </div>
            <div class="invalid-feedback" :class="{'d-block': errors.has('fuel-price')}">
              Bu alan zorunludur.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="distance">Katedilen Mesafe*</label>
            <div class="input-group">
              <input class="form-control" type="text" name="distance" id="distance" v-model.number="model.distance" v-validate="'required'">
              <span class="input-group-addon">km</span>
            </div>
            <div class="invalid-feedback" :class="{'d-block': errors.has('fuel-price')}">
              Bu alan zorunludur.
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group">
            <label for="average-fuel">Ortalama Yakıt*</label>
            <div class="input-group">
              <input class="form-control" type="text" id="average-fuel" name="average-fuel" v-model.number="model.averageFuel" v-validate="'required'">
              <span class="input-group-addon">lt/100 km</span>
            </div>
            <div class="invalid-feedback" :class="{'d-block': errors.has('fuel-price')}">
              Bu alan zorunludur.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="cruising-time">Yolculuk Süresi</label>
            <div class="input-group">
              <input class="form-control" type="text" id="cruising-time" name="cruising-time" v-model.number="model.cruisingTime">
              <span class="input-group-addon">dk</span>
            </div>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col col-lg-2 col-md-3 ml-auto">
          <button class="btn btn-primary btn-block ml-auto" type="submit">Kaydet</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      model: {
        route: null,
      },
    };
  },
  components: {},
  computed: {
    ...mapGetters('routes', ['routes']),
  },
  methods: {
    ...mapActions('entries', {
      addEntryAction: 'addEntry',
    }),

    save() {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.addEntryAction(this.model);
          this.$router.push('Entries');
        }
      });
    },
  },
};
</script>

