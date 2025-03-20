import React, { useState, useCallback } from 'react';
import {
    View,
    TextInput,
    Pressable,
    Text,
    KeyboardTypeOptions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { createStyles } from './styles';
import { colors } from '../../utils/color';

interface InputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    error?: string;
}

const InputComponent = React.memo(
    ({
        placeholder,
        value,
        onChangeText,
        keyboardType,
        error,
    }: InputProps) => {
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const styles = createStyles();

        const onEyePress = useCallback(() => {
            setIsPasswordVisible(prev => !prev);
        }, []);

        return (
            <View>
                <View style={[styles.inputContainer, error && styles.inputError]}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        placeholderTextColor={colors.TEXT_SECONDARY}
                        value={value}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType ?? 'default'}
                    />
                </View>
                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    },
);

export default InputComponent;
