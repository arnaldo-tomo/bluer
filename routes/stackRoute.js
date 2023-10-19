import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from '../screens/home';
import { BASE, DEFAULT, GRAY_DEFAULT, GRAY_LIGTH, LIGTH, NEGRO, PRYMARY } from '../configs';

const Tab = createMaterialBottomTabNavigator();

export const StackRoute = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor={LIGTH}
            inactiveColor={BASE}

            screenOptions={{
                // tabBarLabel: false,
            }}
            barStyle={{
                backgroundColor: GRAY_DEFAULT,
                borderColor: NEGRO,
                shadowColor: BASE,
                position: 'absolute',
                bottom: 20,
                marginLeft: DEFAULT * 2,
                marginRight: DEFAULT * 2,
                borderRadius: DEFAULT * 3,
                overflow: "hidden",
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="home" color={BASE} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={BASE} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="cart"
                component={Home}
                options={{
                    tabBarBadge: 7,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={BASE} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Home}
                options={{
                    tabBarLabel: 'Message',
                    tabBarBadge: '',
                    tabBarColor: 'red',
                    tabBarAccessibilityLabel: 'mbhjmn',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat-processing" color={BASE} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
