
/**
 * @fileoverview
 * Type definitions

/**
 * Represents the state for authentication.
 */
export interface AuthState {
    /**
     * The authentication token, or null if not authenticated.
     */
    token: string | null;

    /**
     * Any error message related to authentication, or null if there is no error.
     */
    error: string | null;
}

/**
 * Represents the state for search functionality.
 */
export interface SearchState {
    /**
     * The type of search, it should never be null.
     */
    type: string | null
}

/**
 * Represents the action payload for a successful login.
 */
export interface LoginSuccessAction {
    /**
     * The token received upon successful login.
     */
    payload: string;
}

/**
 * Represents the action payload for a failed login.
 */
export interface LoginFailureAction {
    /**
     * The error message received upon failed login.
     */
    payload: string;
}

/**
 * Represents the response structure for authentication requests.
 */
export interface AuthResponse {
    /**
     * A message related to the authentication response.
     */
    message: string;

    /**
     * A boolean indicating the success of the authentication request.
     */
    ok: boolean;

    /**
     * The authentication token received upon successful authentication.
     */
    token: string;
    /**
     * This is a default image while it has not loaded yet, maybe?
     */
    image: string;
    /**
     * if saved data, this will be used when relogging in
     */
    name: string,
    /**
     * handles error from API
     */
    error: string
}

/**
 * Represents the Login params
 */
export interface LoginProps {
    /**
     * A message related to the authentication response.
     */
    email: string;

    /**
     * A boolean indicating the success of the authentication request.
     */
    password: boolean;

    /**
     * The authentication token received upon successful authentication.
     */
    navigate: (e: string) => void;
}

export interface saveLoginState {
    /**
     * The authentication token, or null if not authenticated.
     */
    image: string | null;

    /**
     * Any error message related to authentication, or null if there is no error.
     */
    email: string | null;
    password: string | null;
}

export interface StudentData {
name: string;
attendance: string;
remarks: string;
attendanceId: string;
studentId: string;
photo: string;
gender: string;
}
