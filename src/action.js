const core = require('@actions/core');
const github = require('@actions/github');

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const ocokit = github.getOctokit(GITHUB_TOKEN);

    const {context = {} } = github;
    const { pull_request } = context.payload;

    await ocokit.issues.createComment({
        ...context.repo,
        issues_number: pull_request.number,
        body: 'Thank you for submitting a pull request'
    });

    console.log('Hello World');
}

run();