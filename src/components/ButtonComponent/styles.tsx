import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { Typography } from '../../utils/Typography';

export const createStyles = (iconName?: string) => {

    return StyleSheet.create({
        container: {
            backgroundColor: colors.PRIMARY_BLUE,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: iconName ? 'space-between' : 'center',
            //   gap: 30,
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 15,
        },
        text: {
            color: colors.TEXT_WHITE,
            fontSize: Typography.SIZE.XL,
            fontWeight: 'bold',
            letterSpacing: 0.6,
        },
        icon: {
            justifyContent: 'flex-end',
        },
    });
};
