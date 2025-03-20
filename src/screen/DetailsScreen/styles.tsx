import { StyleSheet } from "react-native"
import { colors } from "../../utils/color"
import { Typography } from "../../utils/Typography"

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            marginHorizontal: 20,
            minHeight: 50,
            backgroundColor: colors.CARD_BACKGROUND,
            marginVertical: 30,
            borderRadius: 10,
            borderWidth: 0.2,
            padding: 20
        },
        statusContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        status: {
            padding: 5,
            width: '20%',
            textAlign: 'center',
            fontWeight: 600,
            borderRadius: 10,
            color: colors.TEXT_WHITE
        },
        date: {
            fontWeight: 500,
            fontSize: Typography.SIZE.XS,
            textAlign: 'right'
        },
        contentContainer: {
            marginTop: 10
        },
        title: {
            fontSize: Typography.SIZE.XXL,
            fontWeight: 600
        },
        btnContainer: {
            marginTop: 30,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        btn: {
            // backgroundColor: 'green',
            width: '45%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
        },
        btnText: {
            fontSize: Typography.SIZE.XL,
            fontWeight: 600,
            color: colors.TEXT_WHITE

        }
    })
}