
import Realm from 'realm';

export const ENTRYLIST_SCHEMA = "EntryList";
export const ENTRY_SCHEMA = "Entry";

//define models and their properties
export const EntrySchema = {
    name: ENTRY_SCHEMA,
    primaryKey: id,
    properties: {
        id: 'string',
        category: 'string',
        name: 'string',
    }
}
export const EntryListSchema = {
    name: ENTRYLIST_SCHEMA,
    primaryKey: id,
    properties: {
        id: 'string',
        entries: {type: 'list', objectType: ENTRY_SCHEMA}
    }
}
const databaseOptions = {
    path: 'QuickRecsApp.realm',
    schema: [EntryListSchema, EntrySchema],
    schemaVersion: 0
}
//functions for EntryLists
export const insertNewEntryList = newEntryList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) =>{
        realm.write(() => {
            realm.create(ENTRYLIST_SCHEMA, newEntryList);
            resolve(newEntryList);
        })
    }).catch((error) => reject(error));
})
export const updateEntryList = entryList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) =>{
        realm.write(() => {
            let updatingEntryList = realm.objectForPrimaryKey(ENTRYLIST_SCHEMA, entryList.id);
            updatingEntryList.name = entryList.name;
            resolve();
        })
    }).catch((error) => reject(error));
})
export const deleteEntryList = entryListId => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) => {
        realm.write(() => {
            let deletingEntryList = realm.objectForPrimaryKey(ENTRYLIST_SCHEMA, entryListId);
            realm.delete(deletingEntryList);
            resolve();
        });
    }).catch((error) => reject(error));
})
export const deleteAllEntryLists = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) => {
        realm.write(() => {
            let allEntryLists = realm.objectForPrimaryKey(ENTRYLIST_SCHEMA);
            realm.delete(allEntryLists);
            resolve();
        });
    }).catch((error) => reject(error));
})
export const queryAllEntryLists = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) => {
        realm.write(() => {
            let allEntryLists = realm.objectForPrimaryKey(ENTRYLIST_SCHEMA);
            resole(allEntryLists);
        }).catch((error) => reject(error));
    });
})

export default new Realm(databaseOptions);