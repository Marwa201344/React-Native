import { Box, Text, VStack, Center,HStack, InfoOutlineIcon } from "native-base";
import { StyleSheet } from 'react-native';

import React from 'react';

export default User = ({item, navigation}) =>{
  if(item.id){
    return(
   
     <Box p="2" bg="#A3E4D7" _text={{
        fontSize: "lg",
        fontWeight: "medium",
        letterSpacing: "lg"
        }} shadow={2} style={styles.boxCont}>
          <HStack style={{justifyContent:'space-between',margin:5}}>
                <VStack>
                    <Text>
                    <Text style={{fontWeight:'bold'}}>Name: </Text>
                        {item.name}
                    </Text>
                    <Text>
                        <Text style={{fontWeight:'bold'}}>Email: </Text>
                        {item.email}
                    </Text>
                </VStack>
                <InfoOutlineIcon size="5" onPress={()=>{
                   navigation.navigate({name:'details', params:{
                     id:item.id
                   }})
                }}/>
            </HStack>
      </Box>
      
  );
  }
}

const styles = StyleSheet.create({
  boxCont:{
    borderRadius: 10,
    margin: 5
  },
 
});



