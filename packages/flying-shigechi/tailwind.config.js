/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      pc: { min: "580px" },
    },
    fontFamily: {
      sans: [
        "IBM Plex Sans",
        "ヒラギノ角ゴシック",
        "Hiragino Sans",
        "Yu Gothic UI",
        "Yu Gothic",
        "メイリオ",
        "Meiryo",
        "sans-serif",
      ],
    },
    fontWeight: {
      normal: 300,
      bold: 600,
    },
    fontSize: {
      16: ["16px", { lineHeight: "1.6", letterSpacing: "0.02em" }],
      20: ["20px", { lineHeight: "1.6", letterSpacing: "0.02em" }],
      24: ["24px", { lineHeight: "1.6", letterSpacing: "0.02em" }],
      32: ["32px", { lineHeight: "1.6", letterSpacing: "0.02em" }],
    },
    boxShadow: {
      DEFAULT: "0 8px 16px rgba(0, 0, 0, 0.12)",
    },
    spacing: {
      0: "0px",
      0.5: "4px",
      1: "8px",
      1.5: "12px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
    },
    borderRadius: {
      0: "0px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      full: "9999px",
    },
    height: {
      full: "100%",
      auto: "auto",
      48: "48px",
      56: "56px",
    },
    width: {
      full: "100%",
      auto: "auto",
      180: "180px", //Button
      300: "300px", // Panel
      420: "420px", // Modal
    },
    maxWidth: {
      180: "180px", //Button
      300: "300px", // Panel
      420: "420px", // Modal
    },
    extend: {},
  },
  plugins: [],
};
