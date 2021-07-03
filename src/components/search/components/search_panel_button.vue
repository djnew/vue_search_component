<template>
  <button
    class="search-panel__button"
    :style="{
      background: backgroundColor,
      borderColor: borderColor,
      color: textColor,
    }"
    @click.prevent="$emit('click')"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  name: "search_panel_button",
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
  width: 100%;
  height: 42px;
  font-size: 18px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  font-family: $font;
  outline: none;
  cursor: pointer;
  box-shadow: none;
}
</style>
