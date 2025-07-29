"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateManyUserInputEnvelope_1 = require("../inputs/TeamMemberCreateManyUserInputEnvelope");
const TeamMemberCreateOrConnectWithoutUserInput_1 = require("../inputs/TeamMemberCreateOrConnectWithoutUserInput");
const TeamMemberCreateWithoutUserInput_1 = require("../inputs/TeamMemberCreateWithoutUserInput");
const TeamMemberScalarWhereInput_1 = require("../inputs/TeamMemberScalarWhereInput");
const TeamMemberUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/TeamMemberUpdateManyWithWhereWithoutUserInput");
const TeamMemberUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/TeamMemberUpdateWithWhereUniqueWithoutUserInput");
const TeamMemberUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/TeamMemberUpsertWithWhereUniqueWithoutUserInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberUpdateManyWithoutUserNestedInput = class TeamMemberUpdateManyWithoutUserNestedInput {
};
exports.TeamMemberUpdateManyWithoutUserNestedInput = TeamMemberUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateWithoutUserInput_1.TeamMemberCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberCreateOrConnectWithoutUserInput_1.TeamMemberCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberUpsertWithWhereUniqueWithoutUserInput_1.TeamMemberUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateManyUserInputEnvelope_1.TeamMemberCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateManyUserInputEnvelope_1.TeamMemberCreateManyUserInputEnvelope)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberUpdateWithWhereUniqueWithoutUserInput_1.TeamMemberUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberUpdateManyWithWhereWithoutUserInput_1.TeamMemberUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput_1.TeamMemberScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.TeamMemberUpdateManyWithoutUserNestedInput = TeamMemberUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateManyWithoutUserNestedInput", {})
], TeamMemberUpdateManyWithoutUserNestedInput);
