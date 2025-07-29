"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTaskMasterMetadataArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataCreateManyInput_1 = require("../../../inputs/TaskMasterMetadataCreateManyInput");
let CreateManyTaskMasterMetadataArgs = class CreateManyTaskMasterMetadataArgs {
};
exports.CreateManyTaskMasterMetadataArgs = CreateManyTaskMasterMetadataArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskMasterMetadataCreateManyInput_1.TaskMasterMetadataCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTaskMasterMetadataArgs.prototype, "data", void 0);
exports.CreateManyTaskMasterMetadataArgs = CreateManyTaskMasterMetadataArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTaskMasterMetadataArgs);
