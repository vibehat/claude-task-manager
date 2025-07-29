"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TaskMasterMetadataUpdateInput = class TaskMasterMetadataUpdateInput {
};
exports.TaskMasterMetadataUpdateInput = TaskMasterMetadataUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskMasterMetadataUpdateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskMasterMetadataUpdateInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskMasterMetadataUpdateInput.prototype, "description", void 0);
exports.TaskMasterMetadataUpdateInput = TaskMasterMetadataUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataUpdateInput", {})
], TaskMasterMetadataUpdateInput);
