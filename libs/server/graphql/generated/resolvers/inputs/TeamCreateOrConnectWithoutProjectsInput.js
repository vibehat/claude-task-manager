"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateOrConnectWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateWithoutProjectsInput_1 = require("../inputs/TeamCreateWithoutProjectsInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamCreateOrConnectWithoutProjectsInput = class TeamCreateOrConnectWithoutProjectsInput {
};
exports.TeamCreateOrConnectWithoutProjectsInput = TeamCreateOrConnectWithoutProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamCreateOrConnectWithoutProjectsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput)
], TeamCreateOrConnectWithoutProjectsInput.prototype, "create", void 0);
exports.TeamCreateOrConnectWithoutProjectsInput = TeamCreateOrConnectWithoutProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateOrConnectWithoutProjectsInput", {})
], TeamCreateOrConnectWithoutProjectsInput);
