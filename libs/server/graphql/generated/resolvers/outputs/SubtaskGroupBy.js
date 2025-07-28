"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskAvgAggregate_1 = require("../outputs/SubtaskAvgAggregate");
const SubtaskCountAggregate_1 = require("../outputs/SubtaskCountAggregate");
const SubtaskMaxAggregate_1 = require("../outputs/SubtaskMaxAggregate");
const SubtaskMinAggregate_1 = require("../outputs/SubtaskMinAggregate");
const SubtaskSumAggregate_1 = require("../outputs/SubtaskSumAggregate");
let SubtaskGroupBy = class SubtaskGroupBy {
};
exports.SubtaskGroupBy = SubtaskGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SubtaskGroupBy.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskGroupBy.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCountAggregate_1.SubtaskCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCountAggregate_1.SubtaskCountAggregate)
], SubtaskGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskAvgAggregate_1.SubtaskAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskAvgAggregate_1.SubtaskAvgAggregate)
], SubtaskGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskSumAggregate_1.SubtaskSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskSumAggregate_1.SubtaskSumAggregate)
], SubtaskGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskMinAggregate_1.SubtaskMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskMinAggregate_1.SubtaskMinAggregate)
], SubtaskGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskMaxAggregate_1.SubtaskMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskMaxAggregate_1.SubtaskMaxAggregate)
], SubtaskGroupBy.prototype, "_max", void 0);
exports.SubtaskGroupBy = SubtaskGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubtaskGroupBy", {})
], SubtaskGroupBy);
