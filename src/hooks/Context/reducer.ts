import Actions from "./actions";

const reducer = (state: any, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case Actions.SAVE_PROFILE:
            return {
                ...state,
                profile: payload
            };

        default:
            throw new Error("Unexpected action");
    }
};

export default reducer;