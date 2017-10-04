<template>
  <Default :route="route" v-if="!editable" :onEditButtonPressed="activeEditable" :onDeleteButtonPressed="onDeletePressed">
  </Default>
  <Edit :route="route" v-else :onSubmit="onEdit" :onCancel="deactiveEditable"></Edit>
</template>

<script>
import Default from './Default';
import Edit from './Edit';

export default {
  props: ['route', 'onEditPressed', 'onDeletePressed'],

  components: { Default, Edit },

  data() {
    return {
      editable: false,
    };
  },

  methods: {
    activeEditable() {
      this.editable = true;
    },

    deactiveEditable() {
      this.editable = false;
    },

    onEdit(route) {
      this.$props.onEditPressed(route);
      this.deactiveEditable();
    },
  },
};

</script>
