const core = require('@actions/core');
const github = require('@actions/github');

const main = async() => {
    try {
        const repository = core.getInput('repository', {required: true});
        const prNumber = core.getInput('pr-number', {required: true});
        const context = core.getInput('context', {required: true});
        const state = core.getInput('state', {required: true});
        const description = core.getInput('description', {required: true});
        const targetURL = core.getInput('target-url', {required: false});
        const token = process.env['GITHUB_TOKEN'];

        const octokit = new github.getOctokit(token);

        const { data: pullRequest } = await octokit.rest.pulls.get({
            owner: repository.split('/')[0],
            repo: repository.split('/')[1],
            pull_number: prNumber
        });

        console.log(pullRequest);
      } catch (error) {
        core.setFailed(error.message);
      }
}

main();
