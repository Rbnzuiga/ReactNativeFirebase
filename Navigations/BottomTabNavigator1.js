import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listado from '../Screens/Listado'
import Formulario from '../Navigations/StackNavigator1'
import HomeScreen from '../Screens/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();


export default function BottomTabNavigator1(){
return(
<Tab.Navigator>

<Tab.Screen 
    name="Home"
    component={HomeScreen}
    options={{
        tabBarLabel:"Home",
        tabBarIcon:({color})=>(
            <Ionicons name={"ios-home"} size={20} color={color}/>
        )     
    }
    }
    />
  

<Tab.Screen
    name="Formulario"
    component={Formulario}
    options={{
        tabBarLabel:"Listado",
        tabBarIcon:({color})=>(
            <Ionicons name={"ios-list"} size={20} color={color}/>
        )     
    }
    }
    />

   

</Tab.Navigator>

)


}