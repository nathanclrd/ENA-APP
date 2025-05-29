import { Client, Databases } from 'react-native-appwrite'

console.log(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    db: '6838b8a7001b1885ae47',
    col: {
        tasks: '6838b8ac00012ea7dd10',
    },
};

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)

const database = new Databases(client);

export { database, config, client }
