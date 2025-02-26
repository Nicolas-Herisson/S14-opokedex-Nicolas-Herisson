import * as commons from "./commons.js"

export async function insertTeamsInHtml(teamData)
{

    const teamTemplate = document.querySelector('#team-template');


    const clonedTeamTemplate = document.importNode(teamTemplate.content, true);

    clonedTeamTemplate.querySelector('.team-name').textContent = teamData.name;
    clonedTeamTemplate.querySelector('.team-position').textContent = teamData.position;

    clonedTeamTemplate.querySelector(`.team-container`).addEventListener('click', (e) => {
            //handleTypeLinkDisplay(e);
            console.log('clicked');
        }
    );
    commons.mainContainer.prepend(clonedTeamTemplate);
};