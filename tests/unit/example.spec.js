import { shallowMount } from "@vue/test-utils";
import search from "@/components/search/search_component.vue";

describe("search_component.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(search, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
