import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Item = ({fullName,avatarUrl,timeStamp}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{fullName}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: avatarUrl,
        }}
      />
      <Text style={styles.text2}>Visto(a) por ultimo :{timeStamp}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      item: {
        borderRadius:10,
        backgroundColor: '#7434e3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      text: {
        alignSelf:'center',
        fontSize: 32,
      },
      text2: {
        alignSelf:'center',
        fontSize: 16,
      },
      logo: {
        alignSelf:'center',
        borderRadius:90,
        width: 66,
        height: 58,
      },
})