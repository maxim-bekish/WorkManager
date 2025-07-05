import { COLORS } from '@/constants/ui';
import { StyleSheet, Text, TextProps } from 'react-native';

type StyleTextProps = TextProps;

const StyleText: React.FC<StyleTextProps> = ({ style, ...props }) => {
	return <Text style={[styles.base, style]} {...props} />;
};

const styles = StyleSheet.create({
	base: {
		color: COLORS.PRIMARY_TEXT,
	},
});
export default StyleText;
