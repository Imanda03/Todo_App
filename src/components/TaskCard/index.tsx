import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { createStyles } from './styles'
import { FontAwesomeIcon } from '../../utils/Icons'
import { colors } from '../../utils/color'
import { getBackgroundColor, getTodayDate } from '../../utils/helper'
import { useNavigation } from '@react-navigation/native'
import { useTasks } from '../../context/TaskContext'

const TaskCard = ({ item }: any) => {
    console.log("dsd", item)
    const styles = createStyles()
    const navigation: any = useNavigation()
    const [status, setStatus] = useState<string>()
    const { editTask } = useTasks()

    useLayoutEffect(() => {
        setStatus(item.status)
    })

    const handleToggleRadio = () => {
        const updateStatus = status == 'active' ? 'complete' : 'active'
        editTask(item.id, { ...item, status: updateStatus })
    }

    const truncatedDescription =
        item.description.length > 100
            ? item.description.substring(0, 100) + '...'
            : item.description;

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailsScreen', item.id)}>
            <View style={[styles.indicator, { backgroundColor: getBackgroundColor(item?.priority) }]} />
            <TouchableOpacity activeOpacity={0.2} style={styles.radioBtn} onPress={handleToggleRadio}>
                <FontAwesomeIcon name={status == 'active' ? 'circle-thin' : 'check-circle'} size={34} color={colors.PRIMARY_BLUE} />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <Text style={[styles.title, { textDecorationLine: status === 'active' ? 'none' : 'line-through' }]}>{item?.title}</Text>
                <Text style={[styles.content, { textDecorationLine: status === 'active' ? 'none' : 'line-through' }]}>{truncatedDescription}</Text>
                <Text style={[styles.date, { textDecorationLine: status === 'active' ? 'none' : 'line-through' }]}>{getTodayDate()}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(TaskCard)