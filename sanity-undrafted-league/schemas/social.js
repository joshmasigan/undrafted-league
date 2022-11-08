export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "header",
      title: "Header",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "icons",
      title: "Icon",
      type: "string",
    },
  ],
};
