
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/VuejsBOBuilder/',
  component: ComponentCreator('/VuejsBOBuilder/','1dc'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug','2be'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug/config',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug/config','455'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug/content',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug/content','316'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug/globalData',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug/globalData','086'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug/metadata',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug/metadata','f37'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug/registry',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug/registry','99f'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/__docusaurus/debug/routes',
  component: ComponentCreator('/VuejsBOBuilder/__docusaurus/debug/routes','c59'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs',
  component: ComponentCreator('/VuejsBOBuilder/docs','d8a'),
  
  routes: [
{
  path: '/VuejsBOBuilder/docs/Configuration/Commons',
  component: ComponentCreator('/VuejsBOBuilder/docs/Configuration/Commons','982'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs/Configuration/Entities',
  component: ComponentCreator('/VuejsBOBuilder/docs/Configuration/Entities','a4a'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs/Configuration/Features',
  component: ComponentCreator('/VuejsBOBuilder/docs/Configuration/Features','ebc'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs/Configuration/Introduction',
  component: ComponentCreator('/VuejsBOBuilder/docs/Configuration/Introduction','bc6'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs/Guides/OverrideViews',
  component: ComponentCreator('/VuejsBOBuilder/docs/Guides/OverrideViews','771'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs/Installation',
  component: ComponentCreator('/VuejsBOBuilder/docs/Installation','90c'),
  exact: true,
},
{
  path: '/VuejsBOBuilder/docs/Introduction',
  component: ComponentCreator('/VuejsBOBuilder/docs/Introduction','39f'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
