<template>
<li class="cart__item product">
              <div class="product__pic">
                <img :src="item.product.image" width="120"
                 height="120" :alt="item.product.title">
              </div>
              <h3 class="product__title">
                {{ item.product.title }}
              </h3>
              <span class="product__code">
                Артикул: {{ item.product.productId }}
              </span>
              <!-- <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <label for="count">
                  <input type="text" v-model.number="amount" name="count">
                </label>

                <button type="button" aria-label="Добавить один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div> -->
              <ProductCount :product-amount="amount" @update:productAmount="amount = $event"/>

              <b class="product__price">
                {{ (item.amount * item.product.price) | numberFormat }} ₽
              </b>

              <button class="product__del button-del" type="button"
               aria-label="Удалить товар из корзины" @click.prevent="deleteProduct(item.productId)">
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
// import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import ProductCount from './ProductCount.vue';

export default {
  components: { ProductCount },
  filters: { numberFormat },
  props: ['item'],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store
          .dispatch('updateCartProductAmount', { productId: this.item.productId, amount: value });
      },
    },
  },
  methods: {
    // ...mapMutations({ deleteProduct: 'deleteCartProduct' }),
    ...mapActions({ deleteProduct: 'deleteCartProduct' }),
  },
};
</script>
