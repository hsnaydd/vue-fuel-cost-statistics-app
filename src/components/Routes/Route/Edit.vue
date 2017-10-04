<template>
  <tr>
    <td colspan="3">
      <form class="form-row align-items-center" @submit.prevent="onSubmitForm">
        <div>
          <input type="text" class="form-control" v-model="routeName">
        </div>
        <div class="col-auto ml-auto">
          <button type="button" class="btn btn-secondary btn-sm" @click="onCancel">İptal</button>
          <button type="submit" class="btn btn-primary btn-sm">Kaydet</button>
        </div>
      </form>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['route', 'onSubmit', 'onCancel'],

  data() {
    return {
      routeName: this.$props.route ? this.$props.route.name : '',
    };
  },

  methods: {
    onSubmitForm() {
      this.$props.onSubmit({
        ...this.route,
        name: this.routeName,
      });
    },
  },
};
</script>
