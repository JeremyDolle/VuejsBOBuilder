---
slug: /Configuration/Introduction
title: Introduction
---

All the project is base on json configuration. We provide some normalizer in order to simplify the writing of json files.
run in registerEntitiesConfig. 
All json files are store in src/config. They will be dynamically imported and normalized (to initialize default value) and merged all to a big object.

# registerEntitiesConfig
In the entry point, a `registerApplication` action is launch. 
It will launch the `registerEntitiesConfig` config and will run :
- normalizeEntitiesConfig
- normalizeEntitiesPermissions
- normalizeApi
- normalizeSchema

## normalizeEntitiesConfig
This function will set some default values to the config of a given entity thanks to his name:

| Return      | Description                 |   Type    |   Default                                    |
| :---------- | :-------------------------- | :-------- | :------------------------------------------- |
| name        | name of the entity          | string    | name of the json file                        |
| label       | label of the entity         | string    | i18n.t(`sidebar.${configFileName}.label`)    |
| description | description of the entity   | string    | i18n.t(`app.description.${configFileName}`)  |
| url         | url path of the entity      | string    | `/${configFileName}`                         |

## normalizeEntitiesPermissions
This function will set some default values to the config of a given entity by setting some default permissions names for CRUD calls:

| Return      |   Type    |   Default                  |
| :---------- | :-------- | :------------------------- |
| create      | string[]  | [`create_${configName}s`]  |
| read        | string[]  | [`read_${configName}s`]    |
| update      | string[]  | [`update_${configName}s`]  |
| delete      | string[]  | [`delete_${configName}s`]  |

## normalizeApi
This function will set some default values to the config of a given entity by setting some default endpoints names for CRUD calls:

| Return      |   Type            |   Default                   |
| :---------- | :---------------- | :-------------------------- |
| fetchAll    | { url: 'value' }  | { url: `${resource}s` }     |
| fetchOne    | { url: 'value' }  | { url: `${resource}s/:id` } |
| create      | { url: 'value' }  | { url: `${resource}s` }     |
| update      | { url: 'value' }  | { url: `${resource}s/:id` } |
| delete      | { url: 'value' }  | { url: `${resource}s/:id` } |

## normalizeSchema
This function will set some default values to the config of a given entity by setting some default entity props and entity fields thanks to the `normalizeField` utils
If the entry field is a simple string, the normalizer will try to dynamically import a json file into src/config/common/fields which have the same name of the string.
If the entry point is an object, the normalizer simply give the object to the `normalisefield` utils to set some default values.

### normalizeField
This function will set some default values to the config of a given entity by setting some default props to entity field:

| Return      |   Type            |   Default                                 |
| :---------- | :---------------- | :---------------------------------------- |
| model       | string            | field.key                                 |
| type        | string            | 'input'                                   |
| inputType   | string            | 'text'                                    |
| label       | string            | i18n.t(`fields.${field.key}.label`)       |
| placeholder | string            | i18n.t(`fields.${field.key}.placeholder`) |

:::info
In each normalizer, if the config file we want to set forced value, normalizer give privileges to config file values
:::
