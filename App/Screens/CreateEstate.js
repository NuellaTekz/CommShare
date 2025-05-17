import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
    ImageBackground,
} from "react-native"
import { Theme } from "../Components/Theme";
import Icon from "react-native-vector-icons/FontAwesome";

export function CreateEstate({ navigation }) {
    const [estateName, setEstateName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [datereg, setDateReg] = useState("");

    const estcreatepic = "https://cdn.britannica.com/22/215522-050-8315BB78/green-grass-close-up.jpg"

    const handleCreateEstate = () => {
        if (!estateName || !location || !datereg) {
            Alert.alert("Missing Info", "Please fill in all required fields.");
            return;
        }

        Alert.alert("Success", "Estate created successfully.");
        setEstateName("");
        setLocation("");
        setDescription("");
        setDateReg("");
        // navigation.goBack();
    };

    return (
        <ScrollView>
            <ImageBackground source={{uri: estcreatepic}}
            style={styles.headerImage}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>🏡 Create New Estate Group</Text>
                </View>
                <View style={styles.form}>
                <Text style={styles.label}>Estate Name *</Text>
                <TextInput
                    style={styles.input}
                    value={estateName}
                    onChangeText={setEstateName}
                    placeholder="e.g., Sunrise Villas"
                />

                <Text style={styles.label}>Location *</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    onChangeText={setLocation}
                    placeholder="e.g., Lagos, Nigeria"
                />
                <Text style={styles.label}>Date registered *</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    onChangeText={setDateReg}
                    placeholder="DD / MM / YY"
                />
                <Text style={styles.label}>Location *</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    // onChangeText={setLocation}
                    placeholder="e.g., Lagos, Nigeria"
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Optional details about the estate"
                    multiline
                    numberOfLines={4}
                />

                <TouchableOpacity style={styles.button} onPress={handleCreateEstate}>
                    <Text style={styles.buttonText}>Create Estate</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    headerImage:{
        flex:1
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: "100%",
        borderWidth: 0,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: Theme.fonts.text700,
        color: Theme.colors.yellow,
        textAlign: "center",
        marginTop:30

    },
    form: {
        padding: 20,
        paddingTop: 15,
        backgroundColor: "#fff",
        flexGrow: 1,
        fontFamily: Theme.fonts.text400,
        borderRadius:20,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        gap:5
    },
    label: {
        fontSize: Theme.sizes.md,
        fontWeight: "600",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: Theme.colors.primary,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: Theme.colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: Theme.sizes.lg,
        fontFamily: Theme.fonts.text700,
    },
});