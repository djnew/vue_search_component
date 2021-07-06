import searchFormIconButton from "./search_form_icon_button";
export default {
  title: "Components/CheckboxButton",
  component: searchFormIconButton,
  argTypes: {
    color: { control: "color" },
    activeColor: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormIconButton },
  template:
    '<div style="width:200px;background: #ccc;padding: 20px"><search-form-icon-button v-model="value" @click="onClick" v-bind="$props">Кнопка</search-form-icon-button></div>',
});

export const formIconButton = Template.bind({});
formIconButton.args = {};
