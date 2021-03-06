// ==UserScript==
// @name           Gladiatus Helper Extreme
// @namespace      http://www.ddth.org/
// @description    Find your Gladiatus experience more exciting with Gladiatus Helper
// @include        *.gladiatus.*
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Common.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Settings.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Overview.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Arena.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Battle.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Work.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Quest.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Auction.js
// @require        http://gladiatus.googlecode.com/svn/trunk/GladiatusHelper/src/gm/GladiatusHelper_Market.js
// ==/UserScript==

/**
 * Based on script "Gladiatus Arena"  by m4rtini (http://userscripts.org/scripts/show/23065)
 * @version   v4.0.1 - 2008.12.16
 * @author    NGUYEN, Ba Thanh <btnguyen2k [at] gmail [dot] com>
 * @author    Tuan Duong <bacduong [at] gmail [dot] com>
 * @author    NGUYEN, Xuan Khoa <instcode [at] gmail [dot] com>
 * @author    DUONG, Thien Duc <duongthienduc [at] gmail [dot] com>
 * @copyright DDTH.ORG
 * @history
 * v4.0.1 2008.12.16
 *  - Gladiatus.vn upgraded to v0.4
 * v3.3.8 2008.10.16
 *   - Add auction item level.
 * v3.3.7 2008.10.13
 *   - Add Market (helper for food buying) module.
 * v3.3.6 2008.09.10
 * 	 - Move current Auction Helper into bak file for later implement
 * 	 - Restore Auction Helper (Beta)
 *   - Remove image and script tag in Quest Desc Panel if it have.
 * v3.3.5 2008.09.xx
 *   - GM scripts now officially move to gladiatus-js project space on Google Code
 *   - code clean-up: modular code structure
 * v3.3.4 2008.08.11
 *   - code clean-up
 *   - new Auction Helper (beta)
 * v3.3.3 2008.08.10
 *   - timer on Arena
 *   - Auction Helper (beta)
 *   - Quest Helper: quest description, status and reward
 * v3.3.2 2008.08.09
 *   - refined information panel
 *   - auto-scroll panel
 *   - timer on Stable work
 *   - timer on Traveling
 * v3.3.1 2008.08.08
 *   - first release, mostly for gladiatus.vn
 *   - check for links to another players on the page and display duel prediction against each
 *     (use simulation at http://www.gladiatustools.com/sim.php)
 *   - display a link next to each opponent to duel him directly
 */

var $CHECK_STATUS = true;

if ( $CHECK_STATUS ) {
	main();
}

function main() {
	if (siteMod == 'market') {
		marketDisplayPriceRate();
	}
	else {
		arenaSimulateFights();
		if (siteMod == 'auction') {
			collectAuctionItem();
		}
	}
	overviewDisplayCharacterStats();
	workDisplayWorkStatus();
	questDisplayQuestStatus();
	requestAuctionPage();
	setAutoReceiveQuestTimer();
}
