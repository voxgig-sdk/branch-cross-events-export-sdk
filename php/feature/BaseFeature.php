<?php
declare(strict_types=1);

// BranchCrossEventsExport SDK base feature

class BranchCrossEventsExportBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BranchCrossEventsExportContext $ctx, array $options): void {}
    public function PostConstruct(BranchCrossEventsExportContext $ctx): void {}
    public function PostConstructEntity(BranchCrossEventsExportContext $ctx): void {}
    public function SetData(BranchCrossEventsExportContext $ctx): void {}
    public function GetData(BranchCrossEventsExportContext $ctx): void {}
    public function GetMatch(BranchCrossEventsExportContext $ctx): void {}
    public function SetMatch(BranchCrossEventsExportContext $ctx): void {}
    public function PrePoint(BranchCrossEventsExportContext $ctx): void {}
    public function PreSpec(BranchCrossEventsExportContext $ctx): void {}
    public function PreRequest(BranchCrossEventsExportContext $ctx): void {}
    public function PreResponse(BranchCrossEventsExportContext $ctx): void {}
    public function PreResult(BranchCrossEventsExportContext $ctx): void {}
    public function PreDone(BranchCrossEventsExportContext $ctx): void {}
    public function PreUnexpected(BranchCrossEventsExportContext $ctx): void {}
}
