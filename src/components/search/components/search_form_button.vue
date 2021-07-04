<template>
  <button
    :style="{
      background: backgroundColor,
      borderColor: borderColor,
      color: textColor,
    }"
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
};
</script>

<style lang="scss" scoped>
@import "../search_variables";

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
