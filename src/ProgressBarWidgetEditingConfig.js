import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ProgressBarWidget", {
  title: "Progress Bar",
  attributes: {
    percent: {
      title: "Percent",
    },
    title: {
      title: "Title",
    },
    color: {
      title: "Color",
      description:
        "Default: Primary color",
      values: [
        { value: "primary", title: "Primary" },
        { value: "secondary", title: "Secondary" },
        { value: "dark", title: "Dark" },
        { value: "success", title: "Success" },
        { value: "info", title: "Info" },
        { value: "warning", title: "Warning" },
        { value: "danger", title: "Danger" },

      ],
    },
  },
  properties: ["percent","title", "color"],
  initialContent: {
    color: 'primary'
  }

});


