import { GestureResponderEvent } from "react-native";

export interface EventDate {
    selected: boolean;
    selectedColor: string;
    isSelected: boolean;
    }
    
export interface Day {
dateString: string;
}

export interface MyComponentProps {
eventdates: Record<string, EventDate>;
value: (dateString: string) => void;
}

export type AttendanceProps = {
    data: newProps[];
    class: ClassProps;
    openImage: (e: string, b: boolean, c: string) => void
  };
interface ClassProps {
    classname: string;
    classId: number;
    date: string;
  }