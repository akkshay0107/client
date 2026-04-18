"use strict";function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}var




ResearchLandingPage=function(_preact$Component){function ResearchLandingPage(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_preact$Component.call.apply(_preact$Component,[this].concat(args))||this;_this.
state={
selectedTeamIndex:-1
};_this.























handleSelect=function(index){
_this.setState({selectedTeamIndex:index});
};_this.

handleDoubleClick=function(url){
if(url){
window.open(url,'_blank');
}else{
PS.alert("No PokéPaste link available for this team yet.");
}
};_this.

handleBattle=function(){
var selectedTeamIndex=_this.state.selectedTeamIndex;
if(selectedTeamIndex===-1)return;

var team=Config.researchTeams[selectedTeamIndex];

PS.alert("Selected "+team.name+". Battle logic coming soon!");






};return _this;}_inheritsLoose(ResearchLandingPage,_preact$Component);var _proto=ResearchLandingPage.prototype;_proto.componentDidMount=function componentDidMount(){document.body.classList.add('research-mode');for(var roomid in PS.rooms){if(roomid&&!roomid.startsWith('battle-')){var room=PS.rooms[roomid];if(room){room.minimized=true;if(roomid==='rooms'||roomid==='lobby'){PS.hideRightRoom();}}}}PS.update();};_proto.componentWillUnmount=function componentWillUnmount(){document.body.classList.remove('research-mode');};_proto.

render=function render(){var _this2=this;
var teams=Config.researchTeams||[];

return(
preact.h("div",{"class":"research-landing"},
preact.h("div",{"class":"research-header"},
preact.h("h1",null,"VGC Research Project"),
preact.h("p",null,"Please select a team to challenge the RL bot. Double-click to view the Pok\xE9Paste.")
),
preact.h("div",{"class":"research-team-list"},
teams.map(function(team,index){return(
preact.h(ResearchTeamCard,{
key:index,
team:team,
isSelected:_this2.state.selectedTeamIndex===index,
onClick:function(){return _this2.handleSelect(index);},
onDblClick:function(){return _this2.handleDoubleClick(team.pokePasteUrl);}}
));}
)
),
preact.h("div",{"class":"research-footer"},
preact.h("button",{
"class":"button big "+(this.state.selectedTeamIndex===-1?'disabled':''),
disabled:this.state.selectedTeamIndex===-1,
onClick:this.handleBattle},

preact.h("strong",null,"Challenge Bot!")
)
)
));

};return ResearchLandingPage;}(preact.Component);var


ResearchTeamCard=function(_preact$Component2){function ResearchTeamCard(){var _this3;for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this3=_preact$Component2.call.apply(_preact$Component2,[this].concat(args))||this;_this3.





packedTeam='';_this3.
icons=null;return _this3;}_inheritsLoose(ResearchTeamCard,_preact$Component2);var _proto2=ResearchTeamCard.prototype;_proto2.

componentWillMount=function componentWillMount(){
var team=this.props.team;

var sets=Teams["import"](team.teamExport);
this.packedTeam=Teams.pack(sets);
team.packedTeam=this.packedTeam;

this.icons=Teams.unpackSpeciesOnly(this.packedTeam).map(function(pokemon){return(
preact.h(PSIcon,{pokemon:pokemon}));}
);
};_proto2.

render=function render(){
var _this$props=this.props,team=_this$props.team,isSelected=_this$props.isSelected,onClick=_this$props.onClick,onDblClick=_this$props.onDblClick;

return(
preact.h("div",{
"class":"research-team-card "+(isSelected?'selected':''),
onClick:onClick,
onDblClick:onDblClick},

preact.h("div",{"class":"team-name"},team.name),
preact.h("div",{"class":"team-icons"},
this.icons
),
isSelected&&preact.h("div",{"class":"selection-indicator"},preact.h("i",{"class":"fa fa-check-circle"}))
));

};return ResearchTeamCard;}(preact.Component);
//# sourceMappingURL=research-ui.js.map