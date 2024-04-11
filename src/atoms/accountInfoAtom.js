import { atom } from "recoil";

export const accountInfoAtom = atom({
    key: "accountInfoAtom",
    default: {
        accountId: 0,
        username: "",
        name: "",
        phoen: "",
        email: "",
    },
});
