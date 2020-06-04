import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodoItem from "./components/AddTodoItem";

const App = () => {

	const [todos, setTodos] = useState([
		{ id: '1', text: 'Buy coffee'},
		{ id: '2', text: "Drink coffee"},
		{ id: '3', text: "Make another coffee"}
	]);

	const pressHandler = (key : string) => {
		setTodos( (prevTodos) => {
			return prevTodos.filter( todo => todo.id != key);
		})
	}

	const submitHandler = (text: string) => {

		if(text.length > 3) {
			setTodos((prevTodos) => {
				return [
					{text: text, id: Math.random().toString()},
					...prevTodos
				]
			})
		} else {
			Alert.alert('OOPS!', 'Todos messages must be over 3 character long', [
				{ text: 'Understood', onPress: () => console.log("Alert closed!")}
			]);
		}

	}

  return (
    <View style={styles.container}>
		<Header/>
		<View style={styles.content}>
			<AddTodoItem submitHandler={submitHandler}/>
			<View style={styles.list}>
				<FlatList data={todos} renderItem={ ({item}) => (
					<TodoItem item={item} pressHandler={pressHandler}/>
				)} />
			</View>
		</View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
  },
	content: {
  		padding: 40
	},
	list: {
  		margin: 20
	}
});
