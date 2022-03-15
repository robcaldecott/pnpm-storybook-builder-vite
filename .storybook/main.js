module.exports = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  features: {
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    // This proposed fix does not work

    // const { dirname } = require("path");
    // // https://github.com/eirslett/storybook-builder-vite/issues/55
    // config.root = dirname(require.resolve("storybook-builder-vite"));
    // config.server.fsServe = {};
    return config;
  },
};
