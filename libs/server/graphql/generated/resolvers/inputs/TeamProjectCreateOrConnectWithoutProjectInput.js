"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateOrConnectWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateWithoutProjectInput_1 = require("../inputs/TeamProjectCreateWithoutProjectInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectCreateOrConnectWithoutProjectInput = class TeamProjectCreateOrConnectWithoutProjectInput {
};
exports.TeamProjectCreateOrConnectWithoutProjectInput = TeamProjectCreateOrConnectWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput)
], TeamProjectCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateWithoutProjectInput_1.TeamProjectCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateWithoutProjectInput_1.TeamProjectCreateWithoutProjectInput)
], TeamProjectCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
exports.TeamProjectCreateOrConnectWithoutProjectInput = TeamProjectCreateOrConnectWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateOrConnectWithoutProjectInput", {})
], TeamProjectCreateOrConnectWithoutProjectInput);
