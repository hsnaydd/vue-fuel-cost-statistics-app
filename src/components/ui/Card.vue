<template>
  <div class="card bg-light mb-3">
    <div class="card-header">{{title}}</div>
    <div class="card-body">
      <div class="card-stats">
        <slot name="icon"></slot>
        <span class="card-count">{{count}}</span>
      </div>
    </div>
  </div>
</template>

<style>
.card-stats {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-count {
  color: var(--color-oslo-gray);
  font-size: 32px;
  margin-left: 18px;
}
</style>

<script>
export default {
  name: 'Card',
  props: [
    'title',
    'count'
  ]
};
</script>
