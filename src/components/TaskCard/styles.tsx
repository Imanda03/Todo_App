import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { Typography } from '../../utils/Typography';

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            marginHorizontal: 20,
            backgroundColor: colors.CARD_BACKGROUND,
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 0.15,
            marginBottom: 10,
            borderRadius: 10,
        },
        indicator: {
            width: 4,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        },
        radioBtn: {
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 5
        },
        contentContainer: {
            marginHorizontal: 15,
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            width: '80%',
            paddingVertical: 10
        },
        title: {
            fontSize: Typography.SIZE.XL,
            fontWeight: 600,
            letterSpacing: 1
        },
        content: {
            fontWeight: 500
        },
        date: {
            fontWeight: 500,
            fontSize: Typography.SIZE.XS,
            textAlign: 'right'
        },

    });
};
