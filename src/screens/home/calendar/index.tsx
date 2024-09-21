import { View, Text, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, SafeAreaContainer } from '../../../libraries/components/views'
import { TabHeaders } from '../../../libraries/components/headers'
import { Calendar } from 'react-native-calendars';
import { Day, EventDate } from 'screens/types';
import { theme } from '../../../assets/colors';
import EventCalendar from './components/calendar';

const Events= () => {

  const [eventdates, setEventdates] = useState<Record<string, EventDate> | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  

  return (
    <SafeAreaContainer>
        <TabHeaders 
          name='Calendar'
          rightIconActive
          rightIcon='manage-search'
        />
      <Container style={{justifyContent: 'flex-start', height: '100%',}}>
      <EventCalendar 
        eventDate={(e) => {setEventdates(e)}}
        selectedDate={(e) => {setSelectedDate(e)}}
        markedDates={eventdates}
      />
      </Container>
    </SafeAreaContainer>

  )
}

export default Events;