angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html><html lang=\"en\" ng-app=\"Scrumble\"><head><title>Scrumble</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"css/please-wait.css\"><link rel=\"stylesheet\" href=\"css/vendor.css\"><link rel=\"stylesheet\" href=\"css/app.css\"><link rel=\"icon\" type=\"image/x-icon\" href=\"images/favicon.ico\"></head><body><md-content ui-view layout=\"column\" class=\"grey-background\"></md-content><script src=\"js/please-wait.min.js\"></script><script>window.loading_screen = window.pleaseWait({\n  logo:\"images/logo.png\",\n  backgroundColor: \'#ffffff\',\n  loadingHtml:\"<div class=\'sk-cube-grid\'><div class=\'sk-cube sk-cube1\'></div><div class=\'sk-cube sk-cube2\'></div><div class=\'sk-cube sk-cube3\'></div><div class=\'sk-cube sk-cube4\'></div><div class=\'sk-cube sk-cube5\'></div><div class=\'sk-cube sk-cube6\'></div><div class=\'sk-cube sk-cube7\'></div><div class=\'sk-cube sk-cube8\'></div><div class=\'sk-cube sk-cube9\'></div></div>\"\n})</script><script src=\"js/vendor.js\"></script><script src=\"js/templates.js\"></script><script src=\"js/app.js\"></script></body></html>");
$templateCache.put("common/states/base.html","<header><md-toolbar><div class=\"md-toolbar-tools\"><md-button ng-click=\"toggleSidenav()\" hide-gt-md class=\"md-icon-button\"><md-icon md-svg-src=\"menu\" aria-label=\"Open menu\"></md-icon></md-button><h2><span ui-sref=\"tab.board\" class=\"clickable\">Scrumble</span></h2><span flex></span><profil-info></profil-info></div></md-toolbar></header><div flex layout=\"row\"><md-sidenav layout=\"column\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\" class=\"md-sidenav-left md-whiteframe-z2\"><md-list><div ng-repeat=\"section in menu\"><md-subheader>{{ section.title }}</md-subheader><md-list-item ng-repeat=\"item in section.items\" ng-click=\"goTo(item)\" md-ink-ripple class=\"md-clickable\"><md-item-content layout=\"row\" layout-align=\"start center\"><div class=\"inset\"><md-icon md-svg-icon=\"{{item.icon}}\"></md-icon></div><div class=\"inset\">{{item.title}}</div></md-item-content></md-list-item><md-divider></md-divider></div></md-list></md-sidenav><main layout=\"row\" flex class=\"md-padding\"><div ui-view class=\"container\"></div></main></div><feedback></feedback>");
$templateCache.put("feedback/directives/call-to-action.html","<md-button ng-click=\"openFeedbackModal($event)\" class=\"md-fab md-primary\"><md-icon md-svg-icon=\"comment-text-outline\"></md-icon><md-tooltip md-direction=\"right\">Give us some feedback!</md-tooltip></md-button>");
$templateCache.put("feedback/directives/dialog.html","<md-dialog><form><md-toolbar><div class=\"md-toolbar-tools\"><h2>Feedback Form</h2><span flex=\"\"></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-dialog-content\"><h2>Your feedback is precious</h2><p>Something is wrong? You\'re missing a feature? You like it that way? Please tell us!</p><md-input-container class=\"md-block\"><label>Your Feedback</label><textarea ng-model=\"message\" rows=\"5\" cols=\"1\"></textarea></md-input-container></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"send()\" ng-disabled=\"doing\" class=\"md-flat md-primary\">Send</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("board/states/board/view.html","<md-card flex=\"100\"><md-tabs md-selected=\"selectedIndex\" md-border-bottom md-autoselect md-dynamic-height md-stretch-tabs=\"always\"><md-tab label=\"Chart\"><sprint-widget project=\"project\" sprint=\"sprint\" call-to-actions=\"true\"></sprint-widget></md-tab><md-tab label=\"Table\"><md-data-table-container><table md-data-table class=\"bdc-data\"><thead><tr><th name=\"Day\"></th><th name=\"Standard\"></th><th name=\"Done\"></th><th name=\"\"></th></tr></thead><tbody><tr ng-repeat=\"day in tableData\" ng-class=\"{\'md-selected\': currentDayIndex == $index}\"><td>{{ day.date | date : \'EEEE\' }}</td><td>{{ day.standard.toFixed(1) }}</td><td><section layout=\"row\" layout-sm=\"column\" layout-wrap><md-input-container flex=\"50\" md-no-float=\"true\"><label>Done</label><input ng-model=\"day.done\" type=\"number\"></md-input-container></section></td><td><div layout-align=\"center center\" ng-if=\"currentDayIndex == $index\"><md-button ng-click=\"fetchTrelloDonePoints()\" class=\"md-raised md-primary\"><md-icon md-svg-icon=\"trello\"></md-icon>Fetch done</md-button></div></td></tr></tbody></table></md-data-table-container><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save</md-button></section></md-tab></md-tabs></md-card>");
$templateCache.put("common/directives/dynamic-fields/view.html","<md-list><md-list-item ng-repeat=\"field in availableFields\" class=\"md-2-line\"><md-icon md-svg-icon=\"{{ field.icon }}\"></md-icon><div class=\"md-list-item-text\"><h3>{{ field.key }} </h3><p ng-bind-html=\"field.description\"></p></div></md-list-item></md-list>");
$templateCache.put("common/directives/trello-avatar/view.html","<div class=\"trello-avatar\"><img ng-if=\"hash\" alt=\"{{ member.username }}\" ng-src=\"https://trello-avatars.s3.amazonaws.com/{{hash}}/{{size}}.png\" class=\"md-avatar member-avatar\"><div ng-style=\"{\'background-color\': color}\" ng-if=\"!hash\" class=\"member-avatar initials\">{{ member.initials }}</div><md-tooltip ng-if=\"displayTooltip\">{{ member.fullName }}</md-tooltip></div>");
$templateCache.put("daily-report/directives/markdown-helper/view.html","<md-button href=\"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet\" target=\"_blank\" aria-label=\"Markdown Cheatsheet\" class=\"md-icon-button\"><md-icon md-svg-src=\"markdown\" aria-label=\"markdown\">Markdown</md-icon><md-tooltip md-direction=\"left\">Markdown Cheatsheet</md-tooltip></md-button>");
$templateCache.put("daily-report/directives/previous-goals/edit-goal.html","<md-dialog aria-label=\"Edit Goal\" ng-cloak><md-toolbar><div class=\"md-toolbar-tools\"><h2>Edit</h2><span flex></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div layout=\"column\" class=\"md-dialog-content\"><md-checkbox ng-model=\"goal.isDone\"><p>{{ goal.isDone? \"Goal achieved\" : \"Goal not achieved\" }}</p></md-checkbox><md-input-container><textarea ng-cloak ng-model=\"goal.name\" aria-label=\"goal\" md-autofocus></textarea></md-input-container></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"save(goal)\">Save</md-button></md-dialog-actions></md-dialog>");
$templateCache.put("daily-report/directives/previous-goals/view.html","<div layout=\"column\" layout-sm=\"column\"><md-list-item ng-repeat=\"goal in goals\"><p ng-style=\"{color: goal.isDone ? \'green\': \'red\'}\">{{ goal.name }}</p><md-icon ng-click=\"edit($event, goal)\" aria-label=\"Edit goal\" md-svg-icon=\"border-color\" class=\"md-secondary\"></md-icon></md-list-item></div>");
$templateCache.put("daily-report/directives/select-goals/edit-goal.html","<md-dialog aria-label=\"Edit Goal\" ng-cloak><md-toolbar><div class=\"md-toolbar-tools\"><h2>Edit Goal</h2><span flex></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-dialog-content\"><md-input-container><textarea ng-cloak ng-model=\"goal.name\" aria-label=\"goal\" md-autofocus></textarea></md-input-container></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"save(goal.name)\">Save</md-button></md-dialog-actions></md-dialog>");
$templateCache.put("daily-report/directives/select-goals/view.html","<div layout=\"column\" layout-sm=\"column\"><md-list-item ng-repeat=\"card in trelloCards\"><md-checkbox ng-model=\"card.selected\" ng-change=\"updateGoals()\"></md-checkbox><p>{{ card.name }}</p><md-icon ng-click=\"edit($event, card)\" aria-label=\"Edit goal\" md-svg-icon=\"border-color\" class=\"md-secondary\"></md-icon></md-list-item></div>");
$templateCache.put("daily-report/states/edit-template/view.html","<div layout=\"column\" flex=\"100\" layout-sm=\"column\"><md-card flex=\"100\"><md-card-title><md-card-title-text><span class=\"md-headline\">Edit Template</span></md-card-title-text><div flex></div><markdown-helper></markdown-helper></md-card-title><md-card-content flex layout=\"column\"><md-input-container><label>Subject</label><input ng-model=\"dailyReport.message.subject\"></md-input-container><md-input-container class=\"md-block\"><label>Body (in markdown)</label><textarea ng-model=\"dailyReport.message.body\" columns=\"1\"></textarea></md-input-container></md-card-content><md-card-actions layout=\"row\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save</md-button></md-card-actions></md-card><md-card flex=\"100\"><md-card-title><md-card-title-text><span class=\"md-headline\">Dynamic Fields</span></md-card-title-text></md-card-title><md-card-content flex layout=\"row\" layout-sm=\"column\"><div flex=\"50\" flex-sm=\"100\"><dynamic-fields-list available-fields=\"availableFields1\"></dynamic-fields-list></div><div flex=\"50\" flex-sm=\"100\"><dynamic-fields-list available-fields=\"availableFields2\"></dynamic-fields-list><div layout=\"row\" style=\"margin-left: 66px;\"><md-input-container flex=\"50\"><label>Behind Label</label><input ng-model=\"dailyReport.message.behindLabel\"></md-input-container><md-input-container flex=\"50\"><label>Ahead Label</label><input ng-model=\"dailyReport.message.aheadLabel\"></md-input-container></div></div></md-card-content></md-card></div>");
$templateCache.put("daily-report/states/preview/view.html","<md-dialog><form><md-toolbar><div class=\"md-toolbar-tools\"><h2>Daily Report Preview</h2><span flex=\"\"></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-padding\"><div layout=\"column\"><md-input-container><label>To:</label><input ng-model=\"message.to\" disabled></md-input-container><md-input-container><label>Cc:</label><input ng-model=\"message.cc\" disabled></md-input-container><md-input-container><label>Subject:</label><input ng-model=\"message.subject\" disabled></md-input-container><div ng-bind-html=\"trustAsHtml(message.body)\"></div></div></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"login()\" ng-if=\"!isAuthenticated\" class=\"md-raised md-primary\">Authorize Gmail</md-button><md-button ng-click=\"send()\" ng-disabled=\"!isAuthenticated\" class=\"md-raised md-primary\">Send</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("daily-report/states/template/view.html","<div layout=\"row\" flex=\"100\" layout-sm=\"column\"><md-card flex=\"50\" flex-sm=\"100\"><md-card-title flex=\"nogrow\"><md-card-title-text><span class=\"md-headline\">{todaysGoals}</span><span class=\"md-subhead\">The list of tickets in \"sprint\", \"doing\", \"blocked\", \"toValidate\" columns</span></md-card-title-text></md-card-title><md-card-content flex><select-goals goals=\"todaysGoals\" project=\"project\" sprint=\"sprint\"></select-goals></md-card-content></md-card><md-card flex=\"50\" flex-sm=\"100\"><md-card-title flex=\"nogrow\"><md-card-title-text><span class=\"md-headline\">{previousGoals}</span><span class=\"md-subhead\">The list of goals in the previous email. It\'s green if the trello ticket is in the \"done column\"</span></md-card-title-text></md-card-title><md-card-content flex><previous-goals goals=\"previousGoals\" sprint=\"sprint\"></previous-goals></md-card-content></md-card></div><div layout=\"row\" flex=\"100\" layout-sm=\"column\"><md-card flex=\"50\" flex-sm=\"100\"><md-card-title><md-card-title-text><span class=\"md-headline\">{problems}</span></md-card-title-text><div flex></div><markdown-helper></markdown-helper></md-card-title><md-card-content><md-input-container class=\"md-block\"><textarea ng-model=\"sections.problems\" aria-label=\"problems\"></textarea></md-input-container></md-card-content></md-card><md-card flex=\"50\" flex-sm=\"100\"><md-card-title><md-card-title-text><span class=\"md-headline\">{intro}</span></md-card-title-text><div flex></div><markdown-helper></markdown-helper></md-card-title><md-card-content><md-input-container class=\"md-block\"><textarea ng-model=\"sections.intro\" aria-label=\"intro\"></textarea></md-input-container></md-card-content></md-card></div><md-button ng-click=\"preview($event)\" class=\"md-fab md-primary board-call-to-actions\"><md-icon md-svg-icon=\"eye\">Preview</md-icon><md-tooltip md-direction=\"left\">Preview</md-tooltip></md-button>");
$templateCache.put("indicators/directives/client-form/view.html","<md-card-content class=\"md-padding\"><h2 class=\"md-title\">Satisfaction survey<md-button ng-click=\"print()\" class=\"md-icon-button\"><md-icon md-svg-src=\"printer\" aria-label=\"Print\"><md-tooltip md-direction=\"bottom\">Print</md-tooltip></md-icon></md-button></h2><p class=\"question\">What is your appreciation of the speed of the team?</p><div class=\"answer\"><md-radio-group ng-model=\"form.question1\"><md-radio-button value=\"5\" class=\"md-primary\">5 - Excellent</md-radio-button><md-radio-button value=\"4\" class=\"md-primary\">4 - Very good</md-radio-button><md-radio-button value=\"3\" class=\"md-primary\">3 - Good</md-radio-button><md-radio-button value=\"2\" class=\"md-primary\">2 - Average</md-radio-button><md-radio-button value=\"1\" class=\"md-primary\">1 - Insufficient</md-radio-button><md-radio-button value=\"0\" class=\"md-primary\">0 - Very insufficient</md-radio-button></md-radio-group></div><p class=\"question\">What is your appreciation of the quality of the coaching?</p><div class=\"answer\"><md-radio-group ng-model=\"form.question2\"><md-radio-button value=\"5\" class=\"md-primary\">5 - Excellent</md-radio-button><md-radio-button value=\"4\" class=\"md-primary\">4 - Very good</md-radio-button><md-radio-button value=\"3\" class=\"md-primary\">3 - Good</md-radio-button><md-radio-button value=\"2\" class=\"md-primary\">2 - Average</md-radio-button><md-radio-button value=\"1\" class=\"md-primary\">1 - Insufficient</md-radio-button><md-radio-button value=\"0\" class=\"md-primary\">0 - Very insufficient</md-radio-button></md-radio-group></div><p class=\"question\">What change/improve would make you to improve your appreciation?</p><div class=\"answer\"><md-input-container class=\"md-block\"><label>Your answer...</label><textarea ng-model=\"form.question3\" aria-label=\"question3\"></textarea></md-input-container></div><p class=\"question\">If you had a magic wand, what is \"the\" thing you would change</p><div class=\"answer\"><md-input-container class=\"md-block\"><label>Your answer...</label><textarea ng-model=\"form.question4\" aria-label=\"question4\"></textarea></md-input-container></div><p class=\"question\">Would you recommend us?</p><div class=\"answer\"><md-radio-group ng-model=\"form.question5\"><md-radio-button value=\"yes-of-course\" class=\"md-primary\">Yes of course</md-radio-button><md-radio-button value=\"yes\" class=\"md-primary\">Yes</md-radio-button><md-radio-button value=\"not-really\" class=\"md-primary\">Not really</md-radio-button><md-radio-button value=\"not-at-all\" class=\"md-primary\">Not at all</md-radio-button></md-radio-group></div><p class=\"question\">Would you like to have a sales meeting in the coming week?</p><div class=\"answer\"><md-radio-group ng-model=\"form.question6\"><md-radio-button value=\"yes\" class=\"md-primary\">Yes</md-radio-button><md-radio-button value=\"no\" class=\"md-primary\">No, it is not necessary for now</md-radio-button></md-radio-group></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save</md-button></section></md-card-content>");
$templateCache.put("indicators/states/base/view.html","<md-card flex=\"100\"><client-form sprint=\"sprint\"></client-form></md-card>");
$templateCache.put("indicators/states/print-client-survey/view.html","<client-form sprint=\"sprint\"></client-form>");
$templateCache.put("login/directives/profil-info/view.html","<md-menu class=\"account-menu\"><md-button ng-click=\"openMenu($mdOpenMenu, $event)\" class=\"picture-link\"><trello-avatar member=\"userInfo\"></trello-avatar></md-button><md-menu-content width=\"5\" class=\"account-details md-whiteframe-z2\"><div layout=\"row\" class=\"trello-account\"><a href=\"{{userInfo.url}}\" target=\"_blank\"><trello-avatar member=\"userInfo\"></trello-avatar></a><div layout=\"column\"><h3 class=\"title\">Trello Account</h3><p>{{ userInfo.fullName }}</p><p>{{ userInfo.email }}</p></div><md-button ng-click=\"logout()\" class=\"md-warn\">Logout</md-button></div><div layout=\"row\" class=\"gmail-account\"><img alt=\"{{ googleUser.name }}\" ng-src=\"{{ googleUser.picture }}\" class=\"md-avatar member-avatar gmail-avatar\"><div layout=\"column\" layout-align=\"center start\"><h3 class=\"title\">Gmail Account</h3><p>{{ googleUser.email }}</p></div><md-button ng-click=\"googleLogout()\" ng-if=\"googleUser.email\" class=\"md-warn\">Logout</md-button><md-button ng-click=\"googleLogin()\" ng-if=\"!googleUser.email\">Login</md-button></div></md-menu-content></md-menu>");
$templateCache.put("login/states/trello/view.html","<div layout=\"column\" layout-fill flex><main layout=\"column\" layout-align=\"center center\" flex class=\"landing-content\"><h1>Scrumble</h1><h3>Automate your daily scrum tasks</h3><md-button ng-click=\"login()\" ng-disabled=\"doing\" class=\"md-raised md-primary\"><md-icon md-svg-icon=\"trello\"></md-icon>  Login with Trello</md-button></main><footer layout=\"row\" layout-align=\"center center\" class=\"landing-footer\"><a href=\"http://www.theodo.fr\" target=\"_blank\"><img src=\"images/theodo.png\"></a></footer><feedback></feedback></div>");
$templateCache.put("project/directives/member-form/view.html","<md-card><md-card-title><md-card-title-text><span class=\"md-headline\">{{ member.fullName }}</span></md-card-title-text><md-card-title-media><div class=\"md-media-sm card-media\"><trello-avatar member=\"member\"></trello-avatar></div></md-card-title-media></md-card-title><md-card-content layout=\"column\"><md-input-container><label>Email (for daily mail)</label><input ng-model=\"member.email\"></md-input-container><md-input-container><label>Phone</label><input ng-model=\"member.phone\"></md-input-container><div layout=\"row\"><md-input-container flex=\"50\"><label>Role</label><md-select ng-model=\"member.role\"><md-option ng-value=\"elt.value\" ng-repeat=\"elt in roles\">{{elt.label}}</md-option></md-select></md-input-container><md-input-container flex=\"50\"><label>Daily Mail</label><md-select ng-model=\"member.daily\"><md-option ng-value=\"elt.value\" ng-repeat=\"elt in daily\">{{elt.label}}</md-option></md-select></md-input-container></div></md-card-content><md-card-actions layout=\"row\" layout-align=\"end center\"><md-button aria-label=\"delete\" ng-click=\"delete()\" class=\"md-icon-button\"><md-icon md-svg-icon=\"delete\"></md-icon></md-button></md-card-actions></md-card>");
$templateCache.put("project/directives/project-widget/view.html","<div><div class=\"md-toolbar-tools\"><h2 class=\"md-title\">The team</h2><span flex></span><md-menu><md-button aria-label=\"Open Project menu\" ng-click=\"openMenu($mdOpenMenu, $event)\" class=\"md-icon-button\"><md-icon md-menu-origin md-svg-icon=\"more\"></md-icon></md-button><md-menu-content width=\"4\"><md-menu-item ui-sref=\"tab.project\"><md-button><md-icon md-svg-icon=\"settings\"></md-icon>Settings</md-button></md-menu-item><md-menu-item ui-sref=\"tab.sprint-list({projectId: project.objectId})\"><md-button><md-icon md-svg-icon=\"view-list\"></md-icon>Sprints</md-button></md-menu-item><md-menu-item ng-click=\"openEditTitle($event)\"><md-button disabled=\"disabled\"><md-icon md-svg-icon=\"printer\"></md-icon>Print</md-button></md-menu-item></md-menu-content></md-menu></div><md-card-content><md-list><md-list-item ng-repeat=\"member in project.team\" class=\"md-3-line\"><trello-avatar member=\"member\"></trello-avatar><div layout=\"column\" class=\"md-list-item-text\"><h3>{{ member.fullName }} - {{ getRoleLabel(member.role) }}</h3><p>{{ member.email }}</p><p>{{ member.phone }}</p></div></md-list-item><md-list-item ng-repeat=\"member in project.team.rest\" class=\"md-3-line\"><trello-avatar member=\"member\"></trello-avatar><div layout=\"column\" class=\"md-list-item-text\"><h3>{{ member.fullName }} - {{ member.role }}</h3><p>{{ member.email }}</p><p>{{ member.phone }}</p></div></md-list-item></md-list></md-card-content><md-card-actions layout=\"row\" layout-align=\"end center\"><md-button aria-label=\"Trello Link\" class=\"md-icon-button\"><a ng-href=\"https://trello.com/b/{{project.boardId}}\" target=\"_blank\"><md-icon md-svg-icon=\"trello\"></md-icon></a></md-button></md-card-actions></div>");
$templateCache.put("project/directives/resources-by-day/view.html","<div class=\"toto\"><div layout=\"row\" class=\"resources-by-day\"></div><md-data-table-toolbar><button ng-click=\"delete($event)\" ng-show=\"selected.length\" class=\"md-icon-button md-button md-default-theme\"><md-icon md-svg-icon=\"delete\"></md-icon></button></md-data-table-toolbar><md-data-table-container><table md-data-table md-row-select=\"selected\"><thead><tr><td>&nbsp;</td><td layout-align=\"center center\" ng-repeat=\"(j, member) in members\"><trello-avatar member=\"member\"></trello-avatar></td></tr></thead><tbody><tr ng-repeat=\"day in days\"><td>{{ day.date | date : \'EEEE, MMMM d\' }}</td><td ng-repeat=\"member in members\"><md-button ng-click=\"resourceClick($parent.$index,$index)\" class=\"md-primary row\">{{ matrix[$parent.$parent.$index][$index] | number : 1 }}</md-button></td></tr></tbody></table></md-data-table-container></div>");
$templateCache.put("project/directives/select-people/view.html","<div ng-repeat=\"member in members\" ng-class=\"{\'selected\': teamCheck[member.id]}\" class=\"member-select\"><label ng-click=\"toggle(member)\"><trello-avatar member=\"member\" tooltip=\"true\" class=\"member-select-image\"></trello-avatar></label></div>");
$templateCache.put("project/states/main/view.html","<div layout=\"row\" layout-align=\"center end\" class=\"sprint-body\"><md-card flex=\"100\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">SET YOUR PROJECT</h2><md-input-container layout=\"column\"><label>Select a board: </label><md-select ng-model=\"project.boardId\"><md-option ng-value=\"board.id\" ng-repeat=\"board in boards\">{{ board.name }}</md-option></md-select></md-input-container><div ng-if=\"project.boardId\" layout=\"column\"><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"blocked\" column</label><md-select ng-model=\"project.columnMapping.blocked\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"to validate\" column</label><md-select ng-model=\"project.columnMapping.toValidate\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"doing\" column</label><md-select ng-model=\"project.columnMapping.doing\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"sprint\" column</label><md-select ng-model=\"project.columnMapping.sprint\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><h4 class=\"md-title\">The team</h4><div>Select the team</div><select-people members=\"boardMembers\" selected-members=\"project.team\"></select-people><md-content layout=\"row\" layout-wrap layout-align=\"center start\" layout-xs=\"column\" class=\"md-padding\"><div flex=\"50\" flex-gt-md=\"33\" flex-sm=\"100\" flex-xs=\"100\" ng-repeat=\"member in project.team\"><member-form member=\"member\" delete=\"delete(member)\"></member-form></div></md-content></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"save()\" ng-disabled=\"saving\" class=\"md-raised md-primary\">Save</md-button></section></md-card></div>");
$templateCache.put("sprint/directives/burndown/view.html","<div id=\"bdcgraph\"></div>");
$templateCache.put("sprint/directives/sprint-details/view.html","<md-card><md-card-title><md-card-title-text><span class=\"md-headline\">Sprint {{ sprint.number }}</span><span class=\"md-subhead\">{{ sprint.goal }}</span></md-card-title-text></md-card-title><md-card-content layout=\"column\"><p>Dates: {{ sprint.dates.start }} -> {{ sprint.dates.end }}</p><p ng-if=\"sprint.speed\">Real Speed: {{ sprint.speed }}</p></md-card-content><md-card-actions layout=\"row\" layout-align=\"end center\"><md-button ng-click=\"activateSprint(sprint)\" class=\"md-icon-button\"><md-icon md-svg-icon=\"hexagon\" ng-class=\"{ \'active-sprint\': sprint.isActive }\"></md-icon><md-tooltip md-direction=\"top\">Activate This Sprint</md-tooltip></md-button><md-button ng-click=\"showBurndown($event, sprint)\" class=\"md-icon-button\"><md-icon md-svg-icon=\"trending-down\"></md-icon><md-tooltip md-direction=\"top\">See Burndown Chart</md-tooltip></md-button><md-button ui-sref=\"tab.indicators({sprintId: sprint.objectId})\" class=\"md-icon-button\"><md-icon md-svg-icon=\"chart-bar\">Indicators</md-icon><md-tooltip md-direction=\"top\">Go to indicators</md-tooltip></md-button><md-button aria-label=\"delete\" ng-click=\"delete()\" class=\"md-icon-button\"><md-icon md-svg-icon=\"delete\"></md-icon><md-tooltip md-direction=\"top\">Delete this sprint</md-tooltip></md-button></md-card-actions></md-card>");
$templateCache.put("sprint/directives/sprint-widget/editBDC.html","<md-dialog aria-label=\"Edit BDC Title\" ng-cloak><md-toolbar><div class=\"md-toolbar-tools\"><h2>Edit Burndown Chart</h2><span flex></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-dialog-content\"><md-data-table-container><table md-data-table class=\"bdc-data\"><thead><tr><th name=\"Day\"></th><th name=\"Standard\"></th><th name=\"Done\"></th><th name=\"\"></th></tr></thead><tbody><tr ng-repeat=\"day in data\" ng-class=\"{\'md-selected\': currentDayIndex == $index}\"><td>{{ day.date | date : \'EEEE\' }}</td><td>{{ day.standard.toFixed(1) }}</td><td><section layout=\"row\" layout-sm=\"column\" layout-wrap><md-input-container flex=\"50\" md-no-float=\"true\"><label>Done</label><input ng-model=\"day.done\" type=\"number\"></md-input-container></section></td><td><div layout-align=\"center center\" ng-if=\"currentDayIndex == $index\"><md-button ng-click=\"fetchTrelloDonePoints()\" class=\"md-raised md-primary\"><md-icon md-svg-icon=\"trello\"></md-icon>Fetch done</md-button></div></td></tr></tbody></table></md-data-table-container></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"save()\">Save</md-button></md-dialog-actions></md-dialog>");
$templateCache.put("sprint/directives/sprint-widget/editBDCTitle.html","<md-dialog aria-label=\"Edit BDC Title\" ng-cloak><form><md-toolbar><div class=\"md-toolbar-tools\"><h2>Edit Burndown Chart Title</h2><span flex></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-dialog-content\"><md-input-container class=\"md-block\"><label>Burndown chart title</label><input ng-model=\"title\"></md-input-container><h3>Available Dynamic Fields</h3><dynamic-fields-list available-fields=\"availableFields\"></dynamic-fields-list></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"save()\">Save</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("sprint/directives/sprint-widget/view.html","<div class=\"md-toolbar-tools\"><h2 ng-click=\"openEditTitle($event)\" class=\"md-title pointer\">{{ bdcTitle }}</h2><span flex></span><div ng-if=\"callToActions\"><md-button aria-label=\"Update BDC\" ng-click=\"updateBDC()\" class=\"md-icon-button\"><md-icon md-svg-icon=\"autorenew\">Update</md-icon><md-tooltip md-direction=\"bottom\">Go to next day</md-tooltip></md-button><md-button ng-click=\"printBDC()\" class=\"md-icon-button\"><md-icon md-svg-icon=\"printer\">Print</md-icon><md-tooltip md-direction=\"bottom\">Print</md-tooltip></md-button></div></div><md-card-content><burndown data=\"sprint.bdcData\"></burndown></md-card-content>");
$templateCache.put("sprint/states/edit/view.html","<div layout=\"row\" layout-align=\"center end\" class=\"sprint-body\"><md-card flex=\"100\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">{{ title }}</h2><div layout=\"row\"><md-input-container flex=\"20\"><label>Sprint Number</label><input ng-model=\"editedSprint.number\" ng-change=\"checkSprint(\'number\')\"></md-input-container><md-input-container flex=\"80\"><label>Sprint Goal</label><input ng-model=\"editedSprint.goal\"></md-input-container></div><md-input-container><label>Select the done column</label><md-select ng-model=\"editedSprint.doneColumn\" ng-change=\"checkSprint(\'done\')\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardLists\">{{ column.name }}</md-option></md-select></md-input-container><md-input-container><label>Select the sprint column (if changing each sprint)</label><md-select ng-model=\"editedSprint.sprintColumn\" ng-change=\"checkSprint(\'done\')\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardLists\">{{ column.name }}</md-option></md-select></md-input-container><div flex><md-datepicker ng-model=\"editedSprint.dates.start\" md-placeholder=\"Start Date\" ng-change=\"checkSprint(\'date\')\"></md-datepicker><md-datepicker ng-model=\"editedSprint.dates.end\" md-placeholder=\"End date\" ng-change=\"checkSprint(\'date\')\"></md-datepicker></div><div ng-if=\"editedSprint.dates.days.length &gt; 0\" class=\"man-days\"><resources-by-day days=\"editedSprint.dates.days\" matrix=\"editedSprint.resources.matrix\" members=\"devTeam\" on-update=\"checkSprint(\'resource\')\"></resources-by-day><md-input-container><label>Total sprint points</label><input nss-round ng-model=\"editedSprint.resources.totalPoints\" ng-change=\"checkSprint(\'total\')\"></md-input-container><md-input-container><label>Sprint speed</label><input nss-round ng-model=\"editedSprint.resources.speed\" ng-change=\"checkSprint(\'speed\')\"></md-input-container></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-disabled=\"!activable\" ng-click=\"activate()\" class=\"md-raised md-primary\">{{ saveLabel }}</md-button></section></md-card></div>");
$templateCache.put("sprint/states/list/bdc.dialog.html","<md-dialog aria-label=\"Burndown dialog\" ng-cloak=\"\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>Burndown Chart</h2><span flex=\"\"></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-dialog-content\"><img ng-src=\"{{sprint.bdcBase64}}\"></div></md-dialog-content></md-dialog>");
$templateCache.put("sprint/states/list/view.html","<md-card layout=\"row\" layout-wrap layout-align=\"center start\" layout-xs=\"column\" flew=\"100\" class=\"md-padding\"><div flex=\"50\" flex-xs=\"100\" ng-repeat=\"sprint in sprints\"><sprint-details sprint=\"sprint\" sprints=\"sprints\"></sprint-details></div></md-card>");
$templateCache.put("sprint/states/print-bdc/view.html","<sprint-widget project=\"project\" sprint=\"sprint\"></sprint-widget>");}]);