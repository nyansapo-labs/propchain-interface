"use client";

import { COLORS } from "@/constants/theme";

export const useStyles = () => {
  return {
    root: {
      w: "100%",
      overflow: "hidden",
      justify: "space-between",
      // boxShadow: "sm",
    },
    lottieRoot: {
      // height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    drawerContentStyle: {
      bg: "transparent",
      boxShadow: "none",
      my: "20px",
      borderRadius: "20px",
      overflow: "hidden",
    },
    tabchildStyleImage: {
      w: "35px",
      h: "35px",
      borderRadius: "5px",
      bgColor: "black",
    },

    iconsSize: {
      alignSelf: "center",
      w: "18px",
      h: "18px",
    },
    expBox: {
      bg: "black",
      px: "10px",
      py: "5px",
      borderRadius: "10px",
      borderWidth: 1,
      borderColor: "#00000012",
      color: "black",
      h: "40px",
      // _hover: {
      //   transform: "scale(1.1)",
      //   transition: "all 0.07s linear",
      // },
      _disabled: {
        opacity: 0.4,
      },
    },
    tabIndicator: {
      mt: "-2px",
      h: "3px",
      bg: "black",
      borderRadius: "5px",
    },
    tabRoot: {
      color: "black",
      // _selected: { color: appTheme.textColor },
    },
    tableCon: {
      mt: "20px",
      bg: "#FFFFFF",
      px: "10px",
      borderRadius: "10px",
      boxShadow: "0px 4px 20px 0px #00000040",
    },
    prodImg: {
      w: "150px",
      h: "140px",
      borderRadius: "8px",
      bgColor: "grey",
      mr: "10px",
      ml: "3px",
    },
  };
};
