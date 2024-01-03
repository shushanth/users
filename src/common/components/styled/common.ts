interface Breakpoints {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}

export const devices: Breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const fontSizes = {
  headings: {
    small: "20px",
    medium: "22px",
    large: "26px",
    xlarge: "30px",
  },
  labels: {
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
  },
};

export const colors = {
  white: "#fff",
  black: "#000",
  magnoliaWhite: "#f1f1ff",
  jetBlack: "#393939",
  blackPrimary: "#000000a8",
  blackSecondary: "#000000e8",
  redPrimary: "ff0000d1",
  grayPrimary: "#ccc",
  whiteSnow: "#6666662b",
  tropicalIndigo: "#8282f447",
  tropicalIndigoLight: "#8282f4",
  graniteGray: "#6666665b",
  persianBlue: "#2929be",
  persianBlueLight: "#3636da",
  neonSilver: "#ccccccb5",
  neonSilverLight: "#cccccc40",
};
