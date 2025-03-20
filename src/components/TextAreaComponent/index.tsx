import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { createStyles } from './styles';
import { colors } from '../../utils/color';

interface TextAreaProps {
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    placeholder?: string;
    numberOfLines?: number;
}

const TextAreaComponent = ({
    value,
    onChangeText,
    error,
    placeholder = 'Enter text',
    numberOfLines = 4,
}: TextAreaProps) => {
    const styles = createStyles();

    return (
        <View>
            <View
                style={[
                    styles.inputContainer,
                    error && styles.inputError,
                ]}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={colors.TEXT_SECONDARY}
                    multiline
                    numberOfLines={numberOfLines}
                    textAlignVertical="top"
                />
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default React.memo(TextAreaComponent);
