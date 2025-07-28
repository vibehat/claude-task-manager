"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeam = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCountAggregate_1 = require("../outputs/TeamCountAggregate");
const TeamMaxAggregate_1 = require("../outputs/TeamMaxAggregate");
const TeamMinAggregate_1 = require("../outputs/TeamMinAggregate");
let AggregateTeam = class AggregateTeam {
};
exports.AggregateTeam = AggregateTeam;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCountAggregate_1.TeamCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCountAggregate_1.TeamCountAggregate)
], AggregateTeam.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMinAggregate_1.TeamMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMinAggregate_1.TeamMinAggregate)
], AggregateTeam.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMaxAggregate_1.TeamMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMaxAggregate_1.TeamMaxAggregate)
], AggregateTeam.prototype, "_max", void 0);
exports.AggregateTeam = AggregateTeam = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTeam", {})
], AggregateTeam);
