"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateWithoutCyclesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateNestedManyWithoutTeamInput_1 = require("../inputs/TeamMemberCreateNestedManyWithoutTeamInput");
const TeamProjectCreateNestedManyWithoutTeamInput_1 = require("../inputs/TeamProjectCreateNestedManyWithoutTeamInput");
let TeamCreateWithoutCyclesInput = class TeamCreateWithoutCyclesInput {
};
exports.TeamCreateWithoutCyclesInput = TeamCreateWithoutCyclesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutCyclesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutCyclesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutCyclesInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TeamCreateWithoutCyclesInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutCyclesInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateWithoutCyclesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateWithoutCyclesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutTeamInput_1.TeamMemberCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateNestedManyWithoutTeamInput_1.TeamMemberCreateNestedManyWithoutTeamInput)
], TeamCreateWithoutCyclesInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutTeamInput_1.TeamProjectCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateNestedManyWithoutTeamInput_1.TeamProjectCreateNestedManyWithoutTeamInput)
], TeamCreateWithoutCyclesInput.prototype, "projects", void 0);
exports.TeamCreateWithoutCyclesInput = TeamCreateWithoutCyclesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateWithoutCyclesInput", {})
], TeamCreateWithoutCyclesInput);
