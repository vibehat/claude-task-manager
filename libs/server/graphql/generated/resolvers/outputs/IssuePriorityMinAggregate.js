"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssuePriorityMinAggregate = class IssuePriorityMinAggregate {
};
exports.IssuePriorityMinAggregate = IssuePriorityMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMinAggregate.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriorityMinAggregate.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityMinAggregate.prototype, "updatedAt", void 0);
exports.IssuePriorityMinAggregate = IssuePriorityMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssuePriorityMinAggregate", {})
], IssuePriorityMinAggregate);
