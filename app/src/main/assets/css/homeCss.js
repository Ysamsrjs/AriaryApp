
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  MainBonDachatScreen: {
    flex: 1,
    paddingBottom: 5,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#eee',
  },
  inputWrap: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 0,
    height: 50,
    backgroundColor: 'transparent'
  },
  input: {
    flex: 1,
    paddingHorizontal: 0,
    backgroundColor: '#FFF',
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#3b5998',
    paddingHorizontal: 0
  },
  buttonMainBonDachat: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'transparent',
    paddingHorizontal: 20
  },
  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#008975',
    paddingHorizontal: 20
  },
  signIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#00BF9A',
    paddingHorizontal: 20
  },
  instructions: {
    alignItems: 'center',
  },
  toutchable: {
  },
  textforgot: {
    color: '#00BF9A',
  },
  imageMainBonDachat: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#eee'
  },
  seperator: {
    marginBottom: 10
  }
});
export const modal = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    padding: 20
  },
  content: {
    backgroundColor: '#eee',
    width: '90%',
    height: '80%'
  },
  footer: {
    backgroundColor: 'transparent',
    padding: 20
  },
  contenuemodal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});