import React from 'react';

import AddCity from './AddCity/AddCity'
import City from './Cities/City'
import Cities from './Cities/Cities'

import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import {colors} from './theme'

const CitiesNav = createStackNavigator({
    //Cities:{screen:Cities},
    City:{screen:City}
}, {
    navigationOptions:{
        headerStyle:{
            backgroundColor: colors.primary
        },
        headerTintColor:'#fff'
    }

})

const Tabs = createBottomTabNavigator({
    Cities:{ screen:CitiesNav },
    AddCity:{ screen: AddCity}
})

export default Tabs