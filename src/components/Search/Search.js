import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { SearchBar } from '@rneui/themed';
import {styles} from './styles';


const Search = ({onChangeText, onClear, value, searchFilterFunction, showLoading}) => {

  return (
    <>
      <SearchBar
        placeholder="Search"
        onChangeText={onChangeText}
        value={value}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        autoCorrect={false}
        searchIcon={{ size: 22, color: '#00a6fb' }}
        onClear={onClear}
        searchFilterFunction={searchFilterFunction}
        
      />
    </>
  )
}

export default Search