import searchFormButtonSubmit from "./search_form_button_submit";
export default {
  title: "Components/ButtonSubmit",
  component: searchFormButtonSubmit,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormButtonSubmit },
  template:
    '<div style="width:200px;background: #ccc;padding: 20px"><search-form-button-submit @click="onClick" v-bind="$props">Кнопка</search-form-button-submit></div>',
});

export const formSubmitButton = Template.bind({});
formSubmitButton.args = {};
