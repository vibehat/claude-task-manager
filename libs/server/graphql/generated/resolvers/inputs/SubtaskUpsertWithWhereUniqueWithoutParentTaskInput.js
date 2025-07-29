"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateWithoutParentTaskInput_1 = require("../inputs/SubtaskCreateWithoutParentTaskInput");
const SubtaskUpdateWithoutParentTaskInput_1 = require("../inputs/SubtaskUpdateWithoutParentTaskInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = class SubtaskUpsertWithWhereUniqueWithoutParentTaskInput {
};
exports.SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = SubtaskUpsertWithWhereUniqueWithoutParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], SubtaskUpsertWithWhereUniqueWithoutParentTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateWithoutParentTaskInput_1.SubtaskUpdateWithoutParentTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateWithoutParentTaskInput_1.SubtaskUpdateWithoutParentTaskInput)
], SubtaskUpsertWithWhereUniqueWithoutParentTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateWithoutParentTaskInput_1.SubtaskCreateWithoutParentTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskCreateWithoutParentTaskInput_1.SubtaskCreateWithoutParentTaskInput)
], SubtaskUpsertWithWhereUniqueWithoutParentTaskInput.prototype, "create", void 0);
exports.SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpsertWithWhereUniqueWithoutParentTaskInput", {})
], SubtaskUpsertWithWhereUniqueWithoutParentTaskInput);
