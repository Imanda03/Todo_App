import { StyleSheet } from "react-native"
import { colors } from "../../utils/color"
import { Typography } from "../../utils/Typography"

export const createStyles = (isHome: boolean) => {
    return StyleSheet.create({
        container: {
            // height: '40%',
            borderBottomEndRadius: '20%',
            borderBottomStartRadius: '20%',
            backgroundColor: colors.PRIMARY_BLUE,
        },
        homeContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '8%',
            paddingVertical: '10%'
        },
        titleContainer: {

            // paddingVertical: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 5
        },
        title: {
            fontSize: Typography.SIZE.XXXXXL,
            fontWeight: 700,
            color: colors.TEXT_WHITE
        },
        dateText: {
            fontSize: Typography.SIZE.BASE,
            color: colors.TEXT_WHITE,
            fontWeight: 500,
        },
        avatarContainer: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        innerContainer: {
            paddingHorizontal: '8%',
            paddingVertical: '10%',
            marginTop: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    })
}