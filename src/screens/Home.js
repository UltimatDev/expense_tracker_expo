import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc';
import EmptyList from '../components/EmptyList';
import ExpenseItemCard from '../components/ExpenseItemCard';




export const expensesData = [
  {
    id: "1",
    icon: "🛒",
    title:"Coffee Refill",
    category: "Grocery",
    amount: 50.0,
    date: "2025-09-06",
    color: "#6F4E37"
  },
  {
    id: "2",
    icon: "🚀",
    title:"Train Kyj-TrTr",
    category: "Transport",
    amount: 60.0,
    date: "2025-09-06",
    color: "#FFA500"
  }



]





const Home = ({navigation}) => {

  const totalSpent = expensesData.reduce((sum,item)=>sum+item.amount,0)
  return (
    <View style={tailwind`flex-1 bg-white`}>
        <View style={tailwind`px-5 pt-5 pb-3 mt-10 items-center`}>
            <Text style={tailwind`text-4xl font-bold text-black`}>Expense Checker</Text>
            <Text style={tailwind`text-base text-gray-500 mt-1`}>Start Tracking expenses over a month.</Text>
        </View>
      {/*<Button onPress={() => navigation.navigate("Profile")} title="Profile" />*/}
    <View style={tailwind`bg-green-500 rounded-3xl p-6 my-3 mx-5 items-center shadow-lg`}>
        <Text style={tailwind`text-base font-bold text-gray-100`}>Balance</Text>
        <Text style={tailwind`text-base text-white text-5xl mt-5 font-bold `}>₹ 10,000</Text>       
    </View>
    <View style={tailwind`bg-black rounded-3xl p-6 mb-5 mx-5 items-center shadow-lg`}>
        <Text style={tailwind`text-base text-gray-100`}>Money Spent</Text> 
        <Text style={tailwind`text-base text-white text-4xl mt-2 font-bold `}>
          ₹{totalSpent.toFixed(2)}
          </Text>       
    </View>
    
    <FlatList 
    data={expensesData} 
    renderItem={({item})=><ExpenseItemCard item={item}/>}
    keyExtractor={(item)=> item.id}
    contentContainerStyle = {{paddingBottom: 20}}
    ListEmptyComponent={<EmptyList />}
    
    />
    
    </View>
    
  )
}

export default Home;

const styles = StyleSheet.create({


})