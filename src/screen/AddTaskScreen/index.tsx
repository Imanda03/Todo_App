import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import Header from '../../components/Header'
import { useForm, Controller } from 'react-hook-form';
import ButtonIconComponent from '../../components/ButtonComponent';
import InputComponent from '../../components/InputComponent';
import { createStyles } from './styles';
import TextAreaComponent from '../../components/TextAreaComponent';
import { getId, getTodayDate, priorities } from '../../utils/helper';
import { useToast } from '../../context/ToastContext';
import { useTasks } from '../../context/TaskContext';

type FormData = {
    priority: any;
    description: string;
    title: string;
};

const AddTaskScreen = ({ route }: any) => {
    const taskId = route.params
    const styles = createStyles()
    const { addTask, getTaskById, editTask } = useTasks();
    const taskData = getTaskById(taskId)
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<FormData>({
        defaultValues: {
            priority: taskId ? taskData?.priority : '',
            description: taskId ? taskData?.description : '',
            title: taskId ? taskData?.title : '',
        }
    });

    const formReset = {
        priority: '',
        description: '',
        title: '',
    };

    useEffect(() => {
        !taskId && reset(formReset);
    }, []);



    const onSubmit = async (data: FormData) => {
        if (taskId) {
            editTask(taskId, data)
        } else {
            const taskData = { ...data, date: getTodayDate(), id: getId(), status: 'active' }
            addTask(taskData).then(() => reset(formReset))
        }
    }
    return (
        <>
            <View>
                <Header isHome={false} showEdit={false} title={`${taskId ? 'Edit' : 'Add'} Task`} showBack={true} />
            </View>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.title}>Title</Text>
                    <Controller
                        control={control}
                        name="title"
                        rules={{
                            required: 'Title is required',
                        }}
                        render={({ field: { onChange, value } }) => (
                            <InputComponent
                                value={value}
                                onChangeText={onChange}
                                error={errors.title?.message}
                                placeholder={`Add title`}
                            />
                        )}
                    />

                    <Text style={styles.title}>Description</Text>
                    <Controller
                        control={control}
                        name="description"
                        rules={{ required: 'Note is required' }}
                        render={({ field: { onChange, value } }) => (
                            <TextAreaComponent
                                value={value}
                                onChangeText={onChange}
                                placeholder="Add a description"
                                error={errors.description?.message}
                            />
                        )}
                    />
                    <Text style={[styles.title, { marginBottom: 10 }]}>Priority</Text>
                    <Controller
                        control={control}
                        name="priority"
                        rules={{ required: 'Priority is required' }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <View>
                                <View style={styles.priorityContainer}>
                                    {priorities.map((priority) => (
                                        <TouchableOpacity
                                            key={priority.value}
                                            style={[
                                                styles.circle,
                                                { backgroundColor: priority.color, opacity: value === priority.value ? 1 : 0.5 },
                                                value === priority.value && styles.selectedBorder,
                                            ]}
                                            onPress={() => onChange(priority.value)}
                                        ><Text style={styles.content}>{priority.label.charAt(0)}</Text></TouchableOpacity>
                                    ))}
                                </View>
                                {error && <Text style={styles.errorText}>{error.message}</Text>}
                            </View>
                        )}
                    />
                </View>
                <View>
                    <ButtonIconComponent
                        title={`${taskId ? 'Update' : 'Save'} Task`}
                        onPress={handleSubmit(onSubmit)}
                        loading={false}
                    />
                </View>
            </View>
        </>
    )
}

export default AddTaskScreen