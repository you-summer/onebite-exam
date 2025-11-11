import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off", // 선언만되고 사용되지않는 변수가 있을때 에러로 표기하도록 설정하는 함수 꺼준것
      "@typescript-eslint/no-explicit-any": "off",
      // 명시적으로 특정 변수의 any타입을 정의할 수 없도록 막아주는 옵션
      // 유용하지만 실습중에는 any를 가끔 써야하므로 꺼줌
    },
  }
);
