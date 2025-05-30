import { atom } from "recoil";

export const money = atom({
    key: "paisa",
    default: {Id : "", name : "", amount : 0}
})