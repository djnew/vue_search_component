<template>
  <button
    :style="styleVariant"
    class="search-panel__button"
    @click.prevent="$emit('click')"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    borderColor: {
      type: String,
      default: "#416983",
    },
    textColor: {
      type: String,
      default: "#416983",
    },
  },
  computed: {
    styleVariant() {
      return {
        background: this.backgroundColor,
        borderColor: this.borderColor,
        color: this.textColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.search-panel__button {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  cursor: pointer;
  font-family: $font;
  font-size: 18px;
  height: 44px;
  outline: none;
  width: 100%;
}
</style>
