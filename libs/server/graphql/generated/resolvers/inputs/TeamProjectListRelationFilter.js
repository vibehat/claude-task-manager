"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectWhereInput_1 = require("../inputs/TeamProjectWhereInput");
let TeamProjectListRelationFilter = class TeamProjectListRelationFilter {
};
exports.TeamProjectListRelationFilter = TeamProjectListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], TeamProjectListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], TeamProjectListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], TeamProjectListRelationFilter.prototype, "none", void 0);
exports.TeamProjectListRelationFilter = TeamProjectListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectListRelationFilter", {})
], TeamProjectListRelationFilter);
