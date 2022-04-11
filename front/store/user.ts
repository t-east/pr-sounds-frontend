import { RegisteredUser } from "~/interfaces/user";

export const state = () => ({
    user: {
        user_id: 0,
        user_name: '',
        email: ''
    } as RegisteredUser
});

export const mutations = {
    register(state: any, user: RegisteredUser) {
        state.user = user
    }
}