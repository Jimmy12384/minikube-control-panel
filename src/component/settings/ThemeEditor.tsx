import { ColorPicker, ColorPickerValueType } from "primereact/colorpicker";
import { useLocalStorage, useMap } from "usehooks-ts";
import styles from "../../styles/component/settings/ThemeEditor.module.css";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import ColorUtil from "@/utils/ColorUtil";

const ThemeEditor = () => {
	const [colors, setColorAction] = useMap<string, ColorPickerValueType>();
	const [preset, setPreset] = useLocalStorage<string | null>(
		"mkcp-colors-preset",
		null
	);
	const [storedColors, setStoredColors] = useLocalStorage(
		"mkcp-colors",
		Array.from(colors.entries()).map((color) => {
			return { key: color[0], value: color[1] };
		})
	);

	const allowedCharacters = /^[A-Fa-f0-9]+$/;
	useEffect(() => {
		setColorAction.setAll(
			storedColors.map((color) => [color.key, color.value])
		);
	}, []);

	useEffect(() => {
		setStoredColors(
			Array.from(colors.entries()).map((color) => {
				return { key: color[0], value: color[1] };
			})
		);
	}, [colors]);

	const handlePresetChange = (_preset: string) => {
		ColorUtil.getPalettePresets()
			.filter((theme) => theme.name == _preset)
			.forEach((theme) => {
				theme.values.forEach((value) => {
					setColorAction.set(value.key, value.value);
				});
			});
		setPreset(_preset);
	};

	const renderThemeItem = (title: string, propertyName: string) => {
		return (
			<div className={`flex-horizontal ${styles.themeItem}`} key={propertyName}>
				<h4 className={styles.colorTitle}>{title}: </h4>
				<ColorPicker
					className={styles.colorPicker}
					value={colors.get(propertyName)}
					onChange={(e) => setColorAction.set(propertyName, e.value)}
					defaultColor={"#323232"}
				/>
				<InputText
					className={styles.colorInput}
					value={`#${colors.get(propertyName)}`}
					onChange={(e) => {
						setColorAction.set(propertyName, e.target.value.substring(1));
						setPreset("Custom");
					}}
					onBlur={(e) => {
						setColorAction.set(propertyName, e.target.value.substring(1));
						setPreset("Custom");
					}}
					maxLength={7}
					keyfilter={allowedCharacters}
				/>
			</div>
		);
	};

	colors.forEach((color, key) => {
		document.documentElement.style.setProperty(
			`--${key}`,
			`#${color?.toString()}` || ""
		);
	});
	return (
		<form className={styles.themeForm}>
			<Dropdown
				value={preset}
				options={ColorUtil.getPalettePresets().map((theme) => theme.name)}
				onChange={(e) => handlePresetChange(e.value)}
				placeholder="Set Theme Preset"
				className={styles.presetDropdown}
			></Dropdown>
			{ColorUtil.getPalette().map((themeItem) =>
				renderThemeItem(themeItem.label, themeItem.property)
			)}
		</form>
	);
};

export default ThemeEditor;
