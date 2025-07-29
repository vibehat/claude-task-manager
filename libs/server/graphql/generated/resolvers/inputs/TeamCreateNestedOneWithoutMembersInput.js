"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateNestedOneWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateOrConnectWithoutMembersInput_1 = require("../inputs/TeamCreateOrConnectWithoutMembersInput");
const TeamCreateWithoutMembersInput_1 = require("../inputs/TeamCreateWithoutMembersInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamCreateNestedOneWithoutMembersInput = class TeamCreateNestedOneWithoutMembersInput {
};
exports.TeamCreateNestedOneWithoutMembersInput = TeamCreateNestedOneWithoutMembersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutMembersInput_1.TeamCreateWithoutMembersInput)
], TeamCreateNestedOneWithoutMembersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutMembersInput_1.TeamCreateOrConnectWithoutMembersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateOrConnectWithoutMembersInput_1.TeamCreateOrConnectWithoutMembersInput)
], TeamCreateNestedOneWithoutMembersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamCreateNestedOneWithoutMembersInput.prototype, "connect", void 0);
exports.TeamCreateNestedOneWithoutMembersInput = TeamCreateNestedOneWithoutMembersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateNestedOneWithoutMembersInput", {})
], TeamCreateNestedOneWithoutMembersInput);
