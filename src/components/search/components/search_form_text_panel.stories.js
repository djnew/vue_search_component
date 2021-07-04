import searchFormTextPanel from "./search_form_text_panel";
export default {
  title: "Components/Text",
  component: searchFormTextPanel,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { searchFormTextPanel },
  template:
    '<div style="width:400px;background: #ccc;padding: 20px"><search-form-text-panel v-bind="$props">{{text}}</search-form-text-panel></div>',
});

export const formTextPanel = Template.bind({});
formTextPanel.args = {
  width: "120px",
  fontSize: "18px",
  text: "Текст",
};
