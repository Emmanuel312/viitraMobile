import React,{Component} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import api from '../services/api'


export default class Carros extends Component
{
    state =
    {
        carros : []
    }
    async componentDidMount()
    {
        const {operacao} = this.props.navigation.state.params
        if(operacao == 0)
        {
            const carros = await api.get('carros_esportivos.json')
            this.setState({carros : carros.data.carros.carro})
            console.log(this.state.carros)
        }
        else if(operacao == 1)
        {
            const carros = await api.get('carros_classicos.json')
            this.setState({carros : carros.data.carros.carro})
        }
        else if(operacao == 2)
        {
            const carros = await api.get('carros_classicos.json')
            this.setState({carros : carros.data.carros.carro})
        }        
    }


    renderItemCar = ({item}) =>
    (
        <TouchableOpacity onPress={this.mostrarDetalhes}>
            <View style={styles.flatList}>
                <Text style={styles.textoFlat}>{item.nome}</Text>
            </View>
        </TouchableOpacity>
        
    )
               

    render()
    {
        return (
            
           <View style={styles.container}>
                <FlatList data={this.state.carros} renderItem={this.renderItemCar} keyExtractor={item => item.nome}/>
           </View>
        )
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:
    {
        marginTop: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        height: 30,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:
    {
        fontWeight: 'bold',
        color: '#fff'
    },
    flatList:
    {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        height: 50
    },
    textoFlat:
    {
        color: 'black',
        
    }
})