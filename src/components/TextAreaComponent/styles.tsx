import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

export const createStyles = () => {
    return StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            borderRadius: 10,
            backgroundColor: colors.CARD_BACKGROUND,
            marginVertical: 10,
            borderWidth: 0.5,
            borderColor: colors.BORDER_COLOR,
            paddingHorizontal: 5,
            justifyContent: 'space-between',
            height: 120,
            alignItems: 'flex-start',
        },
        input: {
            color: colors.TEXT_PRIMARY,
            height: '100%',
            paddingTop: 15,
        },

        inputError: {
            borderColor: colors.ERROR,
            borderWidth: 1,
        },
        errorText: {
            color: colors.ERROR,
            fontSize: 13,
            // marginTop: 4,
            marginLeft: 4,
            fontWeight: '500',
        },
    });
};
