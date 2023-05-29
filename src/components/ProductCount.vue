<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="decrementAmount">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <label for="count">
      <input type="text" :value="productAmount" name="count">
    </label>

    <button type="button" aria-label="Добавить один товар" @click.prevent="incrementAmount">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['productAmount'],
  methods: {
    incrementAmount() {
      this.$emit('update:productAmount', this.productAmount + 1);
    },
    decrementAmount() {
      if (this.productAmount > 1) {
        this.$emit('update:productAmount', this.productAmount - 1);
      }
    },
  },
};
</script>
