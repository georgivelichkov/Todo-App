import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const AddTodoItem = ({submitHandler}: any) => {
	const [text, setText] = useState("");

	const changeHandler = (ev: any) => {
		setText(ev.nativeEvent.text);
	}

	return(
		<View>
			<TextInput
				style={styles.input}
				placeholder="New todo...."
				onChange={(ev) => changeHandler(ev)} />
				<Button title="Add Todo Item" onPress={ () => submitHandler(text)} color="coral"/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd'
	}
})

export default AddTodoItem;
