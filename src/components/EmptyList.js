import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const EmptyList = ({title,message}) => {
  return (
    <View style={tailwind`flex-1 justify-center items-center p-8 mt-10`}>
      <Text style={tailwind`text-4xl mb-6`}>✏️</Text>
      <Text style={tailwind`text-2xl font-bold text-gray-600 mb-2`}>{title || "No Expenses yet"}</Text>
      <Text style={tailwind`text-base text-gray-500 text-center`}>{message || "Add Some Expenses to Start Tracking"}</Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({})