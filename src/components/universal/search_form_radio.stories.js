import searchFormRadio from "./search_form_radio";
export default {
  title: "Components/Radio",
  component: searchFormRadio,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    textActiveColor: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormRadio },
  template:
    '<div style="width:400px;background: #ccc;padding: 20px"><search-form-radio v-model="value" v-bind="$props"><template #unchecked>{{slotUnchecked}}</template><template #checked>{{slotChecked}}</template></search-form-radio></div>',
});

export const formRadio = Template.bind({});
formRadio.args = {
  slotChecked: "true",
  slotUnchecked: "false",
};
