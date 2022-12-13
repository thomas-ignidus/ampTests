# ampTests
end to end testing of critical amp functionality using cypress

# setup
- `npm install cypress`
- `npm i @cypress/chrome-recorder -g`

# launch UI
- `npx cypress open`

# run tests
- run all tests `npx cypress run`
- run bvt test `npx cypress run --spec "cypress/e2e/bvt.cy.js"`

# use chrome to record a test
1. open chrome dev tools
2. click record
3. interact with site
4. stop the recording
5. export to json
6. `npx @cypress/chrome-recorder /path/to/file.json -o=cypress/e2e`
