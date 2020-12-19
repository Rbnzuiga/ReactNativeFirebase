import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {VideojuegosContext} from '../Context/VideojuegosContext';


const Listado = ({navigation}) => {


const{lista, setVideojuego, setLista, eliminar} = useContext (VideojuegosContext);




        return (<View style={styles.container}>
            <Header
            centerComponent={{ text: 'Lista de videojuegos', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add-circle', color: '#fff', onPress:()=>{
                setVideojuego({
                    codigo:null,
                    nombre:"",
                    genero:""

                })

                navigation.navigate('Formulario', {status:"add"})

            } }}
            containerStyle={{backgroundColor:'gray'}}
            />

                <ScrollView>
                    {
                        lista.length>0
                        ?
                        lista.map((a,i)=>(
                        <ListItem key={i} bottomDivider>
                         <ListItem.Content>
                             <ListItem.Title>{a.nombre}</ListItem.Title>
                             <ListItem.Title>{a.genero}</ListItem.Title>
                        </ListItem.Content>   
                         <View style={styles.buttons}>
                             <Ionicons name = 'ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.codigo)} />
                             <Ionicons name = 'md-create' size={30} color={'green'} onPress ={()=>{
                                 setVideojuego({
                                     codigo:a.codigo,
                                     nombre:a.nombre,
                                     genero:a.genero
                                 })
                                 navigation.navigate('Formulario',{status:"edit"})



                             }} />


                             
                             
                             </View>  


                        </ListItem>    


                        ))
                            :
                            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay Videojuegos</Text>
                    }

                </ScrollView>

 </View>);


}
export default Listado;


const  styles = StyleSheet.create({
  container:{
      backgroundColor: 'white',
      flex:1,
  },
  buttons:{
      width:'25%',
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
    

})
