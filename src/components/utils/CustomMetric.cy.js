import CustomMetric from "./CustomMetric.vue";

describe("<CustomMetric />", () => {
  const title = "Test Title";
  const description = "Dummy Description";
  const gauge_colour = "#123456";
  const displaySubButton = true;
  const displayFollowButton = true;
  const buttonTxtColour = "#abcdef";
  const buttonBkgColour = "#fedcba";
  const channelName = "Dummy Channel";

  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CustomMetric, {
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
    cy.contains(title);
    cy.contains(channelName);
  });

  it("renders image and achievement text when count is equal or greater than target", () => {
    cy.mount(CustomMetric, {
      propsData: {
        title,
        description,
        target: 1,
        count: 1,
        gauge_colour,
        displaySubButton,
        displayFollowButton,
        buttonTxtColour,
        buttonBkgColour,
        channelName,
      },
    });

    cy.get("gauge-id").should("not.exist");
    cy.contains("Achievement Complete!");
  });
});
