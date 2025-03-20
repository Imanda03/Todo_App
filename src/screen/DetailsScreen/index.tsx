import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { createStyles } from './styles'
import { getBackgroundColor } from '../../utils/helper'
import { FontAwesomeIcon } from '../../utils/Icons'
import { colors } from '../../utils/color'
import { useTasks } from '../../context/TaskContext'

const DetailsScreen = ({ route, navigation }: any) => {
    const taskId = route.params;
    const { getTaskById, deleteTask, editTask } = useTasks();
    const taskData = getTaskById(taskId)
    const styles = createStyles()

    const handleDelete = () => {
        deleteTask(taskId).then(() => navigation.goBack())
    }

    const handleEdit = () => {
        navigation.replace('AddTaskScreen', taskId)
    }

    const handleToggleRadio = () => {
        const updateStatus = taskData?.status == 'active' ? 'complete' : 'active'
        editTask(taskData!.id, { ...taskData, status: updateStatus })
    }
    return (
        <>
            <View style={{ flex: 1 }}>
                <Header isHome={false} showEdit={false} title='Task Details' showBack={true} />

                <View style={styles.container}>
                    <View style={styles.statusContainer}>
                        <Text style={[styles.status, { backgroundColor: getBackgroundColor(taskData?.priority) }]}>{taskData?.priority.toUpperCase()}</Text>
                        <TouchableOpacity activeOpacity={0.2} onPress={handleEdit} >
                            <FontAwesomeIcon name='edit' size={24} color={colors.PRIMARY_BLUE} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{taskData?.title}</Text>
                        <Text>{taskData?.description}</Text>
                        <Text style={styles.date}>{taskData?.date}</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={handleToggleRadio} disabled={taskData?.status === 'complete'} activeOpacity={0.4} style={[styles.btn, { backgroundColor: taskData?.status === 'complete' ? colors.PRIMARY_BLUE_LIGHT : colors.PRIMARY_BLUE }]}>
                            <Text style={styles.btnText}>Complete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete} activeOpacity={0.4} style={[styles.btn, { borderColor: colors.ERROR, borderWidth: 2 }]}>
                            <Text style={[styles.btnText, { color: colors.ERROR }]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default DetailsScreen