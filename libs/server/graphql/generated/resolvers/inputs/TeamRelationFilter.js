"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamWhereInput_1 = require("../inputs/TeamWhereInput");
let TeamRelationFilter = class TeamRelationFilter {
};
exports.TeamRelationFilter = TeamRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], TeamRelationFilter.prototype, "isNot", void 0);
exports.TeamRelationFilter = TeamRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamRelationFilter", {})
], TeamRelationFilter);
