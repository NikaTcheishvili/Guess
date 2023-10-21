export const INVALID_EMAIL = 'auth/invalid-email';
export const INTERNAL_ERROR = 'auth/internal-error';

type AuthErrorCode = typeof INVALID_EMAIL | typeof INTERNAL_ERROR;

export interface AuthError {
  code: AuthErrorCode;
}
