import { COLORS, TEXT_VARIANTS } from '@/constants/ui';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type TextVariant = keyof typeof TEXT_VARIANTS;

type StyleTextProps = TextProps & {
	variant?: TextVariant;
	color?: string;
};

const StyleText: React.FC<StyleTextProps> = ({ style, variant = 'md', color, ...props }) => {
	// 4. Комбинируем стили с правильным порядком
	const textStyle = [
		styles.base,
		TEXT_VARIANTS[variant],
		color ? { color } : null, // Переопределяем цвет если нужно
		style,
	];

	return <Text style={textStyle} {...props} />;
};

const styles = StyleSheet.create({
	base: {
		color: COLORS.WHITE_90,
		// fontFamily: 'Roboto',
		includeFontPadding: false, // Улучшает вертикальное выравнивание
		textAlignVertical: 'center', // Для одинакового поведения на Android/iOS
	},
});

export default StyleText;
