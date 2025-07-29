"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateNestedManyWithoutTeamInput_1 = require("../inputs/CycleCreateNestedManyWithoutTeamInput");
const TeamMemberCreateNestedManyWithoutTeamInput_1 = require("../inputs/TeamMemberCreateNestedManyWithoutTeamInput");
let TeamCreateWithoutProjectsInput = class TeamCreateWithoutProjectsInput {
};
exports.TeamCreateWithoutProjectsInput = TeamCreateWithoutProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutProjectsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutProjectsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutProjectsInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TeamCreateWithoutProjectsInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateWithoutProjectsInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateWithoutProjectsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateWithoutProjectsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutTeamInput_1.TeamMemberCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateNestedManyWithoutTeamInput_1.TeamMemberCreateNestedManyWithoutTeamInput)
], TeamCreateWithoutProjectsInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateNestedManyWithoutTeamInput_1.CycleCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateNestedManyWithoutTeamInput_1.CycleCreateNestedManyWithoutTeamInput)
], TeamCreateWithoutProjectsInput.prototype, "cycles", void 0);
exports.TeamCreateWithoutProjectsInput = TeamCreateWithoutProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateWithoutProjectsInput", {})
], TeamCreateWithoutProjectsInput);
