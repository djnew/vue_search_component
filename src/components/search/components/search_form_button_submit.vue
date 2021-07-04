<template>
  <button class="form-search__button" type="submit" :style="style">
    <slot>Найти</slot>
  </button>
</template>

<script>
export default {
  name: "searchFormButtonSubmit",
  props: {
    backgroundColor: {
      type: String,
      default: "#2f9a67",
    },

    textColor: {
      type: String,
      default: "#fff",
    },
  },
  computed: {
    style: function style() {
      return {
        background: this.backgroundColor,
        color: this.textColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../search_variables";

.form-search__button {
  border: 0;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  height: 44px;
  outline: none;
  transition: $transition_all;
  width: 130px;
  cursor: pointer;

  @media (max-width: 767px) {
    border-radius: 0 0 3px 3px;
    width: 100%;
  }
}
</style>
