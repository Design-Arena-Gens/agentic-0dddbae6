import nextConfig from "eslint-config-next";

export default [
  ...nextConfig().map((config) => ({
    ...config,
    rules: {
      ...config.rules,
      "@next/next/no-page-custom-font": "off"
    }
  }))
];
