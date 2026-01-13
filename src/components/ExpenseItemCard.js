import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const ExpenseItemCard = ({item}) => {
  //title
  //icon
  //category
  //amount & date
    
    return (
    <View 
    style={tailwind`bg-white rounded-2xl p-4 mx-5 mb-3 flex-row justify-between items-center shadow-sm`}
    >
        <View style={tailwind`flex-row items-center`}>
            <View 
            style={tailwind`w-12 h-12 rounded-xl bg-gray-100 justify-center items-center mr-4`}
            >
                <Text>{item.icon}</Text>

            </View>
          <View>
              <Text>
                {item.title}
              </Text>
          <View style={[tailwind`mt-1 px-2 py-1 self-center rounded-lg self-start `, {backgroundColor:item.color}]}>
            <Text style={tailwind`text-xs font-bold text-white`}>
            {" "}
            {item.category}
            </Text>
          </View>
        </View>
        </View>
        <View style={tailwind`items-end`}>
          <Text style={tailwind`text-base font-bold text-black`}>
            ₹ {item.amount}
          </Text>
          <Text style={tailwind`text-xs text-gray-500 mt-1`}>
            {item.date}
          </Text>
        </View>
    </View>

      
    
  )
}

export default ExpenseItemCard

const styles = StyleSheet.create({})