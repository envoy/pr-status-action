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
        const token = process.env.GITHUB_TOKEN;
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        
        const octokit = new github.getOctokit(token);

        const data = await octokit.request('GET /repos/{repository}/pulls/{pull_number}', {
            repository,
            pull_number: prNumber
        });
        console.log(data);
        console.log(payload);
        console.log(repository);
        console.log(token)
      } catch (error) {
        core.setFailed(error.message);
      }
}

main();
