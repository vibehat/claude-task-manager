"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateWithoutUserInput_1 = require("../inputs/TeamMemberCreateWithoutUserInput");
const TeamMemberWhereUniqueInput_1 = require("../inputs/TeamMemberWhereUniqueInput");
let TeamMemberCreateOrConnectWithoutUserInput = class TeamMemberCreateOrConnectWithoutUserInput {
};
exports.TeamMemberCreateOrConnectWithoutUserInput = TeamMemberCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], TeamMemberCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateWithoutUserInput_1.TeamMemberCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateWithoutUserInput_1.TeamMemberCreateWithoutUserInput)
], TeamMemberCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.TeamMemberCreateOrConnectWithoutUserInput = TeamMemberCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCreateOrConnectWithoutUserInput", {})
], TeamMemberCreateOrConnectWithoutUserInput);
