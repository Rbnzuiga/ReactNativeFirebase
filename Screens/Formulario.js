import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {VideojuegosContext} from '../Context/VideojuegosContext';
import Constants from 'expo-constants';
import { set } from 'react-native-reanimated';
import firebase from '../Settings/ConfigFirebase'

export default function Formulario({route, navigation}){
    const {status} = route.params;
    const {videojuego,lista,setVideojuego,setLista}= useContext(VideojuegosContext);
     
    
    return(
        <View style={styles.container}> 
         <Text style={styles.header}> Videojuegos </Text>

        <Formik
        initialValues={videojuego}
         onSubmit={(values,{resetForm}) =>{
             firebase.database().ref('videojuegos/'+ videojuego.codigo).update(videojuego).then(()=>{
                 alert("Enviado")
             })
          const temporal = lista.filter(al=>al.codigo!=videojuego.codigo);   
             //alert('enviado')
             setLista([...temporal, videojuego]);
             resetForm({
                codigo:"",
                nombre:"",
                genero:""
             })
             navigation.goBack();
        
            }}
            validate={(values) => {
                setVideojuego(values)
                console.log(videojuego)
               
            }}


         >
             {
            ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                <View>
                    <TextInput
                    style={styles.textinput}
                    onChangeText={handleChange('codigo')}
                    onBlur={handleBlur('codigo')}
                    placeholder = "Codigo"
                    value = {values.codigo}
                    editable={status==="add"?true:false}
                    />

                <TextInput
                    style={styles.textinput}
                    onChangeText={handleChange('nombre')}
                    onBlur={handleBlur('nombre')}
                    placeholder = "Nombre"
                    value = {values.nombre}
                    />  


               <View style= {styles.picker}>
                   <Picker
                        mode="dialog"
                        style={{height:40, backgroundColor:'pink'}}
                        selectedValue={values.genero}
                        onValueChange={ (v)=>
                        setFieldValue('genero', v)
                        }  
                   >
                     
                <Picker.Item color="grey" label = "Genero" value="" />
                <Picker.Item color="black" label = "Accion" value="Accion" />
                <Picker.Item color="black" label = "Terror" value="Terror" />
                <Picker.Item color="black" label = "RPG" value="RPG" />
                 </Picker>
                 
                 </View>

                 <View  style={{marginTop:20}}>
                     <Button
                     buttonStyle={styles.buttons}
                     onPress={handleSubmit}
                     title="Enviar"
                     />
                     {
                         status==="add"
                        &&
                        <Button
                        buttonStyle={styles.buttons}
                        onPress={handleReset}
                        title="Limpiar"
                        />


                     }
                   


                     
                 </View>               


                </View>



            )


             }


        </Formik>
 
    
        </View>
    )
    
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent:'center',
          margin: 20,
          marginTop:Constants.statusBarHeight 
        
        },
        texterror:{
            color: 'red'
        },
        textinput:{
            borderRadius:10,
            height: 40,
            borderColor: 'gray', 
            borderWidth: 1,
            margin: 5,
            paddingLeft: 15,
            backgroundColor: 'white',
            elevation: 2,
             },
             buttons:
             {
                backgroundColor: 'gray',
                color: 'black',
                marginTop: 10,
                borderRadius: 10
             },
             header:
             {
             fontSize:20,
             textAlign: 'center',
             marginBottom:40
             }


      });
