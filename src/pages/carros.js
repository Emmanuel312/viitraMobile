import React,{Component} from 'react'
import { View,Text,TouchableOpacity,StyleSheet}from 'react-native'


export default class Carros extends Component
{
    state =
    {
        op : ''
    }
    handlePress = () =>
    {
        this.props.navigation.navigate('Listagem',{operacao : this.state.op})
    }
    render()
    {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.setState({op: 0})}>
                    <Text style={styles.textButton} >Esportivo</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.button} onPress={() => this.setState({op: 1})}>
                    <Text style={styles.textButton}>Clássicos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.setState({op: 2})}>
                    <Text style={styles.textButton}>Luxo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:'green'}]} onPress={this.handlePress}>
                    <Text style={styles.textButton}>Pesquisar</Text>
                </TouchableOpacity>
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
    }
})