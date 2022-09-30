import { atom } from "recoil";

export const openAlert = atom({
  key: "openAlert",
  default: false,
});

export const alert = atom({
  key: "alert",
  default: "",
});
