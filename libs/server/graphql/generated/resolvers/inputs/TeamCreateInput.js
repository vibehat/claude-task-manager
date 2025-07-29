"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateNestedManyWithoutTeamInput_1 = require("../inputs/CycleCreateNestedManyWithoutTeamInput");
const TeamMemberCreateNestedManyWithoutTeamInput_1 = require("../inputs/TeamMemberCreateNestedManyWithoutTeamInput");
const TeamProjectCreateNestedManyWithoutTeamInput_1 = require("../inputs/TeamProjectCreateNestedManyWithoutTeamInput");
let TeamCreateInput = class TeamCreateInput {
};
exports.TeamCreateInput = TeamCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TeamCreateInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TeamCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateNestedManyWithoutTeamInput_1.TeamMemberCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateNestedManyWithoutTeamInput_1.TeamMemberCreateNestedManyWithoutTeamInput)
], TeamCreateInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateNestedManyWithoutTeamInput_1.TeamProjectCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateNestedManyWithoutTeamInput_1.TeamProjectCreateNestedManyWithoutTeamInput)
], TeamCreateInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateNestedManyWithoutTeamInput_1.CycleCreateNestedManyWithoutTeamInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateNestedManyWithoutTeamInput_1.CycleCreateNestedManyWithoutTeamInput)
], TeamCreateInput.prototype, "cycles", void 0);
exports.TeamCreateInput = TeamCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateInput", {})
], TeamCreateInput);
