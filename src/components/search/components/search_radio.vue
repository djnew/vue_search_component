<template>
  <div>
    <span
      class="search__radio"
      :style="textUncheckedStyle"
      @click="$emit('input', false)"
    >
      <slot name="unchecked">Выключен</slot>
    </span>
    <label
      class="search__radio_fake__element"
      :class="{ active: value }"
      :style="{ background: backgroundColor }"
    >
      <input type="checkbox" :value="value" @change="$emit('input', !value)" />
    </label>
    <span
      class="search__radio"
      :style="textCheckedStyle"
      @click="$emit('input', true)"
    >
      <slot name="checked">Включен</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "search_radio",
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
input {
  display: none;
}

.search__radio {
  font-size: 16px;
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  transition: all ease 0.3s;
  cursor: pointer;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  &_fake__element {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
    border-radius: 21px;
    margin: 0 13px;
    vertical-align: middle;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
    }

    &::after {
      width: 18px;
      height: 18px;
      top: 2px;
      left: 2px;
      z-index: 2;
      border-radius: 100%;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
      transition: all ease 0.3s;
    }

    &.active {
      &::after {
        left: 20px;
      }
    }
  }
}
</style>
