<template>
  <li class="catalog__item">
        <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}"
        >
          <img :src="product.image" :alt="product.title">
        </router-link>

        <h3 class="catalog__title">
          <a href="#">
            {{ product.title }}
          </a>
        </h3>

        <span class="catalog__price">
          {{ product.price | numberFormat }} ₽
        </span>

        <ul class="colors colors--black">
          <li class="colors__item" v-for="color in product.colors" :key="color.id">
            <label :for="String(color.id) + String(product.id)" class="colors__label">
              <input class="colors__radio sr-only" type="radio"
               :id="String(color.id) + String(product.id)" :value="color.id" name="color">
              <span class="colors__value" :style="{backgroundColor: color.code}">
              </span>
            </label>
          </li>
          <!-- <li class="colors__item">
            <label for="color-2" class="colors__label">
              <input class="colors__radio sr-only" type="radio"
               value="#8BE000" v-model="color">
              <span class="colors__value" style="background-color: #8BE000;">
              </span>
            </label>
          </li>
          <li class="colors__item">
            <label for="color-3" class="colors__label">
              <input class="colors__radio sr-only" type="radio"
               value="#222" v-model="color">
              <span class="colors__value" style="background-color: #222;">
              </span>
            </label>
          </li> -->
        </ul>
      </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  props: ['product'],
  filters: {
    numberFormat,
  },
};
</script>
