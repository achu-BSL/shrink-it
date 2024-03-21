import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
    username: string,
    token: string,
};

interface IUserStore {
    user: IUser | null;
    updateUser: (newUserDetails: IUser | null) => void;
}


export const useUserStore = create<IUserStore>()(
    persist(
        (set) => ({
            user: null,
            updateUser: (
                newUserDetails: IUser | null
            ) => set(() => ({user: newUserDetails}))
        }),
        {name: "user"}
    )
);