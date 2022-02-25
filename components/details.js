import React from 'react';
import {Box, Text, View} from 'native-base';
import { StyleSheet} from 'react-native';
import { getUserDetails, clearDetails } from './action/index';
import {useContext, useEffect} from 'react';
import{ UsersContext } from './context/index'

export default Details = ({route}) =>{
  const {state, dispatch} = useContext(UsersContext);
  useEffect(()=>{
    const resolveAction = async () => {
      dispatch(await getUserDetails(route.params.id));
    };
    resolveAction();
    return()=>{
      dispatch(clearDetails())
    }
  },[])

  if(state.details.id)
  return(
 
      <Box alignSelf="center" bg="#A3E4D7" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }} style={styles.detailsCont}>
    <View style={styles.vStyling}>
        <Text>
        <Text style={{fontWeight:'bold'}}>User ID: </Text> 
        {state.details.id}
        </Text>
      </View>

      <View style={styles.vStyling}>
        <Text>
        <Text style={{fontWeight:'bold'}}>Name: </Text> 
        {state.details.name}
        </Text>
      </View>

      <View style={styles.vStyling}>
        <Text> 
        <Text style={{fontWeight:'bold'}}>User Name: </Text>
        {state.details.username}
        </Text>
      </View>

      <View style={styles.vStyling}>
        <Text>
        <Text style={{fontWeight:'bold'}}>User Email: </Text> 
        {state.details.email}
        </Text>
      </View>

      <View style={styles.vStyling}>
        <Text> 
        <Text style={{fontWeight:'bold'}}>Phone Number: </Text>
        {state.details.phone}
        </Text>
      </View>

      <View style={styles.vStyling}>
        <Text> 
        <Text style={{fontWeight:'bold'}}>Website: </Text>
        {state.details.website}
        </Text>
      </View> 
      </Box>
 
    
      
    
  );
  return <Text>Loading...</Text>
  
}

const styles = StyleSheet.create({
  detailsCont:{
    width: "100%",
    height: "100%"
  },
  vStyling:{
    backgroundColor: "#fff",
    width: "95%",
    height: 60,
    margin: 5,
    borderRadius: 5,
   paddingTop: 18,
   paddingLeft: 20
  }
})