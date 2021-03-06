

import Inbox from './components/Inbox.vue'
import Important from './components/Important.vue'
import Settings from './components/Settings.vue'
import IncomingSettings from './components/settings/IncomingSettings.vue'

export default [
	{
		path: '/inbox', 
		component: Inbox,
		name: 'inbox',
	},

	{path: '/important', component: Important, name: 'important'},

	{
		path: '/settings',
		component: Settings,
		children: [
			{ path: '/incoming', component: IncomingSettings },
		]
	},
]
