import { useReducer } from "react";
import { EAuthActionTypes } from "./ActionContants";
import { AuthReducer } from "./Reducer";
import { AuthStore, IAuthStore } from "./Store";


interface IAuthActions {
    AuthData?: IAuthStore,
    Init(data: IAuthStore): IAuthStore,
    Login(data: IAuthStore): IAuthStore,
    Register(data: IAuthStore): IAuthStore,
    Logout(): void,
}

class Action implements IAuthActions {
    constructor() {
        const [AuthState, dispatch] = useReducer(AuthReducer, AuthStore);
    }
    AuthData?: IAuthStore | undefined;
    Init(data: IAuthStore): any {

    }
    Login(data: IAuthStore): IAuthStore {
        throw new Error("Method not implemented.");
    }
    Register(data: IAuthStore): IAuthStore {
        throw new Error("Method not implemented.");
    }
    Logout(): void {
        throw new Error("Method not implemented.");
    }
}


let AuthActions = () => {
    const [AuthState, dispatch] = useReducer(AuthReducer, AuthStore);
    return {
        AuthData: AuthState as IAuthStore,
        Init: (authData: IAuthStore) => {
            dispatch({ type: EAuthActionTypes.Init, ...authData })
        },
        Login: (authData: IAuthStore) => {
            dispatch({ type: EAuthActionTypes.Login, ...authData })
        }
    };
} 