import { COLORS } from '@/constants/ui';
import { icons, LucideIcon } from 'lucide-react-native';
import React from 'react';
import { ColorValue, View } from 'react-native';

// Тип для доступных иконок (можно автоматизировать)
type IconName = keyof typeof icons;

interface IconProps {
	name: IconName;
	color?: ColorValue | string;
	size?: number;
}

export const StyleIcon: React.FC<IconProps> = ({ name, color = COLORS.BLACK_100, size = 24 }) => {
	const LucideIcon = icons[name] as LucideIcon;

	if (!LucideIcon) {
		console.warn(`Icon "${name}" not found in Lucide`);
		return null;
	}

	return <LucideIcon color={color} size={size} />;
};
