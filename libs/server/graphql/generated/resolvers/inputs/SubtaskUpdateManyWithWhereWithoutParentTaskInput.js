"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpdateManyWithWhereWithoutParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskScalarWhereInput_1 = require("../inputs/SubtaskScalarWhereInput");
const SubtaskUpdateManyMutationInput_1 = require("../inputs/SubtaskUpdateManyMutationInput");
let SubtaskUpdateManyWithWhereWithoutParentTaskInput = class SubtaskUpdateManyWithWhereWithoutParentTaskInput {
};
exports.SubtaskUpdateManyWithWhereWithoutParentTaskInput = SubtaskUpdateManyWithWhereWithoutParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskScalarWhereInput_1.SubtaskScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskScalarWhereInput_1.SubtaskScalarWhereInput)
], SubtaskUpdateManyWithWhereWithoutParentTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateManyMutationInput_1.SubtaskUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateManyMutationInput_1.SubtaskUpdateManyMutationInput)
], SubtaskUpdateManyWithWhereWithoutParentTaskInput.prototype, "data", void 0);
exports.SubtaskUpdateManyWithWhereWithoutParentTaskInput = SubtaskUpdateManyWithWhereWithoutParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpdateManyWithWhereWithoutParentTaskInput", {})
], SubtaskUpdateManyWithWhereWithoutParentTaskInput);
