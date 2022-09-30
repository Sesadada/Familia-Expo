import { atom } from "recoil";

export const openState = atom({
  key: "openState",
  default: false,
});

export const openFinance = atom({
  key: "openFinance",
  default: false,
});

export const openPicture = atom({
  key: "openPicture",
  default: false,
});

export const openChangePro = atom({
  key: "openChangePro",
  default: "",
});

export const openAddPro = atom({
  key: "openAddPro",
  default: false,
});
