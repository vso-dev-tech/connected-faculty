/**
 * @fileoverview
 * This file contains all types used within the library.
 * If you encounter any props that are not defined here, consider adding them to this section.
 *
 * © vsodev.tech. All rights reserved.
 *
 * Note:
 * If you find any anomalies in the props, please investigate their usage and inform the team before making any changes.
 *
 * If a ticket requires modifications related to this file, please include the ticket number below:
 *
 * Ticket Number: [Insert Ticket Number Here]
 *
 * For any further queries or issues, please contact the team.
 */

import { StudentData } from 'library/interface';
import { ViewStyle } from 'react-native';
import { GestureResponderEvent } from 'react-native';

/**
 * @fileoverview
 * Type definitions for the components used in the views/index module.
 */

/**
 * Props for the SafeAreaContainer component.
 */
export type SafeAreaProps = {
    /**
     * The children to be rendered within the SafeAreaContainer.
     * Can be a single React element, an array of React elements, or null.
     */
    children: React.ReactElement | React.ReactElement[] | null;
};

/**
 * Props for the ScrollContainer component.
 */
export type ScrollProps = {
    /**
     * The children to be rendered within the ScrollContainer.
     * Can be a single React element, an array of React elements, or null.
     */
    children: React.ReactElement | React.ReactElement[] | null;
};

/**
 * Props for the Container component.
 */
export type ContainerProps = {
    /**
     * The children to be rendered within the Container.
     * Can be a single React element, an array of React elements, or null.
     */
    children: React.ReactElement | React.ReactElement[] | null;

    /**
     * Optional style to be applied to the Container.
     * Allows the Container to adjust its appearance according to the provided style.
     * This prop is not required when using the component.
     */
    style?: ViewStyle;
};

export type HeaderProp = {
    /**
     * The name to be displayed by the component.
     */
    name: string;

    /**
     * Optional flag indicating if the left icon is active.
     * If true, the left icon will be shown as active.
     */
    leftIconActive?: boolean;

    /**
     * Optional flag indicating if the right icon is active.
     * If true, the right icon will be shown as active.
     */
    rightIconActive?: boolean;

    /**
     * Optional callback function triggered when the left icon is pressed.
     * Receives a GestureResponderEvent as an argument.
     */
    leftIconPress?: (e: GestureResponderEvent) => void;

    /**
     * Optional callback function triggered when the right icon is pressed.
     * Receives a GestureResponderEvent as an argument.
     */
    rightIconPress?: (e: GestureResponderEvent) => void;

    /**
     * Optional string representing the left icon.
     * This could be a URL or an identifier for the icon.
     */
    leftIcon?: string;

    /**
     * Optional string representing the right icon.
     * This could be a URL or an identifier for the icon.
     */
    rightIcon?: string;
};

export type SearchProp = {
    type: string
    navigate: (route: string) => void
};


export type StudentListProps = {
    data: StudentData
    onPress: (e: GestureResponderEvent) => void
    openImage: (e: string, b: boolean, c: string) => void
};

export type ModalProps = {
    visible: boolean,
    onRequestClose: (e: any) => void
    source: string
    close: (e: GestureResponderEvent) => void
    gender: string
}
