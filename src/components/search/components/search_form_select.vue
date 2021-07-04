<template>
  <div class="form-search__select_container">
    <select
      name="city_search"
      class="form-search__select"
      ref="select"
      :style="{ background: backgroundColor, color: color }"
      @change="$emit('input', !value)"
    >
      <option v-for="option in options" :key="option" value="">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    backgroundColor: {
      type: String,
      default: "#fff",
    },
    color: {
      type: String,
      default: "#2f2f2f",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../search_variables";

.form-search {
  &__select {
    $parent: &;
    appearance: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    font-family: $font;
    font-size: 18px;
    height: 44px;
    outline: none;
    padding: 0 35px 0 20px;
    position: relative;
    width: 100%;

    &_container {
      box-sizing: border-box;
      flex: 1;
      position: relative;

      @media (max-width: 767px) {
        flex: auto;
        width: 100%;
      }

      &::after {
        content: "";
        position: absolute;
        top: 20px;
        right: 20px;
        width: 1px;
        height: 0;
        border-top: 6px solid #5a768e;
        border-left: 5px solid #fff;
        border-right: 5px solid #fff;
        z-index: 1;
        pointer-events: none;
      }
    }
  }
}
</style>
