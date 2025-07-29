"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCountAggregate_1 = require("../outputs/TeamCountAggregate");
const TeamMaxAggregate_1 = require("../outputs/TeamMaxAggregate");
const TeamMinAggregate_1 = require("../outputs/TeamMinAggregate");
let TeamGroupBy = class TeamGroupBy {
};
exports.TeamGroupBy = TeamGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamGroupBy.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TeamGroupBy.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamGroupBy.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TeamGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TeamGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCountAggregate_1.TeamCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCountAggregate_1.TeamCountAggregate)
], TeamGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMinAggregate_1.TeamMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMinAggregate_1.TeamMinAggregate)
], TeamGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMaxAggregate_1.TeamMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMaxAggregate_1.TeamMaxAggregate)
], TeamGroupBy.prototype, "_max", void 0);
exports.TeamGroupBy = TeamGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamGroupBy", {})
], TeamGroupBy);
