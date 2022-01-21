import core from '@actions/core';
import github from '@actions/github';

const main = async() => {
    try {
        const repository = core.getInput('respository', {required: true});
        const prNumber = core.getInput('pr-number', {required: true});
        const context = core.getInput('context', {required: true});
        const state = core.getInput('state', {required: true});
        const description = core.getInput('description', {required: true});
        const targetURL = core.getInput('target-url', {required: false});
        const token = core.getInput('GITHUB_TOKEN', {required: true});
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        
        const octokit = new github.getOctokit(token);

        const data = await octokit.request('GET /repos/{repository}/pulls/{pull_number}', {
            repository,
            pull_number: prNumber
        });
        console.log(data);
        console.log(payload);

      } catch (error) {
        core.setFailed(error.message);
      }
}

main();
