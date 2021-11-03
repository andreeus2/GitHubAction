const core = require('@actions/core');
//const github = require('@actions/github');
const { Octokit } = require('@octokit/rest');


try {
    async function run() {
        const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
        //const octokit = github.getOctokit(GITHUB_TOKEN);
        const octokit = new Octokit();
        console.log(octokit);
        const { context = {} } = github;
        const { pull_request } = context.payload;

        await octokit.rest.issues.createComment({
            ...context.repo,
            issue_number: pull_request.number,
            body: 'Thank you for submitting a pull request'
        });

        console.log('Hello World');

    }
} catch (error) {
    console.log(error);
}

run();