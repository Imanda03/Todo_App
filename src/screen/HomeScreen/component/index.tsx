import { FlatList, Text, View } from "react-native"
import TaskCard from "../../../components/TaskCard"
import { useTasks } from "../../../context/TaskContext"
import { TaskStatus } from "../../../utils/Types"
import { createStyles } from "../styles"

const EmptyContainer = () => {
    const styles = createStyles()
    return (
        <Text style={styles.emptyText}>No Task</Text>
    )
}

export const RenderTask: React.FC<{ status: TaskStatus }> = ({ status }) => {

    const { filterTasks, tasks } = useTasks()
    console.log(tasks)
    const remderItem = ({ item, index }: any) => {
        return <TaskCard item={item} />

    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <FlatList
                data={filterTasks(status)}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                renderItem={remderItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={{ height: 150 }} />}
                ListEmptyComponent={<EmptyContainer />}
            />
        </View>
    )
}