<template>
  <div class="form-search-radio">
    <span
      :class="{ active: !value }"
      :style="textUncheckedStyle"
      class="search__radio"
      @click="$emit('input', false)"
    >
      <slot name="unchecked">Выключен</slot>
    </span>
    <label
      :class="{ active: value }"
      :style="{ background: backgroundColor }"
      class="search__radio_fake__element"
    >
      <input :value="value" type="checkbox" @change="$emit('input', !value)" />
    </label>
    <span
      :class="{ active: value }"
      :style="textCheckedStyle"
      class="search__radio"
      @click="$emit('input', true)"
    >
      <slot name="checked">Включен</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "#309a68",
    },
    textColor: {
      type: String,
      default: "#416983",
    },
    textActiveColor: {
      type: String,
      default: "#a9bac6",
    },
  },
  computed: {
    textUncheckedStyle() {
      return {
        color: this.value ? this.textColor : this.textActiveColor,
        borderBottomColor: this.value ? this.textColor : "transparent",
      };
    },
    textCheckedStyle() {
      return {
        color: !this.value ? this.textColor : this.textActiveColor,
        borderBottomColor: !this.value ? this.textColor : "transparent",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form-search-radio {
  overflow: hidden;
  white-space: nowrap;

  input {
    display: none;
  }

  .search__radio {
    border-bottom-style: dotted;
    border-bottom-width: 1px;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    transition: all ease 0.3s;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;

    &.active {
      @media (max-width: 424px) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50px;
      }
    }

    &_fake__element {
      border-radius: 21px;
      cursor: pointer;
      display: inline-block;
      height: 22px;
      margin: 0 13px;
      position: relative;
      vertical-align: middle;
      width: 40px;

      &::after {
        content: "";
        position: absolute;
      }

      &::after {
        background: #fff;
        border-radius: 100%;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        height: 18px;
        left: 2px;
        top: 2px;
        transition: all ease 0.3s;
        width: 18px;
        z-index: 2;
      }

      &.active {
        &::after {
          left: 20px;
        }
      }
    }
  }
}
</style>
