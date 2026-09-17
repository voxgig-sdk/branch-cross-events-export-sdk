

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BranchCrossEventsExportSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('StatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE=TRUE.
  afterEach(liveDelay('BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BranchCrossEventsExportSDK.test()
    const ent = testsdk.Status()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"code","req":false,"short":"Response code","type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"job_id","req":false,"short":"The unique ID of the request.","type":"`$STRING`","index$":2},{"active":true,"name":"status_url","req":false,"short":"The URL of the export request.","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"status","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"job_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"app_id","orig":"app_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /branch_aggregate/async/status/{job_id}","json":"{\"operationId\":\"retrieveExportDownloadStatus\",\"parameters\":[{\"description\":\"The unique ID of the request. Obtained from the [export request](https://help.branch.io/developers-hub/reference/cross-events-export-api#request-data-export).\",\"explode\":\"false\",\"in\":\"path\",\"name\":\"job_id\",\"required\":\"true\",\"schema\":{\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The unique identifier for the app. Alternatively, provide `organization_id`.\",\"in\":\"query\",\"name\":\"app_id\",\"required\":\"true\",\"schema\":{\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n  \\\"code\\\": 200\\n  \\\"status\\\": \\\"FINISHED\\\"\\n  \\\"response_url\\\": \\\"https://branch-exports-usw2.s3.amazonaws.com/partner-query/2023-05-12-2023-05-19-eo_install-day-unique-id-here.csv?Signature={SIGNATURE_HERE}%3D&AWSAccessKeyId={AWS_ACCESS_KEY_ID_HERE}&Expires={EXPIRATION_HERE}\\\"\\n}\"}},\"schema\":{\"properties\":{\"code\":{\"description\":\"Response code\",\"example\":\"200\",\"type\":\"integer\"},\"job_id\":{\"description\":\"The unique ID of the request.\",\"example\":\"XXXX-0000-xxxx\",\"type\":\"string\"},\"status_url\":{\"description\":\"The URL of the export request.\",\"example\":\"https://api2.branch.io/v1/branch_aggregate/async/status/{JOB_ID_HERE}\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Job Successfully Finished\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"message\\\": \\\"Authentication failed !\\\",\\n        \\\"code\\\": 400\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"400\",\"type\":\"integer\"},\"message\":{\"example\":\"Authentication failed !\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Authentication Failed\"},\"404\":{\"description\":\"Job ID Not Found\"},\"429\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"code\\\": 429,\\n        \\\"message\\\": \\\"Rate limit reached.\\\"\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"429\",\"type\":\"integer\"},\"message\":{\"example\":\"Rate limit reached.\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Rate Limit Reached\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/branch_aggregate/async/status/{job_id}","rename":{"param":{"job_id":"id"}},"segments":[{"lit":"branch_aggregate"},{"lit":"async"},{"lit":"status"},{"var":"id"}],"select":{"exist":["app_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"status","name__orig":"status","Name":"Status","name_":"status","name-":"status","NAME":"STATUS","index$":1}, {"active":true,"entity":"status","key$":"BasicStatusFlow","kind":"basic","name":"BasicStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"status_ref01","srcdatavar":"status_ref01_data","suffix":"_dt0"},"match":{"id":"status01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-status_ref01"}}],"index$":0}]}, 'Status')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let status_ref01_data = Object.values(setup.data.existing.status)[0] as any

    // LOAD
    const status_ref01_ent = client.Status()
    const status_ref01_match_dt0: any = {}
    status_ref01_match_dt0.id = status_ref01_data.id
    const status_ref01_data_dt0 = (await status_ref01_ent.load(status_ref01_match_dt0)).data()
    assert(status_ref01_data_dt0.id === status_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/status/StatusTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BranchCrossEventsExportSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['status01','status02','status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BRANCH_CROSS_EVENTS_EXPORT_TEST_STATUS_ENTID': idmap,
    'BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE': 'FALSE',
    'BRANCH_CROSS_EVENTS_EXPORT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BRANCH_CROSS_EVENTS_EXPORT_TEST_STATUS_ENTID']

  const live = 'TRUE' === env.BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BRANCH_CROSS_EVENTS_EXPORT_TEST_STATUS_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BranchCrossEventsExportSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BRANCH_CROSS_EVENTS_EXPORT_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
