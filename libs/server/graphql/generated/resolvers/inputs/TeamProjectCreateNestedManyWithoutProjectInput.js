"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCreateNestedManyWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyProjectInputEnvelope_1 = require("../inputs/TeamProjectCreateManyProjectInputEnvelope");
const TeamProjectCreateOrConnectWithoutProjectInput_1 = require("../inputs/TeamProjectCreateOrConnectWithoutProjectInput");
const TeamProjectCreateWithoutProjectInput_1 = require("../inputs/TeamProjectCreateWithoutProjectInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectCreateNestedManyWithoutProjectInput = class TeamProjectCreateNestedManyWithoutProjectInput {
};
exports.TeamProjectCreateNestedManyWithoutProjectInput = TeamProjectCreateNestedManyWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateWithoutProjectInput_1.TeamProjectCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutProjectInput_1.TeamProjectCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateManyProjectInputEnvelope_1.TeamProjectCreateManyProjectInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateManyProjectInputEnvelope_1.TeamProjectCreateManyProjectInputEnvelope)
], TeamProjectCreateNestedManyWithoutProjectInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
exports.TeamProjectCreateNestedManyWithoutProjectInput = TeamProjectCreateNestedManyWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectCreateNestedManyWithoutProjectInput", {})
], TeamProjectCreateNestedManyWithoutProjectInput);
