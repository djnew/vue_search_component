<template>
  <label
    :class="{ active: value }"
    :style="styleVariant"
    class="search-button search-button-clear form-search-icon__button"
  >
    <input :value="value" type="checkbox" @change="$emit('input', !value)" />
    <i :style="{ borderColor: this.color }" />
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
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
    styleVariant() {
      return {
        color: !this.value ? this.color : this.activeColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.search-button {
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-family: $font;
  outline: none;

  &-clear {
    background: transparent;
    border-radius: 0;
  }
}

.form-search {
  &-icon {
    &__button {
      font-size: 16px;
      transition: $transition_default_all;

      input {
        display: none;
      }

      &:first-child {
        & > i {
          margin-left: 0;
        }
      }
      & > span {
        vertical-align: middle;
      }

      & > i {
        border-radius: 50%;
        border-style: solid;
        border-width: 2px;
        box-sizing: border-box;
        display: inline-block;
        height: 18px;
        margin: 0 10px 0 24px;
        position: relative;
        transition: $transition_default_all;
        vertical-align: middle;
        width: 18px;

        &::after {
          height: 0;
          width: 8px;
        }

        &::before {
          height: 8px;
          width: 0;
        }

        &::before,
        &::after {
          border-color: inherit;
          border-style: solid;
          border-width: 1px;
          content: "";
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
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
