import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.image} />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setUserName(text)}
        value={userName}
        placeholder="User Name"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'stretch',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#11D111',
    padding: 10,
  },
});

export default LoginScreen;

//      <CacheImage uri="assets\bg.jpg" style={styles.width} />
