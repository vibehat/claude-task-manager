"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateNestedManyWithoutParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateManyParentTaskInputEnvelope_1 = require("../inputs/SubtaskCreateManyParentTaskInputEnvelope");
const SubtaskCreateOrConnectWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateOrConnectWithoutParentTaskInput");
const SubtaskCreateWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateWithoutParentTaskInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskCreateNestedManyWithoutParentTaskInput = class SubtaskCreateNestedManyWithoutParentTaskInput {
};
exports.SubtaskCreateNestedManyWithoutParentTaskInput = SubtaskCreateNestedManyWithoutParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskCreateWithoutParentTaskInput_1.SubtaskCreateWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskCreateNestedManyWithoutParentTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskCreateOrConnectWithoutParentTaskInput_1.SubtaskCreateOrConnectWithoutParentTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskCreateNestedManyWithoutParentTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateManyParentTaskInputEnvelope_1.SubtaskCreateManyParentTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateManyParentTaskInputEnvelope_1.SubtaskCreateManyParentTaskInputEnvelope)
], SubtaskCreateNestedManyWithoutParentTaskInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SubtaskCreateNestedManyWithoutParentTaskInput.prototype, "connect", void 0);
exports.SubtaskCreateNestedManyWithoutParentTaskInput = SubtaskCreateNestedManyWithoutParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateNestedManyWithoutParentTaskInput", {})
], SubtaskCreateNestedManyWithoutParentTaskInput);
