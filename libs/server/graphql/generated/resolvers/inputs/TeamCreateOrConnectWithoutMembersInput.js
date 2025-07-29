"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateOrConnectWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateWithoutMembersInput_1 = require("../inputs/TeamCreateWithoutMembersInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamCreateOrConnectWithoutMembersInput = class TeamCreateOrConnectWithoutMembersInput {
};
exports.TeamCreateOrConnectWithoutMembersInput = TeamCreateOrConnectWithoutMembersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamCreateOrConnectWithoutMembersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput)
], TeamCreateOrConnectWithoutMembersInput.prototype, "create", void 0);
exports.TeamCreateOrConnectWithoutMembersInput = TeamCreateOrConnectWithoutMembersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateOrConnectWithoutMembersInput", {})
], TeamCreateOrConnectWithoutMembersInput);
