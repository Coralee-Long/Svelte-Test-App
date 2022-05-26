import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Coralee",
    age: 30,
  },
});

export default app;
