import * as commons from "./commons.js"

export async function insertTeamsInHtml(teamData)
{
    const teamTemplate = document.querySelector('#team-template');

    conedTeamTemplate = document.importNode(teamTemplate.content, true);

    conedTeamTemplate.querySelector('.team-name').textContent = teamData.name;
    conedTeamTemplate.querySelector('.team-position').textContent = teamData.position;

    conedTeamTemplate.querySelector(`.team-container`).addEventListener('click', (e) => {
            //handleTypeLinkDisplay(e);
            console.log('clicked');
        }
    );
    commons.mainContainer.append(conedTeamTemplate);
};