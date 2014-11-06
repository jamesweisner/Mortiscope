Mortiscope.player = {
	'data': {
		'mp': 0,
		'unlocked': 0,
		'extraTime': 0,
		'extraBugs': 0,
		'hubs': {
			'boat': 0,
			'train': 0,
			'cars': 0,
			'plane': 0
		}
	},
	'load': function()
	{
		Mortiscope.player.data = JSON.parse(localStorage.player)
	},
	'save': function()
	{
		localStorage.player = JSON.stringify(Mortiscope.player.data);
	}
}
