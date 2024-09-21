import { EventDate } from "../interface"

export type EventCalendarProps = {
	eventDate: (e: any) => void
	selectedDate: (e: any) => void
	markedDates: Record<string, EventDate> | null
}
