"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataMinAggregate = class TaskMasterMetadataMinAggregate {
};
exports.TaskMasterMetadataMinAggregate = TaskMasterMetadataMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataMinAggregate.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataMinAggregate.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMinAggregate.prototype, "description", void 0);
exports.TaskMasterMetadataMinAggregate = TaskMasterMetadataMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadataMinAggregate", {})
], TaskMasterMetadataMinAggregate);
