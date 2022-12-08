# ampTests
end to end testing of critical amp functionality using cypress

# setup
- run `npm install cypress`
- run `npm i @cypress/chrome-recorder -g`

# launch UI
- run `npx cypress open`


# use chrome to record a test
1. open chrome dev tools
2. click record
3. interact with site
4. stop the recording
5. export to json
6. run `npx @cypress/chrome-recorder /path/to/file.json -o=cypress/e2e`
