/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../assets/colors';
import Attendance from '../../screens/home/attendance';
import Reports from '../../screens/home/reports';
import Bulletin from '../../screens/home/bulletin';
import Menu from '../../screens/home/menu';
import Events from '../../screens/home/calendar';
import { useExitApp } from '../../libraries/redux/functions/global';
type RootTabParamList = {
    Attendance: undefined;
		Reports: undefined;
		Events: undefined;
		Bulletin: undefined;
		Menu: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs: React.FC = () => {

	useExitApp();

  return (
    <Tab.Navigator
        screenOptions={() => ({
        tabBarStyle: { height: 65, justifyContent: 'space-between', alignItems: 'center'},
				tabBarLabelStyle:{fontSize: 12,  textAlign: 'center', fontFamily: 'Yomogi', marginTop: -10, marginBottom: 10},
				headerShown: false,
    })}
    >
			<Tab.Screen
				name = {'Attendance'}
				component={Attendance}
				options={{
					tabBarActiveTintColor: theme.secondary,
					tabBarInactiveTintColor: theme.primary,
					tabBarIcon: ({focused}) => (
						<>
							<Icon
								name = {'edit-note'}
								color = {focused ? theme.secondary : theme.primary}
								size = {focused ? 30 : 25}
							/>
						</>
          ),
				}}
			/>
			<Tab.Screen
				name = {'Reports'}
				component={Reports}
				options={{
					tabBarActiveTintColor: theme.secondary,
					tabBarInactiveTintColor: theme.primary,
					tabBarIcon: ({focused}) => (
						<>
							<Icon
								name = {'insert-chart'}
								color = {focused ? theme.secondary : theme.primary}
								size = {focused ? 30 : 25}
							/>
						</>
          ),
				}}
			/>
			<Tab.Screen
				name = {'Events'}
				component={Events}
				options={{
					tabBarActiveTintColor: theme.secondary,
					tabBarInactiveTintColor: theme.primary,
					tabBarIcon: ({focused}) => (
						<>
							<Icon
								name = {'calendar-today'}
								color = {focused ? theme.secondary : theme.primary}
								size = {focused ? 30 : 25}
							/>
						</>
          ),
				}}
			/>
			<Tab.Screen
				name = {'Bulletin'}
				component={Bulletin}
				options={{
					tabBarActiveTintColor: theme.secondary,
					tabBarInactiveTintColor: theme.primary,
					tabBarIcon: ({focused}) => (
						<>
							<Icon
								name = {'feed'}
								color = {focused ? theme.secondary : theme.primary}
								size = {focused ? 30 : 25}
							/>
						</>
          ),
				}}
			/>
			<Tab.Screen
				name = {'Menu'}
				component={Menu}
				options={{
					tabBarActiveTintColor: theme.secondary,
					tabBarInactiveTintColor: theme.primary,
					tabBarIcon: ({focused}) => (
						<>
							<Icon
								name = {'menu'}
								color = {focused ? theme.secondary : theme.primary}
								size = {focused ? 30 : 25}
							/>
						</>
          ),
				}}
			/>
    </Tab.Navigator>
  );
};

export default Tabs;
