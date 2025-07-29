"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateManyWithoutProjectNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCreateManyProjectInputEnvelope_1 = require("../inputs/TeamProjectCreateManyProjectInputEnvelope");
const TeamProjectCreateOrConnectWithoutProjectInput_1 = require("../inputs/TeamProjectCreateOrConnectWithoutProjectInput");
const TeamProjectCreateWithoutProjectInput_1 = require("../inputs/TeamProjectCreateWithoutProjectInput");
const TeamProjectScalarWhereInput_1 = require("../inputs/TeamProjectScalarWhereInput");
const TeamProjectUpdateManyWithWhereWithoutProjectInput_1 = require("../inputs/TeamProjectUpdateManyWithWhereWithoutProjectInput");
const TeamProjectUpdateWithWhereUniqueWithoutProjectInput_1 = require("../inputs/TeamProjectUpdateWithWhereUniqueWithoutProjectInput");
const TeamProjectUpsertWithWhereUniqueWithoutProjectInput_1 = require("../inputs/TeamProjectUpsertWithWhereUniqueWithoutProjectInput");
const TeamProjectWhereUniqueInput_1 = require("../inputs/TeamProjectWhereUniqueInput");
let TeamProjectUpdateManyWithoutProjectNestedInput = class TeamProjectUpdateManyWithoutProjectNestedInput {
};
exports.TeamProjectUpdateManyWithoutProjectNestedInput = TeamProjectUpdateManyWithoutProjectNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateWithoutProjectInput_1.TeamProjectCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutProjectInput_1.TeamProjectCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectUpsertWithWhereUniqueWithoutProjectInput_1.TeamProjectUpsertWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCreateManyProjectInputEnvelope_1.TeamProjectCreateManyProjectInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCreateManyProjectInputEnvelope_1.TeamProjectCreateManyProjectInputEnvelope)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput_1.TeamProjectWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectUpdateWithWhereUniqueWithoutProjectInput_1.TeamProjectUpdateWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectUpdateManyWithWhereWithoutProjectInput_1.TeamProjectUpdateManyWithWhereWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput_1.TeamProjectScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamProjectUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
exports.TeamProjectUpdateManyWithoutProjectNestedInput = TeamProjectUpdateManyWithoutProjectNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateManyWithoutProjectNestedInput", {})
], TeamProjectUpdateManyWithoutProjectNestedInput);
