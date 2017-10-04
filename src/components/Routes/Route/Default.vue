<template>
  <tr>
    <td>{{route.id}}</td>
    <td>{{route.name}}</td>
    <td align="right">
      <button type="button" class="btn btn-primary btn-sm" @click="onEditButtonPressed">Düzenle</button>
      <button type="button" class="btn btn-danger btn-sm" @click="onDeleteButtonPressed(route.id)">Sil</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['route', 'onEditButtonPressed', 'onDeleteButtonPressed'],
};
</script>

