import { StyleSheet } from "react-native"
import { colors } from "../../utils/color"
import { Typography } from "../../utils/Typography"

export const createStyles = () => {
    return StyleSheet.create({
        tabBar: {
            flexDirection: 'row',
            backgroundColor: colors.BORDER_COLOR,
            elevation: 14,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0,
            shadowRadius: 20,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
            marginVertical: 20
        },
        tabItem: {
            flex: 1,
            alignItems: 'center',
            padding: 16,
            // position: 'relative',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 10,
        },
        tabItemBackground: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        tabItemText: {
            fontSize: 16,
            fontWeight: '600',
            color: '#090f06',
        },
        fab: {
            // position: 'absolute',
            right: 30,
            bottom: 30,
        },
        emptyText: {
            textAlign: 'center',
            marginTop: 20,
            fontSize: Typography.SIZE.XXXL,
            fontWeight: 600,
            color: colors.PRIMARY_BLUE
        }
    })
}