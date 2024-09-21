import { Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import { Calendar } from 'react-native-calendars'
import { Day, EventDate } from './interface';
import { theme } from '../../../../assets/colors';
import { EventCalendarProps } from './types';
const { width } = Dimensions.get('screen')

const EventCalendar = (props: EventCalendarProps) => {

	const onDayPress = useCallback((day: Day) => {
		const date = new Date(day.dateString);

		const formatterDay = new Intl.DateTimeFormat('en-GB', { weekday: 'long' });
		const formatterFormat = new Intl.DateTimeFormat('en-US', {
			month: 'long', day: '2-digit', year: 'numeric'
		});
		const newDay = formatterDay.format(date);
		const newDate = formatterFormat.format(date)
		console.log(newDay, newDate)
		props.eventDate((prevEventdates: Record<string, EventDate>) => {
			const updatedEventDates: Record<string, EventDate> = { ...prevEventdates };

			Object.keys(updatedEventDates).forEach((dateKey) => {
				if (updatedEventDates[dateKey].isSelected) {
					delete updatedEventDates[dateKey];
				}
			});

			updatedEventDates[day.dateString] = {
				selected: true,
				selectedColor: theme.primary,
				isSelected: true,
			};

			return updatedEventDates;
		});

		props.selectedDate(date);
	}, []);

	return (
		<Calendar
			style={{
				borderWidth: 0,
				borderRadius: 10,
				borderColor: 'gray',
				height: 275,
				width: width * 0.9,
				backgroundColor: '#ffff',
				marginTop: 30,
			}}
			onDayPress={(datestring: Day) => onDayPress(datestring)}
			markingType={'simple'}
			markedDates={props.markedDates}
			theme={{
				backgroundColor: '#ffffff',
				calendarBackground: '#ffffff',
				textSectionTitleColor: theme.primary,
				selectedDayBackgroundColor: theme.primary,
				selectedDayTextColor: theme.secondary,
				todayTextColor: theme.primary,
				dayTextColor: '#000',
				arrowColor: theme.primary,
			}}
		/>
	)
}

export default EventCalendar;