"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpdateManyWithoutParentTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateManyParentTaskInputEnvelope_1 = require("../inputs/SubtaskCreateManyParentTaskInputEnvelope");
const SubtaskCreateOrConnectWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateOrConnectWithoutParentTaskInput");
const SubtaskCreateWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateWithoutParentTaskInput");
const SubtaskScalarWhereInput_1 = require("../inputs/SubtaskScalarWhereInput");
const SubtaskUpdateManyWithWhereWithoutParentTaskInput_1 = require("../inputs/SubtaskUpdateManyWithWhereWithoutParentTaskInput");
const SubtaskUpdateWithWhereUniqueWithoutParentTaskInput_1 = require("../inputs/SubtaskUpdateWithWhereUniqueWithoutParentTaskInput");
const SubtaskUpsertWithWhereUniqueWithoutParentTaskInput_1 = require("../inputs/SubtaskUpsertWithWhereUniqueWithoutParentTaskInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskUpdateManyWithoutParentTaskNestedInput = class SubtaskUpdateManyWithoutParentTaskNestedInput {
};
exports.SubtaskUpdateManyWithoutParentTaskNestedInput = SubtaskUpdateManyWithoutParentTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskCreateWithoutParentTaskInput_1.SubtaskCreateWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskCreateOrConnectWithoutParentTaskInput_1.SubtaskCreateOrConnectWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskUpsertWithWhereUniqueWithoutParentTaskInput_1.SubtaskUpsertWithWhereUniqueWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateManyParentTaskInputEnvelope_1.SubtaskCreateManyParentTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateManyParentTaskInputEnvelope_1.SubtaskCreateManyParentTaskInputEnvelope)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskUpdateWithWhereUniqueWithoutParentTaskInput_1.SubtaskUpdateWithWhereUniqueWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskUpdateManyWithWhereWithoutParentTaskInput_1.SubtaskUpdateManyWithWhereWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskScalarWhereInput_1.SubtaskScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskUpdateManyWithoutParentTaskNestedInput.prototype, "deleteMany", void 0);
exports.SubtaskUpdateManyWithoutParentTaskNestedInput = SubtaskUpdateManyWithoutParentTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpdateManyWithoutParentTaskNestedInput", {})
], SubtaskUpdateManyWithoutParentTaskNestedInput);
