<template>
  <label
    class="search-button search-button-clear form-search-bottom__button"
    :class="{ active: value }"
    :style="textStyle"
  >
    <input type="checkbox" :value="value" @change="$emit('input', !value)" />
    <i :style="{ borderColor: this.color }" /><slot></slot>
  </label>
</template>

<script>
export default {
  name: "search_icon_button",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#416983",
    },
    activeColor: {
      type: String,
      default: "#8495a1",
    },
  },
  computed: {
    textStyle() {
      return {
        color: !this.value ? this.color : this.activeColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../search_variables";

.search-button {
  font-family: $font;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: none;

  &-clear {
    background: transparent;
    border-radius: 0;
  }
}

.form-search {
  &-bottom {
    &__button {
      transition: $transition_all;
      font-size: 16px;
      input {
        display: none;
      }

      & > i {
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border-width: 2px;
        border-style: solid;
        box-sizing: border-box;
        vertical-align: middle;
        margin: 0 10px 0 24px;
        position: relative;
        transition: $transition_all;

        &::after {
          width: 8px;
          height: 0;
        }

        &::before {
          width: 0;
          height: 8px;
        }

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-width: 1px;
          border-style: solid;
          border-color: inherit;
        }
      }

      &.active {
        & > i {
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>
