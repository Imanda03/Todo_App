import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";
import { TaskStatus } from "../utils/Types";

interface Task {
    id: string,
    title: string,
    description: string,
    priority: string,
    date: string,
    status: string
}

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => Promise<void>;
    editTask: (id: string, updatedTask: Partial<Task>) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    getTaskById: (id: string) => Task | undefined;
    filterTasks: (status: TaskStatus) => Task[] | undefined;
    isLoading: boolean;
}

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const { showToast } = useToast()
    const [isLoading, setIsLoading] = useState(true);

    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Error loading tasks:', error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    const saveTasks = async (updatedTasks: Task[]) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
            loadTasks();
        } catch (error) {
            console.error('Error saving tasks:', error);
            showToast('Error saving task', 'error')
        }
    }

    const addTask = async (task: Task) => {
        const updatedTasks = [...tasks, task];
        saveTasks(updatedTasks);
        await saveTasks(updatedTasks).then(() => showToast('Task Saved Successfully', 'success'))

    }

    const editTask = async (id: string, updatedTask: Partial<Task>) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
        await saveTasks(updatedTasks);
        await saveTasks(updatedTasks).then(() => showToast('Task Updated Successfully', 'success'))
    }

    const deleteTask = async (id: string) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        await saveTasks(updatedTasks).then(() => showToast('Task Updated Successfully', 'success'))
    }

    const getTaskById = (id: string): Task | undefined => {
        return tasks.find(task => task.id === id)
    }

    const filterTasks = (status: 'all' | 'active' | 'complete') => {
        if (status === 'all') return tasks;
        return tasks.filter(task => task.status === status);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, getTaskById, isLoading, filterTasks }}>
            {children}
        </TaskContext.Provider>
    )
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider')
    }
    return context;
}