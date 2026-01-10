import { RcTranslatable } from '../../../shared';
export interface RcSignInState {
    loading?: boolean;
    error?: RcTranslatable;
}
export type RcSignInAction = {
    type: 'submit';
    payload: {
        identifier: string;
        password: string;
        remember: boolean;
    };
} | {
    type: 'forgot-password';
};
