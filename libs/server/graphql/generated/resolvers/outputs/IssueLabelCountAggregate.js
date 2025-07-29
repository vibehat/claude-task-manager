"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelCountAggregate = class IssueLabelCountAggregate {
};
exports.IssueLabelCountAggregate = IssueLabelCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssueLabelCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssueLabelCountAggregate.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssueLabelCountAggregate.prototype, "labelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssueLabelCountAggregate.prototype, "_all", void 0);
exports.IssueLabelCountAggregate = IssueLabelCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueLabelCountAggregate", {})
], IssueLabelCountAggregate);
