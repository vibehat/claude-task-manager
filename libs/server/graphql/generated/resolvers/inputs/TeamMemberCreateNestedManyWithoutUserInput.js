"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyUserInputEnvelope_1 = require("../inputs/TeamMemberCreateManyUserInputEnvelope");
const TeamMemberCreateOrConnectWithoutUserInput_1 = require("../inputs/TeamMemberCreateOrConnectWithoutUserInput");
const TeamMemberCreateWithoutUserInput_1 = require("../inputs/TeamMemberCreateWithoutUserInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberCreateNestedManyWithoutUserInput = class TeamMemberCreateNestedManyWithoutUserInput {
};
exports.TeamMemberCreateNestedManyWithoutUserInput = TeamMemberCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateWithoutUserInput_1.TeamMemberCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutUserInput_1.TeamMemberCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateManyUserInputEnvelope_1.TeamMemberCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateManyUserInputEnvelope_1.TeamMemberCreateManyUserInputEnvelope)
], TeamMemberCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.TeamMemberCreateNestedManyWithoutUserInput = TeamMemberCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateNestedManyWithoutUserInput", {})
], TeamMemberCreateNestedManyWithoutUserInput);
