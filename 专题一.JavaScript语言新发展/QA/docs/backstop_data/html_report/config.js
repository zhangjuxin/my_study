report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/yd_qqmap_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20190325-140029/yd_qqmap_0_document_0_phone.png",
        "selector": "document",
        "fileName": "yd_qqmap_0_document_0_phone.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://127.0.0.1:8080",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.77",
          "analysisTime": 24
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20190325-140029/failed_diff_yd_qqmap_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/yd_qqmap_0_document_1_tablet.png",
        "test": "../../../backstop_data/bitmaps_test/20190325-140029/yd_qqmap_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "yd_qqmap_0_document_1_tablet.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://127.0.0.1:8080",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/apple/Desktop/yd/专题一.JavaScript语言新发展/QA/backstop_data/bitmaps_reference/yd_qqmap_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "yd"
});