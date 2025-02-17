export const data = [
  {
    name: "public",
    children: [
      {
        name: "index.html",
      },
    ],
  },
  {
    name: "src",
    children: [
      {
        name: "components",
        children: [{ name: "test", children: [{ name: "file.ts" }] }],
      },
      { name: "App.tsx" },

      { name: "data.ts" },
      { name: "index.tsx" },
      { name: "styles.css" },
    ],
  },
  {
    name: "package.json",
  },
  {
    name: "tsconfig.json",
  },
];
