import React from 'react';
import {useContext, useEffect} from 'react';
import{ UsersContext } from './context'
import{ getUsers }from './action';
import User from './user'
import { Box, Text, FlatList, Heading, VStack } from "native-base";
import { StyleSheet} from 'react-native';

export default Home = (props) =>{

  const { state, dispatch } = useContext(UsersContext);


  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getUsers());
    };
    resolveAction();
  }, []);

  return (

    <VStack>
      <Heading fontSize="xl" p="4" pb="3" style={styles.head}>
        Users List
      </Heading>
      <FlatList data={state.list}
      renderItem={ ({item})=><User item={item} {...props}/> 
      } />
    </VStack>

    );
}

const styles = StyleSheet.create({
  head:{
    alignContent: "center",
    alignSelf: "center"
  },


})