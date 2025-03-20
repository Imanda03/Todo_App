import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStyles } from './styles'
import { Avatar } from 'react-native-elements'
import { getTodayDate } from '../../utils/helper'
import { AntdDesignIcon, FontAwesomeIcon } from '../../utils/Icons'
import { colors } from '../../utils/color'
import { Typography } from '../../utils/Typography'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
    isHome: boolean,
    showEdit: boolean,
    title: string,
    showBack: boolean,
}

const Header = ({ isHome = false, showEdit = false, title, showBack = false }: HeaderProps) => {
    const styles = createStyles(isHome)
    const navigation = useNavigation()
    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            {
                isHome ?
                    <>
                        <View style={styles.homeContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.dateText}>{getTodayDate()}</Text>
                            </View>
                            <View style={styles.avatarContainer}>
                                <Avatar
                                    size={70}
                                    rounded
                                    renderPlaceholderContent={<FontAwesomeIcon name="user" size={30} color="white" />}
                                    activeOpacity={0.9}
                                    containerStyle={{ backgroundColor: colors.PRIMARY_BLUE_LIGHT, }}
                                />
                            </View>
                        </View>
                    </>
                    :
                    <View style={styles.innerContainer}>
                        <TouchableOpacity activeOpacity={0.4} onPress={handleBack}>
                            <FontAwesomeIcon name="arrow-circle-o-left" size={40} color="white" />
                        </TouchableOpacity>
                        <Text style={[styles.title, { fontSize: Typography.SIZE.XXXXL }]}>{title}</Text>
                        <Text></Text>
                    </View>
            }
        </View>
    )
}

export default React.memo(Header)