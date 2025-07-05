import StyleText from '@/components/StyleText';
import { COLORS } from '@/constants/ui';
import { StyleSheet, View } from 'react-native';

type TodoItemProps = {
	title: string;
	isCompleted: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
	return (
		<View style={[styles.container]}>
			<StyleText style={isCompleted && styles.itemCompleted}>{title}</StyleText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
		padding: 15,
		marginVertical: 8,
		backgroundColor: COLORS.SECONDARY_BACKGROUND,
	},
	headerMainContainer: {
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	itemCompleted: {
		textDecorationLine: 'line-through',
		color: COLORS.SECONDARY_TEXT,
	},
});
export default TodoItem;
