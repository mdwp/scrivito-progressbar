import * as Scrivito from "scrivito";

const ProgressBarWidget = Scrivito.provideWidgetClass("ProgressBarWidget", {
  attributes: {
    percent: "integer",
    title: "string",
    color: ["enum", { values: [
      "primary",
      "secondary",
      "dark",
      "success",
      "info",
      "warning",
      "danger"
    ] }],

  },
});



export default ProgressBarWidget;

