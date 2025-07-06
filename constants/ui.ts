export const COLORS = {
	WHITE_100: 'rgb(240, 240, 240)',
	WHITE_90: 'rgb(218, 218, 218)',
	WHITE_80: 'rgb(197, 197, 197)',
	WHITE_70: 'rgb(175, 175, 175)',
	WHITE_60: 'rgb(154, 154, 154)',
	WHITE_50: 'rgb(132, 132, 132)',
	WHITE_40: 'rgb(111, 111, 111)',
	WHITE_30: 'rgb(89, 89, 89)',
	WHITE_20: 'rgb(68, 68, 68)',
	WHITE_10: 'rgb(47, 47, 47)',

	BLACK_100: 'rgb(25, 25, 25)',
	BLACK_90: 'rgb(48, 48, 48)',
	BLACK_80: 'rgb(71, 71, 71)',
	BLACK_70: 'rgb(94, 94, 94)',
	BLACK_60: 'rgb(117, 117, 117)',
	BLACK_50: 'rgb(140, 140, 140)',
	BLACK_40: 'rgb(163, 163, 163)',
	BLACK_30: 'rgb(186, 186, 186)',
	BLACK_20: 'rgb(209, 209, 209)',
	BLACK_10: 'rgb(232, 232, 232)',
	BUTTON_DEFAULT: 'rgb(255, 255, 255)',
	BUTTON_DISABLED: 'rgb(200, 200, 200)',
	TRANSPARENT: 'transparent',
};

// 3. Константы вынесем перед компонентом для лучшей читаемости
export const TEXT_VARIANTS = {
	xs: {
		fontSize: 14,
		fontWeight: 400,
	},
	sm: {
		fontSize: 16,
		fontWeight: 300,
	},
	md: {
		fontSize: 18,
		fontWeight: 500,
		lineHeight: 20,
	},
	xl: {
		fontSize: 20,
		fontWeight: 500,
		lineHeight: 20 * 1.2,
	},
	'2xl': {
		fontSize: 32,
		fontWeight: 100,
		lineHeight: 32 * 1.2,
	},
} as const; // 'as const' для точных типов

export const BASE = {
	PADDING: {
		DEFAULT: 8,
	},
	ROUND: {
		DEFAULT: 12,
	},
};
