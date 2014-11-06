Mortiscope.startLevel = function(germ, coverage)
{
	var startTime = Date.now();
	var timeLimit = germ.timeLimit + Mortiscope.player.extraTime;
	var bugsLeft  = germ.bugsLeft  + Mortiscope.player.extraBugs;
	Mortiscope.level = {
		'germData': germ,
		'startTime': startTime,
		'endTime': startTime + timeLimit,
		'playSpeed': 1,
		'bugsLeft': bugsLeft,
		'mpEarned': 0,
		'demographics': {
			'infected': {
				'vaccinated': 0,
				'unvaccinated': 0
			},
			'killed': {
				'vaccinated': 0,
				'unvaccinated': 0
			)
		}
	};
	Mortiscope.map = {

	};
	Mortiscope.bonus = {

	};
};
