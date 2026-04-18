/** @type {import('../play.pokemonshowdown.com/src/client-main').PSConfig} */
var Config = Config || {};

/* version */ Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

Config.whitelist = [
	'wikipedia.org'

	// The full list is maintained outside of this repository so changes to it
	// don't clutter the commit log. Feel free to copy our list for your own
	// purposes; it's here: https://play.pokemonshowdown.com/config/config.js

	// If you would like to change our list, simply message Zarel on Smogon or
	// Discord.
];

// `defaultserver` specifies the server to use when the domain name in the
// address bar is `Config.routes.client`.
Config.defaultserver = {
	id: 'showdown',
	host: 'sim3.psim.us',
	port: 443,
	httpport: 8000,
	altport: 80,
	registered: true
};

Config.roomsFirstOpenScript = function () {
};

Config.customcolors = {
	'zarel': 'aeo'
};
/*** Begin automatically generated configuration ***/
Config.version = "0.11.2 (7a8c9e98)";

Config.routes = {
	root: 'pokemonshowdown.com',
	client: 'play.pokemonshowdown.com',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
	users: 'pokemonshowdown.com/users',
	teams: 'teams.pokemonshowdown.com',
};

Config.researchMode = true;
Config.researchTeams = [{"name":"Hard Trick Room","teamExport":"Hatterene @ Covert Cloak\nAbility: Magic Bounce\nTera Type: Fire\nEVs: 252 HP / 4 Def / 252 SpA\nQuiet Nature\nIVs: 0 Atk / 0 Spe\n- Expanding Force\n- Dazzling Gleam\n- Tera Blast\n- Trick Room\n\nIndeedee-F @ Psychic Seed\nAbility: Psychic Surge\nTera Type: Water\nEVs: 236 HP / 252 Def / 20 SpD\nRelaxed Nature\nIVs: 0 Atk / 0 Spe\n- Psychic\n- Follow Me\n- Helping Hand\n- Trick Room\n\nTorkoal @ Choice Specs\nAbility: Drought\nLevel: 50\nTera Type: Fire\nEVs: 252 HP / 252 SpA / 4 SpD\nQuiet Nature\nIVs: 0 Atk / 0 Spe\n- Eruption\n- Heat Wave\n- Earth Power\n- Weather Ball\n\nUrsaluna @ Flame Orb\nAbility: Guts\nLevel: 50\nTera Type: Ghost\nEVs: 252 HP / 252 Atk / 4 Def\nBrave Nature\nIVs: 0 Spe\n- Facade\n- Earthquake\n- Headlong Rush\n- Protect\n\nGallade @ Clear Amulet\nAbility: Sharpness\nLevel: 50\nTera Type: Grass\nEVs: 220 HP / 252 Atk / 36 SpD\nBrave Nature\nIVs: 0 Spe\n- Sacred Sword\n- Psycho Cut\n- Wide Guard\n- Trick Room\n\nMaushold @ Wide Lens\nAbility: Technician\nLevel: 50\nTera Type: Poison\nEVs: 4 HP / 252 Atk / 252 Spe\nJolly Nature\n- Population Bomb\n- Follow Me\n- Taunt\n- Protect\n","pokePasteUrl":"https://pokepast.es/b298e07c5c6939b4"},{"name":"MausApe Balance","teamExport":"Dragonite @ Loaded Dice\nAbility: Multiscale\nLevel: 50\nTera Type: Fairy\nEVs: 36 HP / 212 Atk / 4 Def / 4 SpD / 252 Spe\nAdamant Nature\n- Scale Shot\n- Tailwind\n- Haze\n- Protect\n\nGholdengo @ Life Orb\nAbility: Good as Gold\nLevel: 50\nTera Type: Water\nEVs: 116 HP / 4 Def / 132 SpA / 4 SpD / 252 Spe\nTimid Nature\n- Make It Rain\n- Shadow Ball\n- Nasty Plot\n- Protect\n\nUrsaluna-Bloodmoon @ Assault Vest\nAbility: Mind's Eye\nLevel: 50\nTera Type: Water\nEVs: 148 HP / 12 Def / 196 SpA / 100 SpD / 52 Spe\nModest Nature\n- Blood Moon\n- Earth Power\n- Hyper Voice\n- Vacuum Wave\n\nAnnihilape @ Sitrus Berry\nAbility: Defiant\nLevel: 50\nTera Type: Fire\nEVs: 180 HP / 68 Atk / 4 Def / 4 SpD / 252 Spe\nJolly Nature\n- Drain Punch\n- Rage Fist\n- Bulk Up\n- Protect\n\nMaushold-Four @ Focus Sash\nAbility: Friend Guard\nLevel: 50\nTera Type: Ghost\nEVs: 236 HP / 60 Def / 212 Spe\nJolly Nature\n- Super Fang\n- Beat Up\n- Follow Me\n- Protect\n\nRillaboom @ Miracle Seed\nAbility: Grassy Surge\nLevel: 50\nTera Type: Fire\nEVs: 188 HP / 196 Atk / 4 Def / 20 SpD / 100 Spe\nAdamant Nature\n- Wood Hammer\n- Grassy Glide\n- High Horsepower\n- Fake Out\n","pokePasteUrl":"https://pokepast.es/efc37c384ca1192c"},{"name":"Rain","teamExport":"Pelipper @ Choice Scarf  \nAbility: Drizzle  \nLevel: 50  \nTera Type: Ghost  \nEVs: 4 HP / 252 SpA / 252 Spe  \nTimid Nature  \nIVs: 0 Atk  \n- Weather Ball  \n- Hurricane  \n- Muddy Water  \n- Icy Wind  \n\nArchaludon @ Power Herb  \nAbility: Sturdy  \nLevel: 50  \nTera Type: Electric  \nEVs: 4 Def / 252 SpA / 252 Spe  \nTimid Nature  \nIVs: 0 Atk  \n- Electro Shot  \n- Draco Meteor  \n- Thunderbolt  \n- Protect  \n\nBasculegion @ Focus Sash  \nAbility: Adaptability  \nLevel: 50  \nTera Type: Ghost  \nEVs: 220 Atk / 36 Def / 252 Spe  \nAdamant Nature  \n- Liquidation  \n- Last Respects  \n- Aqua Jet  \n- Protect  \n\nWhimsicott @ Covert Cloak  \nAbility: Prankster  \nLevel: 50  \nTera Type: Steel  \nEVs: 132 HP / 212 SpD / 164 Spe  \nTimid Nature  \nIVs: 0 Atk  \n- Moonblast  \n- Taunt  \n- Fake Tears  \n- Tailwind  \n\nGholdengo @ Life Orb  \nAbility: Good as Gold  \nLevel: 50  \nTera Type: Fighting  \nEVs: 4 HP / 252 SpA / 252 Spe  \nModest Nature  \n- Make It Rain  \n- Shadow Ball  \n- Tera Blast  \n- Protect  \n\nIncineroar @ Assault Vest  \nAbility: Intimidate  \nLevel: 50  \nTera Type: Ghost  \nEVs: 228 HP / 36 Atk / 244 Spe  \nAdamant Nature  \n- Knock Off  \n- Flare Blitz  \n- Fake Out  \n- U-turn  \n\n","pokePasteUrl":"https://pokepast.es/27f933040023c077"},{"name":"Grassy Seed Gholdengo Balance","teamExport":"Gholdengo @ Grassy Seed\nAbility: Good as Gold\nLevel: 50\nTera Type: Water\nEVs: 236 HP / 4 Def / 4 SpA / 28 SpD / 236 Spe\nModest Nature\nIVs: 0 Atk\n- Nasty Plot\n- Make It Rain\n- Shadow Ball\n- Protect\n\nSneasler @ White Herb\nAbility: Unburden\nLevel: 50\nTera Type: Ghost\nEVs: 164 HP / 92 Atk / 108 Def / 4 SpD / 140 Spe\nAdamant Nature\n- Close Combat\n- Dire Claw\n- Coaching\n- Protect\n\nRillaboom @ Assault Vest\nAbility: Grassy Surge\nLevel: 50\nTera Type: Fire\nEVs: 108 HP / 140 Atk / 4 Def / 4 SpD / 252 Spe\nJolly Nature\n- Fake Out\n- Grassy Glide\n- Drum Beating\n- High Horsepower\n\nDragonite @ Loaded Dice\nAbility: Multiscale\nLevel: 50\nTera Type: Ground\nEVs: 4 HP / 252 Atk / 252 Spe\nAdamant Nature\nIVs: 23 SpA\n- Scale Shot\n- Stomping Tantrum\n- Tailwind\n- Protect\n\nNinetales-Alola @ Focus Sash\nAbility: Snow Warning\nLevel: 50\nTera Type: Ghost\nEVs: 4 HP / 252 SpA / 252 Spe\nTimid Nature\nIVs: 0 Atk\n- Blizzard\n- Icy Wind\n- Encore\n- Aurora Veil\n\nArcanine-Hisui @ Clear Amulet\nAbility: Intimidate\nLevel: 50\nTera Type: Water\nEVs: 4 HP / 252 Atk / 252 Spe\nJolly Nature\n- Rock Slide\n- Flare Blitz\n- Extreme Speed\n- Protect\n","pokePasteUrl":"https://pokepast.es/776312091592a316"},{"name":"Sun Hyper Offense","teamExport":"Typhlosion-Hisui @ Choice Specs  \nAbility: Blaze  \nLevel: 50  \nTera Type: Fire  \nEVs: 4 HP / 252 SpA / 252 Spe  \nTimid Nature  \n- Eruption  \n- Shadow Ball  \n- Heat Wave  \n- Overheat  \n\nWhimsicott @ Babiri Berry  \nAbility: Prankster  \nLevel: 50  \nTera Type: Ghost  \nEVs: 252 HP / 20 Def / 4 SpA / 204 SpD / 28 Spe  \nCalm Nature  \nIVs: 0 Atk  \n- Moonblast  \n- Tailwind  \n- Sunny Day  \n- Encore  \n\nIncineroar @ Safety Goggles  \nAbility: Intimidate  \nLevel: 50  \nTera Type: Water  \nEVs: 244 HP / 20 Atk / 156 Def / 36 SpD / 52 Spe  \nImpish Nature  \n- Flare Blitz  \n- Knock Off  \n- Fake Out  \n- Parting Shot  \n\nUrsaluna-Bloodmoon @ Life Orb  \nAbility: Mind's Eye  \nLevel: 50  \nTera Type: Normal  \nEVs: 164 HP / 4 Def / 196 SpA / 4 SpD / 140 Spe  \nModest Nature  \nIVs: 0 Atk  \n- Blood Moon  \n- Earth Power  \n- Hyper Voice  \n- Protect  \n\nFarigiraf @ Sitrus Berry  \nAbility: Armor Tail  \nLevel: 50  \nTera Type: Water  \nEVs: 180 HP / 156 Def / 4 SpA / 132 SpD / 36 Spe  \nBold Nature  \nIVs: 0 Atk  \n- Psychic  \n- Night Shade  \n- Helping Hand  \n- Trick Room  \n\nFlamigo @ Focus Sash  \nAbility: Scrappy  \nLevel: 50  \nTera Type: Fighting  \nEVs: 4 HP / 252 Atk / 252 Spe  \nJolly Nature  \n- Close Combat  \n- Feint  \n- Wide Guard  \n- Detect  \n\n","pokePasteUrl":"https://pokepast.es/331e112dc124dda6"},{"name":"P2 Ursa Tailroom","teamExport":"Kilowattrel @ Focus Sash  \nAbility: Competitive  \nLevel: 50  \nTera Type: Ghost  \nEVs: 4 HP / 252 SpA / 252 Spe  \nTimid Nature  \nIVs: 0 Atk  \n- Thunderbolt  \n- Air Slash  \n- Tailwind  \n- Protect  \n\nUrsaluna @ Flame Orb  \nAbility: Guts  \nLevel: 50  \nTera Type: Ghost  \nEVs: 140 HP / 204 Atk / 4 Def / 4 SpD / 156 Spe  \nAdamant Nature  \n- Facade  \n- Headlong Rush  \n- Earthquake  \n- Protect  \n\nPorygon2 @ Eviolite  \nAbility: Download  \nLevel: 50  \nTera Type: Fighting  \nEVs: 252 HP / 156 Def / 44 SpA / 52 SpD / 4 Spe  \nModest Nature  \n- Tera Blast  \n- Ice Beam  \n- Recover  \n- Trick Room  \n\nGholdengo @ Life Orb  \nAbility: Good as Gold  \nLevel: 50  \nTera Type: Water  \nEVs: 52 HP / 4 Def / 196 SpA / 4 SpD / 252 Spe  \nTimid Nature  \nIVs: 0 Atk  \n- Make It Rain  \n- Shadow Ball  \n- Nasty Plot  \n- Protect  \n\nIncineroar @ Assault Vest  \nAbility: Intimidate  \nLevel: 50  \nTera Type: Grass  \nEVs: 252 HP / 116 Atk / 4 Def / 20 SpD / 116 Spe  \nAdamant Nature  \n- Flare Blitz  \n- Knock Off  \n- U-turn  \n- Fake Out  \n\nAmoonguss @ Sitrus Berry  \nAbility: Regenerator  \nLevel: 50  \nTera Type: Water  \nEVs: 244 HP / 156 Def / 108 SpD  \nBold Nature  \nIVs: 0 Atk / 26 Spe  \n- Pollen Puff  \n- Spore  \n- Rage Powder  \n- Protect  \n\n","pokePasteUrl":"https://pokepast.es/293ac9c04c2668ae"}];
/*** End automatically generated configuration ***/