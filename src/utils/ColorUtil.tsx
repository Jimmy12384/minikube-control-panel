import { ColorPickerValueType } from "primereact/colorpicker";

export interface ThemeItem {
	label: string;
	property: string;
}

export interface ThemePreset {
	name: string;
	values: ColorKeyValuePair[];
}
export interface ColorKeyValuePair {
	key: string;
	value: ColorPickerValueType;
}

const ColorUtil = {
	getPalette: (): ThemeItem[] => {
		return [
			{ label: "Background", property: "background" },
			{ label: "Primary", property: "primary" },
			{ label: "Secondary", property: "secondary" },
			{ label: "Tertiary", property: "tertiary" },
			{ label: "Text", property: "text" },
			{ label: "Menu Text", property: "menu-text" },
		];
	},

	getPalettePresets: (): ThemePreset[] => {
		return [
			{
				name: "Default",
				values: [
					{ key: "background", value: "161a1d" },
					{ key: "primary", value: "eb5e28" },
					{ key: "secondary", value: "3a2318" },
					{ key: "tertiary", value: "8a4020" },
					{ key: "text", value: "ffffff" },
					{ key: "menu-text", value: "a4a4a4" },
				],
			},
			{
				name: "Pastel Light",
				values: [
					{ key: "background", value: "ffffff" },
					{ key: "primary", value: "ffffff" },
					{ key: "secondary", value: "0f0f0f" },
					{ key: "tertiary", value: "d4a27b" },
					{ key: "text", value: "000000" },
					{ key: "menu-text", value: "b0b0b0" },
				],
			},
			{
				name: "Custom",
				values: [],
			},
		];
	},
};

export default ColorUtil;
