import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Insights from "../screens/Insights";
import Profile from "../screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator();

function MyTabs(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false, 
            tabBarStyle:{
            backgroundColor: "black",
            borderTopWidth: 0
        },
        tabBarActiveTintColor: '#4db806ff',
        tabBarInactiveTintColor: '#9ca3af'
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Insights" component={Insights} />
        </Tab.Navigator>
    );
}

export default function AppNav(){

    return(
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="BottomTabs" component={MyTabs}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
    );
}