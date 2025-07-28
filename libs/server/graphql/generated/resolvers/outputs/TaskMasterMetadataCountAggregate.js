"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataCountAggregate = class TaskMasterMetadataCountAggregate {
};
exports.TaskMasterMetadataCountAggregate = TaskMasterMetadataCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataCountAggregate.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataCountAggregate.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataCountAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataCountAggregate.prototype, "_all", void 0);
exports.TaskMasterMetadataCountAggregate = TaskMasterMetadataCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadataCountAggregate", {})
], TaskMasterMetadataCountAggregate);
