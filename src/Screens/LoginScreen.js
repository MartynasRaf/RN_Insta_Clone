import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.hintText}>Username</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faUser} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setUserName(text)}
            value={userName}
            placeholder="Type your username"
          />
        </View>
        <Text style={styles.hintText}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Type your password"
          />
        </View>
        <TouchableOpacity style={styles.forgotContent}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4bc8db',
    height: 40,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  hintText: {
    justifyContent: 'flex-start',
    marginBottom: -5,
    marginTop: 5,
    fontWeight: 'bold',
  },
  forgotContent: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: '#888',
    borderBottomWidth: 1,
    width: Dimensions.get('window').width / 1.5,
  },
  textInput: {
    borderWidth: 0,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;

//      <CacheImage uri="assets\bg.jpg" style={styles.width} />
// /<Image source={require('../../assets/Logo.png')} style={styles.image} />
