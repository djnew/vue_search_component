<template>
  <div class="form-search__input_container">
    <input
      :placeholder="placeholder"
      :type="isNumber ? 'number' : 'text'"
      :value="value"
      class="form-search__input"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    isNumber: {
      type: Boolean,
      value: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.form-search__input {
  border: none;
  box-sizing: border-box;
  color: #2f2f2f;
  font-family: $font;
  font-size: 18px;
  height: 44px;
  outline: none;
  padding: 0 20px;
  width: 100%;
  text-overflow: ellipsis;

  &::placeholder {
    color: inherit;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  &_container {
    width: 100%;
  }
}
</style>
