import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, List, withTheme, Theme } from 'react-native-paper';

class ButtonExample extends Component {
    render() {
        const { colors } = this.props.theme;

        return (
            <ScrollView
                style={[styles.container, { backgroundColor: colors.background }]}
            >
                <List.Section title="Text button">
                    <View style={styles.row}>
                        <Button onPress={() => { }} style={styles.button}>
                            Default
            </Button>
                        <Button
                            color={colors.accent}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom
            </Button>
                        <Button disabled onPress={() => { }} style={styles.button}>
                            Disabled
            </Button>
                        <Button icon="add-a-photo" onPress={() => { }} style={styles.button}>
                            Icon
            </Button>
                        <Button loading onPress={() => { }} style={styles.button}>
                            Loading
            </Button>
                    </View>
                </List.Section>
                <List.Section title="Outlined button">
                    <View style={styles.row}>
                        <Button mode="outlined" onPress={() => { }} style={styles.button}>
                            Default
            </Button>
                        <Button
                            mode="outlined"
                            color={colors.accent}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom
            </Button>
                        <Button
                            mode="outlined"
                            disabled
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Disabled
            </Button>
                        <Button
                            mode="outlined"
                            icon="add-a-photo"
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Icon
            </Button>
                        <Button
                            mode="outlined"
                            loading
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Loading
            </Button>
                    </View>
                </List.Section>
                <List.Section title="Contained button">
                    <View style={styles.row}>
                        <Button mode="contained" onPress={() => { }} style={styles.button}>
                            Default
            </Button>
                        <Button
                            mode="contained"
                            color={colors.accent}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom
            </Button>
                        <Button
                            mode="contained"
                            disabled
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Disabled
            </Button>
                        <Button
                            mode="contained"
                            icon="add-a-photo"
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Icon
            </Button>
                        <Button
                            mode="contained"
                            loading
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Loading
            </Button>
                    </View>
                </List.Section>
                <List.Section title="Custom icon">
                    <View style={styles.row}>
                        <Button
                            mode="outlined"
                            icon={{
                                uri:
                                    'http://lorempixel.com/420/320/abstract/',
                            }}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Remote image
            </Button>
                        <Button
                            mode="outlined"
                            icon={{
                                uri:
                                    'http://lorempixel.com/420/320/abstract/',
                            }}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Required asset
            </Button>
                        <Button
                            mode="outlined"
                            icon={({ size }) => (
                                <Image
                                    source={{
                                        uri:
                                            'http://lorempixel.com/420/320/abstract/',
                                    }}
                                    style={{ width: size, height: size, borderRadius: size / 2 }}
                                />
                            )}
                            onPress={() => { }}
                            style={styles.button}
                        >
                            Custom component
            </Button>
                    </View>
                </List.Section>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    button: {
        margin: 4,
    },
});

export default withTheme(ButtonExample);
