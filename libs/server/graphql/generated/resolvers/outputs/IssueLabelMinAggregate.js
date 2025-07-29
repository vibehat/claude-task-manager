"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueLabelMinAggregate = class IssueLabelMinAggregate {
};
exports.IssueLabelMinAggregate = IssueLabelMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMinAggregate.prototype, "issueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueLabelMinAggregate.prototype, "labelId", void 0);
exports.IssueLabelMinAggregate = IssueLabelMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueLabelMinAggregate", {})
], IssueLabelMinAggregate);
