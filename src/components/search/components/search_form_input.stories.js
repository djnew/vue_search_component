import searchFormInput from "./search_form_input";
export default {
  title: "Components/Input",
  component: searchFormInput,
  argTypes: {
    placeholder: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormInput },
  template:
    '<div style="width:200px;background: #ccc;padding: 20px"><search-form-input v-model="value" v-bind="$props">Кнопка</search-form-input></div>',
});

export const formInput = Template.bind({});
formInput.args = {
  placeholder: "placeholder",
};
