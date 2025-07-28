"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateOrConnectWithoutParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateWithoutParentTaskInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskCreateOrConnectWithoutParentTaskInput = class SubtaskCreateOrConnectWithoutParentTaskInput {
};
exports.SubtaskCreateOrConnectWithoutParentTaskInput = SubtaskCreateOrConnectWithoutParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], SubtaskCreateOrConnectWithoutParentTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateWithoutParentTaskInput_1.SubtaskCreateWithoutParentTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskCreateWithoutParentTaskInput_1.SubtaskCreateWithoutParentTaskInput)
], SubtaskCreateOrConnectWithoutParentTaskInput.prototype, "create", void 0);
exports.SubtaskCreateOrConnectWithoutParentTaskInput = SubtaskCreateOrConnectWithoutParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateOrConnectWithoutParentTaskInput", {})
], SubtaskCreateOrConnectWithoutParentTaskInput);
