"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateNestedManyWithoutTeamInput_1 = require("../inputs/CycleCreateNestedManyWithoutTeamInput");
const TeamProjectCreateNestedManyWithoutTeamInput_1 = require("../inputs/TeamProjectCreateNestedManyWithoutTeamInput");
let TeamCreateWithoutMembersInput = class TeamCreateWithoutMembersInput {
};
exports.TeamCreateWithoutMembersInput = TeamCreateWithoutMembersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutMembersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutMembersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutMembersInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TeamCreateWithoutMembersInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutMembersInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateWithoutMembersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateWithoutMembersInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutTeamInput_1.TeamProjectCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateNestedManyWithoutTeamInput_1.TeamProjectCreateNestedManyWithoutTeamInput)
], TeamCreateWithoutMembersInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateNestedManyWithoutTeamInput_1.CycleCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateNestedManyWithoutTeamInput_1.CycleCreateNestedManyWithoutTeamInput)
], TeamCreateWithoutMembersInput.prototype, "cycles", void 0);
exports.TeamCreateWithoutMembersInput = TeamCreateWithoutMembersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateWithoutMembersInput", {})
], TeamCreateWithoutMembersInput);
