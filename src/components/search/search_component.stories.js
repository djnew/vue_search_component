import SearchComponent from "./search_component";
export default {
  title: "Components/SearchComponent",
  component: SearchComponent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchComponent },
  template: '<search-component @submit="onSubmit" />',
});

export const searchComponent = Template.bind({});
searchComponent.args = {};
