import searchFormButton from "./search_form_button";

export default {
  title: "Components/Button",
  component: searchFormButton,
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormButton },
  template:
    '<div style="width:200px;background: #ccc;padding: 20px"><search-form-button @click="onClick" v-bind="$props">Кнопка</search-form-button></div>',
});

export const formButton = Template.bind({});
formButton.args = {};
