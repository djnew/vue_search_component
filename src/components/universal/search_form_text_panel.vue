<template>
  <div :style="{ width: width }">
    <div
      :style="styleVariant"
      class="search-flex-align-center form-search__text_panel"
    >
      <span><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "54px",
    },
    fontSize: {
      type: String,
      default: "18px",
    },
    color: {
      type: String,
      default: "#2f2f2f",
    },
    backgroundColor: {
      type: String,
      default: "#B4E4F3",
    },
  },
  computed: {
    styleVariant() {
      return {
        color: this.color,
        background: this.backgroundColor,
        fontSize: this.fontSize,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.search-flex-align-center {
  display: flex;
  align-content: stretch;
  align-items: center;
  justify-content: center;
}

.form-search__text_panel {
  flex: none;
  height: 100%;
  width: 100%;

  & sup {
    font-size: 8px;
  }
}
</style>
