const {
  rules: airbnbAccessibilityRules,
} = require("eslint-config-airbnb/rules/react-a11y");

module.exports = {
  extends: ["./common", "next", "plugin:react/jsx-runtime", "prettier"],
  env: {
    browser: true, // may be removed after we fully migrated to nextjs
    jest: true,
  },
  rules: {
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        ...airbnbAccessibilityRules["jsx-a11y/label-has-associated-control"][1],
        assert: "either",
      },
    ],
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/require-default-props": "off",
      },
    },
    {
      files: ["*.stories.[jt]sx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
