"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataCreateInput_1 = require("../../../inputs/TaskMasterMetadataCreateInput");
let CreateOneTaskMasterMetadataArgs = class CreateOneTaskMasterMetadataArgs {
};
exports.CreateOneTaskMasterMetadataArgs = CreateOneTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataCreateInput_1.TaskMasterMetadataCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataCreateInput_1.TaskMasterMetadataCreateInput)
], CreateOneTaskMasterMetadataArgs.prototype, "data", void 0);
exports.CreateOneTaskMasterMetadataArgs = CreateOneTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTaskMasterMetadataArgs);
