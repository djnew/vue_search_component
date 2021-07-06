<template>
  <div class="form-search__select_container">
    <select
      ref="select"
      :style="styleVariant"
      class="form-search__select"
      name="city_search"
      @change="$emit('input', value)"
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
  computed: {
    styleVariant() {
      return {
        background: this.backgroundColor,
        color: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

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
        border-left: 5px solid #fff;
        border-right: 5px solid #fff;
        border-top: 6px solid #5a768e;
        content: "";
        height: 0;
        pointer-events: none;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 1px;
        z-index: 1;
      }
    }
  }
}
</style>
