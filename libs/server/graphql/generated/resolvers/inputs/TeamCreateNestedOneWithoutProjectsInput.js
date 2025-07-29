"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateNestedOneWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateOrConnectWithoutProjectsInput_1 = require("../inputs/TeamCreateOrConnectWithoutProjectsInput");
const TeamCreateWithoutProjectsInput_1 = require("../inputs/TeamCreateWithoutProjectsInput");
const TeamWhereUniqueInput_1 = require("../inputs/TeamWhereUniqueInput");
let TeamCreateNestedOneWithoutProjectsInput = class TeamCreateNestedOneWithoutProjectsInput {
};
exports.TeamCreateNestedOneWithoutProjectsInput = TeamCreateNestedOneWithoutProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateWithoutProjectsInput_1.TeamCreateWithoutProjectsInput)
], TeamCreateNestedOneWithoutProjectsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutProjectsInput_1.TeamCreateOrConnectWithoutProjectsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCreateOrConnectWithoutProjectsInput_1.TeamCreateOrConnectWithoutProjectsInput)
], TeamCreateNestedOneWithoutProjectsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereUniqueInput_1.TeamWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereUniqueInput_1.TeamWhereUniqueInput)
], TeamCreateNestedOneWithoutProjectsInput.prototype, "connect", void 0);
exports.TeamCreateNestedOneWithoutProjectsInput = TeamCreateNestedOneWithoutProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamCreateNestedOneWithoutProjectsInput", {})
], TeamCreateNestedOneWithoutProjectsInput);
