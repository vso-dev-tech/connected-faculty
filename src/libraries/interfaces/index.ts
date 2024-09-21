import { NavigationProp } from "@react-navigation/native";

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