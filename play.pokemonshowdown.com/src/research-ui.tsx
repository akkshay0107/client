import preact from "../js/lib/preact";
import { Config, PS, PSRoom, type RoomID } from "./client-main";
import { PSIcon, PSPanelWrapper, PSRoomPanel } from "./panels";
import { Teams } from "./battle-teams";

export class ResearchLandingPage extends preact.Component {
	state = {
		selectedTeamIndex: -1,
	};

	override componentDidMount() {
		document.body.classList.add('research-mode');
		// Force all other rooms to be minimized/hidden to prevent popups
		for (const roomid in PS.rooms) {
			if (roomid && !roomid.startsWith('battle-')) {
				const room = PS.rooms[roomid];
				if (room) {
					room.minimized = true;
					// If it's a rooms list or lobby, try to close it or keep it hidden
					if (roomid === 'rooms' || roomid === 'lobby') {
						PS.hideRightRoom();
					}
				}
			}
		}
		PS.update();
	}

	override componentWillUnmount() {
		document.body.classList.remove('research-mode');
	}

	handleSelect = (index: number) => {
		this.setState({ selectedTeamIndex: index });
	};

	handleDoubleClick = (url: string) => {
		if (url) {
			window.open(url, '_blank');
		} else {
			PS.alert("No PokéPaste link available for this team yet.");
		}
	};

	handleBattle = () => {
		const { selectedTeamIndex } = this.state;
		if (selectedTeamIndex === -1) return;

		const team = Config.researchTeams![selectedTeamIndex];
		// Phase 3: Transition to battle (mock for now)
		PS.alert(`Selected ${team.name}. Battle logic coming soon!`);
		
		// In the future, this would send the battle request:
		/*
		PS.send(`/utm ${team.packedTeam}`);
		PS.send(`/search gen9vgcregh2025`);
		*/
	};

	override render() {
		const teams = Config.researchTeams || [];

		return (
			<div class="research-landing">
				<div class="research-header">
					<h1>VGC Research Project</h1>
					<p>Please select a team to challenge the RL bot. Double-click to view the PokéPaste.</p>
				</div>
				<div class="research-team-list">
					{teams.map((team, index) => (
						<ResearchTeamCard
							key={index}
							team={team}
							isSelected={this.state.selectedTeamIndex === index}
							onClick={() => this.handleSelect(index)}
							onDblClick={() => this.handleDoubleClick(team.pokePasteUrl)}
						/>
					))}
				</div>
				<div class="research-footer">
					<button 
						class={`button big ${this.state.selectedTeamIndex === -1 ? 'disabled' : ''}`}
						disabled={this.state.selectedTeamIndex === -1}
						onClick={this.handleBattle}
					>
						<strong>Challenge Bot!</strong>
					</button>
				</div>
			</div>
		);
	}
}

class ResearchTeamCard extends preact.Component<{
	team: any,
	isSelected: boolean,
	onClick: () => void,
	onDblClick: () => void
}> {
	packedTeam: string = '';
	icons: preact.ComponentChildren = null;

	override componentWillMount() {
		const { team } = this.props;
		// Import and pack if not already done
		const sets = Teams.import(team.teamExport);
		this.packedTeam = Teams.pack(sets);
		team.packedTeam = this.packedTeam; // Cache it back in config
		
		this.icons = Teams.unpackSpeciesOnly(this.packedTeam).map(pokemon => (
			<PSIcon pokemon={pokemon} />
		));
	}

	override render() {
		const { team, isSelected, onClick, onDblClick } = this.props;

		return (
			<div 
				class={`research-team-card ${isSelected ? 'selected' : ''}`}
				onClick={onClick}
				onDblClick={onDblClick}
			>
				<div class="team-name">{team.name}</div>
				<div class="team-icons">
					{this.icons}
				</div>
				{isSelected && <div class="selection-indicator"><i class="fa fa-check-circle"></i></div>}
			</div>
		);
	}
}
