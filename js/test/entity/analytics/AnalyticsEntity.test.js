
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { BranchCrossEventsExportSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('AnalyticsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE=TRUE.
  afterEach(liveDelay('BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BranchCrossEventsExportSDK.test()
    const ent = testsdk.Analytics()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"aggregations","req":false,"short":"An array where each element is an aggregation object.","type":"`$ARRAY`","index$":0},{"active":true,"name":"code","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"name":"dimensions","req":false,"short":"An array representing dimension(s) to group by.","type":"`$ARRAY`","index$":2},{"active":true,"format":"date","name":"end_date","req":true,"short":"The end of the interval time range represented as an ISO-8601 complete date.","type":"`$STRING`","index$":3},{"active":true,"name":"filter","req":false,"short":"An object representing a filter, or multiple filters.","type":"`$OBJECT`","index$":4},{"active":true,"name":"granularity","req":false,"short":"The time granularity that each band value will represent.","type":"`$STRING`","index$":5},{"active":true,"name":"job_id","req":false,"short":"The unique ID of the request.","type":"`$STRING`","index$":6},{"active":true,"name":"limit_sort_spec","req":false,"short":"An object describing column/row ordering and limiting.","type":"`$OBJECT`","index$":7},{"active":true,"name":"response_format","req":false,"short":"Compression format to use for data file.","type":"`$STRING`","index$":8},{"active":true,"name":"response_format_compression","req":false,"short":"Compression method to use for data file.","type":"`$STRING`","index$":9},{"active":true,"format":"date","name":"start_date","req":true,"short":"The start of the interval time range represented as an ISO-8601 complete date.","type":"`$STRING`","index$":10},{"active":true,"name":"status_url","req":false,"short":"The URL of the export request.","type":"`$STRING`","index$":11}],"name":"analytics","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /branch_aggregate/async/analytics","json":"{\"operationId\":\"requestCrossEventsDataExport\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"\",\"properties\":{\"aggregations\":{\"description\":\"An array where each element is an aggregation object. Aggregation object requires field name, display name, and data source. See [schema](https://help.branch.io/developers-hub/reference/cross-events-export-api#schema-for-aggregation) and [more](https://help.branch.io/developers-hub/reference/cross-events-export-api#data-source--field-name).\",\"example\":[{\"data_source\":\"eo_user_lifecycle_event\",\"display_name\":\"unique_lifecycle_events_count\",\"field_name\":\"sketch_unique_count\"},{\"data_source\":\"eo_click\",\"display_name\":\"eo_click\",\"field_name\":\"total_count\"}],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"dimensions\":{\"description\":\"An array representing dimension(s) to group by. See [dimensions](https://help.branch.io/developers-hub/reference/cross-events-export-api#dimensions) section for more.\",\"example\":[\"user_data_os\"],\"items\":{\"enum\":[\"link_alias\",\"link_archived\",\"link_creation_source\",\"link_dollar_sign_3p\",\"link_dollar_sign_android_deeplink_path\",\"link_dollar_sign_android_deepview\",\"link_dollar_sign_android_passive_deepview\",\"link_dollar_sign_android_url\",\"link_dollar_sign_canonical_identifier\",\"link_dollar_sign_canonical_url\",\"link_dollar_sign_deeplink_path\",\"link_dollar_sign_desktop_deeplink_path\",\"link_dollar_sign_desktop_deepview\",\"link_dollar_sign_desktop_passive_deepview\",\"link_dollar_sign_desktop_url\",\"link_dollar_sign_fallback_url\",\"link_dollar_sign_ios_deeplink_path\",\"link_dollar_sign_ios_deepview\",\"link_dollar_sign_ios_passive_deepview\",\"link_dollar_sign_ios_url\",\"link_dollar_sign_marketing_title\",\"link_dollar_sign_og_description\",\"link_dollar_sign_og_image_url\",\"link_dollar_sign_og_title\",\"link_dollar_sign_og_type\",\"link_dollar_sign_og_url\",\"link_dollar_sign_uri_redirect_mode\",\"link_dollar_sign_web_only\",\"link_domain\",\"link_id\",\"link_tilde_campaign\",\"link_tilde_channel\",\"link_tilde_feature\",\"link_tilde_quick_link_template_id\",\"link_tilde_tags\",\"link_type\",\"last_op\",\"name\",\"origin\",\"deep_linked\",\"from_desktop\",\"attributed\",\"user_data_app_store\",\"user_data_app_version\",\"user_data_os\",\"user_data_language\",\"user_data_platform\",\"user_data_environment\",\"user_data_geo_dma_code\",\"user_data_geo_country_code\",\"user_data_country\",\"user_data_geo_region_en\",\"user_data_opted_in\",\"user_data_opted_in_status\",\"last_attributed_touch_type\",\"last_attributed_touch_data_tilde_tags\",\"last_attributed_touch_data_tilde_secondary_publisher\",\"last_attributed_touch_data_tilde_campaign\",\"last_attributed_touch_data_tilde_advertising_partner_name\",\"last_attributed_touch_data_tilde_advertising_partner_id\",\"last_attributed_touch_data_tilde_feature\",\"last_attributed_touch_data_tilde_creative_name\",\"last_attributed_touch_data_tilde_creative_id\",\"last_attributed_touch_data_tilde_ad_name\",\"last_attributed_touch_data_tilde_ad_id\",\"last_attributed_touch_data_tilde_campaign_id\",\"last_attributed_touch_data_tilde_placement\",\"last_attributed_touch_data_tilde_stage\",\"last_attributed_touch_data_tilde_channel\",\"last_attributed_touch_data_tilde_ad_set_name\",\"last_attributed_touch_data_tilde_ad_set_id\",\"last_attributed_touch_data_tilde_keyword\",\"last_attributed_touch_data_tilde_keyword_id\",\"last_attributed_touch_data_tilde_journey_id\",\"last_attributed_touch_data_tilde_view_name\",\"last_attributed_touch_data_tilde_view_id\",\"last_attributed_touch_data_tilde_agency\",\"last_attributed_touch_data_tilde_agency_id\",\"last_attributed_touch_data_tilde_customer_secondary_publisher\",\"last_attributed_touch_data_tilde_customer_ad_set_name\",\"last_attributed_touch_data_tilde_customer_ad_name\",\"last_attributed_touch_data_tilde_customer_keyword\",\"last_attributed_touch_data_tilde_customer_placement\",\"last_attributed_touch_data_tilde_customer_sub_site_name\",\"last_attributed_touch_data_tilde_customer_campaign\",\"last_attributed_touch_data_plus_web_format\",\"last_attributed_touch_data_plus_current_feature\",\"last_attributed_touch_data_plus_via_features\",\"last_attributed_touch_data_dollar_marketing_title\",\"last_attributed_touch_data_dollar_3p\",\"last_cta_view_data_tilde_ad_name\",\"last_cta_view_data_tilde_secondary_publisher\",\"last_cta_view_data_tilde_campaign\",\"last_cta_view_data_tilde_advertising_partner_name\",\"last_cta_view_data_tilde_feature\",\"last_cta_view_data_tilde_ad_set_name\",\"last_cta_view_data_tilde_ad_set_id\",\"last_cta_view_data_tilde_campaign_id\",\"last_cta_view_data_tilde_creative_name\",\"last_cta_view_data_tilde_creative_id\",\"last_cta_view_data_plus_via_features\",\"last_cta_view_data_dollar_3p\",\"last_cta_view_data_tilde_tags\",\"last_cta_view_data_plus_web_format\",\"last_cta_view_data_tilde_channel\",\"last_cta_view_data_tilde_ad_id\",\"last_cta_view_data_tilde_stage\",\"body_ad_network_id\",\"body_campaign_id\",\"body_app_id\",\"body_redownload\",\"body_source_app_id\",\"body_conversion_value\",\"body_last_attributed_touch_data_tilde_creative_name\",\"body_last_attributed_touch_data_tilde_ad_set_name\",\"body_last_attributed_touch_data_tilde_creative_id\",\"body_last_attributed_touch_data_tilde_ad_set_id\",\"body_last_attributed_touch_data_tilde_ad_name\",\"body_last_attributed_touch_data_tilde_ad_id\",\"body_last_attributed_touch_data_tilde_campaign\",\"body_last_attributed_touch_data_tilde_campaign_id\",\"body_last_attributed_touch_data_tilde_campaign_name\",\"annotation_dollar_3p\",\"annotation_conversion_value_mapped_value\",\"annotation_conversion_value_revision\",\"annotation_campaign_id_mapped_value\",\"annotation_campaign_id_revision\",\"annotation_source_app_id_mapped_value\",\"annotation_source_app_id_revision\",\"annotation_customer_event_alias\",\"days_from_last_attributed_touch_to_event\",\"days_from_last_cta_view_to_event\",\"event_data_product_categories\",\"event_data_custom_param_1\",\"event_data_custom_param_2\",\"event_data_custom_param_3\",\"first_event_for_user\",\"customer_event_alias\"],\"type\":\"string\"},\"type\":\"array\"},\"end_date\":{\"description\":\"The end of the interval time range represented as an ISO-8601 complete date.\",\"example\":\"2023-05-16\",\"format\":\"date\",\"type\":\"string\"},\"filter\":{\"description\":\"An object representing a filter, or multiple filters. See filter [examples](https://help.branch.io/developers-hub/reference/cross-events-export-api#filters).\",\"example\":{\"dimension\":\"name\",\"type\":\"in\",\"values\":[\"x\",\"y\"]},\"type\":\"object\"},\"granularity\":{\"default\":\"all\",\"description\":\"The time granularity that each band value will represent.\",\"enum\":[\"day\",\"week\",\"month\",\"all\"],\"type\":\"string\"},\"limit_sort_spec\":{\"description\":\"An object describing column/row ordering and limiting. See [schema](https://help.branch.io/developers-hub/reference/cross-events-export-api#schema-for-limit_sort_spec).\",\"example\":{\"sort_columns\":[]},\"type\":\"object\"},\"response_format\":{\"default\":\"parquet\",\"description\":\"Compression format to use for data file.\",\"enum\":[\"parquet\",\"csv\",\"json\"],\"type\":\"string\"},\"response_format_compression\":{\"default\":\"snappy\",\"description\":\"Compression method to use for data file.\",\"enum\":[\"snappy\",\"gz\"],\"type\":\"string\"},\"start_date\":{\"description\":\"The start of the interval time range represented as an ISO-8601 complete date.\",\"example\":\"2023-05-15\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"start_date\",\"end_date\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n  \\\"code\\\": 200,\\n  \\\"job_id\\\": \\\"XXXX-0000-xxxx\\\",\\n  \\\"status_url\\\": \\\"https://api2.branch.io/v1/branch_aggregate/async/status/{JOB_ID_HERE}\\\"\\n}\"}},\"schema\":{\"properties\":{\"code\":{\"example\":\"200\",\"type\":\"integer\"},\"job_id\":{\"description\":\"The unique ID of the request.\",\"example\":\"XXXX-0000-xxxx\",\"type\":\"string\"},\"status_url\":{\"description\":\"The URL of the export request.\",\"example\":\"https://api2.branch.io/v1/branch_aggregate/async/status/{JOB_ID_HERE}\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"message\\\": \\\"Authentication failed !\\\",\\n        \\\"code\\\": 400\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"400\",\"type\":\"integer\"},\"message\":{\"example\":\"Authentication failed !\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Authentication Failed\"},\"429\":{\"content\":{\"application/json\":{\"examples\":{\"Result\":{\"value\":\"{\\n    \\\"error\\\": {\\n        \\\"code\\\": 429,\\n        \\\"message\\\": \\\"Rate limit reached.\\\"\\n    }\\n}\"}},\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"429\",\"type\":\"integer\"},\"message\":{\"example\":\"Rate limit reached.\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Rate Limit Reached\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/branch_aggregate/async/analytics","segments":[{"lit":"branch_aggregate"},{"lit":"async"},{"lit":"analytics"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"analytics","name__orig":"analytics","Name":"Analytics","name_":"analytics","name-":"analytics","NAME":"ANALYTICS","index$":0}, {"active":true,"entity":"analytics","key$":"BasicAnalyticsFlow","kind":"basic","name":"BasicAnalyticsFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"analytics_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Analytics')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const analytics_ref01_ent = client.Analytics()
    let analytics_ref01_data = setup.data.new.analytics['analytics_ref01']

    analytics_ref01_data = (await analytics_ref01_ent.create(analytics_ref01_data)).data()
    assert(null != analytics_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/analytics/AnalyticsTestData.json')

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
    ['analytics01','analytics02','analytics03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BRANCH_CROSS_EVENTS_EXPORT_TEST_ANALYTICS_ENTID': idmap,
    'BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE': 'FALSE',
    'BRANCH_CROSS_EVENTS_EXPORT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BRANCH_CROSS_EVENTS_EXPORT_TEST_ANALYTICS_ENTID']

  const live = 'TRUE' === env.BRANCH_CROSS_EVENTS_EXPORT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BRANCH_CROSS_EVENTS_EXPORT_TEST_ANALYTICS_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
