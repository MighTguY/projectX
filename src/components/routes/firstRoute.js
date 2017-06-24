import React from 'react';
import {StackNavigator} from 'react-navigation'

import Login from '../login/Login'
import Signup from '../signup/Signup'
import Dashboard from '../dashboard/Dashboard'

export const FirstStack = StackNavigator ({
  Login : {
    screen: Login
  },
  Signup : {
    screen: Signup
  },
  Dashboard : {
    screen: Dashboard
  }
},{
  headerMode: 'none'
})
