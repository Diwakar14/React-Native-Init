import { EAuthActionTypes } from "./ActionContants";
import { IAuthStore } from "./Store";

export const AuthReducer = ((prevState: IAuthStore, action: IAuthStore & { type: string }) => {
    switch (action.type) {
        case EAuthActionTypes.Init:
            return { ...prevState, ...action };
        case EAuthActionTypes.Login:
            return { ...prevState, ...action };
        default:
            return {}
    }
});