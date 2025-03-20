import { StyleSheet } from "react-native"
import { Typography } from "../../utils/Typography"
import { colors } from "../../utils/color"

export const createStyles = () => {
    return StyleSheet.create({
        formContainer: {
            marginHorizontal: 20,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            gap: '18%'
        },
        title: {
            fontSize: Typography.SIZE.XL,
            fontWeight: 600
        },
        priorityContainer: {
            flexDirection: 'row',
            gap: 10,
        },
        circle: {
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
        selectedBorder: {
            borderWidth: 3,
            borderColor: '#000',
        },
        errorText: {
            color: 'red',
            marginTop: 5,
        },
        content: {
            // color: colors.TEXT_WHITE,
            fontSize: Typography.SIZE.BASE,
            fontWeight: 600
        }
    })
}