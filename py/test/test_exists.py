# BranchCrossEventsExport SDK exists test

import pytest
from branchcrosseventsexport_sdk import BranchCrossEventsExportSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BranchCrossEventsExportSDK.test(None, None)
        assert testsdk is not None
