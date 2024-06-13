import { shallowMount } from "@vue/test-utils";
import CustomMetric from "../src/components/utils/CustomMetric.vue";

describe("CustomMetric.vue", () => {
  const title = "Test Title";
  const description = "Dummy Description";
  const gauge_colour = "#123456";
  const displaySubButton = true;
  const displayFollowButton = true;
  const buttonTxtColour = "#abcdef";
  const buttonBkgColour = "#fedcba";
  const channelName = "Dummy Channel";

  it("renders gauge when count is less than target", () => {
    const title = "Dummy Title";
    const description = "Dummy Description";
    const gauge_colour = "#123456";
    const displaySubButton = true;
    const displayFollowButton = true;
    const buttonTxtColour = "#abcdef";
    const buttonBkgColour = "#fedcba";
    const channelName = "Dummy Channel";

    const wrapper = shallowMount(CustomMetric, {
      propsData: {
        title,
        description,
        target: 10,
        count: 5,
        gauge_colour,
        displaySubButton,
        displayFollowButton,
        buttonTxtColour,
        buttonBkgColour,
        channelName,
      },
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.find("gauge-stub").exists()).toBe(true);
  });

  it("renders image and achievement text when count is equal or greater than target", () => {
    const wrapper = shallowMount(CustomMetric, {
      propsData: {
        title,
        description,
        target: 1,
        count: 2,
        gauge_colour,
        displaySubButton,
        displayFollowButton,
        buttonTxtColour,
        buttonBkgColour,
        channelName,
      },
    });
    expect(wrapper.find("gauge-stub").exists()).toBe(false);
    expect(wrapper.text()).toContain("Achievement Complete!");
  });
});
