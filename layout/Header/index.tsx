import StyleText from '@/components/StyleText';
import { COLORS } from '@/constants/ui';
import { StyleSheet, View } from 'react-native';

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.headerMainContainer}>
					<StyleText>TodoApp</StyleText>
					<StyleText>March 15.2024</StyleText>
				</View>
				<StyleText>Completed {completedTodos}/{totalTodos}</StyleText>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		paddingTop: 80,
		paddingBottom: 15,
		paddingHorizontal: 20,
		backgroundColor: COLORS.SECONDARY_BACKGROUND,
	},
	headerMainContainer: {
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
});
export default Header;
