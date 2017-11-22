import {Observable} from 'rx'
import {run} from '@cycle/core'
import {makeHTTPDriver} from '@cycle/http'
import makeDiscordDriver from 'cycle-discord'
import {GoogleApi, IMAGE_SEARCH_URL} from 'cycle-discord-google-api'
 
run(GoogleApi, {
    HTTP: makeHTTPDriver(),
    Discord: makeDiscordDriver({/**/}),
    props: () => Observable.of({
        URL: `${IMAGE_SEARCH_URL}&key=AIzaSyBlKtX_dst5DbCans5Jfz80rzkGu24039A`,
        trigger: /^search image (.*)$/,
        transform: result => result.link
    })
})
