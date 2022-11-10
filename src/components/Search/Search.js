import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { SearchBar } from '@rneui/themed';
import {styles} from './styles';


const Search = () => {

  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBar 
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        autoCorrect={false}
        searchIcon={{ size: 22, color: '#00a6fb' }}

      />
    </>
  )
}

export default Search