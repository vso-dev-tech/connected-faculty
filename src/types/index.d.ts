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

/**
 * interface of Attendance Prop class data
 */

interface ClassProps {
  classname: string;
  classId: number;
  date: string;
}
/**
 * for future references please put details on each prop below
 * - for data props please check newProps[]
 * - for ClassProps please check ClassProps Object
 * - openImage: string boolean and string, your choice, please change this bro
 */
export type AttendanceProps = {
  data: newProps[];
  class: ClassProps;
  openImage: (e: string, b: boolean, c: string) => void
};
/**
 * basically yes, these are the names of the stack strings, neccessary yes to avoid other errors on where we should be navigating, maybe?
 */
export type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
  Search: undefined;
  Logout: undefined;
  Splash: undefined,
  SaveLogin: undefined;
};

