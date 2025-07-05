import StyleText from '@/components/StyleText';
import { COLORS } from '@/constants/ui';
import Header from '@/layout/Header';
import TodoList from '@/layout/TodoList';
import { Todo } from '@/types/todo';
import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const defaultTodos: Todo[] = [
	{
		id: 1,
		title: 'Buy milk',
		isCompleted: false,
	},
	{
		id: 2,
		title: 'Buy bread',
		isCompleted: true,
	},
	{
		id: 3,
		title: 'Buy eggs',
		isCompleted: false,
	},
];

export default function Index() {
	const [todos, setTodos] = useState<Todo[]>(defaultTodos);
	const completedTodos = todos.filter(todo => todo.isCompleted);

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<Header totalTodos={todos.length} completedTodos={completedTodos.length} />
			<TodoList todos={todos} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.PRIMARY_BACKGROUND,
	},
});
