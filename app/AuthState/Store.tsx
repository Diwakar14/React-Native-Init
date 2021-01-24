export interface IAuthStore {
    name?: string,
    token?: string,
    role?: string,
    isLoaded?: boolean,
};

export let AuthStore: IAuthStore = { isLoaded: false, token: '', role: '', name: '' };
