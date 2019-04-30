import {createAppContainer,createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Carros from './pages/carros'
import Favoritos from './pages/favoritos'
import Listagem from './component/listagem'

const Search =  createStackNavigator(
{
    Carros,
    Listagem
})

const routes = createBottomTabNavigator(
{
    Search,
    Favoritos
})


export default createAppContainer(routes,{})