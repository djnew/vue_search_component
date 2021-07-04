import searchFormSelect from "./search_form_select";
export default {
  title: "Components/Select",
  component: searchFormSelect,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormSelect },
  template:
    '<div style="width:400px;background: #ccc;padding: 20px"><search-form-select v-model="value" v-bind="$props"></search-form-select></div>',
});

export const formSelect = Template.bind({});
formSelect.args = {
  options: ["Значение1", "Значение2"],
};
