export default {
  name: "main",
  title: "Main",
  type: "document",
  fields: [
    {
      name: "background",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
    {
      name: "midText",
      title: "MidText",
      type: "string",
    },
    {
      name: "largeText",
      title: "LargeText",
      type: "string",
    },
  ],
};
