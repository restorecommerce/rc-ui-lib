export type RcSignUpAction = {
    type: 'submit';
    payload: {
        firstName: string;
        lastName: string;
        email: string;
        username: string;
        password: string;
    };
} | {
    type: 'password-mismatch';
} | {
    type: 'cancel';
};
export interface RcSignUpState {
    loading: boolean;
    success?: boolean;
    error?: string;
    fieldErrors?: Partial<{
        firstName: string;
        lastName: string;
        email: string;
        username: string;
        password: string;
        confirmPassword: string;
    }>;
}
