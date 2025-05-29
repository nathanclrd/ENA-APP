import { Text, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { config, database } from "../lib/appwrite"

export default function Index() {
    const [tasks, setTasks] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        init()
    }, []);

    const init = async () => {
        getData();

    }

    const getData = async () => {
        try {
            const response = await database.listDocuments(config.db, config.col.tasks)
            console.log(response);
            
            
            
        } catch (error) {
            console.error(`Error : ${error}`);
            
        }
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {error && (<Text>{JSON.stringify(error)}</Text>)}
        </SafeAreaView>
    );
}
