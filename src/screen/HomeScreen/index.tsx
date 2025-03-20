import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { SceneMap, TabView } from 'react-native-tab-view'
import { createStyles } from './styles'
import { AntdDesignIcon } from '../../utils/Icons'
import { FAB } from 'react-native-elements'
import { colors } from '../../utils/color'
import TaskCard from '../../components/TaskCard'
import { RenderTask } from './component'

const renderScene = SceneMap({
    all: () => <RenderTask status='all' />,
    active: () => <RenderTask status='active' />,
    complete: () => <RenderTask status='complete' />
});

const routes = [
    { key: 'all', title: 'All' },
    { key: 'active', title: 'Active' },
    { key: 'complete', title: 'Completed' }
];

const HomeScreen = ({ navigation }: any) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const styles = createStyles();
    const handleAddList = () => {
        navigation.navigate('AddTaskScreen');
    };

    const renderTabBar = (props: any) => {
        const inputRange = props.navigationState.routes.map(
            (x: any, i: number) => i,
        );

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route: any, i: number) => {
                    const isActive = i === index;

                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.tabItem}
                            onPress={() => setIndex(i)}>
                            <View
                                style={[
                                    styles.tabItemBackground,
                                    { backgroundColor: isActive ? colors.TEXT_DISABLED : 'transparent', borderRadius: isActive ? 20 : 0 },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.tabItemText,
                                    { color: isActive ? colors.TEXT_WHITE : colors.TEXT_PRIMARY },
                                ]}>
                                {route.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <>
            <View style={{ flex: 1 }}>
                <Header isHome={true} showEdit={false} title='TaskFlow' showBack={false} />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                />
            </View>
            <FAB
                placement="right"
                color={colors.PRIMARY_BLUE}
                icon={<AntdDesignIcon name="plus" size={24} color="white" />}
                style={styles.fab}
                buttonStyle={{ borderRadius: 50, width: 63, height: 63 }}
                onPress={handleAddList}
            />
        </>
    );
};

export default HomeScreen;
