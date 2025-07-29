"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCountAggregate_1 = require("../outputs/IssueLabelCountAggregate");
const IssueLabelMaxAggregate_1 = require("../outputs/IssueLabelMaxAggregate");
const IssueLabelMinAggregate_1 = require("../outputs/IssueLabelMinAggregate");
let IssueLabelGroupBy = class IssueLabelGroupBy {
};
exports.IssueLabelGroupBy = IssueLabelGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelGroupBy.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelGroupBy.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCountAggregate_1.IssueLabelCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCountAggregate_1.IssueLabelCountAggregate)
], IssueLabelGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelMinAggregate_1.IssueLabelMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelMinAggregate_1.IssueLabelMinAggregate)
], IssueLabelGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelMaxAggregate_1.IssueLabelMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelMaxAggregate_1.IssueLabelMaxAggregate)
], IssueLabelGroupBy.prototype, "_max", void 0);
exports.IssueLabelGroupBy = IssueLabelGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueLabelGroupBy", {})
], IssueLabelGroupBy);
