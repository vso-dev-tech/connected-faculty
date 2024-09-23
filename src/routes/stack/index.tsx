import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Tabs from '../../routes/tabs';
import Search from '../../screens/global/search';
import Logout from '../../screens/auth/logout';
import { RootStackParamList } from 'global/types';
import Login from '../../screens/auth/login';
import Splash from '../../screens/partials/splash';
import SavedLoginScreen from '../../screens/auth/saved';


const Stack = createStackNavigator<RootStackParamList>();

const Stacks: React.FC = () => {

	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen
				name="Splash"
				component={Splash}
				options={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
				}}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
				}}
			/>
			<Stack.Screen
				name="SaveLogin"
				component={SavedLoginScreen}
				options={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
				}}
			/>
			<Stack.Screen
				name="Tabs"
				component={Tabs}
				options={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
				}}
			/>
			<Stack.Screen
				name="Search"
				component={Search}
				options={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				}}
			/>
			<Stack.Screen
				name="Logout"
				component={Logout}
				options={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
				}}
			/>
		</Stack.Navigator>
	);
};

export default Stacks;
