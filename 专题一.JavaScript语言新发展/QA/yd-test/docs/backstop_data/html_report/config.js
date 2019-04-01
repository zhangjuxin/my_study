report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/yd_qqmap_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20190322-213521/yd_qqmap_0_document_0_phone.png",
        "selector": "document",
        "fileName": "yd_qqmap_0_document_0_phone.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/index/index",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.18",
          "analysisTime": 43
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20190322-213521/failed_diff_yd_qqmap_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/yd_qqmap_0_document_1_tablet.png",
        "test": "../../../backstop_data/bitmaps_test/20190322-213521/yd_qqmap_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "yd_qqmap_0_document_1_tablet.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/index/index",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/yuanzhijia/Desktop/yd-test/backstop_data/bitmaps_reference/yd_qqmap_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "yd"
});