import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoItem = ( {item, pressHandler} : any ) => {
	return(
		<TouchableOpacity onPress={ () => pressHandler(item.id)}>
			<Text style={styles.item}>{item.text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: '#bbb',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		color: '#000'
	}
})

export default TodoItem;
